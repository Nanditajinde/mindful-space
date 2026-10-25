import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import LanguageSelector from "../components/LanguageSelector";

// Question definitions using translation keys
const QUESTION_KEYS = [
    {
        key: "personality",
        qKey: "personality.q1",
        optionKeys: ["personality.q1.o1", "personality.q1.o2", "personality.q1.o3"],
    },
    {
        key: "support",
        qKey: "personality.q2",
        optionKeys: ["personality.q2.o1", "personality.q2.o2", "personality.q2.o3", "personality.q2.o4"],
    },
    {
        key: "comfort",
        qKey: "personality.q3",
        optionKeys: ["personality.q3.o1", "personality.q3.o2", "personality.q3.o3", "personality.q3.o4"],
    },
    {
        key: "coping",
        qKey: "personality.q4",
        optionKeys: ["personality.q4.o1", "personality.q4.o2", "personality.q4.o3", "personality.q4.o4"],
    },
    {
        key: "situation",
        qKey: "personality.q5",
        optionKeys: ["personality.q5.o1", "personality.q5.o2", "personality.q5.o3", "personality.q5.o4"],
    },
    {
        key: "tone",
        qKey: "personality.q6",
        optionKeys: ["personality.q6.o1", "personality.q6.o2", "personality.q6.o3", "personality.q6.o4"],
    },
];

export default function PersonalityTestPage({ userId, onDone }) {
    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState({});
    const [saving, setSaving] = useState(false);
    const { t } = useLanguage();

    const handleAnswer = async (optionKey) => {
        // Store the translation key so the AI always gets consistent data regardless of language
        const newAnswers = { ...answers, [QUESTION_KEYS[current].key]: optionKey };
        setAnswers(newAnswers);

        if (current < QUESTION_KEYS.length - 1) {
            setCurrent(current + 1);
        } else {
            setSaving(true);
            try {
                const { savePersonality } = await import("../firebase");
                await savePersonality(userId, newAnswers);
            } catch (e) {
                console.error("Personality save failed:", e);
            } finally {
                onDone(newAnswers);
            }
        }
    };

    const progress = (current / QUESTION_KEYS.length) * 100;
    const question = QUESTION_KEYS[current];

    // Build "Question X of Y" string
    const questionLabel = t("personality.questionOf")
        .replace("{n}", current + 1)
        .replace("{total}", QUESTION_KEYS.length);

    return (
        <div className="min-h-screen bg-[var(--page-background)] flex items-center justify-center p-4">
            <div className="w-full max-w-lg">
                {/* Header */}
                <div className="text-center mb-8 relative">
                    <div className="text-2xl font-bold text-[var(--text-primary)] mb-2">{t("personality.title")}</div>
                    <p className="text-[var(--text-secondary)] text-sm">
                        {t("personality.sub")}
                    </p>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-[#E4DFD7] rounded-full h-2 mb-8 overflow-hidden">
                    <div
                        className="bg-[#647F98] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Question card */}
                <div className="bg-[var(--surface-primary)] border border-[var(--border-primary)] shadow-sm rounded-2xl p-8">
                    <div className="text-xs text-[#647F98] font-semibold mb-3 tracking-wider uppercase">
                        {questionLabel}
                    </div>
                    <h2 className="text-[var(--text-primary)] text-xl font-semibold mb-6 leading-snug">
                        {t(question.qKey)}
                    </h2>
                    <div className="flex flex-col gap-3">
                        {question.optionKeys.map((optKey) => (
                            <button
                                key={optKey}
                                onClick={() => handleAnswer(optKey)}
                                disabled={saving}
                                className="w-full text-left px-5 py-4 rounded-xl border border-[#D9D6CF] text-[#303D4A] bg-[#FBFAF7]
                           hover:border-[#647F98] hover:text-[#536D85] hover:bg-[#E4EAF0]
                           transition-all duration-150 text-sm font-medium shadow-sm"
                            >
                                {t(optKey)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skip */}
                <div className="text-center mt-6">
                    <button
                        onClick={() => onDone(null)}
                        className="text-[#777B80] text-xs hover:text-[#303D4A] transition-colors"
                    >
                        {t("personality.skip")}
                    </button>
                </div>
            </div>
        </div>
    );
}