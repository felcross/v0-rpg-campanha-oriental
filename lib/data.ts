export type Screen = 'home' | 'world-map' | 'nihongan' | 'clans' | 'magic'

// ============================================
// WORLD MAPS DATA - Seção Mapas do Mundo (2 Tabs)
// ============================================

export interface WorldMapTab {
  id: string
  name: string
  folderPath: string
  coverImage: string
  gallery: string[]
  description: string
  placeholderCover: string
  placeholderGallery: string[]
}

export const worldMapsData: WorldMapTab[] = [
  {
    id: 'mundi',
    name: 'Mapa Mundi',
    folderPath: '/assets/mapas/mundi',
    coverImage: 'mapa_capa.png',
    gallery: ['mapa_1.jpg'],
    description: 'O vasto mundo conhecido se estende muito além das fronteiras de Nihongan. Explore continentes distantes, mares inexplorados e terras misteriosas onde civilizações antigas guardam segredos inimagináveis.',
    placeholderCover: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=80',
    placeholderGallery: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80'
    ]
  },
  {
    id: 'geral_nihongan',
    name: 'Mapa Geral de Nihongan',
    folderPath: '/assets/mapas/geral_nihongan',
    coverImage: 'mapa_capa.jpg',
    gallery: ['mapa_1.jpg'],
    description: 'O glorioso Império de Nihongan em toda sua extensão. Das montanhas geladas do norte às ilhas tropicais do sul, este mapa revela as províncias, rotas comerciais e pontos estratégicos do maior império do mundo conhecido.',
    placeholderCover: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80',
    placeholderGallery: [
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80'
    ]
  }
]

// ============================================
// REGIONS DATA - Seção Império de Nihongan (3 Regiões)
// ============================================

export interface Region {
  id: string
  name: string
  folderPath: string
  coverImage: string
  gallery: string[]
  description: string
  placeholderCover: string
  placeholderGallery: string[]
}

export const regionsData: Region[] = [
  {
    id: 'norte',
    name: 'Região Norte (Terras Gélidas)',
    folderPath: '/assets/imperio/regiao_norte',
    coverImage: 'mapa_capa.jpg',
    gallery: ['mapa_1.jpg', 'mapa_2.jpg'],
    description: 'As terras do norte são dominadas por montanhas nevadas e florestas ancestrais. Aqui residem os clãs mais resilientes, forjados pelo frio implacável e pela constante vigilância contra as criaturas das terras além da Muralha de Gelo. Os invernos são longos e impiedosos, mas a beleza das auroras boreais e dos templos cobertos de neve compensam qualquer sacrifício.',
    placeholderCover: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80',
    placeholderGallery: [
      'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
      'https://images.unsplash.com/photo-1440186347098-386b7459ad6b?w=800&q=80'
    ]
  },
  {
    id: 'central',
    name: 'Região Central (Planícies Imperiais)',
    folderPath: '/assets/imperio/regiao_central',
    coverImage: 'mapa_capa.jpg',
    gallery: ['mapa_1.jpg', 'mapa_2.jpg'],
    description: 'O coração pulsante do império, onde se ergue a majestosa Capital Imperial e os principais centros de poder político e espiritual. As planícies férteis alimentam todo o reino, e os rios sagrados conectam as províncias como veias de um corpo vivo. Aqui, a corte imperial tece intrigas tão complexas quanto os jardins de cerejeiras que adornam seus palácios.',
    placeholderCover: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80',
    placeholderGallery: [
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80',
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80'
    ]
  },
  {
    id: 'sul',
    name: 'Região Sul (Costa das Mil Ilhas)',
    folderPath: '/assets/imperio/regiao_sul',
    coverImage: 'mapa_capa.jpg',
    gallery: ['mapa_1.jpg', 'mapa_2.jpg'],
    description: 'O arquipélago do sul é um mundo à parte, onde mil ilhas pontilham mares esmeraldinos. Rica em comércio e tradições marítimas, esta região é lar de pescadores intrépidos, mercadores astutos e piratas que desafiam a autoridade imperial. Os templos flutuantes e as aldeias sobre palafitas guardam segredos antigos dos povos do mar.',
    placeholderCover: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=80',
    placeholderGallery: [
      'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80'
    ]
  }
]

