import type { Metadata } from "next";
import { Geist, Geist_Mono, Arsenal } from "next/font/google";
import "./globals.css";
import Nav from "@/app/component/navs/nav";
import { ThemeProvider } from "./component/ThemeContext";
import ThemeWrapper from "./component/ThemeWrapper";
import ThemeSelector from "./component/ThemeSelector";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const arsenal = Arsenal({
  weight: ["400", "700"], // Choose weights you need
  subsets: ["latin"],
  variable: "--font-arsenal",
});

export const metadata: Metadata = {
  title: "Dustin Meyer",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${arsenal.variable}`}>
          <ThemeProvider>
            <ThemeWrapper>
              <Nav></Nav>
              {children}
              <ThemeSelector></ThemeSelector>
            </ThemeWrapper>
          </ThemeProvider>
        </body>
    </html>
  );
}
