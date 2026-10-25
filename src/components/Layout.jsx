// src/components/Layout.jsx
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function Layout({ user, children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { pathname } = useLocation();
    const isChatRoute = Boolean(user) && pathname === "/chat";

    return (
        <div
            className={`flex text-[var(--text-primary)] font-sans antialiased
            selection:bg-[#647F98]/20 selection:text-[#303D4A]
            ${isChatRoute ? "h-screen overflow-hidden" : "min-h-screen"}`}
            style={{ background: `var(--page-background)` }}
        >
            {/* Fixed Left Sidebar */}
            {user && (
                <Sidebar
                    user={user}
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                />
            )}

            {/* Main content area — shifts right on desktop to clear the fixed sidebar */}
            <div
                className={`flex-1 flex flex-col min-w-0 ${
                    user ? "lg:pl-[280px]" : ""
                } ${isChatRoute ? "h-screen max-h-screen overflow-hidden" : ""}`}
            >
                {/* Mobile Top Bar */}
                {user && (
                    <div className="lg:hidden h-14 border-b border-[var(--border-primary)] flex items-center px-4 bg-[var(--surface-primary)] shadow-sm sticky top-0 z-30 shrink-0">
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="p-2 -ml-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-lg hover:bg-[var(--surface-secondary)]"
                        >
                            <Menu className="w-5 h-5" />
                        </button>
                        <span className="ml-2 font-semibold text-base text-[var(--text-primary)] flex items-center gap-2">
                            <span className="text-lg">🧠</span>
                            MindfulSpace
                        </span>
                    </div>
                )}

                {/* Page Content */}
                <main
                    className={`flex-1 flex flex-col min-h-0 w-full ${
                        isChatRoute
                            ? "overflow-hidden"
                            : user
                            ? "max-w-[1200px] mx-auto w-full px-5 sm:px-8 py-8 lg:py-10"
                            : "h-screen"
                    }`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}