// ============================================
// CLANS DATA - 10 Clãs Customizados
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
    id: 'dragao',
    name: 'Clã Dragão',
    emblem: '🐉',
    color: 'from-emerald-800 to-teal-900',
    description: 'Místicos e filósofos que buscam a iluminação nas montanhas sagradas.',
    lore: 'Isolados nas montanhas mais altas do império, o Clã Dragão desenvolveu tradições únicas que mesclam o bushido com filosofias contemplativas. Seus monges guerreiros dominam tanto a espada quanto a mente, buscando transcender os limites do corpo mortal. O Togashi, fundador imortal do clã, ainda vive em seu monastério no pico mais alto, concedendo audiências apenas aos mais dignos. Os tatuados do Dragão carregam em seus corpos marcas místicas que lhes conferem poderes sobrenaturais, um segredo guardado há milênios.',
    pdfUrl: '/assets/pdfs/dragao.pdf'
  },
  {
    id: 'urso',
    name: 'Clã Urso',
    emblem: '🐻',
    color: 'from-amber-800 to-yellow-900',
    description: 'Guerreiros ferozes das florestas do norte, conhecidos por sua força bruta e lealdade.',
    lore: 'O Clã Urso habita as densas florestas do norte, onde o inverno nunca cede completamente. Seus guerreiros são conhecidos pela força descomunal e pela resistência sobre-humana, forjadas em décadas de caça aos predadores mais perigosos da região. A sociedade do clã valoriza a honestidade brutal e despreza a falsidade cortesã. Seus berserkers entram em transes de batalha lendários, canalizando o espírito do grande urso ancestral que, segundo a lenda, fundou o clã ao adotar um órfão humano perdido nas nevascas.',
    pdfUrl: '/assets/pdfs/urso.pdf'
  },
  {
    id: 'lobo',
    name: 'Clã Lobo',
    emblem: '🐺',
    color: 'from-slate-700 to-zinc-800',
    description: 'Caçadores nômades das estepes, mestres da estratégia de alcateia.',
    lore: 'O Clã Lobo nunca construiu castelos ou cidades permanentes. Suas tendas percorrem as vastas estepes do império, seguindo as migrações dos rebanhos e as estações. Seus guerreiros lutam em formações coordenadas que imitam as táticas de caça das alcateias, comunicando-se através de uivos e sinais que confundem os inimigos. O clã é governado por um conselho de alfas, e a liderança é conquistada através de provas de astúcia e resistência, não de nascimento. Dizem que um Lobo sozinho é perigoso, mas uma alcateia é imparável.',
    pdfUrl: '/assets/pdfs/lobo.pdf'
  },
  {
    id: 'fenix',
    name: 'Clã Fênix',
    emblem: '🔥',
    color: 'from-orange-700 to-red-800',
    description: 'Guardiões do conhecimento místico e das tradições espirituais do império.',
    lore: 'O Clã Fênix é conhecido por sua profunda conexão com os elementos e os espíritos ancestrais. Seus shugenja são os mais poderosos do império, capazes de invocar as forças da natureza e comungar com os kami. A biblioteca do clã, localizada nas Montanhas Isawa, contém pergaminhos tão antigos quanto o próprio império, alguns escritos pelos fundadores divinos. Os samurais Fênix são estudiosos por natureza, preferindo resolver conflitos através da sabedoria e da diplomacia, embora seus poderes místicos os tornem adversários formidáveis quando provocados.',
    pdfUrl: '/assets/pdfs/fenix.pdf'
  },
  {
    id: 'coruja',
    name: 'Clã Coruja',
    emblem: '🦉',
    color: 'from-indigo-800 to-violet-900',
    description: 'Sábios guardiões do conhecimento oculto e dos segredos ancestrais.',
    lore: 'O Clã Coruja opera nas sombras do conhecimento, guardando segredos que outros clãs prefeririam esquecer. Suas bibliotecas subterrâneas contêm tomos proibidos e pergaminhos selados por magia antiga. Os membros do clã são reconhecidos por seus olhos penetrantes que parecem enxergar além do véu da realidade. Seus espiões e informantes formam uma rede que alcança todos os cantos do império, e dizem que nenhum segredo escapa aos ouvidos da Coruja. Em tempos de crise, são consultores indispensáveis, pois seu conhecimento frequentemente salva impérios.',
    pdfUrl: '/assets/pdfs/coruja.pdf'
  },
  {
    id: 'serpente',
    name: 'Clã Serpente',
    emblem: '🐍',
    color: 'from-lime-700 to-green-800',
    description: 'Mestres do veneno e da medicina, equilibrando cura e destruição.',
    lore: 'O Clã Serpente domina os pântanos e selvas do império, onde a linha entre remédio e veneno é tênue como uma gota de orvalho. Seus curandeiros são os mais requisitados do reino, capazes de curar pragas que devastariam províncias inteiras. Porém, suas habilidades com toxinas são igualmente lendárias. Cada membro carrega antídotos para centenas de venenos, e seus assassinos são fantasmas que não deixam rastros. O clã mantém o equilíbrio sagrado entre vida e morte, servindo como árbitros quando outros métodos falham.',
    pdfUrl: '/assets/pdfs/serpente.pdf'
  },
  {
    id: 'javali',
    name: 'Clã Javali',
    emblem: '🐗',
    color: 'from-stone-700 to-neutral-800',
    description: 'Defensores obstinados conhecidos por sua resistência inabalável.',
    lore: 'O Clã Javali é sinônimo de teimosia e resistência. Suas fortalezas nunca caíram em cerco, e seus guerreiros são conhecidos por lutar até o último suspiro. A sociedade do clã valoriza a perseverança acima de tudo, e seus membros são treinados desde a infância a suportar dor, fome e fadiga sem reclamar. Suas formações defensivas são muralhas vivas de aço e determinação. Dizem que convencer um Javali a recuar é mais difícil do que mover uma montanha, e que sua lealdade, uma vez conquistada, é eterna.',
    pdfUrl: '/assets/pdfs/javali.pdf'
  },
  {
    id: 'vagalume',
    name: 'Clã Vagalume',
    emblem: '✨',
    color: 'from-yellow-600 to-amber-700',
    description: 'Artistas e mensageiros que iluminam as trevas com esperança.',
    lore: 'O Clã Vagalume é o menor e mais peculiar dos grandes clãs. Seus membros são artistas itinerantes, mensageiros e diplomatas que viajam livremente entre todas as facções. Protegidos por tratados antigos, os Vagalumes são considerados neutros em todos os conflitos, e atacar um deles é tabu universal. Suas performances nas cortes são lendárias, e suas mensagens atravessam linhas de batalha sem serem interceptadas. Em tempos de escuridão, são os Vagalumes que mantêm a esperança viva, lembrando a todos que mesmo a menor luz pode guiar através das trevas.',
    pdfUrl: '/assets/pdfs/vagalume.pdf'
  },
  {
    id: 'escorpiao',
    name: 'Clã Escorpião',
    emblem: '🦂',
    color: 'from-red-900 to-rose-950',
    description: 'Mestres das sombras, espiões e manipuladores que servem ao trono em segredo.',
    lore: 'O Clã Escorpião opera nas sombras, fazendo o trabalho sujo que os outros clãs consideram desonroso mas necessário. Seus membros são mestres do disfarce, do veneno e da manipulação política. Usam máscaras para esconder suas verdadeiras intenções, e dizem que um Escorpião nunca mostra seu verdadeiro rosto. Apesar de sua reputação sinistra, o clã é ferozmente leal ao Imperador, servindo como seus olhos e ouvidos em cada canto do império. A verdade, afinal, é a arma mais afiada.',
    pdfUrl: '/assets/pdfs/escorpiao.pdf'
  },
  {
    id: 'tigre',
    name: 'Clã Tigre',
    emblem: '🐅',
    color: 'from-orange-600 to-amber-700',
    description: 'Guerreiros ferozes das selvas, conhecidos por sua agilidade mortal.',
    lore: 'O Clã Tigre domina as selvas tropicais do sul, onde cada sombra pode esconder um predador. Seus guerreiros são conhecidos pela velocidade felina e pelos reflexos sobre-humanos, treinados desde a infância a caçar nas copas das árvores e a emboscar presas maiores que eles. O clã valoriza a independência individual acima da conformidade, e cada Tigre é encorajado a desenvolver seu próprio estilo de combate único. Suas listras de guerra são pintadas com pigmentos sagrados que, dizem, concedem a benção do grande Tigre ancestral.',
    pdfUrl: '/assets/pdfs/tigre.pdf'
  }
]

