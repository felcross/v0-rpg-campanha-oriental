export type Screen = 'home' | 'world-map' | 'nihongan' | 'clans'

export interface MapSlide {
  id: string
  title: string
  image: string
  description: string
}

export interface Clan {
  id: string
  name: string
  emblem: string
  color: string
  description: string
  lore: string
  pdfUrl: string
}

export const mapsData: MapSlide[] = [
  {
    id: 'nihongan-full',
    title: 'Mapa Completo de Nihongan',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&q=80',
    description: 'O império completo de Nihongan, com todas as suas províncias e territórios.'
  },
  {
    id: 'nihongan-north',
    title: 'Região Norte - Terras Geladas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    description: 'As terras do norte, dominadas por montanhas nevadas e florestas ancestrais.'
  },
  {
    id: 'nihongan-central',
    title: 'Região Central - Planícies Imperiais',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80',
    description: 'O coração do império, onde se encontra a capital e os principais centros de poder.'
  },
  {
    id: 'nihongan-south',
    title: 'Região Sul - Costa das Mil Ilhas',
    image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1920&q=80',
    description: 'O arquipélago do sul, rico em comércio e tradições marítimas.'
  }
]

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
