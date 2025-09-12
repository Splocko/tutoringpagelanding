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
  title: "gcse 11+ tutoring",
  description:
    "Focused, friendly, and effective GCSE and 11+ tutoring in Maths, Sciences, and Computer Science. Online sessions available.",
  generator: "v0.app",
  openGraph: {
    title: "gcse 11+ tutoring",
    description:
      "Focused, friendly, and effective GCSE and 11+ tutoring in Maths, Sciences, and Computer Science. Online sessions available.",
    url: "https://saoodtutoring.com",
    siteName: "saood tutoring",
    images: [
      {
        url: "/unmessd-app-icon.jpg",
        width: 1200,
        height: 630,
        alt: "saood tutoring - GCSE & 11+ Tutoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "gcse 11+ tutoring",
    description:
      "Focused, friendly, and effective GCSE and 11+ tutoring in Maths, Sciences, and Computer Science. Online and in-person sessions available.",
    images: ["/unmessd-app-icon.jpg"],
  },
  icons: {
    icon: "/unmessd-app-icon.jpg",
    apple: "/unmessd-app-icon.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} dark antialiased`}>
      <body>{children}</body>
    </html>
  )
}
