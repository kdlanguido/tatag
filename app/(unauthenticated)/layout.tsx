import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/general/Header";
import { ThemeProvider } from "@/components/general/ThemeProvider";
import Footer from "@/components/general/Footer";
import { Toaster } from "sonner";
import LightRays from "@/components/LightRays";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Titan Arms Portal",
  description: "Official website of Titan Arms Brotherhood",
  icons: {
    icon: '/assets/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-[100dvh]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div className="relative w-full">
            <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
              <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1}
                lightSpread={1}
                rayLength={3}
                followMouse
                mouseInfluence={0.1}
                noiseAmount={0}
                distortion={0}
                pulsating={false}
                fadeDistance={1}
                saturation={1}
                className="w-full h-full"
              />
            </div>
            <div className="relative z-10 flex flex-col gap-10">
              <Header />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
