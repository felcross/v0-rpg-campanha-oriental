'use client'

import { useState } from 'react'
import { ZoomIn, ZoomOut, Maximize2, X } from 'lucide-react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { getWorldMapUrl, worldMapData } from '@/lib/data'

interface WorldMapProps {
  onBack: () => void
}

export function WorldMap({ onBack }: WorldMapProps) {
  const [isLightbox, setIsLightbox] = useState(false)
  const [zoom, setZoom] = useState(1)

  const mapUrl = getWorldMapUrl()

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3))
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.5))
  const handleResetZoom = () => setZoom(1)

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader title={worldMapData.title} onBack={onBack} />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Description */}
        <div className="mb-8 text-center">
          <p className="mx-auto max-w-2xl text-pretty text-muted-foreground">
            {worldMapData.description}
          </p>
        </div>

        {/* Map Container */}
        <div className="relative overflow-hidden rounded-lg border-4 border-border/50 bg-card shadow-2xl">
          {/* Decorative Corners */}
          <div className="absolute left-2 top-2 z-10 h-8 w-8 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute right-2 top-2 z-10 h-8 w-8 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-2 left-2 z-10 h-8 w-8 border-b-2 border-l-2 border-primary/50" />
          <div className="absolute bottom-2 right-2 z-10 h-8 w-8 border-b-2 border-r-2 border-primary/50" />

          {/* Zoom Controls */}
          <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
            <Button
              variant="secondary"
              size="icon"
              onClick={handleZoomIn}
              className="h-10 w-10 rounded-full shadow-lg"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={handleZoomOut}
              className="h-10 w-10 rounded-full shadow-lg"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => setIsLightbox(true)}
              className="h-10 w-10 rounded-full shadow-lg"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Map Image */}
          <div className="overflow-auto">
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoom})`, transformOrigin: 'center' }}
            >
              <img
                src={mapUrl}
                alt="Mapa Mundi do cenário de RPG"
                className="h-auto w-full min-h-[400px] object-cover md:min-h-[600px]"
              />
            </div>
          </div>
        </div>

        {/* Zoom Level Indicator */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <span className="text-sm text-muted-foreground">Zoom: {Math.round(zoom * 100)}%</span>
          <Button variant="ghost" size="sm" onClick={handleResetZoom}>
            Resetar
          </Button>
        </div>

        {/* Legend */}
        <div className="mt-8 rounded-lg border border-border/50 bg-card p-6">
          <h3 className="mb-4 font-serif text-lg font-bold text-foreground">Legenda</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">Império de Nihongan</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-accent" />
              <span className="text-sm text-muted-foreground">Reinos Aliados</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-4 w-4 rounded-full bg-secondary" />
              <span className="text-sm text-muted-foreground">Terras Inexploradas</span>
            </div>
          </div>
        </div>

        {/* Nota sobre assets */}
        <div className="mt-6 rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center">
          <p className="text-xs text-muted-foreground">
            Para usar seu próprio mapa, substitua o arquivo em{' '}
            <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">
              /public/assets/mapamundi/mapamundi.jpg
            </code>
          </p>
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
            src={mapUrl}
            alt="Mapa Mundi do cenário de RPG"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
