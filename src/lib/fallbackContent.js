// Placeholder content shaped exactly like the Sanity documents it stands in for.
// Rendered whenever Sanity is unconfigured, unreachable, or a document hasn't
// been created yet — so the site is never broken or blank, only "not yet
// customised". Swap real photography in via the Studio and this module simply
// stops being used for that field.

function img(id, width = 1600) {
  return { asset: { url: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80` } }
}

// Real photography bundled with the site itself (public/images/), used as a
// stopgap ahead of the same shots being uploaded into Sanity. Once a real
// Sanity document exists for a given field, it takes over automatically —
// same fallback mechanism as everything else here.
function localImg(path) {
  return { asset: { url: path } }
}

export const fallbackSiteSettings = {
  heroEyebrow: 'Corporate · Events · Landscapes',
  heroTitle: 'Sam Goodwin',
  heroSubtitle: 'Photography',
  heroTagline: 'Capturing moments. Telling stories.',
  heroImage: img('1470071459604-3b5ec3a7fe05', 2000),

  homepageAboutHeading: 'Stories Are Everywhere',
  homepageAboutText:
    "Photography has always been more than capturing a moment for me — it's about creating images that make people feel something. Today I work with businesses, organisations and individuals who value high-quality photography.",
  homepageAboutImage: img('1573497019940-1c28c88b4f3e'),

  aboutHeroHeading: 'Stories Are Everywhere',
  aboutHeroIntro:
    'Award-winning photographer specialising in corporate, event and landscape photography across Australia and New Zealand.',
  aboutHeroImage: img('1506905925346-21bda4d32df4', 2000),
  aboutPortraitImage: localImg('/images/about/portrait.jpg'),
  aboutQuoteImage: img('1454496522488-7a8e488e8606'),
  aboutCtaImage: img('1441716844725-09cedc13a4e7', 2000),
  aboutSectionLabel: 'About Sam',
  aboutBio:
    "Photography has always been more than capturing a moment for me — it's about creating images that make people feel something. Over the years I've had the opportunity to photograph corporate events, business leaders, landscapes and communities across Australia. Whether I'm documenting a major event, creating professional headshots, or standing on a mountain before sunrise, my goal remains the same. Today I work with businesses, organisations and individuals who value high-quality photography.",
  aboutQuote:
    'Every image starts with a story. My role is to find it, capture it, and present it in a way that feels authentic and memorable.',
  aboutCtaHeading: "Let's Create Something Exceptional",
  aboutCtaText:
    "Whether you're looking for corporate photography, event coverage or fine art imagery, I'd love to hear about your project.",

  awards: [
    { title: 'Photography Awards', category: 'Landscape Category', year: '2024' },
    { title: 'Excellence Awards', category: 'Event Photography', year: '2023' },
    { title: 'Regional Photography Awards', category: 'Commercial Category', year: '2022' },
    { title: 'Photography Awards', category: 'Corporate Category', year: '2021' },
  ],
  aboutSpecialties: 'Corporate, Events, Landscape',
  aboutEquipment: 'Professional Mirrorless System',
  aboutPublished: 'Regional and national photography publications',

  contactLocation: 'Queensland, Australia',
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
    category: 'corporate',
    title: 'Corporate',
    description: 'Professional. Authentic. Impactful.',
    image: img('1497366216548-37526070297c'),
  },
  {
    category: 'events',
    title: 'Events',
    description: 'Real moments. Real connections.',
    image: img('1511795409834-ef04bbd61622'),
  },
  {
    category: 'landscapes',
    title: 'Landscapes',
    description: 'Nature. Perspective. Inspiration.',
    image: img('1470071459604-3b5ec3a7fe05'),
  },
]

export const portfolioCategories = ['all', 'landscapes', 'mountains', 'coastal', 'wilderness', 'aerial']

export const fallbackPortfolioItems = [
  { _id: 'p1', title: 'First Light, Alpine Ridge', category: 'landscapes', order: 1, image: img('1506744038136-46273834b3fb') },
  { _id: 'p2', title: 'Valley Mist', category: 'landscapes', order: 2, image: img('1470252649378-9c29740c9fa8') },
  { _id: 'p3', title: 'Golden Hour Fields', category: 'landscapes', order: 3, image: img('1520962880247-cfaf541c8724') },
  { _id: 'p4', title: 'Southern Alps', category: 'mountains', order: 4, image: img('1500534623283-312aade485b7') },
  { _id: 'p5', title: 'Ridgeline at Dawn', category: 'mountains', order: 5, image: img('1544198365-f5d60b6d8190') },
  { _id: 'p6', title: 'Snowfield Traverse', category: 'mountains', order: 6, image: img('1486870591958-9b9d0d1dda99') },
  { _id: 'p7', title: 'Castlepoint Coast', category: 'coastal', order: 7, image: img('1507525428034-b723cf961d3e') },
  { _id: 'p8', title: 'Sunrise Reef', category: 'coastal', order: 8, image: localImg('/images/portfolio/coastal-sunrise.jpg') },
  { _id: 'p9', title: 'Ancient Forest Floor', category: 'wilderness', order: 9, image: img('1441974231531-c6227db76b6e') },
  { _id: 'p10', title: 'Backcountry Lake', category: 'wilderness', order: 10, image: img('1476514525535-07fb3b4ae5f1') },
  { _id: 'p11', title: 'Canopy From Above', category: 'aerial', order: 11, image: img('1473773508845-188df298d2d1') },
  { _id: 'p12', title: 'Coastline From Above', category: 'aerial', order: 12, image: img('1501594907352-04cda38ebc29') },
]

export const projectCategories = ['all', 'corporate', 'events', 'landscapes', 'branding']

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
    ],
  },
  {
    _id: 'pr3',
    title: 'Studio Fitness Portraits',
    category: 'corporate',
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
]

export const fallbackJournalPosts = [
  {
    _id: 'j1',
    slug: 'chasing-light-at-castlepoint',
    date: '2026-02-14',
    title: 'Chasing Light at Castlepoint',
    excerpt: 'Three days, two sunrises and one storm worth waiting for.',
    coverImage: img('1476673160081-cf065607f449'),
    body: null,
  },
  {
    _id: 'j2',
    slug: 'notes-on-corporate-portraiture',
    date: '2026-01-18',
    title: 'Notes on Corporate Portraiture',
    excerpt: 'Why small talk matters more than your lens choice.',
    coverImage: img('1508186225823-0963cf9ab0de'),
    body: null,
  },
  {
    _id: 'j3',
    slug: 'a-weekend-in-the-wairarapa',
    date: '2025-12-09',
    title: 'A Weekend in the Wairarapa',
    excerpt: 'Field notes from a slow, deliberate trip with one camera.',
    coverImage: img('1547471080-7cc2caa01a7e'),
    body: null,
  },
  {
    _id: 'j4',
    slug: 'quiet-frames',
    date: '2025-11-05',
    title: 'Quiet Frames',
    excerpt: 'On the discipline of leaving the camera in the bag.',
    coverImage: img('1502920917128-1aa500764cbd'),
    body: null,
  },
]
