"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { NewsletterForm } from "./NewsletterForm";

const STORAGE_KEY = "dtl_popup_dismissed";
const DELAY_MS = 10_000; // show after 10s

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const id = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(id);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className="relative w-full max-w-lg">
        <button
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white"
          aria-label="Close newsletter popup"
        >
          <X size={18} />
        </button>
        <NewsletterForm />
      </div>
    </div>
  );
}
