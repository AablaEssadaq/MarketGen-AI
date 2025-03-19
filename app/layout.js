import "./globals.css";
import { Libre_Baskerville, Source_Sans_3, Inter } from 'next/font/google';

const libre = Libre_Baskerville({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre',
});

const source = Source_Sans_3({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source',
});

const inter = Inter({
  weight: ['500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
      <body
        className={`${libre.variable} ${source.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
