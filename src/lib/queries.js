// GROQ queries. Images are projected to `{ asset->{url} }` so components can
// read `image.asset.url` directly without needing the image-url builder.

const IMAGE_PROJECTION = 'asset->{url}'

export const SITE_SETTINGS_QUERY = /* groq */ `
*[_type == "siteSettings"][0]{
  heroEyebrow,
  heroTitle,
  heroSubtitle,
  heroTagline,
  heroImage{${IMAGE_PROJECTION}},
  homepageAboutHeading,
  homepageAboutText,
  homepageAboutImage{${IMAGE_PROJECTION}},
  aboutHeroHeading,
  aboutHeroIntro,
  aboutHeroImage{${IMAGE_PROJECTION}},
  aboutPortraitImage{${IMAGE_PROJECTION}},
  aboutQuoteImage{${IMAGE_PROJECTION}},
  aboutCtaImage{${IMAGE_PROJECTION}},
  aboutSectionLabel,
  aboutBio,
  aboutQuote,
  aboutCtaHeading,
  aboutCtaText,
  contactLocation,
  contactEmail,
  availableFor,
  instagramUrl,
  facebookUrl,
  linkedinUrl
}
`

export const PORTFOLIO_ITEMS_QUERY = /* groq */ `
*[_type == "portfolioItem"] | order(order asc){
  _id,
  title,
  category,
  order,
  image{${IMAGE_PROJECTION}}
}
`

export const PROJECTS_QUERY = /* groq */ `
*[_type == "project"] | order(_createdAt desc){
  _id,
  title,
  category,
  description,
  coverImage{${IMAGE_PROJECTION}},
  gallery[]{${IMAGE_PROJECTION}}
}
`

export const JOURNAL_POSTS_QUERY = /* groq */ `
*[_type == "journalPost"] | order(date desc){
  _id,
  title,
  "slug": slug.current,
  date,
  excerpt,
  coverImage{${IMAGE_PROJECTION}}
}
`

export const JOURNAL_POST_BY_SLUG_QUERY = /* groq */ `
*[_type == "journalPost" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  date,
  excerpt,
  body,
  coverImage{${IMAGE_PROJECTION}}
}
`
