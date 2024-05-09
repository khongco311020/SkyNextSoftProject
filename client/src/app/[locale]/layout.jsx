import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
import { Suspense } from "react";
import Loading from "../loading";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children, params: { locale } }) {
  //Sử dụng hook useMessage để lấy dữ liệu dịch
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <NextIntlClientProvider locale={locale} messages={messages}>
              <div className="content">{children}</div>
            </NextIntlClientProvider>
          </Suspense>
          <Footer />
        </div>
      </body>
    </html>
  );
}
