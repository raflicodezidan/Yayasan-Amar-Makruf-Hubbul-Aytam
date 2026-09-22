"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

function DonationForm() {
  const searchParams = useSearchParams();
  const initProgram = searchParams.get("program") || "santunan-yatim";
  const initNominal = Number(searchParams.get("nominal")) || 100000;

  const [program, setProgram] = useState(initProgram);
  const [nominal, setNominal] = useState(initNominal);
  const [customNominal, setCustomNominal] = useState("");
  const [donorName, setDonorName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donorPhone, setDonorPhone] = useState("");
  const [donorPrayer, setDonorPrayer] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("qris"); // "qris", "bsi", "mandiri"
  const [isCopied, setIsCopied] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (searchParams.get("nominal")) {
      const nom = Number(searchParams.get("nominal"));
      setNominal(nom);
    }
    if (searchParams.get("program")) {
      setProgram(searchParams.get("program"));
    }
  }, [searchParams]);

  const nominalOptions = [25000, 50000, 100000, 250000, 500000, 1000000];

  const effectiveNominal = customNominal ? Number(customNominal) : nominal;

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setIsCopied(type);
    setTimeout(() => setIsCopied(""), 2500);
  };

  const programs = [
    { id: "santunan-yatim", name: "Santunan Kebutuhan Hidup & Nutrisi Sehat Yatim" },
    { id: "beasiswa-santri", name: "Beasiswa Pendidikan & Santri Tahfidz Qur'an" },
    { id: "operasional-asrama", name: "Operasional & Fasilitas Asrama Anak Asuh" },
    { id: "paket-sembako", name: "Lumbung Pangan & Beras Yatim Dhuafa" },
    { id: "zakat", name: "Penyaluran Zakat Maal & Zakat Profesi Yatim" },
  ];

  const currentProgramName = programs.find((p) => p.id === program)?.name || "Donasi Umum Yatim";

  const generateWhatsAppMessage = () => {
    const nama = isAnonymous ? "Hamba Allah" : donorName || "Hamba Allah";
    const waText = `Bismillah, Assalamualaikum Admin Yayasan Hubbul Aytam.\n\nSaya ingin konfirmasi donasi:\n- Nama Donatur: ${nama}\n- Program: ${currentProgramName}\n- Nominal: Rp ${effectiveNominal.toLocaleString("id-ID")}\n- Metode: ${paymentMethod.toUpperCase()}\n- Doa/Hajat: ${donorPrayer || "-"}\n\nMohon dicek dan dicatat dalam pembukuan santunan. Terima kasih. Wassalamualaikum.`;
    return encodeURIComponent(waText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (effectiveNominal < 10000) {
      alert("Nominal minimal donasi adalah Rp 10.000");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className="donation-page-container">
      {/* Page Header */}
      <section className="donasi-header">
        <div className="container">
          <div className="badge badge-primary header-badge">Salurkan Kepedulian</div>
          <h1 className="donasi-title">Formulir Donasi & Infaq Online</h1>
          <p className="donasi-subtitle">
            Setiap rupiah yang Anda salurkan akan dikelola secara amanah dan disalurkan langsung untuk masa depan 150+ anak asuh Yayasan Hubbul Aytam.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section donasi-section">
        <div className="container donasi-grid">
          {/* Left: Input Form */}
          <div className="donasi-form-card card">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Program */}
              <div className="form-step">
                <div className="step-heading">
                  <span className="step-num">1</span>
                  <h3>Pilih Program Kebaikan</h3>
                </div>
                <div className="program-options">
                  {programs.map((p) => (
                    <label
                      key={p.id}
                      className={`program-radio-label ${program === p.id ? "selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="program"
                        value={p.id}
                        checked={program === p.id}
                        onChange={() => setProgram(p.id)}
                      />
                      <span className="radio-text">{p.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Nominal */}
              <div className="form-step">
                <div className="step-heading">
                  <span className="step-num">2</span>
                  <h3>Pilih Nominal Donasi</h3>
                </div>
                <div className="nominal-grid">
                  {nominalOptions.map((nom) => (
                    <button
                      type="button"
                      key={nom}
                      className={`nom-btn ${nominal === nom && !customNominal ? "selected" : ""}`}
                      onClick={() => {
                        setNominal(nom);
                        setCustomNominal("");
                      }}
                    >
                      Rp {nom.toLocaleString("id-ID")}
                    </button>
                  ))}
                </div>

                <div className="custom-nom-wrap">
                  <label className="input-label">Atau Masukkan Nominal Sendiri (Rp)</label>
                  <div className="input-prefix-box">
                    <span className="prefix">Rp</span>
                    <input
                      type="number"
                      placeholder="Contoh: 1500000"
                      value={customNominal}
                      onChange={(e) => {
                        setCustomNominal(e.target.value);
                        if (e.target.value) setNominal(Number(e.target.value));
                      }}
                      className="custom-input"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Identity & Prayer */}
              <div className="form-step">
                <div className="step-heading">
                  <span className="step-num">3</span>
                  <h3>Identitas & Titipan Doa</h3>
                </div>

                <div className="form-fields">
                  <div className="field-group">
                    <label className="input-label">Nama Donatur</label>
                    <input
                      type="text"
                      placeholder="Masukkan nama lengkap Anda"
                      value={donorName}
                      disabled={isAnonymous}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="text-input"
                    />
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => {
                          setIsAnonymous(e.target.checked);
                          if (e.target.checked) setDonorName("Hamba Allah");
                          else setDonorName("");
                        }}
                      />
                      <span>Sembunyikan nama saya (Tampil sebagai <strong>Hamba Allah</strong>)</span>
                    </label>
                  </div>

                  <div className="field-group">
                    <label className="input-label">Nomor WhatsApp / HP (Opsional)</label>
                    <input
                      type="tel"
                      placeholder="08xxxxxxxxxx (Untuk pengiriman bukti kwitansi)"
                      value={donorPhone}
                      onChange={(e) => setDonorPhone(e.target.value)}
                      className="text-input"
                    />
                    <span className="field-helper">Nomor Anda aman dan tidak akan disebarluaskan.</span>
                  </div>

                  <div className="field-group">
                    <label className="input-label">Doa & Harapan Khusus untuk Anak Asuh (Opsional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tuliskan doa kebaikan atau hajat yang ingin diaminkan bersama..."
                      value={donorPrayer}
                      onChange={(e) => setDonorPrayer(e.target.value)}
                      className="textarea-input"
                    />
                  </div>
                </div>
              </div>

              {/* Step 4: Payment Method */}
              <div className="form-step">
                <div className="step-heading">
                  <span className="step-num">4</span>
                  <h3>Pilih Metode Pembayaran</h3>
                </div>

                <div className="payment-options">
                  <label className={`payment-card-label ${paymentMethod === "qris" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="qris"
                      checked={paymentMethod === "qris"}
                      onChange={() => setPaymentMethod("qris")}
                    />
                    <div className="pay-content">
                      <div className="pay-top">
                        <span className="pay-title">QRIS Instan (Semua Bank & E-Wallet)</span>
                        <span className="badge badge-primary">Rekomendasi</span>
                      </div>
                      <span className="pay-desc">BCA, Mandiri, BRI, GoPay, OVO, ShopeePay, DANA, LinkAja</span>
                    </div>
                  </label>

                  <label className={`payment-card-label ${paymentMethod === "bsi" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="bsi"
                      checked={paymentMethod === "bsi"}
                      onChange={() => setPaymentMethod("bsi")}
                    />
                    <div className="pay-content">
                      <div className="pay-top">
                        <span className="pay-title">Bank Syariah Indonesia (BSI)</span>
                        <span className="badge badge-accent">Syariah</span>
                      </div>
                      <span className="pay-desc">Transfer Bank Syariah • Rekening Resmi Yayasan</span>
                    </div>
                  </label>

                  <label className={`payment-card-label ${paymentMethod === "mandiri" ? "selected" : ""}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="mandiri"
                      checked={paymentMethod === "mandiri"}
                      onChange={() => setPaymentMethod("mandiri")}
                    />
                    <div className="pay-content">
                      <div className="pay-top">
                        <span className="pay-title">Bank Mandiri</span>
                        <span className="badge badge-primary">Konvensional</span>
                      </div>
                      <span className="pay-desc">Transfer Bank Mandiri • Rekening Resmi Yayasan</span>
                    </div>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-lg submit-donate-btn">
                Bismillah, Lanjutkan Donasi Rp {effectiveNominal.toLocaleString("id-ID")}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </form>
          </div>

          {/* Right: Summary & Payment Instruction Card */}
          <div className="donasi-summary-col">
            <div className="summary-sticky-card card">
              <h3 className="summary-title">Ringkasan Donasi</h3>

              <div className="summary-item">
                <span className="sum-label">Program:</span>
                <span className="sum-val">{currentProgramName}</span>
              </div>

              <div className="summary-item">
                <span className="sum-label">Nama Donatur:</span>
                <span className="sum-val">{isAnonymous ? "Hamba Allah" : donorName || "Hamba Allah"}</span>
              </div>

              <div className="summary-item">
                <span className="sum-label">Total Donasi:</span>
                <span className="sum-val amount-highlight">Rp {effectiveNominal.toLocaleString("id-ID")}</span>
              </div>

              {/* Payment details box */}
              <div className="payment-guide-box">
                {paymentMethod === "qris" && (
                  <div className="qris-display-box">
                    <h4 className="guide-heading">Instruksi Pembayaran QRIS</h4>
                    <div className="qris-qr-code">
                      {/* SVG Mock QRIS Code */}
                      <svg width="180" height="180" viewBox="0 0 100 100" className="mock-qris-svg">
                        <rect width="100" height="100" fill="#FFFFFF"/>
                        {/* Finder pattern top-left */}
                        <rect x="5" y="5" width="26" height="26" fill="#000000"/>
                        <rect x="9" y="9" width="18" height="18" fill="#FFFFFF"/>
                        <rect x="13" y="13" width="10" height="10" fill="#000000"/>
                        {/* Finder pattern top-right */}
                        <rect x="69" y="5" width="26" height="26" fill="#000000"/>
                        <rect x="73" y="9" width="18" height="18" fill="#FFFFFF"/>
                        <rect x="77" y="13" width="10" height="10" fill="#000000"/>
                        {/* Finder pattern bottom-left */}
                        <rect x="5" y="69" width="26" height="26" fill="#000000"/>
                        <rect x="9" y="73" width="18" height="18" fill="#FFFFFF"/>
                        <rect x="13" y="77" width="10" height="10" fill="#000000"/>
                        {/* Data bits simulation */}
                        <rect x="36" y="8" width="6" height="6" fill="#000000"/>
                        <rect x="46" y="16" width="6" height="6" fill="#000000"/>
                        <rect x="56" y="8" width="6" height="6" fill="#000000"/>
                        <rect x="36" y="24" width="6" height="6" fill="#000000"/>
                        <rect x="46" y="32" width="6" height="6" fill="#000000"/>
                        <rect x="8" y="36" width="6" height="6" fill="#000000"/>
                        <rect x="16" y="46" width="6" height="6" fill="#000000"/>
                        <rect x="24" y="56" width="6" height="6" fill="#000000"/>
                        <rect x="36" y="44" width="12" height="12" fill="#2DBE4F"/>
                        <rect x="54" y="44" width="8" height="8" fill="#000000"/>
                        <rect x="68" y="36" width="6" height="6" fill="#000000"/>
                        <rect x="78" y="46" width="6" height="6" fill="#000000"/>
                        <rect x="88" y="56" width="6" height="6" fill="#000000"/>
                        <rect x="36" y="64" width="6" height="6" fill="#000000"/>
                        <rect x="46" y="72" width="6" height="6" fill="#000000"/>
                        <rect x="56" y="80" width="6" height="6" fill="#000000"/>
                        <rect x="68" y="68" width="6" height="6" fill="#000000"/>
                        <rect x="78" y="76" width="6" height="6" fill="#000000"/>
                        <rect x="88" y="84" width="6" height="6" fill="#000000"/>
                      </svg>
                      <span className="qris-brand-text">QRIS RESMI YAYASAN HUBBUL AYTAM</span>
                      <span className="qris-nominal">Nominal: Rp {effectiveNominal.toLocaleString("id-ID")}</span>
                    </div>
                    <p className="qris-hint">
                      Buka aplikasi Mobile Banking / E-Wallet Anda (BCA, Livin, GoPay, OVO, ShopeePay, DANA) lalu arahkan kamera ke kode QR di atas.
                    </p>
                  </div>
                )}

                {paymentMethod === "bsi" && (
                  <div className="bank-display-box">
                    <h4 className="guide-heading">Transfer Bank Syariah (BSI)</h4>
                    <div className="bank-copy-card">
                      <span className="bank-acc-label">Nomor Rekening:</span>
                      <div className="bank-acc-num">7188 2938 47</div>
                      <span className="bank-acc-name">a.n. Yayasan Hubbul Aytam</span>
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => handleCopy("7188293847", "bsi")}
                      >
                        {isCopied === "bsi" ? "✓ Berhasil Disalin!" : "Salin No. Rekening"}
                      </button>
                    </div>
                  </div>
                )}

                {paymentMethod === "mandiri" && (
                  <div className="bank-display-box">
                    <h4 className="guide-heading">Transfer Bank Mandiri</h4>
                    <div className="bank-copy-card">
                      <span className="bank-acc-label">Nomor Rekening:</span>
                      <div className="bank-acc-num">157 00 112233 4</div>
                      <span className="bank-acc-name">a.n. Yayasan Hubbul Aytam</span>
                      <button
                        type="button"
                        className="copy-btn"
                        onClick={() => handleCopy("157001122334", "mandiri")}
                      >
                        {isCopied === "mandiri" ? "✓ Berhasil Disalin!" : "Salin No. Rekening"}
                      </button>
                    </div>
                  </div>
                )}

                {/* WhatsApp Confirmation Button */}
                <div className="wa-confirm-section">
                  <span className="wa-confirm-note">Sudah melakukan transfer atau scan QRIS?</span>
                  <a
                    href={`https://wa.me/6281298765432?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent wa-confirm-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFFFFF">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.178L2 22l4.981-1.396A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.63 0-3.15-.445-4.46-1.22l-.32-.19-2.96.83.84-2.88-.21-.33A7.95 7.95 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                    </svg>
                    Konfirmasi Donasi via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal Simulation */}
      {isSubmitted && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <div className="modal-icon">🤲</div>
            <h3 className="modal-title">Jazakumullah Khairan Katsiran!</h3>
            <p className="modal-name">Terima kasih atas kebaikan hati Bapak/Ibu <strong>{isAnonymous ? "Hamba Allah" : donorName || "Donatur"}</strong></p>
            <p className="modal-text">
              Niat suci donasi Anda untuk program <strong>{currentProgramName}</strong> sebesar <strong>Rp {effectiveNominal.toLocaleString("id-ID")}</strong> telah tercatat.
            </p>
            <p className="modal-prayer">
              &ldquo;Semoga Allah SWT membalas dengan rezeki yang berlimpah, kesehatan yang afiat, dan menjadi payung pahala di yaumil akhir. Aamiin ya Rabbal Alamin.&rdquo;
            </p>

            <div className="modal-actions">
              <a
                href={`https://wa.me/6281298765432?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Kirim Bukti via WhatsApp Sekarang
              </a>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setIsSubmitted(false)}
              >
                Tutup Jendela Ini
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DonasiPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: "4rem 0", textAlign: "center" }}>Memuat formulir donasi...</div>}>
      <DonationForm />
    </Suspense>
  );
}
