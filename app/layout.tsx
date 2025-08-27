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
  title: "unmessd - Find your focus. Organize your world.",
  description:
    "The intelligent productivity app that blends task management, habit formation, and AI-powered assistance into one beautiful, calming experience.",
  generator: "v0.app",
  openGraph: {
    title: "unmessd - Find your focus. Organize your world.",
    description:
      "The intelligent productivity app that blends task management, habit formation, and AI-powered assistance into one beautiful, calming experience.",
    url: "https://unmessd.com",
    siteName: "unmessd",
    images: [
      {
        url: "/unmessd-app-icon.jpg",
        width: 1200,
        height: 630,
        alt: "unmessd - Productivity App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "unmessd - Find your focus. Organize your world.",
    description:
      "The intelligent productivity app that blends task management, habit formation, and AI-powered assistance into one beautiful, calming experience.",
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
