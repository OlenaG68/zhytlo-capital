import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupWrapper from "@/components/popups/PopupWrapper";
import ApartamentsDetailPopup from "@/components/popups/ApartamentsDetailPopup";
import ReduxProvider from "@/store/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
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
        </html>
    );
}
