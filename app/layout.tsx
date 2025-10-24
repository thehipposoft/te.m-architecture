import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Te.M Architecture",
  description: "Te.M Architecture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
      cz-shortcut-listen="true"
      >
        <Header />
        <div className="md:pt-[99px] pt-0">
          <GoogleAnalytics />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
