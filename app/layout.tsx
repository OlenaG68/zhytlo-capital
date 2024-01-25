import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupWrapper from "@/components/popups/PopupWrapper";
import ApartamentsDetailPopup from "@/components/popups/ApartamentsDetailPopup";
import ReduxProvider from "@/store/ReduxProvider";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    icons: {
        icon: ["/favicon/favicon-32x32.png"],
        apple: ["/favicon/apple-touch-icon.png"],
    },
    title: "Житло твоєї мрії",
    description:
        "SummerStone - малоповерхове житло у Львові. Купуй квартиру в сучасній новобудові у Львові, з явними перевагами в розташуванні та плануванні",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <ReduxProvider>
                <body className={inter.className}>
                    <Header />
                    {children}
                    <Footer />
                    <ApartamentsDetailPopup />
                </body>
            </ReduxProvider>
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALITICS!} />
        </html>
    );
}
