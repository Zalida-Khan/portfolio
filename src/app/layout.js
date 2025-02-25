import { Poppins, Syne } from "next/font/google";
import "./styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Zalida Khan",
  description: "Welcome to my professional portfolio. Here, I showcase my design, development, and creative work.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.svg" sizes="16x16" />
        </head>
        <body className={`${poppins.variable} ${syne.variable} antialiased`}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </>
  );
}
