import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ScrollOffset from "./scroll-offset"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Srikanth Mogadati | Cybersecurity Specialist",
  description:
    "Portfolio website for Srikanth Mogadati, a cybersecurity specialist with expertise in endpoint security, IAM, and security operations.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollOffset />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'