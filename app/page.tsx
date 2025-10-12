'use client'

import { Suspense } from 'react'
import Background3D from '@/components/Background3D'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

// Loading component for 3D background
function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 3D Background */}
      <Suspense fallback={<Loading />}>
        <Background3D />
      </Suspense>
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}