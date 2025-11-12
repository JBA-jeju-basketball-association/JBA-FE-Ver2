import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Navigation from "@/containers/navigation/navigation";
import ReactQueryProviders from "@/hooks/useReactQuery";
import AuthProvider from "@/libs/next-auth/AuthProvider";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width, initial-scale=1.0",
};

export const metadata: Metadata = {
  title: {
    template: "제주특별자치도농구협회 | %s",
    default: "제주특별자치도농구협회",
  },
  keywords: [
    "제주",
    "농구",
    "제주농구",
    "JBA",
    "제주특별자치도",
    "제주도",
    "농구협회",
    "제주특별자치도농구협회",
  ],
  description: "제주특별자치도 농구협회 홈페이지입니다.",
  icons: {
    icon: "/image/logo.jpeg",
  },
  openGraph: {
    title: {
      template: "제주특별자치도농구협회 | %s",
      default: "제주특별자치도농구협회",
    },
    description: "제주특별자치도 농구협회 홈페이지입니다.",
    images: [
      {
        url: "/image/logo.jpeg",
        width: 1000,
        height: 1000,
        alt: "logo",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="kr">
      <head>
        <Script id="gtm-datalayer" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];`}
        </Script>
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KKV73M88');
          `}
        </Script>
        <meta
          name="naver-site-verification"
          content="9f574bbc7e2631f63d9c1c587bc0353578a32637"
        />
        <title>제주특별자치도농구협회</title>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KKV73M88"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <div className={"min-h-[100vh]"}>
          <ReactQueryProviders>
            <AuthProvider>
              <Navigation />
              {children}
            </AuthProvider>
          </ReactQueryProviders>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
