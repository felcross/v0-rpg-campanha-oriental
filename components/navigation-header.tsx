'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface NavigationHeaderProps {
  title: string
  onBack: () => void
}

export function NavigationHeader({ title, onBack }: NavigationHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="gap-2 border border-primary/20 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-serif">Voltar ao Hub</span>
        </Button>
        <h1 className="font-serif text-xl font-bold tracking-wider text-foreground md:text-2xl">
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        <div className="w-32" /> {/* Spacer for centering */}
      </div>
    </header>
  )
}
