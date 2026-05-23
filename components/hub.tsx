'use client'

import { Map, Castle, Users, Download } from 'lucide-react'
import type { Screen } from '@/lib/data'

interface HubProps {
  onNavigate: (screen: Screen) => void
}

const navigationCards = [
  {
    id: 'world-map' as Screen,
    title: 'Mapa Mundi',
    description: 'Explore o vasto mundo além das fronteiras do império',
    icon: Map,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
  },
  {
    id: 'nihongan' as Screen,
    title: 'Império de Nihongan',
    description: 'Descubra a geografia e as regiões do glorioso império',
    icon: Castle,
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
  },
  {
    id: 'clans' as Screen,
    title: 'Clãs do Império',
    description: 'Conheça os grandes clãs e suas tradições ancestrais',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
  },
]

export function Hub({ onNavigate }: HubProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513682121497-80211f36a7d3?w=1920&q=80')] bg-cover bg-center" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          {/* Decorative Element */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/10 blur-xl" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                <span className="text-4xl">⛩️</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-balance text-center font-serif text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Cenário L5R Expandido
          </h1>
          
          {/* Decorative Line */}
          <div className="mx-auto my-6 flex max-w-xs items-center justify-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <span className="text-primary">◆</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground md:text-xl">
            Cenário L5R Expandido se dedica a apresentar o mundo completo de fantasia para se aventurar com amigos.
          </p>

          {/* Download Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="/assets/pdfs/sistema.pdf"
              download
              className="group inline-flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 font-medium text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20"
            >
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Baixar PDF do Sistema</span>
            </a>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {navigationCards.map((card) => (
            <button
              key={card.id}
              onClick={() => onNavigate(card.id)}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon */}
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-card/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <card.icon className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 text-left">
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                
                {/* Hover Indicator */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span>Explorar</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </div>

              {/* Decorative Border Animation */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center">
          <p className="font-serif text-sm text-muted-foreground">
            Um mundo de honra, espadas e magia ancestral
          </p>
        </div>
      </footer>
    </div>
  )
}
