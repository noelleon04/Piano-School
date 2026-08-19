import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piano Enrichment at Daycare | Program Concept",
  description:
    "A proposed piano enrichment concept for the daycare setting. Key program details remain to be confirmed.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
