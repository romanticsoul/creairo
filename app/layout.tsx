import type { Metadata } from "next";
import {
  // Unbounded,
  // Alegreya,
  Advent_Pro,
  // Alegreya_Sans_SC,
  // Cormorant_Unicase,
  // Cormorant_Infant,
  // Cormorant,
} from "next/font/google";
import { ThemeProvider } from "@app/providers/theme-provider";
import "@app/globals.css";

// const font = Unbounded({
//   subsets: ["cyrillic"],
//   variable: "--font-sans",
//   weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
// });

// const font = Cormorant_Unicase({
//   subsets: ["cyrillic"],
//   variable: "--font-sans",
//   weight: ["300", "400", "500", "600", "700"],
// });

const font = Advent_Pro({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${font.variable} ${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
