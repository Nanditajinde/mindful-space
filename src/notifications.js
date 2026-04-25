/**
 * src/notifications.js
 * Utility to handle silent emergency notifications.
 */

const TWILIO_SID = import.meta.env.VITE_TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = import.meta.env.VITE_TWILIO_AUTH_TOKEN;
const TWILIO_PHONE = import.meta.env.VITE_TWILIO_PHONE_NUMBER;

/**
 * Sends a silent SMS alert to the trusted contact.
 * This happens in the background without user interaction.
 */
export async function sendSilentCrisisSMS(contact, userName) {
  if (!contact || !contact.phone) {
    console.error("🚨 [SMS ERROR] No trusted contact found in app state. Go to the 'Trusted Contact' page and add one first!");
    return;
  }

  const message = `MindfulSpace Alert: ${userName || "Your friend"} is currently experiencing a mental health crisis and has triggered a safety alert in the app. Please check in on them immediately.`;

  // Ensure the phone number has a '+' prefix for Twilio
  let formattedPhone = contact.phone.replace(/\s+/g, "").trim();
  
  // If it's a 10-digit number, assume it's Indian (+91)
  if (formattedPhone.length === 10 && !formattedPhone.startsWith("+")) {
    formattedPhone = "+91" + formattedPhone;
  } else if (!formattedPhone.startsWith("+")) {
    formattedPhone = "+" + formattedPhone;
  }

  console.log(`📡 [SMS TRIGGER] Sending to: ${formattedPhone} (From: ${TWILIO_PHONE})...`);
  
  if (!TWILIO_SID || !TWILIO_AUTH_TOKEN) {
    console.error("❌ [SMS ERROR] Twilio keys are missing in your .env file!");
    return;
  }

  try {
    // We use a CORS proxy because Twilio blocks direct browser requests for security.
    // IMPORTANT: Visit https://cors-anywhere.herokuapp.com/ and click "Request temporary access" for this to work.
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.twilio.com/2010-04-01/Accounts/" + TWILIO_SID + "/Messages.json";
    
    const response = await fetch(proxy + url, {
      method: "POST",
      headers: {
        "Authorization": "Basic " + btoa(TWILIO_SID + ":" + TWILIO_AUTH_TOKEN),
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest"
      },
      body: new URLSearchParams({
        To: formattedPhone,
        From: TWILIO_PHONE,
        Body: message
      })
    });

    if (response.ok) {
      console.log("✅ [SMS SUCCESS] Silent notification sent to trusted contact.");
    } else {
      const textResponse = await response.text();
      let errData;
      try { errData = JSON.parse(textResponse); } catch(e) { errData = { message: textResponse }; }
      
      console.error("❌ [SMS FAILED] Twilio or Proxy rejected the request:", errData.message);
      if (errData.code === 21608) {
        console.warn("⚠️ [TRIAL LIMIT] You are on a Twilio trial. You MUST verify the recipient's phone number in the Twilio dashboard first!");
      }
    }
  } catch (err) {
    console.error("🔥 [SMS NETWORK ERROR] This is likely a CORS block. Twilio's API doesn't allow direct browser calls for security. Use a backend or a CORS proxy for local testing.", err);
  }
}
