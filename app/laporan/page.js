"use client";

import { useState } from "react";
import Link from "next/link";

export default function LaporanPage() {
  const [selectedYear, setSelectedYear] = useState("2026");

  const monthlyReports = [
    {
      month: "Februari 2026",
      income: "Rp 68.450.000",
      expense: "Rp 61.200.000",
      balance: "Rp 7.250.000",
      beneficiaries: "154 Anak Asuh",
      status: "Telah Diaudit Internal",
    },
    {
      month: "Januari 2026",
      income: "Rp 74.200.000",
      expense: "Rp 67.850.000",
      balance: "Rp 6.350.000",
      beneficiaries: "150 Anak Asuh",
      status: "Telah Diaudit Internal",
    },
    {
      month: "Desember 2025",
      income: "Rp 88.900.000",
      expense: "Rp 82.400.000",
      balance: "Rp 6.500.000",
      beneficiaries: "150 Anak Asuh + 60 Dhuafa",
      status: "Laporan Tutup Tahun Sah",
    },
    {
      month: "November 2025",
      income: "Rp 62.150.000",
      expense: "Rp 58.900.000",
      balance: "Rp 3.250.000",
      beneficiaries: "148 Anak Asuh",
      status: "Telah Diaudit Internal",
    },
  ];

  const handleDownload = (month) => {
    alert(`Mengunduh berkas Laporan Keuangan & Dokumentasi Penyaluran ${month} (PDF)...`);
  };

  return (
    <div className="laporan-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="badge badge-primary hero-badge">Prinsip Akuntabilitas</div>
          <h1 className="hero-title">Laporan Keuangan & Penyaluran Donasi</h1>
          <p className="hero-subtitle">
            Bentuk pertanggungjawaban amanah kepada Allah SWT, para donatur, dan masyarakat luas atas setiap rupiah yang diamanahkan kepada Yayasan Hubbul Aytam.
          </p>
        </div>
      </section>

      {/* Allocation Breakdown */}
      <section className="section allocation-section">
        <div className="container">
          <div className="allocation-grid">
            <div className="alloc-text">
              <span className="badge badge-accent">Alokasi Dana Donasi</span>
              <h2 className="section-title">85% Dana Disalurkan Langsung untuk Hak & Masa Depan Anak Asuh</h2>
              <p className="alloc-desc">
                Kami berkomitmen menjaga efisiensi anggaran operasional agar porsi terbesar donasi sampai seutuhnya kepada anak-anak yatim piatu dalam bentuk nutrisi, SPP sekolah, asrama, dan bimbingan tahfidz.
              </p>

              <div className="alloc-bars">
                <div className="alloc-item">
                  <div className="alloc-head">
                    <span className="alloc-name">Program Asuhan, Pendidikan & Nutrisi Anak</span>
                    <span className="alloc-pct">85%</span>
                  </div>
                  <div className="alloc-track">
                    <div className="alloc-fill p85"></div>
                  </div>
                </div>

                <div className="alloc-item">
                  <div className="alloc-head">
                    <span className="alloc-name">Operasional & Pemeliharaan Sarana Asrama</span>
                    <span className="alloc-pct">10%</span>
                  </div>
                  <div className="alloc-track">
                    <div className="alloc-fill p10"></div>
                  </div>
                </div>

                <div className="alloc-item">
                  <div className="alloc-head">
                    <span className="alloc-name">Pengembangan Program & Fasilitas Santri</span>
                    <span className="alloc-pct">5%</span>
                  </div>
                  <div className="alloc-track">
                    <div className="alloc-fill p5"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="alloc-card-box card">
              <div className="box-header">
                <span className="box-icon">📊</span>
                <h3 className="box-title">Audit & Standar Keuangan</h3>
              </div>
              <ul className="audit-points">
                <li>
                  <strong>Pemisahan Rekening Khusus:</strong> Rekening dana zakat, infaq anak yatim, dan operasional dipisahkan untuk menjaga kesesuaian syariah.
                </li>
                <li>
                  <strong>Penyimpanan Bukti Kwitansi:</strong> Seluruh transaksi belanja bahan pangan, pembayaran SPP sekolah, dan biaya dokter terdokumentasi rapi.
                </li>
                <li>
                  <strong>Pemberitahuan Otomatis:</strong> Donatur yang mencantumkan nomor WhatsApp menerima bukti kwitansi resmi digital via WhatsApp.
                </li>
              </ul>
              <div className="audit-footer">
                <span className="audit-badge">✓ Bebas Konflik Kepentingan & Nirlaba Murni</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Report Table */}
      <section className="section table-section">
        <div className="container">
          <div className="table-header-wrap">
            <div>
              <h2 className="section-title">Rekapitulasi Arus Kas Bulanan</h2>
              <p className="section-subtitle">Ringkasan penerimaan donasi dan realisasi pengeluaran untuk santri asrama.</p>
            </div>

            <div className="year-filter">
              <label>Pilih Tahun Buku:</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="year-select"
              >
                <option value="2026">Tahun Buku 2026</option>
                <option value="2025">Tahun Buku 2025</option>
              </select>
            </div>
          </div>

          <div className="table-responsive card">
            <table className="report-table">
              <thead>
                <tr>
                  <th>Periode Bulan</th>
                  <th>Pemasukan Donasi</th>
                  <th>Penyaluran Program</th>
                  <th>Saldo Cadangan</th>
                  <th>Penerima Manfaat</th>
                  <th>Dokumen Publik</th>
                </tr>
              </thead>
              <tbody>
                {monthlyReports.map((row, i) => (
                  <tr key={i}>
                    <td className="period-cell">
                      <strong>{row.month}</strong>
                      <span className="status-sub">{row.status}</span>
                    </td>
                    <td className="income-cell">{row.income}</td>
                    <td className="expense-cell">{row.expense}</td>
                    <td className="balance-cell">{row.balance}</td>
                    <td>{row.beneficiaries}</td>
                    <td>
                      <button
                        type="button"
                        className="download-btn"
                        onClick={() => handleDownload(row.month)}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="7 10 12 15 17 10"></polyline>
                          <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                        Unduh PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-notes">
            <p>* Laporan lengkap rincian pos belanja dan nota pembelian dapat diperiksa langsung oleh donatur di kantor sekretariat yayasan pada jam kerja.</p>
          </div>

          <div className="report-cta-center">
            <Link href="/donasi" className="btn btn-primary btn-lg">
              Ambil Bagian Menjadi Donatur Rutin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
