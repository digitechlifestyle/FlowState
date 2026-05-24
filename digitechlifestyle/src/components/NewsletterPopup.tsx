import { X } from "lucide-react";
import { NewsletterForm } from "./NewsletterForm";

export function NewsletterPopup() {
  return (
    <div className="hidden" data-component="newsletter-popup-ready" aria-hidden="true">
      <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
        <div className="relative w-full max-w-lg">
          <button className="absolute right-3 top-3 z-10 rounded-full bg-white/10 p-2 text-white" aria-label="Close newsletter popup">
            <X size={18} />
          </button>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
