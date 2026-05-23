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
// CLANS DATA - 10 Clãs Customizados da Campanha
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
    color: 'from-emerald-600 to-teal-700',
    description: 'Místicos e filósofos que buscam a iluminação nas montanhas sagradas.',
    lore: 'Isolados nas montanhas mais altas do império, o Clã Dragão desenvolveu tradições únicas que mesclam o bushido com filosofias contemplativas. Seus monges guerreiros dominam tanto a espada quanto a mente, buscando transcender os limites do corpo mortal. O Togashi, fundador imortal do clã, ainda vive em seu monastério no pico mais alto, concedendo audiências apenas aos mais dignos. Os tatuados do Dragão carregam em seus corpos marcas místicas que lhes conferem poderes sobrenaturais, um segredo guardado há milênios.',
    pdfUrl: '/assets/pdfs/dragao.pdf'
  },
  {
    id: 'urso',
    name: 'Clã Urso',
    emblem: '🐻',
    color: 'from-amber-700 to-yellow-800',
    description: 'Guerreiros ferozes das florestas do norte, conhecidos por sua força bruta e lealdade.',
    lore: 'O Clã Urso habita as densas florestas do norte, onde o inverno nunca cede completamente. Seus guerreiros são conhecidos pela força descomunal e pela resistência sobre-humana, forjadas em décadas de caça aos predadores mais perigosos da região. A sociedade do clã valoriza a honestidade brutal e despreza a falsidade cortesã. Seus berserkers entram em transes de batalha lendários, canalizando o espírito do grande urso ancestral que, segundo a lenda, fundou o clã ao adotar um órfão humano perdido nas nevascas.',
    pdfUrl: '/assets/pdfs/urso.pdf'
  },
  {
    id: 'lobo',
    name: 'Clã Lobo',
    emblem: '🐺',
    color: 'from-slate-600 to-zinc-700',
    description: 'Caçadores nômades das estepes, mestres da estratégia de alcateia.',
    lore: 'O Clã Lobo nunca construiu castelos ou cidades permanentes. Suas tendas percorrem as vastas estepes do império, seguindo as migrações dos rebanhos e as estações. Seus guerreiros lutam em formações coordenadas que imitam as táticas de caça das alcateias, comunicando-se através de uivos e sinais que confundem os inimigos. O clã é governado por um conselho de alfas, e a liderança é conquistada através de provas de astúcia e resistência, não de nascimento. Dizem que um Lobo sozinho é perigoso, mas uma alcateia é imparável.',
    pdfUrl: '/assets/pdfs/lobo.pdf'
  },
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
    id: 'coruja',
    name: 'Clã Coruja',
    emblem: '🦉',
    color: 'from-indigo-600 to-violet-700',
    description: 'Sábios guardiões do conhecimento oculto e dos segredos ancestrais.',
    lore: 'O Clã Coruja opera nas sombras do conhecimento, guardando segredos que outros clãs prefeririam esquecer. Suas bibliotecas subterrâneas contêm tomos proibidos e pergaminhos selados por magia antiga. Os membros do clã são reconhecidos por seus olhos penetrantes que parecem enxergar além do véu da realidade. Seus espiões e informantes formam uma rede que alcança todos os cantos do império, e dizem que nenhum segredo escapa aos ouvidos da Coruja. Em tempos de crise, são consultores indispensáveis, pois seu conhecimento frequentemente salva impérios.',
    pdfUrl: '/assets/pdfs/coruja.pdf'
  },
  {
    id: 'serpente',
    name: 'Clã Serpente',
    emblem: '🐍',
    color: 'from-lime-600 to-green-700',
    description: 'Mestres do veneno e da medicina, equilibrando cura e destruição.',
    lore: 'O Clã Serpente domina os pântanos e selvas do império, onde a linha entre remédio e veneno é tênue como uma gota de orvalho. Seus curandeiros são os mais requisitados do reino, capazes de curar pragas que devastariam províncias inteiras. Porém, suas habilidades com toxinas são igualmente lendárias. Cada membro carrega antídotos para centenas de venenos, e seus assassinos são fantasmas que não deixam rastros. O clã mantém o equilíbrio sagrado entre vida e morte, servindo como árbitros quando outros métodos falham.',
    pdfUrl: '/assets/pdfs/serpente.pdf'
  },
  {
    id: 'javali',
    name: 'Clã Javali',
    emblem: '🐗',
    color: 'from-stone-600 to-neutral-700',
    description: 'Defensores obstinados conhecidos por sua resistência inabalável.',
    lore: 'O Clã Javali é sinônimo de teimosia e resistência. Suas fortalezas nunca caíram em cerco, e seus guerreiros são conhecidos por lutar até o último suspiro. A sociedade do clã valoriza a perseverança acima de tudo, e seus membros são treinados desde a infância a suportar dor, fome e fadiga sem reclamar. Suas formações defensivas são muralhas vivas de aço e determinação. Dizem que convencer um Javali a recuar é mais difícil do que mover uma montanha, e que sua lealdade, uma vez conquistada, é eterna.',
    pdfUrl: '/assets/pdfs/javali.pdf'
  },
  {
    id: 'vagalume',
    name: 'Clã Vagalume',
    emblem: '✨',
    color: 'from-yellow-400 to-amber-500',
    description: 'Artistas e mensageiros que iluminam as trevas com esperança.',
    lore: 'O Clã Vagalume é o menor e mais peculiar dos grandes clãs. Seus membros são artistas itinerantes, mensageiros e diplomatas que viajam livremente entre todas as facções. Protegidos por tratados antigos, os Vagalumes são considerados neutros em todos os conflitos, e atacar um deles é tabu universal. Suas performances nas cortes são lendárias, e suas mensagens atravessam linhas de batalha sem serem interceptadas. Em tempos de escuridão, são os Vagalumes que mantêm a esperança viva, lembrando a todos que mesmo a menor luz pode guiar através das trevas.',
    pdfUrl: '/assets/pdfs/vagalume.pdf'
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
    id: 'tigre',
    name: 'Clã Tigre',
    emblem: '🐅',
    color: 'from-orange-500 to-amber-600',
    description: 'Guerreiros ferozes das selvas, conhecidos por sua agilidade mortal.',
    lore: 'O Clã Tigre domina as selvas tropicais do sul, onde cada sombra pode esconder um predador. Seus guerreiros são conhecidos pela velocidade felina e pelos reflexos sobre-humanos, treinados desde a infância a caçar nas copas das árvores e a emboscar presas maiores que eles. O clã valoriza a independência individual acima da conformidade, e cada Tigre é encorajado a desenvolver seu próprio estilo de combate único. Suas listras de guerra são pintadas com pigmentos sagrados que, dizem, concedem a benção do grande Tigre ancestral.',
    pdfUrl: '/assets/pdfs/tigre.pdf'
  }
]

// ============================================
// WORLD MAP DATA
// ============================================

export const worldMapData = {
  // Caminho local para o mapa mundi (após substituir pelo asset real)
  localPath: '/assets/mapas/mapamundi.jpg',
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
