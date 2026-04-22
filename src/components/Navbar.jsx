// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, ClipboardList, BarChart2, LogOut, Shield, Palette } from "lucide-react";
import { logOut, getTrustedContact } from "../firebase";
import TrustedContactModal from "./TrustedContactModal";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Mindfulspace from "../assets/Mindfulspace";

export default function Navbar({ user }) {
  const { pathname } = useLocation();
  const [showEdit, setShowEdit] = useState(false);
  const [contactData, setContactData] = useState(null);
  const [showTheme, setShowTheme] = useState(false);

  // ✅ Correct context usage
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);

  const links = [
    { to: "/chat", label: "Chat", icon: <MessageCircle className="w-4 h-4" /> },
    { to: "/assessment", label: "Assessment", icon: <ClipboardList className="w-4 h-4" /> },
    { to: "/dashboard", label: "Dashboard", icon: <BarChart2 className="w-4 h-4" /> },
  ];

  const openEdit = async () => {
    try {
      const tc = await getTrustedContact(user.uid);
      setContactData(tc);
    } catch {
      setContactData(null);
    }
    setShowEdit(true);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16"
        style={{
          background: "var(--bg-dark)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid #1E293B"
        }}
      ></nav>

      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">

          {/* Logo */}
          <Link to="/chat" className="text-lg font-bold text-white">
            <Mindfulspace />
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-1">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${active
                      ? "text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {l.icon}
                  <span className="hidden sm:inline">{l.label}</span>

                  {active && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-indigo-400 animate-stagger-in" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">

            {/* Shield */}
            <button
              onClick={openEdit}
              title="Edit trusted contact"
              className="p-2 rounded-lg text-teal-400 hover:text-teal-300 hover:bg-teal-900/30 transition-all duration-200 group"
            >
              <Shield className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Theme button */}
            <button
              onClick={() => setShowTheme(true)}
              title="Change theme"
              className="p-2 rounded-lg text-indigo-400 hover:text-indigo-300 hover:bg-indigo-900/30 transition-all duration-200 group"
            >
              <Palette className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </button>

            {/* Avatar */}
            {user.photoURL && (
              <img
                src={user.photoURL}
                alt=""
                className="w-8 h-8 rounded-full border-2 border-teal-600/60 hover:border-teal-400 transition-all"
              />
            )}

            {/* Logout */}
            <button
              onClick={logOut}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Trusted Contact Modal */}
      {showEdit && (
        <TrustedContactModal
          userId={user.uid}
          editMode={true}
          existingData={contactData}
          onSaved={() => setShowEdit(false)}
          onClose={() => setShowEdit(false)}
        />
      )}

      {/* 🎨 Theme Modal */}
      {showTheme && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-[var(--bg-card)] text-white p-4 rounded-lg w-72">
            
            <h3 className="text-white mb-2 font-semibold">
              Choose Your Mood 🎨
            </h3>

            {/* ✅ New Premium UI */}
            <div className="flex flex-col gap-3 mt-3">

              <button
                onClick={() => setCurrentTheme("blue")}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 transition"
              >
                <span>💙 Calm Ocean</span>
                <div className="w-5 h-5 rounded-full bg-blue-500"></div>
              </button>

              <button
                onClick={() => setCurrentTheme("violet")}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-violet-500/20 hover:bg-violet-500/30 transition"
              >
                <span>💜 Peaceful Mind</span>
                <div className="w-5 h-5 rounded-full bg-violet-500"></div>
              </button>

              <button
                onClick={() => setCurrentTheme("green")}
                className="flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--bg-dark)]-500/20 hover:bg-[var(--bg-dark)]-500/30 transition"
              >
                <span>💚 Fresh Energy</span>
                <div className="w-5 h-5 rounded-full bg-[var(--bg-dark)]-500"></div>
              </button>

            </div>

            <button
              onClick={() => setShowTheme(false)}
              className="mt-4 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </>
  );
}