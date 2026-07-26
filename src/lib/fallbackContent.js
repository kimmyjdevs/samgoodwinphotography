// Placeholder content shaped exactly like the Sanity documents it stands in for.
// Rendered whenever Sanity is unconfigured, unreachable, or a document hasn't
// been created yet — so the site is never broken or blank, only "not yet
// customised". Swap real photography in via the Studio and this module simply
// stops being used for that field.

// Real photography bundled with the site itself (public/images/), used as a
// stopgap ahead of the same shots being uploaded into Sanity. Once a real
// Sanity document exists for a given field, it takes over automatically —
// same fallback mechanism as everything else here.
function localImg(path) {
  return { asset: { url: path } }
}

export const fallbackSiteSettings = {
  heroEyebrow: 'Landscape · Seascape · Astro · Events',
  heroTitle: 'Sam Goodwin',
  heroSubtitle: 'Photography',
  heroTagline: 'Capturing moments. Telling stories.',
  heroImage: localImg('/images/about/portrait.jpg'),

  homepageAboutHeading: 'Stories Are Everywhere',
  homepageAboutText:
    'Sam Goodwin is a freelance photographer specialising in landscape, seascape, astro, event and branding photography — capturing emotionally driven imagery inspired by nature, nightlife and atmosphere.',
  homepageAboutImage: localImg('/images/about/portrait.jpg'),

  aboutHeroHeading: 'Stories Are Everywhere',
  aboutHeroIntro:
    'Freelance photographer specialising in landscape, seascape, astro, event and branding photography — capturing emotionally driven imagery inspired by nature, nightlife and atmosphere.',
  aboutHeroImage: localImg('/images/portfolio/coastal-sunrise.jpg'),
  aboutPortraitImage: localImg('/images/about/portrait.jpg'),
  aboutQuoteImage: localImg('/images/projects/lifestyle-2.jpg'),
  aboutCtaImage: localImg('/images/projects/editorial-cover.jpg'),
  aboutSectionLabel: 'About Sam',
  aboutBio:
    "Sam Goodwin is a freelance photographer and creative originally from Aotearoa, now based in Christchurch. Through Sgoodwin Photography, he specialises in landscape, seascape, astro, event, and branding photography, capturing emotionally driven imagery inspired by nature, nightlife, and atmosphere.\nHis work has been recognised through Australasia's Top Emerging Photographers Awards (2023 & 2024), The Landscape Awards (2025), and multiple publications including Art/Edit+ Interior Design Magazine.",
  aboutQuote:
    'Every image starts with a story. My role is to find it, capture it, and present it in a way that feels authentic and memorable.',
  aboutCtaHeading: "Let's Create Something Exceptional",
  aboutCtaText:
    "Whether you're looking for landscape, event or branding photography, I'd love to hear about your project.",

  awards: [
    { title: 'Art/Edit+ Interior Design Magazine', category: 'Publication — Byron Bay Lighthouse', year: '2024' },
    { title: 'Top 10 Landscape Photographers', category: 'Publication — Sunshine Coast Photo Sessions', year: '2024–2025' },
    { title: 'The Landscape Awards', category: 'Highly Commended — Seascape', year: '2025' },
    { title: "Australasia's Top Emerging Photographers", category: 'Commended — Landscape', year: '2023–2024' },
  ],
  aboutSpecialties: 'Landscape, Seascape, Astro, Events, Branding',
  aboutEquipment: 'Professional Mirrorless System',
  aboutPublished: 'Art/Edit+ Interior Design Magazine, Sunshine Coast Photo Sessions',

  contactLocation: 'Christchurch, New Zealand',
  contactEmail: 'sam@samgoodwin.co.nz',
  availableFor: 'New Zealand',

  instagramUrl: 'https://www.instagram.com/sgoodwin.media/',
  facebookUrl: '',
  linkedinUrl: '',
}

// Static teaser imagery for the three homepage portfolio cards. There's no
// dedicated Sanity field for these (the brief's siteSettings schema doesn't
// define one) — they're presentational and just link through to /portfolio.
export const homepagePortfolioTeasers = [
  {
    category: 'branding',
    title: 'Branding',
    description: 'Vision. Identity. Impact.',
    image: localImg('/images/projects/tinytatts-cover.jpg'),
  },
  {
    category: 'events',
    title: 'Events',
    description: 'Real moments. Real connections.',
    image: localImg('/images/projects/festival-cover.jpg'),
  },
  {
    category: 'landscapes',
    title: 'Landscapes',
    description: 'Nature. Perspective. Inspiration.',
    image: localImg('/images/portfolio/coastal-sunrise.jpg'),
  },
]

export const projectCategories = ['all', 'events', 'landscapes', 'branding', 'lifestyle']

