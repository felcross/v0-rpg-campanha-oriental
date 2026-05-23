'use client'

import { useState } from 'react'
import { Globe, MapPin, ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { worldMapsData, getWorldMapCoverUrl, getWorldMapGalleryUrls, type WorldMapTab } from '@/lib/data'

interface WorldMapProps {
  onBack: () => void
}

const tabIcons = {
  mundi: Globe,
  geral_nihongan: MapPin,
}

export function WorldMap({ onBack }: WorldMapProps) {
  const [selectedTab, setSelectedTab] = useState<WorldMapTab | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [isLightbox, setIsLightbox] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')

  const handleSelectTab = (tab: WorldMapTab) => {
    setSelectedTab(tab)
    setGalleryIndex(0)
  }

  const handleBackToTabs = () => {
    setSelectedTab(null)
    setGalleryIndex(0)
  }

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl)
    setIsLightbox(true)
  }

  // Tab Selection View
  if (!selectedTab) {
    return (
      <div className="min-h-screen bg-background">
        <NavigationHeader title="Mapas do Mundo" onBack={onBack} />

        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Introduction */}
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
              Explore os mapas que revelam a vastidão do mundo conhecido e os detalhes do glorioso Império de Nihongan.
            </p>
          </div>

          {/* Tab Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {worldMapsData.map((tab) => {
              const Icon = tabIcons[tab.id as keyof typeof tabIcons]
              const coverUrl = getWorldMapCoverUrl(tab)
              
              return (
                <button
                  key={tab.id}
                  onClick={() => handleSelectTab(tab)}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-card text-left shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
                >
                  {/* Cover Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={coverUrl}
                      alt={tab.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-4 left-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-card/90 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      {Icon && <Icon className="h-7 w-7 text-primary" />}
                    </div>

                    {/* Gallery Count */}
                    <div className="absolute bottom-4 right-4 rounded-full bg-card/90 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
                      {tab.gallery.length} {tab.gallery.length === 1 ? 'mapa' : 'mapas'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-2 font-serif text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {tab.name}
                    </h3>
                    <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {tab.description}
                    </p>

                    {/* Hover Indicator */}
                    <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span>Explorar Mapas</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>

                  {/* Decorative Border */}
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </button>
              )
            })}
          </div>

          {/* Asset Note */}
          <div className="mt-8 rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center">
            <p className="text-xs text-muted-foreground">
              Adicione mapas em{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">
                /public/assets/mapas/mundi/
              </code>
              {' '}e{' '}
              <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">
                /public/assets/mapas/geral_nihongan/
              </code>
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Map Detail View
  const galleryUrls = getWorldMapGalleryUrls(selectedTab)
  const coverUrl = getWorldMapCoverUrl(selectedTab)

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader title={selectedTab.name} onBack={handleBackToTabs} />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Back Button */}
        <button
          onClick={handleBackToTabs}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para seleção de mapas
        </button>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Main Map (Cover) */}
          <div className="relative overflow-hidden rounded-xl border-4 border-border/50 bg-card shadow-2xl">
            {/* Decorative Corners */}
            <div className="absolute left-2 top-2 z-10 h-8 w-8 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute right-2 top-2 z-10 h-8 w-8 border-r-2 border-t-2 border-primary/50" />
            <div className="absolute bottom-2 left-2 z-10 h-8 w-8 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-2 right-2 z-10 h-8 w-8 border-b-2 border-r-2 border-primary/50" />

            {/* Label */}
            <div className="absolute left-4 top-4 z-10 rounded-full bg-card/90 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
              Mapa Principal
            </div>

            <img
              src={coverUrl}
              alt={`${selectedTab.name} - Mapa Principal`}
              className="h-auto w-full cursor-zoom-in object-cover"
              onClick={() => openLightbox(coverUrl)}
            />
          </div>

          {/* Gallery Slideshow */}
          <div className="flex flex-col">
            {/* Main Slideshow */}
            <div className="relative flex-1 overflow-hidden rounded-xl border border-border/50 bg-card shadow-lg">
              {/* Navigation */}
              {galleryUrls.length > 1 && (
                <>
                  <button
                    onClick={() => setGalleryIndex((prev) => (prev === 0 ? galleryUrls.length - 1 : prev - 1))}
                    className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-card"
                  >
                    <ChevronLeft className="h-5 w-5 text-foreground" />
                  </button>
                  <button
                    onClick={() => setGalleryIndex((prev) => (prev === galleryUrls.length - 1 ? 0 : prev + 1))}
                    className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-card/90 p-2 shadow-lg backdrop-blur-sm transition-colors hover:bg-card"
                  >
                    <ChevronRight className="h-5 w-5 text-foreground" />
                  </button>
                </>
              )}

              {/* Counter */}
              <div className="absolute right-4 top-4 z-10 rounded-full bg-card/90 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
                {galleryIndex + 1} / {galleryUrls.length}
              </div>

              <img
                src={galleryUrls[galleryIndex]}
                alt={`${selectedTab.name} - Mapa ${galleryIndex + 1}`}
                className="h-full w-full cursor-zoom-in object-cover"
                onClick={() => openLightbox(galleryUrls[galleryIndex])}
              />
            </div>

            {/* Thumbnails */}
            {galleryUrls.length > 1 && (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {galleryUrls.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => setGalleryIndex(index)}
                    className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      index === galleryIndex
                        ? 'border-primary shadow-lg'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={url}
                      alt={`Thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Indicators */}
            {galleryUrls.length > 1 && (
              <div className="mt-4 flex justify-center gap-2">
                {galleryUrls.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setGalleryIndex(index)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      index === galleryIndex ? 'w-6 bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div className="mt-8 rounded-xl border border-border/50 bg-card p-6 shadow-lg">
          <h3 className="mb-3 font-serif text-lg font-bold text-foreground">Sobre este Mapa</h3>
          <p className="leading-relaxed text-muted-foreground">{selectedTab.description}</p>
        </div>
      </div>

      {/* Lightbox */}
      {isLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/95 p-4 backdrop-blur-sm"
          onClick={() => setIsLightbox(false)}
        >
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-4 z-10 rounded-full"
            onClick={() => setIsLightbox(false)}
          >
            <X className="h-5 w-5" />
          </Button>
          <img
            src={lightboxImage}
            alt="Mapa em tela cheia"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
