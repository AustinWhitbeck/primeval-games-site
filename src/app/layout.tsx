import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigation from "./_components/TopNavigation";
import ContentWrapper from "./_components/ContentWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Primeval Games",
  description: "Welcome to Primeval Games!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <div className="h-screen flex flex-col pb-10 bg-gray-100">
          <TopNavigation />
          <ContentWrapper>
            {children}
          </ContentWrapper>
        </div>
      </body>
    </html>
  );
}
