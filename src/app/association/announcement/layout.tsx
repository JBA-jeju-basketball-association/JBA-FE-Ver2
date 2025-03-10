import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "공지사항",
  keywords: ["제주특별자치도농구협회 공지사항"],
  description: "제주특별자치도농구협회 공지사항입니다.",
  icons: {
    icon: "/image/logo.jpeg",
  },
  openGraph: {
    title: "공지사항",
    description: "제주특별자치도농구협회 공지사항입니다.",
    images: [
      {
        url: "/image/logo.jpeg",
        width: 500,
        height: 500,
        alt: "logo",
      },
    ],
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="w-full flex justify-center">{children}</div>;
}
