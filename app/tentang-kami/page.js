import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Tentang Kami & Legalitas Resmi | Yayasan Hubbul Aytam",
  description:
    "Profil lengkap, sejarah, visi misi, dan perizinan legalitas SK Kemenkumham RI serta Dinas Sosial Yayasan Hubbul Aytam.",
};

export default function TentangKamiPage() {
  const legalitas = [
    {
      title: "SK Pengesahan Kemenkumham RI",
      number: "AHU-0012948.AH.01.04.Tahun 2018",
      desc: "Legalitas badan hukum yayasan sah terdaftar di Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia.",
    },
    {
      title: "Izin Operasional LKSA Dinas Sosial",
      number: "466.1/042-LKSA/DSP/2021",
      desc: "Tersertifikasi sebagai Lembaga Kesejahteraan Sosial Anak (LKSA) resmi di bawah pembinaan Dinas Sosial.",
    },
    {
      title: "Nomor Pokok Wajib Pajak (NPWP)",
      number: "84.921.402.3-412.000",
      desc: "NPWP resmi atas nama badan hukum Yayasan Hubbul Aytam.",
    },
    {
      title: "Rekomendasi Unit Pengumpul Zakat (UPZ)",
      number: "UPZ-BAZNAS/DKI/V/2022",
      desc: "Mitra resmi penerimaan dan penyaluran dana Zakat, Infaq, Sedekah (ZIS).",
    },
  ];

  const pengurus = [
    { role: "Ketua Dewan Pembina", name: "Drs. H. M. Syukron, M.Ag", exp: "Praktisi Pendidikan & Sosial Islam" },
    { role: "Ketua Umum Yayasan", name: "Ust. Ahmad Fauzan, S.Pd.I", exp: "Pengasuh Pesantren Tahfidz & LKSA" },
    { role: "Sekretaris Umum", name: "Muhammad Rizky, S.Sos", exp: "Administrasi & Advokasi Hak Anak" },
    { role: "Bendahara Yayasan", name: "Hj. Nurul Hidayati, S.E", exp: "Akuntansi & Tata Kelola Keuangan Nirlaba" },
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <section className="page-hero">
        <div className="container">
          <div className="badge badge-primary hero-badge">Profil Lembaga</div>
          <h1 className="hero-title">Tentang Yayasan Hubbul Aytam</h1>
          <p className="hero-subtitle">
            Mendedikasikan diri untuk memuliakan, mengasuh, dan melahirkan generasi Qur'ani yang mandiri, berkarakter, dan berdaya saing.
          </p>
        </div>
      </section>

      {/* Sejarah & Latar Belakang */}
      <section className="section history-section">
        <div className="container history-grid">
          <div className="history-text">
            <span className="badge badge-accent">Sejarah & Khidmat</span>
            <h2 className="section-title">Berawal dari Kepedulian, Bertumbuh Menjadi Rumah Kasih Sayang</h2>
            <p className="text-body">
              <strong>Yayasan Hubbul Aytam</strong> didirikan pada tahun 2018 di Jakarta Timur oleh para pendidik, tokoh masyarakat, dan donatur yang tergerak melihat keterbatasan akses pengasuhan serta pendidikan yang dialami oleh anak-anak yatim piatu di perkotaan.
            </p>
            <p className="text-body">
              Nama <em>&ldquo;Hubbul Aytam&rdquo;</em> bermakna <strong>&ldquo;Cinta kepada Anak-Anak Yatim&rdquo;</strong>, mencerminkan komitmen kami untuk tidak memperlakukan mereka sebagai objek bantuan semata, melainkan sebagai keluarga kandung yang dipenuhi hak kasih sayangnya, dididik adabnya, dan dibekali masa depannya.
            </p>
            <div className="history-stats">
              <div className="h-stat">
                <span className="h-num">150+</span>
                <span className="h-lbl">Anak Asuh Mukim & Non-Mukim</span>
              </div>
              <div className="h-stat">
                <span className="h-num">8 Tahun</span>
                <span className="h-lbl">Khidmat Berkelanjutan</span>
              </div>
              <div className="h-stat">
                <span className="h-num">45</span>
                <span className="h-lbl">Santri Hafidz Al-Qur'an</span>
              </div>
            </div>
          </div>

          <div className="history-card-wrap">
            <div className="visi-misi-card card">
              <h3 className="card-box-title">Visi Lembaga</h3>
              <p className="visi-text">
                &ldquo;Menjadi lembaga pengasuhan anak yatim piatu terpercaya, profesional, dan berkarakter Qur'ani yang melahirkan generasi mandiri serta bermanfaat bagi umat dan bangsa.&rdquo;
              </p>

              <div className="divider"></div>

              <h3 className="card-box-title">Misi Utama</h3>
              <ul className="misi-list">
                <li>Menjamin kebutuhan nutrisi, kesehatan, dan tempat tinggal yang higienis serta penuh kasih sayang.</li>
                <li>Menyelenggarakan pendidikan formal berkualitas dan kurikulum tahfidz Al-Qur'an bersanad.</li>
                <li>Membekali santri dengan kecakapan hidup (life skills), keahlian teknologi digital, dan adab islami.</li>
                <li>Mewujudkan tata kelola organisasi nirlaba yang transparan, akuntabel, dan berdaya guna tinggi.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legalitas Resmi */}
      <section className="section legal-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge badge-primary">Legalitas & Akuntabilitas</span>
            <h2 className="section-title">Legalitas Hukum & Perizinan Resmi Negara</h2>
            <p className="section-subtitle">
              Setiap aktivitas kami berlandaskan hukum positif Republik Indonesia dan diaudit secara berkala untuk menjaga amanah seluruh donatur.
            </p>
          </div>

          <div className="legal-grid">
            {legalitas.map((item, index) => (
              <div key={index} className="legal-doc-card card">
                <div className="doc-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="doc-title">{item.title}</h3>
                <div className="doc-badge">{item.number}</div>
                <p className="doc-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Struktur Pengurus */}
      <section className="section board-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="badge badge-accent">Dewan Amanah</span>
            <h2 className="section-title">Susunan Pengurus & Pengasuh Asrama</h2>
            <p className="section-subtitle">
              Pribadi-pribadi berintegritas yang berikhtiar penuh waktu mendampingi adik-adik yatim setiap hari.
            </p>
          </div>

          <div className="pengurus-grid">
            {pengurus.map((p, idx) => (
              <div key={idx} className="pengurus-card card">
                <div className="pengurus-avatar">
                  {p.name.charAt(0)}
                </div>
                <span className="pengurus-role">{p.role}</span>
                <h3 className="pengurus-name">{p.name}</h3>
                <p className="pengurus-exp">{p.exp}</p>
              </div>
            ))}
          </div>

          <div className="about-cta-box">
            <p className="cta-note">
              Ingin bersilaturahmi atau mengadakan santunan langsung di asrama kami?
            </p>
            <div className="cta-btns">
              <Link href="/donasi" className="btn btn-primary">
                Salurkan Donasi Online
              </Link>
              <Link href="/kontak" className="btn btn-outline">
                Lihat Lokasi & Kontak Asrama
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
