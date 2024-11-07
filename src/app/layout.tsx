import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto_Mono, Fira_Code, Nunito_Sans, Roboto, Lato, Open_Sans, Inter } from 'next/font/google';
import "./globals.css";

const nasaliza = localFont({
    src: "./fonts/NASALIZA.woff",
    variable: "--nasaliza-font",
    weight: "100 900",
});
// const robotomono = Roboto_Mono({ subsets: ['latin', 'latin-ext'], variable: '--robotomono-font' });
const robotomono = Roboto_Mono({ subsets: ['cyrillic', 'cyrillic-ext', 'greek', 'latin', 'latin-ext', 'vietnamese'], weight: ['100', '200', '300', '400', '500', '600', '700'], variable: '--robotomono-font' });
const firacode = Fira_Code({ subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'greek', 'greek-ext'], variable: '--firacode-font' });
const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'vietnamese'], variable: '--roboto-font' });
const open_sans = Open_Sans({ weight: [ '300', '400', '500', '600', '700', '800' ], subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'greek', 'greek-ext', 'hebrew', 'math', 'symbols', 'vietnamese'], variable: '--opensans-font' });
const nunitosans = Nunito_Sans({ subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'vietnamese'], variable: '--nunitosans-font' });

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
            <body className={`${nasaliza.variable} ${firacode.variable} ${nunitosans.variable} ${roboto.variable} ${open_sans.variable} ${robotomono.variable}`}>
                {children}
            </body>
        </html>
    );
}
