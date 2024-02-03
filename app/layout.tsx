import Navigation from "@/components/Navigation";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "김인중(kohubi)개발자 블로그",
  description: "김인중(kohubi)개발자 블로그입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-[#f3f5f8] overflow-x-hidden`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
