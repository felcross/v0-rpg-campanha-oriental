'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { NavigationHeader } from '@/components/navigation-header'
import { Button } from '@/components/ui/button'
import { mapsData } from '@/lib/data'

interface NihonganProps {
  onBack: () => void
}

export function Nihongan({ onBack }: NihonganProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? mapsData.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === mapsData.length - 1 ? 0 : prev + 1))
  }

  const currentMap = mapsData[currentSlide]

  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader title="Geografia de Nihongan" onBack={onBack} />

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Carousel Container */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-lg border-4 border-border/50 bg-card shadow-2xl">
            {/* Decorative Corners */}
            <div className="absolute left-2 top-2 z-10 h-8 w-8 border-l-2 border-t-2 border-primary/50" />
            <div className="absolute right-2 top-2 z-10 h-8 w-8 border-r-2 border-t-2 border-primary/50" />
            <div className="absolute bottom-2 left-2 z-10 h-8 w-8 border-b-2 border-l-2 border-primary/50" />
            <div className="absolute bottom-2 right-2 z-10 h-8 w-8 border-b-2 border-r-2 border-primary/50" />

            {/* Image Slides */}
            <div className="relative aspect-video md:aspect-[21/9]">
              {mapsData.map((map, index) => (
                <div
                  key={map.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={map.image}
                    alt={map.title}
                    className="h-full w-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                </div>
              ))}

              {/* Slide Info Overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="mb-2 font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
                  {currentMap.title}
                </h3>
                <p className="max-w-2xl text-sm text-primary-foreground/80 md:text-base">
                  {currentMap.description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full shadow-lg transition-transform hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full shadow-lg transition-transform hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="mt-6 flex items-center justify-center gap-3">
            {mapsData.map((map, index) => (
              <button
                key={map.id}
                onClick={() => goToSlide(index)}
                className={`group relative h-3 transition-all duration-300 ${
                  index === currentSlide ? 'w-12 bg-primary' : 'w-3 bg-border hover:bg-primary/50'
                } rounded-full`}
                aria-label={`Ir para ${map.title}`}
              >
                <span className="sr-only">{map.title}</span>
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="mt-4 text-center">
            <span className="font-serif text-sm text-muted-foreground">
              {currentSlide + 1} / {mapsData.length}
            </span>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {mapsData.map((map, index) => (
            <button
              key={map.id}
              onClick={() => goToSlide(index)}
              className={`group relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                index === currentSlide
                  ? 'border-primary shadow-lg shadow-primary/20'
                  : 'border-border/50 hover:border-primary/50'
              }`}
            >
              <div className="aspect-video">
                <img
                  src={map.image}
                  alt={map.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-2">
                <p className="truncate text-xs font-medium text-primary-foreground">
                  {map.title}
                </p>
              </div>
              {index === currentSlide && (
                <div className="absolute inset-0 border-2 border-primary" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