export const fallbackProjects = [
  {
    _id: 'pr1',
    title: 'tinyTATTS Co. Branding',
    category: 'branding',
    description: "Lifestyle and product photography for a tattoo studio's brand refresh.",
    coverImage: localImg('/images/projects/tinytatts-cover.jpg'),
    gallery: [
      localImg('/images/projects/tinytatts-1.jpg'),
      localImg('/images/projects/tinytatts-2.jpg'),
      localImg('/images/projects/tinytatts-3.jpg'),
      localImg('/images/projects/tinytatts-4.jpg'),
      localImg('/images/projects/tinytatts-5.jpg'),
    ],
  },
  {
    _id: 'pr2',
    title: 'Festival & Live Music',
    category: 'events',
    description: 'Coverage across a festival season — stages, crowds and the moments between sets.',
    coverImage: localImg('/images/projects/festival-cover.jpg'),
    gallery: [
      localImg('/images/projects/festival-1.jpg'),
      localImg('/images/projects/festival-2.jpg'),
      localImg('/images/projects/festival-3.jpg'),
      localImg('/images/projects/festival-4.jpg'),
      localImg('/images/projects/festival-5.jpg'),
      localImg('/images/projects/festival-6.jpg'),
      localImg('/images/projects/festival-7.jpg'),
      localImg('/images/projects/festival-8.jpg'),
      localImg('/images/projects/festival-9.jpg'),
      localImg('/images/projects/festival-10.jpg'),
      localImg('/images/projects/festival-11.jpg'),
      localImg('/images/projects/festival-12.jpg'),
      localImg('/images/projects/festival-13.jpg'),
      localImg('/images/projects/festival-14.jpg'),
    ],
  },
  {
    _id: 'pr3',
    title: 'Studio Fitness Portraits',
    category: 'branding',
    description: 'Clean studio portraiture for an athletic apparel campaign.',
    coverImage: localImg('/images/projects/fitness-cover.jpg'),
    gallery: [localImg('/images/projects/fitness-1.jpg'), localImg('/images/projects/fitness-2.jpg')],
  },
  {
    _id: 'pr4',
    title: 'A Forest Wedding',
    category: 'events',
    description: 'An intimate ceremony on a boardwalk through the rainforest.',
    coverImage: localImg('/images/projects/wedding-cover.jpg'),
    gallery: [localImg('/images/projects/wedding-1.jpg'), localImg('/images/projects/wedding-2.jpg')],
  },
  {
    _id: 'pr5',
    title: 'Editorial: Wild & Free',
    category: 'landscapes',
    description: 'A styled editorial shoot pairing fashion with open landscape.',
    coverImage: localImg('/images/projects/editorial-cover.jpg'),
    gallery: [
      localImg('/images/projects/editorial-1.jpg'),
      localImg('/images/projects/editorial-2.jpg'),
      localImg('/images/projects/editorial-3.jpg'),
    ],
  },
  {
    _id: 'pr6',
    title: 'Life, Unscripted',
    category: 'lifestyle',
    description: 'Off-duty moments — candid portraits, real people, and glimpses between the planned shots.',
    coverImage: localImg('/images/projects/lifestyle-cover.jpg'),
    gallery: [
      localImg('/images/projects/lifestyle-1.jpg'),
      localImg('/images/projects/lifestyle-2.jpg'),
      localImg('/images/projects/lifestyle-3.jpg'),
    ],
  },
  {
    _id: 'pr7',
    title: 'Sunrise Reef',
    category: 'landscapes',
    description: 'A quiet coastal sunrise, caught between the tide and the rocks.',
    coverImage: localImg('/images/portfolio/coastal-sunrise.jpg'),
  },
]

export const fallbackJournalPosts = [
  {
    _id: 'j1',
    slug: 'chasing-light-at-castlepoint',
    date: '2026-02-14',
    title: 'Chasing Light at Castlepoint',
    excerpt: 'Three days, two sunrises and one storm worth waiting for.',
    coverImage: localImg('/images/portfolio/coastal-sunrise.jpg'),
    body: null,
  },
  {
    _id: 'j2',
    slug: 'notes-on-corporate-portraiture',
    date: '2026-01-18',
    title: 'Notes on Corporate Portraiture',
    excerpt: 'Why small talk matters more than your lens choice.',
    coverImage: localImg('/images/projects/fitness-cover.jpg'),
    body: null,
  },
  {
    _id: 'j3',
    slug: 'a-weekend-in-the-wairarapa',
    date: '2025-12-09',
    title: 'A Weekend in the Wairarapa',
    excerpt: 'Field notes from a slow, deliberate trip with one camera.',
    coverImage: localImg('/images/projects/lifestyle-3.jpg'),
    body: null,
  },
  {
    _id: 'j4',
    slug: 'quiet-frames',
    date: '2025-11-05',
    title: 'Quiet Frames',
    excerpt: 'On the discipline of leaving the camera in the bag.',
    coverImage: localImg('/images/projects/lifestyle-1.jpg'),
    body: null,
  },
]
