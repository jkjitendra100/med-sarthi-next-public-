import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "/src/styles/customStyles.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/myConponents/global/NavBar";
import Footer from "@/myConponents/global/Footer";
import { theme } from "@/theme";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Med Sarthi",
  description: "Aapke swasthya ka saathi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased bg-gray-100",
            fontSans.variable
          )}
        >
          {/* Navbar */}
          <Navbar />
          <div className="min-h-screen lg:p-4 sm:p-2 p-1 text-sm text-gray-600 bg-slate-100">
            {children}
          </div>
          {/* Footer */}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