// ============================================
// MAGIC DATA - Seção Feitiços Elementais & Fortunas
// ============================================

export interface MagicProfile {
  id: string
  name: string
  title: string
  emblem: string
  color: string
  description: string
  lore: string
  pdfUrl: string
  buttonText: string
}

export const magicData: MagicProfile[] = [
  {
    id: 'shugenja',
    name: 'Shugenja',
    title: 'Caminho do Shugenja (Sacerdotes Elementais)',
    emblem: '🔥',
    color: 'from-red-800 to-orange-900',
    description: 'Mestres das orações elementais que canalizam o poder dos kami.',
    lore: 'Os Shugenja são sacerdotes que dedicaram suas vidas ao estudo e comunhão com os kami, os espíritos elementais que permeiam toda a criação. Através de orações ancestrais e rituais sagrados, eles canalizam o poder dos elementos: Fogo para destruição e purificação, Água para cura e adaptação, Terra para proteção e resistência, Ar para velocidade e percepção, e o misterioso Vazio que conecta todas as coisas. Cada Shugenja possui afinidade natural com um elemento, mas os mais poderosos conseguem harmonizar todos os cinco em perfeito equilíbrio. Seus pergaminhos de orações são tesouros transmitidos por gerações, e os rituais mais poderosos requerem dias de preparação e meditação profunda.',
    pdfUrl: '/assets/pdfs/shugenja.pdf',
    buttonText: 'Baixar Pergaminhos de Shugenja'
  },
  {
    id: 'onmyoji',
    name: 'Onmyoji',
    title: 'Práticas Onmyōdō (Mestres do Yin-Yang e Astrologia)',
    emblem: '☯️',
    color: 'from-purple-800 to-indigo-900',
    description: 'Mestres da adivinhação, astrologia e equilíbrio cósmico.',
    lore: 'Os Onmyoji praticam a arte ancestral do Onmyōdō, o Caminho do Yin e Yang. Diferente dos Shugenja que invocam os kami, os Onmyoji manipulam as forças fundamentais do cosmos: luz e escuridão, criação e destruição, ordem e caos. Seus poderes incluem a adivinhação através das estrelas e do I Ching, a criação de talismãs protetores (ofuda), a exorcização de espíritos malignos, e a manipulação sutil do destino. Os Onmyoji mais poderosos conseguem prever catástrofes anos antes de ocorrerem, criar barreiras que protegem cidades inteiras, e até mesmo negociar com os próprios demônios. Seus conhecimentos são registrados em tratados complexos que levam décadas para dominar.',
    pdfUrl: '/assets/pdfs/onmyoji.pdf',
    buttonText: 'Baixar Tratado Onmyoji'
  }
]

