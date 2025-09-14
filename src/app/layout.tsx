import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportButton from "@/components/SupportButton";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iPet - Cuidado completo para seu pet",
  description: "Encontre as melhores petshops perto de você. Produtos, serviços e cuidados especiais com coleta e entrega em casa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <SupportButton />
      </body>
    </html>
  );
}
