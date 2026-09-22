import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Col 1: Brand & Legal */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <Image
                src="/logo.png"
                alt="Logo Yayasan Hubbul Aytam"
                width={48}
                height={48}
                className="footer-logo"
              />
              <div>
                <h3 className="footer-title">YAYASAN HUBBUL AYTAM</h3>
                <span className="footer-subtitle">Lembaga Kesejahteraan Sosial Anak (LKSA)</span>
              </div>
            </div>
            <p className="footer-desc">
              Lembaga nirlaba yang berfokus pada pengasuhan, pembinaan akhlak mulia, dan pemberian beasiswa pendidikan berkualitas bagi anak-anak yatim, piatu, dan dhuafa di Indonesia.
            </p>
            <div className="legal-badges">
              <div className="legal-item">
                <span className="legal-label">SK Kemenkumham RI:</span>
                <span className="legal-val">AHU-0012948.AH.01.04.Tahun 2018</span>
              </div>
              <div className="legal-item">
                <span className="legal-label">Izin Operasional Dinsos:</span>
                <span className="legal-val">466.1/042-LKSA/DSP/2021</span>
              </div>
              <div className="legal-item">
                <span className="legal-label">NPWP Resmi:</span>
                <span className="legal-val">84.921.402.3-412.000</span>
              </div>
            </div>
          </div>

          {/* Col 2: Rekening Resmi Donasi */}
          <div className="footer-col">
            <h4 className="col-heading">Rekening Donasi Resmi</h4>
            <p className="col-text">
              Salurkan infak, sedekah, dan zakat Anda langsung melalui rekening resmi atas nama Yayasan:
            </p>
            <div className="bank-card">
              <div className="bank-header">
                <span className="bank-name">Bank Syariah Indonesia (BSI)</span>
                <span className="bank-badge">Syariah</span>
              </div>
              <div className="bank-number">7188 2938 47</div>
              <div className="bank-owner">a.n. Yayasan Hubbul Aytam</div>
            </div>

            <div className="bank-card">
              <div className="bank-header">
                <span className="bank-name">Bank Mandiri</span>
                <span className="bank-badge">Konvensional</span>
              </div>
              <div className="bank-number">157 00 112233 4</div>
              <div className="bank-owner">a.n. Yayasan Hubbul Aytam</div>
            </div>
          </div>

          {/* Col 3: Program & Tautan */}
          <div className="footer-col">
            <h4 className="col-heading">Navigasi Utama</h4>
            <ul className="footer-links">
              <li><Link href="/">Beranda Utama</Link></li>
              <li><Link href="/tentang-kami">Profil & Legalitas Yayasan</Link></li>
              <li><Link href="/layanan">Program Asuhan & Santri</Link></li>
              <li><Link href="/laporan">Laporan Keuangan & Penyaluran</Link></li>
              <li><Link href="/donasi#zakat">Kalkulator Zakat Maal & Fitrah</Link></li>
              <li><Link href="/donasi">Formulir Donasi Online</Link></li>
              <li><Link href="/kontak">Alamat & Kunjungan Asrama</Link></li>
            </ul>
          </div>

          {/* Col 4: Kontak & Sekretariat */}
          <div className="footer-col">
            <h4 className="col-heading">Sekretariat & Asrama</h4>
            <div className="contact-list">
              <div className="contact-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Jl. Swadaya Raya No. 45, Duren Sawit, Jakarta Timur, DKI Jakarta 13440</span>
              </div>

              <div className="contact-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>WhatsApp: 0812-9876-5432</span>
              </div>

              <div className="contact-row">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>sekretariat@hubbulaytam.or.id</span>
              </div>
            </div>

            <div className="footer-cta-box">
              <span className="cta-box-title">Ingin Berkunjung atau Silaturahmi?</span>
              <p className="cta-box-desc">Pintu asrama selalu terbuka menyambut kehadiran Bapak/Ibu donatur.</p>
              <a
                href="https://wa.me/6281298765432?text=Assalamualaikum,%20saya%20ingin%20jadwalkan%20silaturahmi%20ke%20Asrama%20Yayasan%20Hubbul%20Aytam"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-accent"
              >
                Konfirmasi Kunjungan via WA
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright">
            © {new Date().getFullYear()} <strong>Yayasan Hubbul Aytam</strong>. Seluruh Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="bottom-links">
            <Link href="/tentang-kami">Kebijakan Privasi Donatur</Link>
            <span>•</span>
            <Link href="/laporan">Transparansi Publik</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
