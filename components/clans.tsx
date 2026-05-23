'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Download, FileText } from 'lucide-react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { clansData } from '@/lib/data'

interface ClansProps {
  onBack: () => void
}

export function Clans({ onBack }: ClansProps) {
  const [currentClan, setCurrentClan] = useState(0)

  const goToPrevious = () => {
    setCurrentClan((prev) => (prev === 0 ? clansData.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentClan((prev) => (prev === clansData.length - 1 ? 0 : prev + 1))
  }

  const goToClan = (index: number) => {
    setCurrentClan(index)
  }

  const clan = clansData[currentClan]

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader title="Os Clãs de Nihongan" onBack={onBack} />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Clan Selector Pills */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {clansData.map((c, index) => (
            <button
              key={c.id}
              onClick={() => goToClan(index)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                index === currentClan
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50'
              }`}
            >
              <span>{c.emblem}</span>
              <span className="hidden sm:inline">{c.name}</span>
            </button>
          ))}
        </div>

        {/* Main Clan Card */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="secondary"
            size="icon"
            onClick={goToPrevious}
            className="absolute -left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full shadow-lg transition-transform hover:scale-110 md:-left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={goToNext}
            className="absolute -right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full shadow-lg transition-transform hover:scale-110 md:-right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Clan Card */}
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border/50 bg-card shadow-2xl">
            {/* Header with Gradient */}
            <div className={`relative bg-gradient-to-r ${clan.color} p-8 md:p-12`}>
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=800&q=80')] bg-cover bg-center mix-blend-overlay" />
              </div>

              <div className="relative flex flex-col items-center text-center">
                {/* Emblem */}
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/30 bg-white/20 text-5xl shadow-xl backdrop-blur-sm md:h-32 md:w-32 md:text-6xl">
                  {clan.emblem}
                </div>

                {/* Clan Name */}
                <h2 className="mb-2 font-serif text-3xl font-bold text-white md:text-4xl">
                  {clan.name}
                </h2>

                {/* Description */}
                <p className="max-w-lg text-white/90">
                  {clan.description}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Lore Section */}
              <div className="mb-8">
                <h3 className="mb-4 flex items-center gap-2 font-serif text-xl font-bold text-foreground">
                  <span className="h-px flex-1 bg-border" />
                  <span>História e Tradições</span>
                  <span className="h-px flex-1 bg-border" />
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {clan.lore}
                </p>
              </div>

              {/* Download Section */}
              <div className="rounded-lg border border-border/50 bg-muted/30 p-6">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-foreground">
                        Material do Clã
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Escolas e técnicas do {clan.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/70">
                        Arquivo: {clan.pdfUrl.split('/').pop()}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a href={clan.pdfUrl} download>
                      <Download className="h-4 w-4" />
                      Baixar PDF
                    </a>
                  </Button>
                </div>
              </div>

              {/* Nota sobre assets */}
              <div className="mt-4 rounded-lg border border-dashed border-border bg-muted/20 p-3 text-center">
                <p className="text-xs text-muted-foreground">
                  Adicione o PDF em{' '}
                  <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">
                    /public{clan.pdfUrl}
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {clansData.map((c, index) => (
            <button
              key={c.id}
              onClick={() => goToClan(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentClan ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
              }`}
              aria-label={`Ver ${c.name}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="mt-4 text-center">
          <span className="font-serif text-sm text-muted-foreground">
            {currentClan + 1} de {clansData.length} clãs
          </span>
        </div>

        {/* Quick Navigation Grid */}
        <div className="mt-12">
          <h3 className="mb-6 text-center font-serif text-lg font-bold text-foreground">
            Todos os Clãs
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {clansData.map((c, index) => (
              <button
                key={c.id}
                onClick={() => goToClan(index)}
                className={`group relative overflow-hidden rounded-lg border-2 p-4 text-center transition-all duration-300 ${
                  index === currentClan
                    ? 'border-primary bg-primary/10'
                    : 'border-border/50 bg-card hover:border-primary/50 hover:bg-muted'
                }`}
              >
                <div className="mb-2 text-3xl transition-transform duration-300 group-hover:scale-110">
                  {c.emblem}
                </div>
                <p className="text-xs font-medium text-foreground">{c.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
