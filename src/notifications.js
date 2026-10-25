/**
 * Sends an appointment confirmation SMS to the user.
 */
export async function sendAppointmentConfirmationSMS(userPhone, therapistName, date, time, location) {
  if (!userPhone) {
    console.error("📱 [SMS ERROR] No user phone number provided for appointment confirmation.");
    return { success: false, error: "No phone number provided." };
  }

  const message = `MindfulSpace: Your appointment with ${therapistName} is confirmed for ${date} at ${time}. Location: ${location}. Please arrive 10 minutes early. For changes, contact us at support@mindfulspace.com`;

  // Ensure the phone number has a '+' prefix for Twilio
  let formattedPhone = userPhone.replace(/\s+/g, "").trim();

  // If it's a 10-digit number, assume it's Indian (+91)
  if (formattedPhone.length === 10 && !formattedPhone.startsWith("+")) {
    formattedPhone = "+91" + formattedPhone;
  } else if (!formattedPhone.startsWith("+")) {
    formattedPhone = "+" + formattedPhone;
  }

  console.log(`📱 [APPOINTMENT SMS] Sending confirmation to: ${formattedPhone}...`);

  if (!TWILIO_SID || !TWILIO_AUTH_TOKEN) {
    console.error("❌ [SMS ERROR] Twilio keys are missing in your .env file!");
    return { success: false, error: "Twilio keys are missing in .env" };
  }

  try {
    const url = "/twilio-api/2010-04-01/Accounts/" + TWILIO_SID + "/Messages.json";

    const response = await fetch(url, {
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
      console.log("✅ [APPOINTMENT SMS SUCCESS] Confirmation sent to user.");
      return { success: true };
    } else {
      const textResponse = await response.text();
      let errData;
      try { errData = JSON.parse(textResponse); } catch(e) { errData = { message: textResponse }; }

      console.error("❌ [APPOINTMENT SMS FAILED] Twilio rejected the request:", errData.message);
      return { success: false, error: errData.message, code: errData.code };
    }
  } catch (err) {
    console.error("🔥 [APPOINTMENT SMS NETWORK ERROR]", err);
    return { success: false, error: "Network Error: " + err.message };
  }
}

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
    return { success: false, error: "No trusted contact found. Please add one in settings." };
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
    return { success: false, error: "Twilio keys are missing in .env" };
  }

  try {
    // We use the Vite proxy configured in vite.config.js to bypass CORS
    const url = "/twilio-api/2010-04-01/Accounts/" + TWILIO_SID + "/Messages.json";
    
    const response = await fetch(url, {
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
      return { success: true };
    } else {
      const textResponse = await response.text();
      let errData;
      try { errData = JSON.parse(textResponse); } catch(e) { errData = { message: textResponse }; }
      
      console.error("❌ [SMS FAILED] Twilio rejected the request:", errData.message);
      let errorMsg = errData.message;
      if (errData.code === 21608) {
        errorMsg = "Twilio Trial Limitation: You must verify this recipient's phone number in your Twilio Dashboard first.";
      }
      return { success: false, error: errorMsg, code: errData.code };
    }
  } catch (err) {
    console.error("🔥 [SMS NETWORK ERROR]", err);
    return { success: false, error: "Network Error: " + err.message };
  }
}
