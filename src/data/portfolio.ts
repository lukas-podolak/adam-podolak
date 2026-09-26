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
import untitled4981 from '../assets/untitled-4981.jpg'
import novaFotka from '../assets/Snímek obrazovky 2026-09-14 210814.png';
import fotka2 from '../assets/2.png';
import fotka4 from '../assets/4.png';
import futbalFoto from '../assets/fotbal.jpg';
import skokFoto from '../assets/skok.jpg';

export const portfolioNodes: PortfolioNode[] = [
  {
    id: 'intro',
    kind: 'text',
    title: 'Adam Podolak',
    description:
      'Tvořím dynamická sportovní videa, emotivní svatební filmy a kompletní vizuální obsah pro sociální sítě.',
    x: -199,
    y: -110,
    width: 401,
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
    accent: '#ffdb0d',
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
      'Verča: Adamovi moc děkujeme za nádherné video z našeho svatebního dne. ❤️ Byl skvělý, přirozený a díky němu jsme se před kamerou cítili naprosto skvěle! Dokázal zachytit všechny důležité momenty. Výsledné video je nádherné a hlavně působí přirozeně a autenticky. Když se na něj díváme, máme pocit, že jsme zase zpátky v našem svatebním dni. Je vidět, že Adam svou práci dělá s láskou a dává si na tom opravdu záležet. Moc doporučujeme!',
    x: 470,
    y: -350,
    width: 470,
    height: 300,
    accent: '#ffdb0d',
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
      'Naše zkušenost s tebou byla od začátku skvělá. Už při první schůzce jsme měli pocit, že jsme si vybrali správně, a výsledná videa naše očekávání ještě mnohonásobně předčila. Oceňujeme především skvělou komunikaci, ochotu a individuální přístup. Mohli jsme si vybrat vlastní hudbu, ale zároveň jsi dokázal vybrat i skladby podle sebe, které do jednotlivých momentů nádherně zapadly. Záběry z dronu jsou úžasným bonusem a jedno z našich videí v retro stylu je naprosto dechberoucí. Největší hodnotu pro nás ale mají videa jako vzpomínka. Svatba je jeden jediný den a uteče neuvěřitelně rychle. Díky tobě ho máme zachycený tak, že se k němu můžeme kdykoliv vrátit. Mohli jsme navíc náš den ukázat rodině a přátelům, kteří s námi nemohli být, a především naší babičce, která už kvůli zdraví a věku na svatbě být nemohla. I díky tomu pro nás mají videa obrovský význam. Děkujeme za skvělou práci, přístup a především za to, s jakým citem jsi náš svatební den zachytil. Jsme opravdu moc rádi, že jsme si vybrali právě tebe, a můžeme tě s čistým svědomím doporučit každému, kdo chce mít svůj den zachycený nejen krásně, ale především opravdově.❤️ ',
    x: 1100,
    y: -550,
    width: 470,
    height: 300,
    accent: '#ffdb0d',
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
    x: 1300,
    y: 200,
    width: 470,
    height: 300,
    accent: '#ffdb0d',
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
    x: 950,
    y: 150,
    width: 260,
    height: 620,
    accent: '#ffdb0d',
    mediaAspectRatio: 9 / 16,
    imageUrl: screenshotGallery,
    videoUrl: 'https://www.youtube.com/embed/sW0JpfnYISg?si=WbPzldqlLmPEQlM-',
    featured: true,
  },
  {
    id: 'social-campaign',
    kind: 'video',
    title: 'svatební reel',
    eyebrow: 'short video',
    description:
      '',
    x: 1640,
    y: -400,
    width: 260,
    height: 620,
    accent: '#ffdb0d',
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
      'Napište mi na WhatsApp, nebo instagram a na ceně a všem důležitým se určite domluvíme. \n\ntel. 721 012 252 \nInstagram _adampodolak_',
    x: 470,
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
      'Ve sportu neexistuje druhý záber nic se nedá zopakovat. Každý pohyb, emoce i moment jsou naprosto jedinečné. Díky vlastním zkušenostem z vrcholového sportu mám cit pro dění na stadionu a přesně vím, kdy stisknout spoušť.',
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
    id: 'reel',
    kind: 'video',
    title: 'Reels Tréninku',
    eyebrow: 'hills',
    description:
      '',
    x: -1630,
    y: -370,
    width: 470,
    height: 300,
    accent: '#f0c36d',
    mediaAspectRatio: 16 / 9,
    imageUrl: novaFotka,
    videoUrl: 'https://www.youtube.com/embed/lSgJgRD7fFU?si=6GE9wFB4E0wGo7St',
    featured: true,
  },
 {
    id: 'reel',
    kind: 'video',
    title: 'Blansko 2026',
    eyebrow: 'Blansko 2026',
    description:
      '',
    x: -1700,
    y: -750,
    width: 470,
    height: 300,
    accent: '#f0c36d',
    mediaAspectRatio: 16 / 9,
    imageUrl: skokFoto,
    videoUrl: 'https://www.youtube.com/embed/lipifS9I3Xw?si=SseOdCDXbL0rnTU7',
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

  {
    id: 'photo-set',
    kind: 'photo',
    title: '',
    eyebrow: 'Sport Photography',
    description:
      '',
    x: -1730,
    y: 160,
    width: 400,
    height: 800,
    accent: '#e54646',
    imageUrl: futbalFoto,
    featured: true,
  },

  {
    id: 'contact',
    kind: 'contact',
    title: 'Social Media Manager',
    eyebrow: 'SMM',
    description:
      'Stojím za instagramovým profilem Atletiky Stará Boleslav, který jsem vybudoval od nuly až k dnešním statisícovým dosahům a komunitě téměř 500 sledujících. Tvořím kompletní obsah na míru – od vizuální grafiky až po dynamický live coverage ze závodů, kde běžně během jediného dne natočím a sestříhám 5–7 videí.',
    x: -1000,
    y: 400,
    width: 500,
    height: 500,
    accent: '#243aca',
    linkUrl: '',
    cta: '',
    featured: true,
  },
  {
    id: 'photo-set',
    kind: 'photo',
    title: '',
    eyebrow: 'Sport Photography',
    description:
      '',
    x: -400,
    y: 450,
    width: 400,
    height: 700,
    accent: '#243aca',
    imageUrl: fotka2,
    featured: true,
  },
  {
    id: 'photo-set',
    kind: 'photo',
    title: '',
    eyebrow: 'Sport Photography',
    description:
      'foto by @plechyho',
    x: -900,
    y: 700,
    width: 400,
    height: 680,
    accent: '#243aca',
    imageUrl: fotka4,
    featured: true,
  },
]