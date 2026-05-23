'use client'

import { useState } from 'react'
import { Download, ChevronLeft, ChevronRight } from 'lucide-react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { magicData, type MagicProfile } from '@/lib/data'

interface MagicProps {
  onBack: () => void
}

export function Magic({ onBack }: MagicProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentProfile = magicData[currentIndex]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? magicData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === magicData.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader title="Feitiços Elementais & Fortunas" onBack={onBack} />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <p className="mx-auto max-w-3xl text-pretty text-muted-foreground">
            As artes místicas de Nihongan dividem-se em duas tradições ancestrais: os Shugenja, 
            sacerdotes que canalizam o poder dos kami elementais, e os Onmyoji, mestres da 
            adivinhação e do equilíbrio cósmico entre Yin e Yang.
          </p>
        </div>

        {/* Profile Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/50 bg-card/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card md:-left-6"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border/50 bg-card/90 p-3 shadow-lg backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card md:-right-6"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Profile Card */}
          <div className="mx-auto max-w-4xl px-12">
            <div className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl">
              {/* Header with Gradient */}
              <div className={`relative bg-gradient-to-r ${currentProfile.color} p-8 text-white`}>
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80')] bg-cover bg-center" />
                </div>
                
                <div className="relative flex items-center gap-6">
                  {/* Emblem */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-5xl backdrop-blur-sm">
                    {currentProfile.emblem}
                  </div>
                  
                  <div>
                    <h2 className="font-serif text-3xl font-bold">{currentProfile.name}</h2>
                    <p className="mt-1 text-lg text-white/80">{currentProfile.description}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="mb-4 font-serif text-xl font-bold text-foreground">
                  {currentProfile.title}
                </h3>
                
                <p className="mb-8 leading-relaxed text-muted-foreground">
                  {currentProfile.lore}
                </p>

                {/* Download Button */}
                <a
                  href={currentProfile.pdfUrl}
                  download
                  className={`group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r ${currentProfile.color} px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110`}
                >
                  <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
                  <span>{currentProfile.buttonText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Indicators */}
        <div className="mt-8 flex justify-center gap-3">
          {magicData.map((profile, index) => (
            <button
              key={profile.id}
              onClick={() => setCurrentIndex(index)}
              className={`flex h-12 items-center gap-2 rounded-lg border px-4 transition-all ${
                index === currentIndex
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border/50 bg-card text-muted-foreground hover:border-primary/50'
              }`}
            >
              <span className="text-xl">{profile.emblem}</span>
              <span className="text-sm font-medium">{profile.name}</span>
            </button>
          ))}
        </div>

        {/* Asset Note */}
        <div className="mt-8 rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center">
          <p className="text-xs text-muted-foreground">
            Adicione os PDFs em{' '}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">
              /public/assets/pdfs/shugenja.pdf
            </code>
            {' '}e{' '}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">
              /public/assets/pdfs/onmyoji.pdf
            </code>
          </p>
        </div>
      </div>
    </div>
  )
}
