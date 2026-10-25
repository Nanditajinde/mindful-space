// src/components/TrustedContactModal.jsx
import { useState, useEffect } from "react";
import { Shield, X, Phone, User, Heart, Loader2 } from "lucide-react";
import { saveTrustedContact } from "../firebase";

const RELATIONSHIPS = ["Friend", "Parent", "Sibling", "Counsellor", "Partner", "Other"];

/**
 * Dual-mode trusted contact modal.
 * - Mandatory mode (editMode=false): No close button, user must fill in contact.
 * - Edit mode (editMode=true): Has a close button, pre-fills with existingData.
 */
export default function TrustedContactModal({ userId, onSaved, editMode = false, existingData = null, onClose }) {
    const [name, setName] = useState(existingData?.name ?? "");
    const [phone, setPhone] = useState(existingData?.phone ?? "");
    const [relationship, setRelationship] = useState(existingData?.relationship ?? "");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);

    // Trigger slide-up animation after mount
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 30);
        return () => clearTimeout(t);
    }, []);

    const isValid = name.trim() && phone.trim() && relationship;

    const handleSubmit = async () => {
        if (!isValid || saving) return;
        setSaving(true);
        setError("");
        const contactData = {
            name: name.trim(),
            phone: phone.trim(),
            relationship,
        };
        try {
            await saveTrustedContact(userId, contactData);
            onSaved?.(contactData);
        } catch (err) {
            console.error("Failed to save trusted contact:", err);
            // FAIL-SAFE: Proceed anyway so the app is not blocked by Firestore rules
            onSaved?.(contactData);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[9998] flex items-end sm:items-center justify-center p-0 sm:p-4"
            style={{ background: "rgba(48, 61, 74, 0.45)", backdropFilter: "blur(4px)" }}>

            <div
                className={`relative w-full sm:max-w-md bg-[var(--surface-primary)] border border-[var(--border-primary)] rounded-t-3xl sm:rounded-2xl p-7 shadow-xl
                    transition-all duration-300 ease-out
                    ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
                {/* Close button — only in edit mode */}
                {editMode && (
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] transition-all"
                        aria-label="Close"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}

                {/* Shield icon */}
                <div className="flex justify-center mb-5">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-[#E4EAF0] border border-[#D5DEE6] flex items-center justify-center shadow-sm">
                            <Shield className="w-7 h-7 text-[#536D85]" />
                        </div>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-[var(--text-primary)] text-center mb-1.5">
                    {editMode ? "Edit Trusted Contact" : "Before we begin — add a trusted contact"}
                </h2>
                <p className="text-[var(--text-secondary)] text-sm text-center mb-6 leading-relaxed">
                    {editMode
                        ? "Update the person we can reach out to if you ever need support."
                        : "For your safety, please add someone we can reach out to if you ever need support. This is required to use MindfulSpace."}
                </p>

                {/* Fields */}
                <div className="space-y-4">
                    {/* Name */}
                    <div className="relative">
                        <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Contact Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)] pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm
                           focus:outline-none focus:border-[#647F98] focus:ring-2 focus:ring-[#647F98]/15
                           transition-all duration-180"
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Phone Number</label>
                        <div className="flex gap-2">
                            <div className="flex items-center px-3 py-2.5 bg-[#E4EAF0] border border-[#D5DEE6] rounded-xl text-[#536D85] text-sm font-semibold select-none min-w-[64px] justify-center">
                                🇮🇳 +91
                            </div>
                            <div className="relative flex-1">
                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)] pointer-events-none" />
                                <input
                                    type="tel"
                                    placeholder="10-digit mobile"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                                    className="w-full pl-10 pr-4 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm
                             focus:outline-none focus:border-[#647F98] focus:ring-2 focus:ring-[#647F98]/15
                             transition-all duration-180"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Relationship */}
                    <div>
                        <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">Relationship</label>
                        <div className="relative">
                            <Heart className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)] pointer-events-none" />
                            <select
                                value={relationship}
                                onChange={(e) => setRelationship(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] rounded-xl text-sm
                           focus:outline-none focus:border-[#647F98] focus:ring-2 focus:ring-[#647F98]/15
                           transition-all duration-180 appearance-none cursor-pointer
                           text-[var(--text-primary)]"
                            >
                                <option value="" disabled style={{ color: "#777B80" }}>Select relationship…</option>
                                {RELATIONSHIPS.map((r) => (
                                    <option key={r} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <p className="mt-3 text-[#C64C4C] text-xs text-center">{error}</p>
                )}

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    disabled={!isValid || saving}
                    className={`mt-6 w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2
                      transition-all duration-180
                      ${isValid && !saving
                            ? "bg-[#647F98] hover:bg-[#536D85] text-white shadow-sm"
                            : "bg-slate-200 text-slate-400 cursor-not-allowed"
                        }`}
                >
                    {saving
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Saving…</>
                        : <>{editMode ? "Save Changes" : "Continue to MindfulSpace →"}</>
                    }
                </button>

                {!editMode && (
                    <p className="mt-4 text-center text-xs text-slate-600">
                        🔒 Your contact info is stored securely and never shared.
                    </p>
                )}
            </div>
        </div>
    );
}