// ============================================
// HUB CARDS DATA - 4 Cards de Navegação
// ============================================

export const hubCardsData = [
  {
    id: 'world-map' as Screen,
    title: 'Mapas do Mundo',
    description: 'Explore mapas detalhados do mundo e do império',
    coverPath: '/assets/capas/capa_mapas.jpg',
    placeholder: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80'
  },
  {
    id: 'nihongan' as Screen,
    title: 'Geografia do Império',
    description: 'Descubra as regiões e territórios de Nihongan',
    coverPath: '/assets/capas/capa_imperio.jpg',
    placeholder: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80'
  },
  {
    id: 'clans' as Screen,
    title: 'Clãs de Nihongan',
    description: 'Conheça os grandes clãs e suas tradições ancestrais',
    coverPath: '/assets/capas/capa_clans.jpg',
    placeholder: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80'
  },
  {
    id: 'magic' as Screen,
    title: 'Feitiços Elementais & Fortunas',
    description: 'Domine as artes místicas dos Shugenja e Onmyoji',
    coverPath: '/assets/capas/capa_magia.jpg',
    placeholder: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80'
  }
]

// ============================================
// HELPER FUNCTIONS
// ============================================

export const USE_LOCAL_ASSETS = true

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

export function getWorldMapCoverUrl(mapTab: WorldMapTab): string {
  const localPath = `${mapTab.folderPath}/${mapTab.coverImage}`
  return getImageUrl(localPath, mapTab.placeholderCover)
}

export function getWorldMapGalleryUrls(mapTab: WorldMapTab): string[] {
  if (USE_LOCAL_ASSETS) {
    return mapTab.gallery.map(img => `${mapTab.folderPath}/${img}`)
  }
  return mapTab.placeholderGallery
}

export function getHubCardImageUrl(card: typeof hubCardsData[0]): string {
  return getImageUrl(card.coverPath, card.placeholder)
}
