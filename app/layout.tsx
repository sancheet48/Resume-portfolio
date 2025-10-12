import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sancheet Kumar Baidya - AI Engineer & Full Stack Developer',
  description: 'Senior Research and Development Engineer at Synopsys specializing in AI/ML, Full Stack Development, and 3D Web Experiences',
  keywords: 'AI Engineer, Full Stack Developer, Machine Learning, React, Next.js, Python, Data Science',
  authors: [{ name: 'Sancheet Kumar Baidya' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}