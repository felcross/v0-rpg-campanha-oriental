'use client'

import { Map, Castle, Users, Sparkles, Download } from 'lucide-react'
import { hubCardsData, getHubCardImageUrl, type Screen } from '@/lib/data'

interface HubProps {
  onNavigate: (screen: Screen) => void
}

const iconMap = {
  'world-map': Map,
  'nihongan': Castle,
  'clans': Users,
  'magic': Sparkles,
}

export function Hub({ onNavigate }: HubProps) {
  return (
    <div className="min-h-screen bg-background parchment-bg">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80')] bg-cover bg-center bg-fixed" />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
          {/* Decorative Element */}
          <div className="mb-10 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-primary/20 blur-2xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/50 bg-card/80 shadow-2xl shadow-primary/20 backdrop-blur-sm">
                <span className="text-5xl">⛩️</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-balance text-center font-serif text-5xl font-bold tracking-wide text-foreground md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Cenário L5R Expandido
            </span>
          </h1>
          
          {/* Decorative Line */}
          <div className="mx-auto my-8 flex max-w-md items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="text-2xl text-primary">◆</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
            Cenário L5R Expandido se dedica a apresentar o mundo completo de fantasia para se aventurar com amigos.
          </p>

          {/* Download Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="/assets/pdfs/sistema.pdf"
              download
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Download className="relative h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span className="relative">Baixar PDF do Sistema</span>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {hubCardsData.map((card) => {
            const Icon = iconMap[card.id as keyof typeof iconMap]
            const imageUrl = getHubCardImageUrl(card)
            
            return (
              <button
                key={card.id}
                onClick={() => onNavigate(card.id)}
                className="group relative overflow-hidden rounded-xl border-2 border-primary/20 bg-card shadow-xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Dark Overlay for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-black/40" />
                  
                  {/* Icon */}
                  {Icon && (
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/50 bg-card/90 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-primary group-hover:bg-primary">
                      <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                  )}

                  {/* Decorative Corners */}
                  <div className="absolute left-2 top-2 h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <div className="absolute right-2 top-2 h-6 w-6 border-r-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                </div>

                {/* Card Content */}
                <div className="p-5 text-left">
                  <h3 className="mb-2 font-serif text-xl font-bold tracking-wide text-foreground transition-colors group-hover:text-primary">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <span>Explorar</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                  </div>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </button>
            )
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 bg-card/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-xl">⚔️</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <p className="font-serif text-sm tracking-wider text-muted-foreground">
            Um mundo de honra, espadas e magia ancestral
          </p>
        </div>
      </footer>
    </div>
  )
}
