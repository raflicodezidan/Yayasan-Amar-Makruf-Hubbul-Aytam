"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [year, setYear] = useState(2026);
  const [karakterSlide, setKarakterSlide] = useState(0);
  const [santunanSlide, setSantunanSlide] = useState(0);

  useEffect(() => {
    setYear(new Date().getFullYear());

    // Scroll listener for active link
    const handleScroll = () => {
      const sections = ["beranda", "tentang", "kegiatan", "donasi", "kontak"];
      const navH = 84;
      let current = "beranda";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - navH - 60) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    // Auto-slide for Pembinaan Karakter (2 photos)
    const slideTimer = setInterval(() => {
      setKarakterSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4000);

    // Auto-slide for Penyaluran Santunan (2 photos)
    const santunanTimer = setInterval(() => {
      setSantunanSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearInterval(slideTimer);
      clearInterval(santunanTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (!target) return;
    const navH = 84;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      {/* ============================================================
           HEADER
           ============================================================ */}
      {/* Main Sticky Navbar */}
      <header className="navbar" role="banner" aria-label="Navigasi utama">
        <div className="container">
          {/* Logo Resmi — Ukuran Diperbesar */}
          <a href="#beranda" onClick={(e) => scrollTo(e, "beranda")} className="navbar-logo" aria-label="Ke halaman utama">
            <img
              src="/assets/images/logo.png"
              alt="Logo Yayasan Yatim Amar Makruf Hubbul Aytam"
              className="navbar-logo-img"
              width="60"
              height="60"
            />
            <div className="logo-text">
              <span>Amar Makruf Hubbul Aytam</span>
              <span>Yayasan Yatim Berdiri Sejak 2021</span>
            </div>
          </a>

            {/* Desktop Menu */}
            <ul className="nav-menu" role="list">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) => scrollTo(e, "beranda")}
                  className={`nav-link ${activeSection === "beranda" ? "active" : ""}`}
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#tentang"
                  onClick={(e) => scrollTo(e, "tentang")}
                  className={`nav-link ${activeSection === "tentang" ? "active" : ""}`}
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#kegiatan"
                  onClick={(e) => scrollTo(e, "kegiatan")}
                  className={`nav-link ${activeSection === "kegiatan" ? "active" : ""}`}
                >
                  Kegiatan
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  onClick={(e) => scrollTo(e, "kontak")}
                  className={`nav-link ${activeSection === "kontak" ? "active" : ""}`}
                >
                  Kontak
                </a>
              </li>
            </ul>

            {/* Donation CTA — Tanpa emote love */}
            <a
              href="#donasi"
              onClick={(e) => scrollTo(e, "donasi")}
              className="btn-donation"
              aria-label="Donasikan sekarang"
            >
              Donasikan Sekarang
            </a>

            {/* Hamburger */}
            <button
              className="mobile-menu-btn"
              id="mobileMenuBtn"
              aria-label="Buka menu navigasi"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={mobileMenuOpen ? "bi bi-x-lg" : "bi bi-list"} id="menuIcon"></i>
            </button>
          </div>

          {/* Mobile Drawer */}
          <div className={`mobile-nav ${mobileMenuOpen ? "open" : ""}`} id="mobileNav" aria-label="Menu mobile">
            <ul role="list">
              <li>
                <a href="#beranda" onClick={(e) => scrollTo(e, "beranda")} className="nav-link">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" onClick={(e) => scrollTo(e, "tentang")} className="nav-link">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#kegiatan" onClick={(e) => scrollTo(e, "kegiatan")} className="nav-link">
                  Kegiatan
                </a>
              </li>
              <li>
                <a href="#kontak" onClick={(e) => scrollTo(e, "kontak")} className="nav-link">
                  Kontak
                </a>
              </li>
            </ul>
            <div className="mobile-nav-footer">
              <a href="#donasi" onClick={(e) => scrollTo(e, "donasi")} className="btn-donation">
                Donasikan Sekarang
              </a>
            </div>
          </div>
        </header>

      {/* ============================================================
           MAIN
           ============================================================ */}
      <main>
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="hero" id="beranda" aria-label="Banner utama yayasan">
          <div className="hero-content container">
            {/* Eyebrow — Formal & Tanpa Kotak Box */}
            <div className="hero-eyebrow fade-in visible">
              Bersama Membina &amp; Membangun Masa Depan Anak Yatim
            </div>

            <h1 className="hero-title fade-in visible fade-in-delay-1">
              Amar Makruf<br />Hubbul Aytam
            </h1>

            <p className="hero-subtitle fade-in visible fade-in-delay-2">
              Yayasan Yatim Peduli<br />Berdiri Sejak 2021
            </p>

            <p className="hero-desc fade-in visible fade-in-delay-3">
              Dengan penuh rasa syukur dan keikhlasan, kami hadir sebagai jembatan kepedulian
              untuk anak-anak yatim. Bersama Anda, kami wujudkan senyum dan harapan mereka.
            </p>

            {/* Actions — Tanpa emote love */}
            <div className="hero-actions fade-in visible fade-in-delay-4">
              <a href="#donasi" onClick={(e) => scrollTo(e, "donasi")} className="btn-hero-primary">
                Donasikan Sekarang
              </a>
              <a href="#kegiatan" onClick={(e) => scrollTo(e, "kegiatan")} className="btn-hero-outline">
                <i className="bi bi-play-circle" aria-hidden="true"></i>
                Lihat Kegiatan
              </a>
            </div>
          </div>
        </section>

        {/* ── TENTANG KAMI ───────────────────────────────────────── */}
        <section className="about" id="tentang" aria-labelledby="about-heading">
          <div className="container">
            <div className="about-grid">
              {/* Image */}
              <div className="about-image-wrap fade-in visible">
                <img
                  src="/assets/images/about.jpg"
                  alt="Keluarga besar anak yatim dan pengurus Yayasan Yatim Amar Makruf Hubbul Aytam"
                  width="560"
                  height="420"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="about-content">
                <span className="section-tag fade-in visible">Profil Yayasan</span>

                <h2 className="section-title fade-in visible fade-in-delay-1" id="about-heading">
                  Yayasan Yatim Amar Makruf<br />Hubbul Aytam
                </h2>

                <p className="section-desc fade-in visible fade-in-delay-2">
                  Didirikan pada tahun <strong>2021</strong>, Yayasan Yatim Amar Makruf Hubbul Aytam
                  hadir sebagai wujud kepedulian dan kecintaan terhadap anak-anak yatim.
                  Nama <em>"Hubbul Aytam"</em> berarti <em>kecintaan kepada anak yatim</em> —
                  mencerminkan semangat kami dalam setiap langkah pengabdian.
                </p>

                <p className="section-desc fade-in visible fade-in-delay-2" style={{ marginTop: "12px" }}>
                  Kami berkomitmen untuk memberikan santunan serta pendampingan pembinaan karakter
                  kepada anak-anak yatim agar mereka dapat tumbuh menjadi
                  generasi yang mandiri, berilmu, dan berakhlak mulia.
                </p>

                <div className="about-visi fade-in visible fade-in-delay-3">
                  <h4>Visi Kami</h4>
                  <p>
                    Menjadi yayasan yatim yang amanah, profesional, dan memberdayakan
                    anak-anak yatim menuju kehidupan yang layak dan bermartabat.
                  </p>
                </div>

                <ul className="about-list fade-in visible fade-in-delay-4" aria-label="Program yayasan">
                  <li className="about-list-item">
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span>Penyaluran Santunan &amp; Kebutuhan Pokok Anak Yatim</span>
                  </li>
                  <li className="about-list-item">
                    <i className="bi bi-check-circle-fill" aria-hidden="true"></i>
                    <span>Pembinaan Karakter &amp; Akhlak Mulia</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── KEGIATAN (FORMAL & UNBOXED) ─────────────────────────── */}
        <section className="activities" id="kegiatan" aria-labelledby="kegiatan-heading">
          <div className="container">
            <header className="activities-header">
              <span className="section-tag fade-in visible">Program &amp; Kegiatan Yayasan</span>
              <h2 className="section-title fade-in visible fade-in-delay-1" id="kegiatan-heading">
                Agenda dan Program Pembinaan Anak Yatim
              </h2>
              <p className="section-desc fade-in visible fade-in-delay-2">
                Pelaksanaan program sosial, pembinaan pendidikan, serta pemenuhan kebutuhan dasar anak yatim asuhan Yayasan Yatim Amar Makruf Hubbul Aytam.
              </p>
            </header>

            <div className="activities-grid">
              {/* Item 1: Penyaluran Santunan & Logistik — Slider 2 Foto */}
              <article className="activity-card fade-in visible">
                <div className="activity-img-wrap activity-slider">
                  {/* Foto 1: Penyaluran di aula yayasan */}
                  <div className={`activity-slide ${santunanSlide === 0 ? "active" : ""}`}>
                    <img
                      src="/assets/images/kegiatan-santunan.png"
                      alt="Penyaluran santunan dan logistik anak yatim di aula yayasan"
                      width="880"
                      height="495"
                      loading="lazy"
                    />
                    <div className="activity-overlay" aria-hidden="true">
                      <span>Santunan &amp; Logistik</span>
                    </div>
                  </div>
                  {/* Foto 2: Foto bersama anak yatim dan pengurus */}
                  <div className={`activity-slide ${santunanSlide === 1 ? "active" : ""}`}>
                    <img
                      src="/assets/images/kegiatan-santunan2.jpg"
                      alt="Foto bersama anak yatim dan pengurus Yayasan Yatim Amar Makruf Hubbul Aytam"
                      width="880"
                      height="495"
                      loading="lazy"
                    />
                    <div className="activity-overlay" aria-hidden="true">
                      <span>Keluarga Besar Yayasan</span>
                    </div>
                  </div>
                  {/* Dots Navigasi */}
                  <div className="slider-dots" role="tablist" aria-label="Pilihan foto penyaluran santunan">
                    <button
                      type="button"
                      className={`slider-dot ${santunanSlide === 0 ? "active" : ""}`}
                      onClick={() => setSantunanSlide(0)}
                      aria-label="Foto 1: Penyaluran Santunan"
                    />
                    <button
                      type="button"
                      className={`slider-dot ${santunanSlide === 1 ? "active" : ""}`}
                      onClick={() => setSantunanSlide(1)}
                      aria-label="Foto 2: Foto Bersama"
                    />
                  </div>
                </div>
                <div className="activity-info">
                  <h3>Penyaluran Santunan &amp; Logistik Anak Yatim</h3>
                  <p>Program pendistribusian dana santunan berkala serta bantuan paket sembako, konsumsi, dan perlengkapan harian guna menjamin kesejahteraan dan kebutuhan pokok anak yatim asuhan yayasan.</p>
                </div>
              </article>

              {/* Item 2: Pembinaan Karakter & Tahsin Al-Qur'an (Auto Slider 2 Foto) */}
              <article className="activity-card fade-in visible fade-in-delay-1">
                <div className="activity-img-wrap activity-slider">
                  {/* Foto 1: Doa & Pembinaan Bersama Pengurus */}
                  <div className={`activity-slide ${karakterSlide === 0 ? "active" : ""}`}>
                    <img
                      src="/assets/images/kegiatan-karakter.png"
                      alt="Pembinaan karakter dan doa bersama anak yatim serta pengurus yayasan"
                      width="880"
                      height="495"
                      loading="lazy"
                      style={{ objectPosition: "center 30%" }}
                    />
                    <div className="activity-overlay" aria-hidden="true">
                      <span>Pembinaan Karakter &amp; Doa Bersama</span>
                    </div>
                  </div>

                  {/* Foto 2: Tahsin & Membaca Al-Qur'an */}
                  <div className={`activity-slide ${karakterSlide === 1 ? "active" : ""}`}>
                    <img
                      src="/assets/images/kegiatan-tahsin.png"
                      alt="Bimbingan membaca dan tahsin Al-Qur'an anak yatim"
                      width="880"
                      height="495"
                      loading="lazy"
                      style={{ objectPosition: "center 35%" }}
                    />
                    <div className="activity-overlay" aria-hidden="true">
                      <span>Tahsin &amp; Bimbingan Al-Qur&apos;an</span>
                    </div>
                  </div>

                  {/* Dots Indicator / Navigasi Manual */}
                  <div className="slider-dots" role="tablist" aria-label="Pilihan foto pembinaan karakter">
                    <button
                      type="button"
                      className={`slider-dot ${karakterSlide === 0 ? "active" : ""}`}
                      onClick={() => setKarakterSlide(0)}
                      aria-label="Foto 1: Pembinaan Karakter & Doa Bersama"
                    />
                    <button
                      type="button"
                      className={`slider-dot ${karakterSlide === 1 ? "active" : ""}`}
                      onClick={() => setKarakterSlide(1)}
                      aria-label="Foto 2: Tahsin Al-Qur'an"
                    />
                  </div>
                </div>

                <div className="activity-info">
                  <h3>Pembinaan Karakter &amp; Tahsin Al-Qur&apos;an</h3>
                  <p>Program bimbingan intensif membaca Al-Qur&apos;an dengan kaidah tajwid, pendalaman adab islami, serta pembentukan akhlak mulia dan kepribadian anak yatim binaan yayasan.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ── DONATION CTA ───────────────────────────────────────── */}
        <section className="donation-cta" id="donasi" aria-labelledby="donasi-heading">
          <div className="container">
            {/* Tag — Tanpa emote love dan tanpa kotak */}
            <span className="section-tag fade-in visible">
              Program Donasi &amp; Infak
            </span>
            <h2 className="fade-in visible fade-in-delay-1" id="donasi-heading">
              Mari Berbagi untuk Anak Yatim
            </h2>
            <p className="fade-in visible fade-in-delay-2">
              Setiap rupiah yang Anda donasikan akan langsung dirasakan manfaatnya
              oleh anak-anak yatim yang membutuhkan. Bersama kita bisa!
            </p>

            {/* Ayat & Hadits tentang Memelihara Anak Yatim */}
            <div className="quran-quotes fade-in visible fade-in-delay-3">

              {/* Ayat 1 — QS. Al-Baqarah: 220 */}
              <div className="quote-card">
                <div className="quote-icon" aria-hidden="true">❝</div>
                <p className="quote-arabic">وَيَسْـَٔلُونَكَ عَنِ الْيَتَٰمَىٰ ۖ قُلْ إِصْلَاحٌ لَّهُمْ خَيْرٌ</p>
                <p className="quote-trans">"Dan mereka bertanya kepadamu tentang anak yatim. Katakanlah, 'Memperbaiki keadaan mereka adalah baik.'"</p>
                <span className="quote-source">QS. Al-Baqarah: 220</span>
              </div>

              {/* Ayat 2 — QS. Al-Ma'un: 1-2 */}
              <div className="quote-card">
                <div className="quote-icon" aria-hidden="true">❝</div>
                <p className="quote-arabic">أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ ۝ فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ</p>
                <p className="quote-trans">"Tahukah kamu (orang) yang mendustakan agama? Itulah orang yang menghardik anak yatim."</p>
                <span className="quote-source">QS. Al-Ma&apos;un: 1–2</span>
              </div>

              {/* Hadits — HR. Bukhari & Muslim */}
              <div className="quote-card">
                <div className="quote-icon" aria-hidden="true">❝</div>
                <p className="quote-arabic">أَنَا وَكَافِلُ الْيَتِيمِ فِي الْجَنَّةِ هَكَذَا</p>
                <p className="quote-trans">"Aku dan pengasuh anak yatim akan berada di surga seperti ini." — (beliau mengisyaratkan jari telunjuk dan jari tengahnya).</p>
                <span className="quote-source">HR. Bukhari &amp; Muslim</span>
              </div>

            </div>

            {/* Button — Tanpa emote love */}
            <a
              href="https://wa.me/6281916875386?text=Assalamualaikum%2C%20saya%20ingin%20berdonasi%20untuk%20Yayasan%20Amar%20Makruf%20Hubbul%20Aytam."
              className="btn-donate-main fade-in visible fade-in-delay-4"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Donasikan sekarang via WhatsApp"
            >
              Donasikan Sekarang
            </a>
          </div>
        </section>

        {/* ── KONTAK ─────────────────────────────────────────────── */}
        <section className="contact" id="kontak" aria-labelledby="kontak-heading">
          <div className="container">
            <header className="contact-header">
              <span className="section-tag fade-in visible">Layanan Informasi &amp; Kontak</span>
              <h2 className="section-title fade-in visible fade-in-delay-1" id="kontak-heading">
                Ada Pertanyaan? Kami Siap Membantu
              </h2>
              <p className="section-desc fade-in visible fade-in-delay-2">
                Silakan hubungi kami melalui WhatsApp untuk informasi donasi, program,
                atau pertanyaan seputar yayasan.
              </p>
            </header>



            <a
              href="https://wa.me/6281916875386?text=Assalamualaikum%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20Yayasan%20Amar%20Makruf%20Hubbul%20Aytam."
              className="contact-wa-btn fade-in visible fade-in-delay-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi Yayasan melalui WhatsApp"
            >
              <i className="bi bi-whatsapp" aria-hidden="true"></i>
              Hubungi via WhatsApp
            </a>
          </div>
        </section>
      </main>

      {/* ============================================================
           FOOTER
           ============================================================ */}
      <footer className="footer" aria-label="Footer yayasan">
        <div className="container">
          <div className="footer-main">
            {/* Brand dengan Logo Resmi */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img
                  src="/assets/images/logo.png"
                  alt="Logo Yayasan Yatim Amar Makruf Hubbul Aytam"
                  className="footer-logo-img"
                  width="48"
                  height="48"
                />
                <div className="footer-logo-text">
                  Amar Makruf Hubbul Aytam
                  <span>Yayasan Yatim Est 2021</span>
                </div>
              </div>
              <p>
                Yayasan Yatim Amar Makruf Hubbul Aytam hadir untuk anak-anak yatim
                melalui santunan, pendidikan, dan kegiatan sosial yang tulus dan amanah.
              </p>
            </div>

            {/* Navigasi, Program & Kontak */}
            <div className="footer-nav-cols">
              {/* Nav Links */}
              <div className="footer-col">
                <h4>Navigasi</h4>
                <ul>
                  <li><a href="#beranda" onClick={(e) => scrollTo(e, "beranda")}>Beranda</a></li>
                  <li><a href="#tentang" onClick={(e) => scrollTo(e, "tentang")}>Tentang Kami</a></li>
                  <li><a href="#kegiatan" onClick={(e) => scrollTo(e, "kegiatan")}>Kegiatan</a></li>
                  <li><a href="#donasi" onClick={(e) => scrollTo(e, "donasi")}>Donasi</a></li>
                  <li><a href="#kontak" onClick={(e) => scrollTo(e, "kontak")}>Kontak</a></li>
                </ul>
              </div>

              {/* Program */}
              <div className="footer-col">
                <h4>Program</h4>
                <ul>
                  <li><a href="#donasi" onClick={(e) => scrollTo(e, "donasi")}>Santunan Yatim</a></li>
                  <li><a href="#kegiatan" onClick={(e) => scrollTo(e, "kegiatan")}>Pembinaan Karakter</a></li>
                </ul>
              </div>

              {/* Kontak */}
              <div className="footer-col footer-col-contact">
                <h4>Kontak</h4>
                <ul>
                  <li>
                    <a
                      href="https://wa.me/6281916875386"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-whatsapp" aria-hidden="true"></i>&nbsp;
                      0819-1687-5386
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; <span>{year}</span>{" "}
              <span>Yayasan Yatim Amar Makruf Hubbul Aytam</span>.
              Semua hak dilindungi. Berkhidmat dengan amanah dan keikhlasan untuk masa depan anak-anak yatim.
            </p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ──────────────────────────────────── */}
      <a
        href="https://wa.me/6281916875386?text=Assalamualaikum%2C%20saya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20yayasan."
        className="whatsapp-floating"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Yayasan melalui WhatsApp"
      >
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
        <span className="whatsapp-badge" aria-label="1 pesan baru">1</span>
      </a>
    </>
  );
}
