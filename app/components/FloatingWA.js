"use client";

import { useState } from "react";

export default function FloatingWA() {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    "Assalamualaikum Warahmatullahi Wabarakatuh. Saya ingin menanyakan informasi seputar program santunan dan donasi di Yayasan Hubbul Aytam."
  );
  const waUrl = `https://wa.me/6281298765432?text=${defaultMessage}`;

  return (
    <div className="floating-wa-wrapper">
      {/* Pop-up Chat Bubble Greeting */}
      {showTooltip && (
        <div className="wa-popup-bubble">
          <button 
            className="popup-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Tutup sapaan"
          >
            ✕
          </button>
          <div className="popup-header">
            <span className="online-indicator"></span>
            <strong>Admin Yayasan Hubbul Aytam</strong>
          </div>
          <p className="popup-text">
            Assalamualaikum! Ada yang bisa kami bantu seputar donasi atau program santunan adik-adik yatim?
          </p>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="popup-cta-btn"
          >
            Chat via WhatsApp
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-floating-btn"
        aria-label="Hubungi kami melalui WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        <span className="notification-badge">1</span>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="#FFFFFF">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.045-1.127-.087-.27-.083-.623-.223-1.076-.425-1.892-.841-3.123-2.766-3.218-2.894-.095-.128-.773-1.028-.773-1.961 0-.932.488-1.391.662-1.579.174-.188.379-.235.506-.235.127 0 .254.001.365.006.118.006.275-.045.43.328.16.388.544 1.328.592 1.425.048.097.079.21.016.337-.063.127-.095.207-.19.317-.095.111-.201.248-.287.334-.096.096-.197.2-.085.392.111.192.495.815 1.062 1.32.73.651 1.345.853 1.536.949.191.096.302.08.414-.048.111-.128.477-.557.604-.748.127-.191.254-.159.429-.095.175.063 1.111.524 1.302.619.191.096.318.143.365.223.048.079.048.461-.096.866z"/>
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.63 0-3.15-.445-4.46-1.22l-.32-.19-2.96.83.84-2.88-.21-.33A7.95 7.95 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      </a>
    </div>
  );
}
