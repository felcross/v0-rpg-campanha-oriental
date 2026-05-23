'use client'

import { useState } from 'react'
import { Hub } from '@/components/hub'
import { WorldMap } from '@/components/world-map'
import { Nihongan } from '@/components/nihongan'
import { Clans } from '@/components/clans'
import type { Screen } from '@/lib/data'

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home')

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen)
  }

  return (
    <main className="min-h-screen">
      {currentScreen === 'home' && <Hub onNavigate={navigateTo} />}
      {currentScreen === 'world-map' && <WorldMap onBack={() => navigateTo('home')} />}
      {currentScreen === 'nihongan' && <Nihongan onBack={() => navigateTo('home')} />}
      {currentScreen === 'clans' && <Clans onBack={() => navigateTo('home')} />}
    </main>
  )
}
