import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MarketGen AI | AI-Powered Marketing Automation",
  description: "Boost your marketing with AI automation. Try MarketGen AI free today!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "MarketGen AI",
    description: "Boost your marketing with AI automation. Try MarketGen AI free today!",
    url: "https://marketgenai.vercel.app",
    siteName: "MarketGen AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "MarketGen AI",
    description: "Boost your marketing with AI automation. Try MarketGen AI free today!",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+3:wght@400;700&family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
