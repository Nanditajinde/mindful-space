// src/components/Layout.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function Layout({ user, children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div
            className="min-h-screen flex text-[var(--text-main)] font-sans antialiased 
            selection:bg-[var(--primary)]/30 selection:text-white 
            transition-all duration-500"
            style={{
                background: `
                    radial-gradient(circle at top, rgba(255,255,255,0.05), transparent),
                    var(--bg-gradient)
                `
            }}
        >
            {/* Sidebar */}
            {user && (
                <Sidebar
                    user={user}
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                />
            )}

            {/* Main Wrapper */}
            <div
                className={`flex-1 flex flex-col min-w-0 transition-all duration-300 
                ${user ? "md:pl-[260px]" : ""}`}
            >
                {/* Mobile Header */}
                {user && (
                    <div className="md:hidden h-14 border-b border-white/10 flex items-center px-4 
                    backdrop-blur-md sticky top-0 z-30 bg-white/5">
                        <button
                            onClick={() => setMobileOpen(true)}
                            className="p-2 -ml-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <Menu className="w-5 h-5" />
                        </button>

                        <span className="ml-2 font-medium text-white flex items-center gap-2">
                            <span className="text-lg">🧠</span>
                            MindfulSpace
                        </span>
                    </div>
                )}

                {/* Main Content */}
                <main
                    className={`flex-1 w-full flex flex-col ${
                        user
                            ? "max-w-[1000px] mx-auto px-4 sm:px-8 py-6 md:py-12"
                            : "h-screen"
                    }`}
                >
                    {children}
                </main>
            </div>
        </div>
    );
}