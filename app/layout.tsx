import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "暖爪宠物洗护 | 精致洗护与美容预约",
  description:
    "暖爪宠物洗护店，提供猫狗洗澡、美容造型、除浮毛、SPA护理和上门接送预约服务。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
