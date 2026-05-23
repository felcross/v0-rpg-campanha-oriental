'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Mountain, Castle, Waves, ArrowLeft, X } from 'lucide-react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { regionsData, getRegionCoverUrl, getRegionGalleryUrls, type Region } from '@/lib/data'

interface NihonganProps {
  onBack: () => void
}

// Ícones para cada região
const regionIcons: Record<string, React.ReactNode> = {
  norte: <Mountain className="h-6 w-6" />,
  central: <Castle className="h-6 w-6" />,
  sul: <Waves className="h-6 w-6" />
}

export function Nihongan({ onBack }: NihonganProps) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)
  const [isLightbox, setIsLightbox] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')

  const handleSelectRegion = (region: Region) => {
    setSelectedRegion(region)
    setCurrentGalleryIndex(0)
  }

  const handleBackToRegions = () => {
    setSelectedRegion(null)
    setCurrentGalleryIndex(0)
  }

  const galleryUrls = selectedRegion ? getRegionGalleryUrls(selectedRegion) : []

  const goToPrevious = () => {
    setCurrentGalleryIndex((prev) => (prev === 0 ? galleryUrls.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentGalleryIndex((prev) => (prev === galleryUrls.length - 1 ? 0 : prev + 1))
  }

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl)
    setIsLightbox(true)
  }

  // Tela de seleção de região
  if (!selectedRegion) {
    return (
      <div className="min-h-screen bg-background">
        <NavigationHeader title="Império de Nihongan" onBack={onBack} />

        <div className="mx-auto max-w-7xl px-4 py-8">
          {/* Introdução */}
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              O vasto Império de Nihongan se estende por três grandes regiões, cada uma com suas 
              próprias tradições, paisagens e mistérios. Selecione uma região para explorar seus 
              mapas e conhecer suas terras.
            </p>
          </div>

          {/* Cards de Região */}
          <div className="grid gap-6 md:grid-cols-3">
            {regionsData.map((region) => (
              <button
                key={region.id}
                onClick={() => handleSelectRegion(region)}
                className="group relative overflow-hidden rounded-xl border-2 border-border/50 bg-card text-left transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Imagem de Capa */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={getRegionCoverUrl(region)}
                    alt={region.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                  
                  {/* Ícone da Região */}
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/30 bg-card/80 text-primary backdrop-blur-sm transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    {regionIcons[region.id]}
                  </div>

                  {/* Decorative Corners */}
                  <div className="absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-primary/40 transition-colors group-hover:border-primary" />
                  <div className="absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-primary/40 transition-colors group-hover:border-primary" />
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="mb-3 font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {region.name}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {region.description}
                  </p>
                  
                  {/* Indicador de Galeria */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-muted px-2 py-1">
                      {region.gallery.length} mapas disponíveis
                    </span>
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className="absolute inset-x-0 bottom-0 h-1 scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Tela de visualização da região selecionada
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader title={selectedRegion.name} onBack={onBack} />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Botão Voltar às Regiões */}
        <Button
          variant="ghost"
          onClick={handleBackToRegions}
          className="mb-6 gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar às Regiões
        </Button>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Coluna Principal - Imagem em Destaque */}
          <div className="lg:col-span-3">
            {/* Imagem de Capa Principal */}
            <div className="relative overflow-hidden rounded-xl border-2 border-border/50 bg-card shadow-xl">
              {/* Decorative Corners */}
              <div className="absolute left-3 top-3 z-10 h-8 w-8 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute right-3 top-3 z-10 h-8 w-8 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-3 left-3 z-10 h-8 w-8 border-b-2 border-l-2 border-primary/50" />
              <div className="absolute bottom-3 right-3 z-10 h-8 w-8 border-b-2 border-r-2 border-primary/50" />

              <button
                onClick={() => openLightbox(getRegionCoverUrl(selectedRegion))}
                className="block w-full"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={getRegionCoverUrl(selectedRegion)}
                    alt={`Mapa principal - ${selectedRegion.name}`}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </button>

              {/* Label */}
              <div className="absolute bottom-4 left-4 rounded-lg bg-secondary/90 px-4 py-2 backdrop-blur-sm">
                <span className="font-serif text-sm font-medium text-primary-foreground">
                  Mapa Principal
                </span>
              </div>
            </div>

            {/* Descrição */}
            <div className="mt-6 rounded-lg border border-border/50 bg-card p-6">
              <h3 className="mb-3 font-serif text-lg font-bold text-foreground">
                Sobre a Região
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {selectedRegion.description}
              </p>
            </div>
          </div>

          {/* Coluna Lateral - Galeria de Mapas */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
              Galeria de Mapas
            </h3>

            {/* Slideshow Principal da Galeria */}
            <div className="relative overflow-hidden rounded-lg border-2 border-border/50 bg-card">
              {/* Imagem Atual */}
              <button
                onClick={() => openLightbox(galleryUrls[currentGalleryIndex])}
                className="block w-full"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={galleryUrls[currentGalleryIndex]}
                    alt={`Mapa ${currentGalleryIndex + 1} - ${selectedRegion.name}`}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </button>

              {/* Controles de Navegação */}
              {galleryUrls.length > 1 && (
                <>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={goToPrevious}
                    className="absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full shadow-lg"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={goToNext}
                    className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full shadow-lg"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}

              {/* Contador */}
              <div className="absolute bottom-2 right-2 rounded-full bg-secondary/90 px-3 py-1 text-xs text-primary-foreground backdrop-blur-sm">
                {currentGalleryIndex + 1} / {galleryUrls.length}
              </div>
            </div>

            {/* Grid de Thumbnails */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {galleryUrls.map((url, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    index === currentGalleryIndex
                      ? 'border-primary shadow-lg shadow-primary/20'
                      : 'border-border/50 hover:border-primary/50'
                  }`}
                >
                  <img
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {index === currentGalleryIndex && (
                    <div className="absolute inset-0 bg-primary/10" />
                  )}
                </button>
              ))}
            </div>

            {/* Indicadores de Slide */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {galleryUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGalleryIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentGalleryIndex
                      ? 'w-6 bg-primary'
                      : 'w-2 bg-border hover:bg-primary/50'
                  }`}
                  aria-label={`Ver mapa ${index + 1}`}
                />
              ))}
            </div>

            {/* Nota sobre assets */}
            <div className="mt-6 rounded-lg border border-dashed border-border bg-muted/30 p-4 text-center">
              <p className="text-xs text-muted-foreground">
                Para usar seus próprios mapas, substitua os arquivos em{' '}
                <code className="rounded bg-muted px-1 py-0.5 font-mono text-foreground">
                  /public{selectedRegion.folderPath}
                </code>
              </p>
            </div>
          </div>
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
            alt="Visualização em tela cheia"
            className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
