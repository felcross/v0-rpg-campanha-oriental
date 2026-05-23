export type Screen = 'home' | 'world-map' | 'nihongan' | 'clans'

// ============================================
// REGIONS DATA - Estrutura para fácil manutenção
// ============================================
// Para adicionar mais imagens a uma região, basta adicionar ao array gallery
// Exemplo: gallery: ['mapa_1.jpg', 'mapa_2.jpg', 'mapa_3.jpg', 'mapa_4.jpg']

export interface Region {
  id: string
  name: string
  folderPath: string
  coverImage: string
  gallery: string[]
  description: string
  // Placeholders do Unsplash para visualização antes de substituir pelos assets reais
  placeholderCover: string
  placeholderGallery: string[]
}

export const regionsData: Region[] = [
  {
    id: 'norte',
    name: 'Região Norte (Terras Gélidas)',
    folderPath: '/assets/imperio/regiao_norte',
    coverImage: 'mapa_capa.jpg',
    gallery: ['mapa_1.jpg', 'mapa_2.jpg', 'mapa_3.jpg'],
    description: 'As terras do norte são dominadas por montanhas nevadas e florestas ancestrais. Aqui residem os clãs mais resilientes, forjados pelo frio implacável e pela constante vigilância contra as criaturas das terras além da Muralha de Gelo. Os invernos são longos e impiedosos, mas a beleza das auroras boreais e dos templos cobertos de neve compensam qualquer sacrifício.',
    placeholderCover: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    placeholderGallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
      'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&q=80'
    ]
  },
  {
    id: 'central',
    name: 'Região Central (Planícies Imperiais)',
    folderPath: '/assets/imperio/regiao_central',
    coverImage: 'mapa_capa.jpg',
    gallery: ['mapa_1.jpg', 'mapa_2.jpg', 'mapa_3.jpg'],
    description: 'O coração pulsante do império, onde se ergue a majestosa Capital Imperial e os principais centros de poder político e espiritual. As planícies férteis alimentam todo o reino, e os rios sagrados conectam as províncias como veias de um corpo vivo. Aqui, a corte imperial tece intrigas tão complexas quanto os jardins de cerejeiras que adornam seus palácios.',
    placeholderCover: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
    placeholderGallery: [
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80'
    ]
  },
  {
    id: 'sul',
    name: 'Região Sul (Costa das Mil Ilhas)',
    folderPath: '/assets/imperio/regiao_sul',
    coverImage: 'mapa_capa.jpg',
    gallery: ['mapa_1.jpg', 'mapa_2.jpg', 'mapa_3.jpg'],
    description: 'O arquipélago do sul é um mundo à parte, onde mil ilhas pontilham mares esmeraldinos. Rica em comércio e tradições marítimas, esta região é lar de pescadores intrépidos, mercadores astutos e piratas que desafiam a autoridade imperial. Os templos flutuantes e as aldeias sobre palafitas guardam segredos antigos dos povos do mar.',
    placeholderCover: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80',
    placeholderGallery: [
      'https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&q=80',
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800&q=80',
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80'
    ]
  }
]

// ============================================
// CLANS DATA - Estrutura para fácil manutenção
// ============================================

export interface Clan {
  id: string
  name: string
  emblem: string
  color: string
  description: string
  lore: string
  pdfUrl: string
}

