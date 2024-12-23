import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/home/nav";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/home/footer";
import StoreProvider from "@/redux/store-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WDW Shop",
  description: "WDW Shop using Next JS 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Nav />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </StoreProvider>
  );
}
