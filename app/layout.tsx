import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jhoverne Morcilla | IT Student & OJT Applicant",
  description:
    "The personal portfolio of Jhoverne Morcilla, a BS Information Technology student at NCST seeking an OJT opportunity.",
  applicationName: "Jhoverne Morcilla Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
