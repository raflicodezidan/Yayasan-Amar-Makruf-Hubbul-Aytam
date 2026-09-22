import Link from "next/link";

export const metadata = {
  title: "Program Layanan & Asuhan Yatim | Yayasan Hubbul Aytam",
  description:
    "4 Program unggulan pembinaan dan santunan anak yatim piatu Yayasan Hubbul Aytam: Santunan Hidup, Beasiswa Tahfidz, Sarana Asrama, dan Lumbung Pangan.",
};

export default function LayananPage() {
  const programs = [
    {
      id: "santunan-yatim",
      icon: "🍲",
      title: "Santunan Kebutuhan Hidup & Nutrisi Sehat",
      badge: "Kebutuhan Pokok",
      target: "Rp 50.000.000 / bln",
      collected: "Rp 42.500.000",
      percent: 85,
      beneficiaries: "150 Anak Yatim & Piatu",
      desc: "Menjamin ketersediaan makanan 3x sehari bergizi tinggi (protein, susu, buah), pakaian layak pakai, perlengkapan mandi higienis, serta pos biaya kesehatan dan pengobatan dokter untuk seluruh anak asuh.",
      features: [
        "Jadwal makan 3 kali sehari bersertifikat gizi",
        "Pemeriksaan kesehatan rutin bulanan bersama dokter mitra",
        "Pakaian seragam, baju koko/muslimah, dan sepatu baru",
        "Uang saku harian untuk sekolah formal santri",
      ],
    },
    {
      id: "beasiswa-santri",
      icon: "📖",
      title: "Beasiswa Pendidikan & Santri Tahfidz Qur'an",
      badge: "Pendidikan & Karakter",
      target: "Rp 80.000.000 / semester",
      collected: "Rp 64.200.000",
      percent: 80,
      beneficiaries: "85 Santri Sekolah & Tahfidz",
      desc: "Memastikan tidak ada anak yatim yang putus sekolah. Memberikan beasiswa penuh SPP pendidikan formal tingkat SD, SMP, hingga SMA/SMK, serta bimbingan intensif hafalan Al-Qur'an bersanad.",
      features: [
        "Pembebasan biaya SPP & uang gedung sekolah formal",
        "Penyediaan buku paket, tas, dan alat tulis lengkap",
        "Bimbingan halaqah tahfidz bersama ustadz/ustadzah hafidz 30 Juz",
        "Pelatihan komputer dasar, bahasa Arab & bahasa Inggris",
      ],
    },
    {
      id: "operasional-asrama",
      icon: "🏠",
      title: "Operasional & Sarana Prasarana Asrama",
      badge: "Fasilitas & Tempat Tinggal",
      target: "Rp 120.000.000 / tahun",
      collected: "Rp 92.400.000",
      percent: 77,
      beneficiaries: "60 Santri Mukim Asrama",
      desc: "Menyediakan lingkungan tempat tinggal yang bersih, aman, dan kondusif. Menunjang biaya listrik, air bersih, fasilitas ranjang bertingkat yang nyaman, serta perpustakaan digital untuk santri mukim.",
      features: [
        "Kamar tidur ber-AC/ventilasi sehat dengan kasur layak",
        "Ruang belajar bersama dilengkapi koneksi internet edukasi",
        "Perpustakaan islami dan buku cerita pengembangan adab",
        "Biaya pemeliharaan rutin, listrik, dan kebersihan asrama",
      ],
    },
    {
      id: "paket-sembako",
      icon: "🌾",
      title: "Lumbung Beras & Sedekah Pangan Dhuafa",
      badge: "Bantuan Pangan",
      target: "Rp 35.000.000 / bln",
      collected: "Rp 28.500.000",
      percent: 81,
      beneficiaries: "150 Anak Asuh & 70 Janda Dhuafa",
      desc: "Menyalurkan paket beras premium dan sembako berkualitas untuk asrama serta keluarga janda miskin yang memiliki tanggungan anak yatim di perkampungan sekitar yayasan.",
      features: [
        "Penyaluran beras premium 1 ton per bulan",
        "Paket minyak goreng, telur, dan suplemen vitamin",
        "Bantuan sembako berkala saat Ramadhan & hari besar Islam",
        "Pengantaran langsung ke pintu rumah penerima manfaat",
      ],
    },
  ];

  return (
    <div className="layanan-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="container">
          <div className="badge badge-accent hero-badge">Program Asuhan Berkelanjutan</div>
          <h1 className="hero-title">Program Layanan Yayasan Hubbul Aytam</h1>
          <p className="hero-subtitle">
            Setiap program dirancang secara terukur untuk memastikan pemenuhan kebutuhan dasar, pendidikan unggul, dan kemandirian anak-anak yatim piatu.
          </p>
        </div>
      </section>

      {/* Program Detail List */}
      <section className="section program-list-section">
        <div className="container">
          <div className="programs-stacked">
            {programs.map((item, idx) => (
              <div key={item.id} className="program-detail-card card">
                <div className="prog-header-row">
                  <div className="prog-title-group">
                    <span className="prog-icon">{item.icon}</span>
                    <div>
                      <span className="prog-category-badge">{item.badge}</span>
                      <h2 className="prog-name">{item.title}</h2>
                    </div>
                  </div>
                  <div className="prog-target-stat">
                    <span className="target-lbl">Target Pendanaan:</span>
                    <span className="target-num">{item.target}</span>
                  </div>
                </div>

                <p className="prog-main-desc">{item.desc}</p>

                {/* Progress Bar */}
                <div className="prog-progress-box">
                  <div className="progress-labels">
                    <span>Realisasi Dana: <strong>{item.collected}</strong> ({item.percent}%)</span>
                    <span>Penerima Manfaat: <strong>{item.beneficiaries}</strong></span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-active" style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>

                {/* Features / Benefits */}
                <div className="prog-features-box">
                  <h4 className="feat-heading">Cakupan Penyaluran Program:</h4>
                  <ul className="feat-grid">
                    {item.features.map((f, i) => (
                      <li key={i} className="feat-point">
                        <span className="check-mark">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="prog-action-row">
                  <span className="audit-note">🔒 Laporan Penyaluran Diaudit & Dikirimkan ke WhatsApp Donatur</span>
                  <Link href={`/donasi?program=${item.id}`} className="btn btn-primary btn-lg">
                    Salurkan Donasi Program Ini
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
