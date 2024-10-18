import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto_Mono, Fira_Code } from 'next/font/google';
import "./globals.css";

const nasaliza = localFont({
    src: "./fonts/NASALIZA.woff",
    variable: "--nasaliza-font",
    weight: "100 900",
});
const robotomono = Roboto_Mono({ subsets: ['latin', 'latin-ext'], variable: '--robotomono-font'});
const firacode = Fira_Code({ subsets: ['latin', 'latin-ext'], variable: '--firacode-font'});

export const metadata: Metadata = {
    title: "APUGDC",
    description: "APU Game Development Club",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${nasaliza.variable} ${robotomono.variable} ${firacode.variable}`}>
                {children}
            </body>
        </html>
    );
}
