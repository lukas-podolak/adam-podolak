export type PortfolioNodeKind = 'photo' | 'video' | 'text' | 'testimonial' | 'contact'

export interface PortfolioNode {
  id: string
  kind: PortfolioNodeKind
  title: string
  eyebrow?: string
  description: string
  x: number
  y: number
  width: number
  height: number
  accent: string
  mediaAspectRatio?: number
  imageUrl?: string
  videoUrl?: string
  linkUrl?: string
  cta?: string
  featured?: boolean
}

export const portfolioNodes: PortfolioNode[] = [
  {
    id: 'intro',
    kind: 'text',
    title: 'Adam Podolak',
    description:
      'A roaming board of edits, campaign moments, stills, and social-first story systems for brands that need rhythm, taste, and speed.',
    x: -260,
    y: -170,
    width: 520,
    height: 260,
    accent: '#f5f1e8',
    featured: true,
  },
  {
    id: 'reel',
    kind: 'video',
    title: 'Editorial Reel',
    eyebrow: 'Motion edit',
    description:
      'A compact reel built around pacing, punchy transitions, sound-led cuts, and platform-native storytelling.',
    x: 470,
    y: -350,
    width: 470,
    height: 300,
    accent: '#f0c36d',
    mediaAspectRatio: 16 / 9,
    imageUrl: 'https://picsum.photos/seed/adam-reel/1100/700',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0',
    featured: true,
  },
  {
    id: 'social-campaign',
    kind: 'video',
    title: 'Launch Campaign Cutdowns',
    eyebrow: 'Brand content',
    description:
      'Short-form edits designed as a system: teaser, launch, proof, and recap assets for sustained distribution.',
    x: -780,
    y: 80,
    width: 260,
    height: 620,
    accent: '#9ccfd8',
    mediaAspectRatio: 9 / 16,
    imageUrl: 'https://picsum.photos/seed/adam-campaign/1000/680',
    videoUrl: 'https://player.vimeo.com/video/76979871',
    featured: true,
  },
  {
    id: 'photo-set',
    kind: 'photo',
    title: 'Creator Portrait Set',
    eyebrow: 'Photo direction',
    description:
      'A tight portrait sequence balancing natural light, practical locations, and strong crops for thumbnail-first platforms.',
    x: 260,
    y: 310,
    width: 390,
    height: 470,
    accent: '#f29d85',
    imageUrl: 'https://picsum.photos/seed/adam-portraits/950/1100',
    featured: true,
  },
  {
    id: 'editing-samples',
    kind: 'photo',
    title: 'Editing Table',
    eyebrow: 'Post production',
    description:
      'Color passes, select pulls, captions, and delivery packs organized for fast review cycles and clear approvals.',
    x: -250,
    y: 650,
    width: 420,
    height: 280,
    accent: '#b7d58b',
    imageUrl: 'https://picsum.photos/seed/adam-editing/1000/680',
  },
  {
    id: 'testimonial',
    kind: 'testimonial',
    title: 'Trusted for the last 10 percent',
    eyebrow: 'Client note',
    description:    
      'Adam turns rough footage into work that feels intentional. He finds the cleanest story, then makes every frame earn its place.',
    x: 820,
    y: 260,
    width: 420,
    height: 250,
    accent: '#d7c6ff',
  },
  {
    id: 'process',
    kind: 'text',
    title: 'Process Map',
    eyebrow: 'How projects move',
    description:
      'Brief, capture, selects, edit, polish, delivery. The canvas is arranged the same way Adam works: fast discovery with enough structure to keep teams aligned.',
    x: -1180,
    y: -430,
    width: 470,
    height: 270,
    accent: '#f5f1e8',
  },
  {
    id: 'contact',
    kind: 'contact',
    title: 'Build the next cut',
    eyebrow: 'Contact',
    description:
      'Available for editing, creator campaigns, launch content, and photo-led social packages.',
    x: 1120,
    y: -70,
    width: 390,
    height: 250,
    accent: '#f5f1e8',
    linkUrl: 'mailto:hello@adampodolak.com',
    cta: 'hello@adampodolak.com',
    featured: true,
  },
]