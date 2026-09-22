"use client";

import { useState } from "react";
import Link from "next/link";

export default function KontakPage() {
  const [visitorName, setVisitorName] = useState("");
  const [visitorPhone, setVisitorPhone] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitPurpose, setVisitPurpose] = useState("santunan-langsung");
  const [visitorNotes, setVisitorNotes] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleVisitSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Assalamualaikum Admin Yayasan Hubbul Aytam.\n\nSaya ingin konfirmasi jadwal silaturahmi/kunjungan ke asrama:\n- Nama: ${visitorName}\n- No. HP: ${visitorPhone}\n- Rencana Tanggal: ${visitDate}\n- Agenda: ${visitPurpose}\n- Catatan: ${visitorNotes || "-"}\n\nApakah jadwal tersebut berkenan untuk kami bersilaturahmi? Terima kasih.`
    );
    window.open(`https://wa.me/6281298765432?text=${message}`, "_blank");
    setIsSent(true);
  };

  return (
    <div className="kontak-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="badge badge-primary hero-badge">Pintu Kami Selalu Terbuka</div>
          <h1 className="hero-title">Hubungi Kami & Kunjungan Asrama</h1>
          <p className="hero-subtitle">
            Kami sangat bersyukur menyambut kehadiran Bapak/Ibu donatur untuk bersilaturahmi, bertatap muka, dan berbagi kebahagiaan langsung dengan adik-adik yatim.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section kontak-section">
        <div className="container kontak-grid">
          {/* Left: Contact Info & Map Card */}
          <div className="contact-info-col">
            <div className="info-card card">
              <h3 className="info-card-title">Sekretariat & Asrama Utama</h3>
              <p className="info-card-desc">
                Pusat kegiatan pengasuhan harian santri, kantor administrasi yayasan, dan musholla asrama.
              </p>

              <div className="info-items-list">
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div>
                    <strong>Alamat Asrama:</strong>
                    <p>Jl. Swadaya Raya No. 45, RT 004 / RW 007, Kel. Duren Sawit, Kec. Duren Sawit, Jakarta Timur, DKI Jakarta 13440</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div>
                    <strong>Telepon & WhatsApp Resmi:</strong>
                    <p>0812-9876-5432 (Layanan 24 Jam Hotline Donasi)</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div>
                    <strong>Email Sekretariat:</strong>
                    <p>sekretariat@hubbulaytam.or.id / info@hubbulaytam.or.id</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div>
                    <strong>Waktu Kunjungan Donatur:</strong>
                    <p>Setiap Hari (Senin - Ahad): Pukul 08.30 - 20.30 WIB</p>
                  </div>
                </div>
              </div>

              {/* Map Illustration Box */}
              <div className="mock-map-box">
                <div className="map-inner">
                  <span className="pin-icon">📍</span>
                  <strong>Lokasi Asrama Yayasan Hubbul Aytam</strong>
                  <span className="map-sub">Akses mudah via Jalan Raya Kalimalang & Tol Becakayu</span>
                  <a
                    href="https://maps.google.com/?q=Duren+Sawit+Jakarta+Timur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline map-btn"
                  >
                    Buka Petunjuk Arah di Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visit Form */}
          <div className="visit-form-col">
            <div className="visit-card card">
              <span className="badge badge-accent">Formulir Silaturahmi</span>
              <h3 className="visit-title">Jadwalkan Kunjungan & Santunan</h3>
              <p className="visit-desc">
                Silakan isi formulir di bawah ini agar pengurus asrama dapat mempersiapkan penyambutan dengan hangat.
              </p>

              {isSent ? (
                <div className="visit-success-box">
                  <div className="success-icon">✓</div>
                  <h4>Permintaan Kunjungan Terkirim!</h4>
                  <p>Pesan otomatis telah dibuka di WhatsApp Anda. Admin kami akan segera mengonfirmasi ketersediaan waktu.</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => setIsSent(false)}
                  >
                    Kirim Jadwal Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleVisitSubmit} className="visit-form">
                  <div className="form-group">
                    <label className="form-label">Nama Lengkap / Nama Keluarga / Komunitas</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Keluarga Bpk. Bambang"
                      value={visitorName}
                      onChange={(e) => setVisitorName(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Nomor WhatsApp / HP Aktif</label>
                    <input
                      type="tel"
                      required
                      placeholder="08xxxxxxxxxx"
                      value={visitorPhone}
                      onChange={(e) => setVisitorPhone(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Rencana Tanggal & Waktu Kunjungan</label>
                    <input
                      type="date"
                      required
                      value={visitDate}
                      onChange={(e) => setVisitDate(e.target.value)}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Maksud / Agenda Kunjungan</label>
                    <select
                      value={visitPurpose}
                      onChange={(e) => setVisitPurpose(e.target.value)}
                      className="form-select"
                    >
                      <option value="santunan-langsung">Santunan Langsung / Bawa Makanan & Bingkisan</option>
                      <option value="syukuran-doa">Syukuran Ulang Tahun / Doa Bersama Santri</option>
                      <option value="silaturahmi-biasa">Silaturahmi Santai & Mengenal Anak Asuh</option>
                      <option value="edukasi-pelatihan">Bakti Sosial / Mengajar / Pelatihan Keterampilan</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Catatan Tambahan (Jumlah Rombongan, dll.)</label>
                    <textarea
                      rows={3}
                      placeholder="Contoh: Rencana rombongan 4 orang, membawa makan siang untuk 50 anak asuh..."
                      value={visitorNotes}
                      onChange={(e) => setVisitorNotes(e.target.value)}
                      className="form-input textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg submit-visit-btn">
                    Konfirmasi Jadwal via WhatsApp
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.63 0-3.15-.445-4.46-1.22l-.32-.19-2.96.83.84-2.88-.21-.33A7.95 7.95 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
