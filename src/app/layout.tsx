import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "@/providers/Providers";
import Header from "@/components/layout/Header";
import StyledComponentsRegistry from "@/lib/registry";
import Footer from "@/components/layout/Footer";
import { FooterProps } from "@/types/footer.props";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr Victor",
  description: "Site institucional",
};

export const footerMock: FooterProps = {
  phone: "(14) 99775-9222",
  whatsapp: "5514997759222",
  instagram: "https://www.instagram.com/victorguidaodontologia",
  facebook: "https://www.facebook.com/victorguidaodontologia",
  scheduleLink: "https://wa.me/5514997759222?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <Footer {...footerMock} />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
