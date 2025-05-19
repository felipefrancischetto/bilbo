import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import StyledComponentsRegistry from "./registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bilbo - E-commerce",
  description: "Sua loja online de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <div style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f8f9fa' }}>
            <Link href="/" style={{ color: '#333', textDecoration: 'none' }}>Mercado Livre</Link>
            <Link href="/gadgetize" style={{ color: '#333', textDecoration: 'none' }}>Gadgetize</Link>
          </div>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
