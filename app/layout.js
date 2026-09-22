import "./globals.css";

export const metadata = {
  title: "Yayasan Yatim Amar Makruf Hubbul Aytam",
  description:
    "Yayasan Yatim Amar Makruf Hubbul Aytam — Berdiri sejak 2021, kami hadir untuk anak-anak yatim melalui santunan, pendidikan, dan kegiatan sosial. Bergabunglah bersama kami dalam kebaikan.",
  keywords: ["yayasan yatim", "amar makruf", "hubbul aytam", "donasi anak yatim", "santunan yatim"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