export const clansData: Clan[] = [
  {
    id: 'fenix',
    name: 'Clã Fênix',
    emblem: '🔥',
    color: 'from-orange-600 to-red-700',
    description: 'Guardiões do conhecimento místico e das tradições espirituais do império.',
    lore: 'O Clã Fênix é conhecido por sua profunda conexão com os elementos e os espíritos ancestrais. Seus shugenja são os mais poderosos do império, capazes de invocar as forças da natureza e comungar com os kami. A biblioteca do clã, localizada nas Montanhas Isawa, contém pergaminhos tão antigos quanto o próprio império, alguns escritos pelos fundadores divinos. Os samurais Fênix são estudiosos por natureza, preferindo resolver conflitos através da sabedoria e da diplomacia, embora seus poderes místicos os tornem adversários formidáveis quando provocados.',
    pdfUrl: '/assets/pdfs/fenix.pdf'
  },
  {
    id: 'dragao',
    name: 'Clã Dragão',
    emblem: '🐉',
    color: 'from-emerald-600 to-teal-700',
    description: 'Místicos e filósofos que buscam a iluminação nas montanhas sagradas.',
    lore: 'Isolados nas montanhas mais altas do império, o Clã Dragão desenvolveu tradições únicas que mesclam o bushido com filosofias contemplativas. Seus monges guerreiros dominam tanto a espada quanto a mente, buscando transcender os limites do corpo mortal. O Togashi, fundador imortal do clã, ainda vive em seu monastério no pico mais alto, concedendo audiências apenas aos mais dignos. Os tatuados do Dragão carregam em seus corpos marcas místicas que lhes conferem poderes sobrenaturais, um segredo guardado há milênios.',
    pdfUrl: '/assets/pdfs/dragao.pdf'
  },
  {
    id: 'leao',
    name: 'Clã Leão',
    emblem: '🦁',
    color: 'from-amber-500 to-yellow-600',
    description: 'Os maiores guerreiros do império, defensores da honra e da tradição militar.',
    lore: 'O Clã Leão é a espinha dorsal militar do império. Seus exércitos são lendários, treinados desde a infância na arte da guerra e no código do bushido. A Akodo War College forma os melhores tacticians conhecidos, cujos manuais de estratégia são estudados em todos os cantos do mundo. Os samurais Leão vivem pela espada e morrem com honra, considerando a covardia o pior dos pecados. Sua lealdade ao Imperador é inabalável, e muitas guerras foram vencidas pelo simples rugido de seus exércitos marchando.',
    pdfUrl: '/assets/pdfs/leao.pdf'
  },
  {
    id: 'caranguejo',
    name: 'Clã Caranguejo',
    emblem: '🦀',
    color: 'from-slate-600 to-gray-700',
    description: 'Guardiões da Muralha que protege o império das trevas do além.',
    lore: 'Na fronteira sul do império ergue-se a Grande Muralha Kaiu, e atrás dela, o Clã Caranguejo mantém vigília eterna contra as hordas das Terras Sombrias. Esses guerreiros são os mais resistentes do império, endurecidos por gerações de combate contra demônios e mortos-vivos. Eles desprezam a etiqueta cortesã, preferindo ações a palavras, e são frequentemente vistos como rudes pelos outros clãs. Mas quando as trevas avançam, são os Caranguejo que sangram primeiro para proteger todos os outros.',
    pdfUrl: '/assets/pdfs/caranguejo.pdf'
  },
  {
    id: 'escorpiao',
    name: 'Clã Escorpião',
    emblem: '🦂',
    color: 'from-red-800 to-rose-900',
    description: 'Mestres das sombras, espiões e manipuladores que servem ao trono em segredo.',
    lore: 'O Clã Escorpião opera nas sombras, fazendo o trabalho sujo que os outros clãs consideram desonroso mas necessário. Seus membros são mestres do disfarce, do veneno e da manipulação política. Usam máscaras para esconder suas verdadeiras intenções, e dizem que um Escorpião nunca mostra seu verdadeiro rosto. Apesar de sua reputação sinistra, o clã é ferozmente leal ao Imperador, servindo como seus olhos e ouvidos em cada canto do império. A verdade, afinal, é a arma mais afiada.',
    pdfUrl: '/assets/pdfs/escorpiao.pdf'
  },
  {
    id: 'grou',
    name: 'Clã Grou',
    emblem: '🦢',
    color: 'from-sky-500 to-cyan-600',
    description: 'Artistas, cortesãos e diplomatas que tecem a paz entre os clãs.',
    lore: 'O Clã Grou é a alma artística do império. Seus membros são poetas, pintores, músicos e os mais habilidosos cortesãos. Na corte imperial, um único verso bem colocado de um Grou pode mudar o destino de nações. Eles acreditam que a beleza é a maior expressão da alma, e que a arte pode transcender conflitos. As gueixas do clã são as mais requisitadas, não apenas por sua beleza, mas por sua astúcia política. Subestimar um Grou é um erro que muitos guerreiros arrogantes cometeram apenas uma vez.',
    pdfUrl: '/assets/pdfs/grou.pdf'
  }
]

// ============================================
// WORLD MAP DATA
// ============================================

export const worldMapData = {
  // Caminho local para o mapa mundi (após substituir pelo asset real)
  localPath: '/assets/mapamundi/mapamundi.jpg',
  // Placeholder do Unsplash enquanto o asset real não é adicionado
  placeholder: 'https://images.unsplash.com/photo-1476304884326-cd2c88572c5f?w=1920&q=80',
  title: 'Mapa Mundi',
  description: 'O vasto mundo conhecido se estende muito além das fronteiras de Nihongan. Explore continentes distantes, mares inexplorados e terras misteriosas.'
}

// ============================================
// HELPER: Função para obter URL de imagem (local ou placeholder)
// ============================================
// Quando os assets reais forem adicionados, mude USE_LOCAL_ASSETS para true

export const USE_LOCAL_ASSETS = false

export function getImageUrl(localPath: string, placeholder: string): string {
  return USE_LOCAL_ASSETS ? localPath : placeholder
}

export function getRegionCoverUrl(region: Region): string {
  const localPath = `${region.folderPath}/${region.coverImage}`
  return getImageUrl(localPath, region.placeholderCover)
}

export function getRegionGalleryUrls(region: Region): string[] {
  if (USE_LOCAL_ASSETS) {
    return region.gallery.map(img => `${region.folderPath}/${img}`)
  }
  return region.placeholderGallery
}

export function getWorldMapUrl(): string {
  return getImageUrl(worldMapData.localPath, worldMapData.placeholder)
}
