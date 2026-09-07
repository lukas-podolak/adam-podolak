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
import birellPhoto from '../assets/IMG_1660.jpg'
import svatbaVercaPhoto from '../assets/Snímek obrazovky 2026-09-07 220900.png'
import photo1 from '../assets/1.jpg'
import photo2 from '../assets/2.jpg'
import screenshotGallery from '../assets/Screenshot_20260907_221650_Gallery.jpg'
import whatsappPhoto from '../assets/WhatsApp Image 2026-09-07 at 22.42.59.jpeg'
import redbullPhoto from '../assets/redbull400FOTO.jpg'
import foto2807 from '../assets/foto-2807.jpg'
import img5315 from '../assets/IMG_5315.jpg'
import img5643 from '../assets/IMG_5643.jpg'
import untitled4981 from '../assets/untitled-4981.jpg'


export const portfolioNodes: PortfolioNode[] = [
  {
    id: 'intro',
    kind: 'text',
    title: '    Adam Podolak',
    description:
      'A roaming board of edits, campaign moments, stills, and social-first story systems for brands that need rhythm, taste, and speed.',
    x: -250,
    y: -110,
    width: 500,
    height: 260,
    accent: '#fdfdfd',
    featured: true,
  },
  {
    id: 'contact',
    kind: 'contact',
    title: 'SVATEBNÍ Kameraman',
    eyebrow: '',
    description:
      'Na natáčení svateb mám nejradeji zachicení emocí a celé atmosféry. Natočím váš velký den tak by jste se k němu mohli vrátit i po rocích. ',
    x: 980,
    y: -50,
    width: 420,
    height: 500,
    accent: '#f5f1e8',
    linkUrl: '',
    cta: '',
    featured: true,
  },
  {
    id: 'reel',
    kind: 'video',
    title: 'SVATBA Verči a Míry',
    eyebrow: 'svatební miniFilm',
    description:
      'A compact reel built around pacing, punchy transitions, sound-led cuts, and platform-native storytelling.',
    x: 470,
    y: -350,
    width: 470,
    height: 300,
    accent: '#f0c36d',
    mediaAspectRatio: 16 / 9,
    imageUrl: svatbaVercaPhoto,
    videoUrl: 'https://www.youtube.com/embed/-yjFFFceTuw?si=sFmWwv-AkEKVfTiK',
    featured: true,
  },
  
  {
    id: 'reel',
    kind: 'video',
    title: 'SVATBA Péťi a Lukáše',
    eyebrow: 'svatební miniFilm',
    description:
      'A compact reel built around pacing, punchy transitions, sound-led cuts, and platform-native storytelling.',
    x: 1100,
    y: -550,
    width: 470,
    height: 300,
    accent: '#6d8ef0',
    mediaAspectRatio: 16 / 9,
    imageUrl: photo1,
    videoUrl: 'https://www.youtube.com/embed/jyJXelUHvT8?si=e2cMtiNjmHxN8QF6',
    featured: true,
  },
   {
    id: 'reel',
    kind: 'video',
    title: 'Svatební den z mého pohledu',
    eyebrow: 'svatební BTS',
    description:
      '',
    x: 1200,
    y: 200,
    width: 470,
    height: 300,
    accent: '#f0c36d',
    mediaAspectRatio: 16 / 9,
    imageUrl: whatsappPhoto,
    videoUrl: 'https://www.youtube.com/embed/DUVGjrDfUt4?si=W-SjFlq1wgR-nEFC',
    featured: true,
  },
  {
    id: 'social-campaign',
    kind: 'video',
    title: 'svatební reel',
    eyebrow: 'short video',
    description:
      '',
    x: 880,
    y: 150,
    width: 260,
    height: 620,
    accent: '#9ccfd8',
    mediaAspectRatio: 9 / 16,
    imageUrl: screenshotGallery,
    videoUrl: 'https://www.youtube.com/embed/sW0JpfnYISg?si=WbPzldqlLmPEQlM-',
    featured: true,
  },
  {
    id: 'social-campaign',
    kind: 'video',
    title: 'svatební reelVm',
    eyebrow: 'short video',
    description:
      '',
    x: 1640,
    y: -400,
    width: 260,
    height: 620,
    accent: '#9ccfd8',
    mediaAspectRatio: 9 / 16,
    imageUrl: photo2,
    videoUrl: 'https://www.youtube.com/embed/KLF1ucr7kGc?si=lh8o-opB9Cu3jewS',
    featured: true,
  },
  
  {
    id: 'testimonial',
    kind: 'testimonial',
    title: 'Ceník, Kontakt',
    eyebrow: 'Ceník',
    description:    
      'Napište mi na WhatsApp, nebo instagram a na ceně a všem důležitým se určite domluvíme. tel. - 721 012 252 Instagram - _adampodolak_',
    x: 1730,
    y: 200,
    width: 420,
    height: 250,
    accent: '#ffdb0d',
  },
  
  {
    id: 'contact',
    kind: 'contact',
    title: 'SPORT VIDEOGRAPHY',
    eyebrow: '',
    description:
      'Na natáčení svateb mám nejradeji zachicení emocí a celé atmosféry. Natočím váš velký den tak by jste se k němu mohli vrátit i po rocích. ',
    x: -1000,
    y: -310,
    width: 350,
    height: 500,
    accent: '#f5f1e8',
    linkUrl: '',
    cta: '',
    featured: true,
  },
    {
    id: 'social-campaign',
    kind: 'video',
    title: 'Birell RUN SHOWreel',
    eyebrow: 'short video',
    description:
      '',
    x: -570,
    y: -600,
    width: 260,
    height: 620,
    accent: '#9ccfd8',
    mediaAspectRatio: 9 / 16,
    imageUrl: birellPhoto,
    videoUrl: 'https://www.youtube.com/embed/PPx-_RHq3ZE?si=ULrN5iapULWwo-Pv',
    featured: true,
  },
  {
    id: 'reel',
    kind: 'video',
    title: 'Redbull 400 VS FLAKAČENKO',
    eyebrow: 'VLOG',
    description:
      '',
    x: -1100,
    y: -700,
    width: 470,
    height: 300,
    accent: '#f0c36d',
    mediaAspectRatio: 16 / 9,
    imageUrl: redbullPhoto,
    videoUrl: 'https://www.youtube.com/embed/sdD5zuTCxow?si=Xuei7TnXD8VLEte0',
    featured: true,
  },
  
  {
    id: 'photo-set',
    kind: 'photo',
    title: 'Sport Photography',
    eyebrow: 'Photo dpirection',
    description:
      '',
    x: -1300,
    y: 10,
    width: 500,
    height: 400,
    accent: '#e54646',
    imageUrl: foto2807,
    featured: true,
  },
   {
    id: 'photo-set',
    kind: 'photo',
    title: '',
    eyebrow: 'Sport Photography',
    description:
      '',
    x: -730,
    y: 70,
    width: 400,
    height: 400,
    accent: '#e54646',
    imageUrl: untitled4981,
    featured: true,
  },
]