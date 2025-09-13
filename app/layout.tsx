import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "GCSE 11+ Tutoring",
  description:
    "Focused, friendly, and effective GCSE and 11+ tutoring.",
  generator: "v0.app",
  openGraph: {
    title: "GCSE 11+ Tutoring",
    description:
      "Focused, friendly, and effective GCSE and 11+ tutoring.",
    url: "https://saoodtutoring.com",
    siteName: "GCSE 11+ Tutoring",
    images: [
      {
        url: "/book-icon.svg",
        width: 1200,
        height: 630,
        alt: "GCSE 11+ Tutoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCSE 11+ Tutoring",
    description:
      "Focused, friendly, and effective GCSE and 11+ tutoring.",
    images: ["/book-icon.svg"],
  },
  icons: {
    icon: "/book-icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}