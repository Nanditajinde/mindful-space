// src/components/AccountPanel.jsx
import { useState, useEffect } from "react";
import { X, LogOut, Crown } from "lucide-react";
import { doc, getDoc } from "firebase/firestore";
import { db, logOut } from "../firebase";
import { useLanguage } from "../context/LanguageContext";

export default function AccountPanel({ user, isOpen, onClose }) {
  const [daysLeft, setDaysLeft] = useState(null);
  const [trialEnded, setTrialEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    if (!user || !isOpen) return;

    const fetchAccountInfo = async () => {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists() && userDoc.data().createdAt) {
          const createdAt = userDoc.data().createdAt.toDate();
          const now = new Date();
          
          // Calculate days passed since account creation
          const msPassed = now - createdAt;
          const daysPassed = Math.floor(msPassed / (1000 * 60 * 60 * 24));
          
          if (daysPassed >= 30) {
            setTrialEnded(true);
            setDaysLeft(0);
          } else {
            setTrialEnded(false);
            setDaysLeft(30 - daysPassed);
          }
        }
      } catch (err) {
        console.error("Error fetching account info:", err);
        setDaysLeft(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAccountInfo();
  }, [user, isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Panel — anchored to bottom edge, just right of 260px sidebar (popover from profile) */}
      <div
        className="fixed z-50 w-72 max-w-[min(18rem,calc(100vw-1.5rem))] bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-2xl shadow-lg
        bottom-20 left-4 right-auto
        sm:left-4
        md:bottom-5 md:left-[272px] md:ml-0
        max-h-[min(32rem,calc(100dvh-1.5rem))] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between p-4 border-b border-[var(--border-primary)] shrink-0">
          <h2 className="text-sm font-semibold text-[var(--text-primary)]">{t("account.title")}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[var(--surface-secondary)] rounded-lg transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4 overflow-y-auto min-h-0 flex-1">
          {/* Profile Info */}
          <div className="flex items-center gap-3">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt=""
                className="w-10 h-10 rounded-full object-cover border border-[var(--border-primary)]"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[#E4EAF0] text-[#536D85] flex items-center justify-center font-semibold border border-[#D5DEE6]">
                {user.displayName?.charAt(0) || user.email?.charAt(0) || "?"}
              </div>
            )}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[var(--text-primary)] truncate">
                {user.displayName || "User"}
              </p>
              <p className="text-xs text-[var(--text-secondary)] truncate">
                {user.email || ""}
              </p>
            </div>
          </div>

          {/* Plan Section */}
          <div className="bg-[var(--surface-secondary)] border border-[var(--border-primary)] rounded-xl p-3.5 space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-[#536D85] uppercase tracking-wider">{t("account.freeTrial")}</span>
            </div>
            
            {loading ? (
              <p className="text-xs text-[var(--text-secondary)]">{t("account.loading")}</p>
            ) : trialEnded ? (
              <>
                <p className="text-sm font-semibold text-[#C64C4C]">
                  {t("account.trialEnded")}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {t("account.trialEndedSub")}
                </p>
              </>
            ) : daysLeft !== null ? (
              <>
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  <span className="text-[#536D85] font-semibold">{daysLeft}</span> {t("account.daysLeft")}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">
                  {t("account.inTrial")}
                </p>
              </>
            ) : null}

            <div className="pt-2 border-t border-[var(--border-primary)] mt-2">
              <p className="text-xs text-[var(--text-secondary)]">
                {t("account.after30")} <span className="text-[var(--text-primary)] font-medium">₹199/month</span>
              </p>
            </div>
          </div>

          {/* Upgrade Button */}
          <button className="btn-primary w-full py-2.5 text-sm font-medium">
            <Crown className="w-4 h-4" />
            {t("account.upgrade")}
          </button>

          {/* Sign Out Button */}
          <button
            onClick={() => {
              onClose();
              logOut();
            }}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium text-[var(--text-secondary)] hover:text-[#C64C4C] hover:bg-red-50/60 transition-colors border border-[var(--border-primary)]"
          >
            <LogOut className="w-3.5 h-3.5" />
            {t("account.signOut")}
          </button>
        </div>
      </div>
    </>
  );
}
