import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "박준용 — Fault-Tolerant Robotics",
  description:
    "동아대학교 전기공학과 박준용. 전류 기반 고장 감지와 분산 제어로 멈추지 않는 로봇 시스템을 만듭니다.",
  openGraph: {
    title: "박준용 — Fault-Tolerant Robotics",
    description: "전류 기반 고장 감지와 분산 제어로 멈추지 않는 로봇 시스템을 만듭니다.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
