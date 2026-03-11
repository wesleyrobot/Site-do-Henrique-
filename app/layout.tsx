import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick Tattoo | Tatuagem Profissional",
  description:
    "Rick Tattoo — estúdio de tatuagem profissional. Arte de altíssima qualidade. Agende sua sessão pelo WhatsApp.",
  keywords: "rick tattoo, tatuagem, tattoo studio, arte corporal, tatuador profissional",
  openGraph: {
    title: "Rick Tattoo | Tatuagem Profissional",
    description:
      "Estúdio de tatuagem profissional. Black & Grey, Aquarela, Fineline, Realismo e muito mais. Agende sua sessão!",
    url: "https://ricktattoo.com.br",
    siteName: "Rick Tattoo",
    images: [
      {
        url: "/fundo.png",
        width: 1200,
        height: 630,
        alt: "Rick Tattoo Studio",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rick Tattoo | Tatuagem Profissional",
    description: "Estúdio de tatuagem profissional. Agende sua sessão pelo WhatsApp!",
    images: ["/fundo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Satisfy&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-light antialiased">{children}</body>
    </html>
  );
}
