export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  __experimental_formPreviewTitle: false,
  fields: [
    { name: 'siteLogo', title: 'Site Logo', type: 'image' },

    { name: 'navAboutLabel', title: 'Nav Label: About', type: 'string' },
    { name: 'navPortfolioLabel', title: 'Nav Label: Portfolio', type: 'string' },
    { name: 'navJournalLabel', title: 'Nav Label: Journal', type: 'string' },
    { name: 'navContactLabel', title: 'Nav Label: Contact', type: 'string' },

    { name: 'heroEyebrow', title: 'Hero Eyebrow', type: 'string' },
    { name: 'heroTitle', title: 'Hero Title', type: 'string' },
    { name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string' },
    { name: 'heroTagline', title: 'Hero Tagline', type: 'string' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },

    { name: 'homepageAboutHeading', title: 'Homepage About Heading', type: 'string' },
    { name: 'homepageAboutText', title: 'Homepage About Text', type: 'text' },
    { name: 'homepageAboutImage', title: 'Homepage About Image', type: 'image', options: { hotspot: true } },

    {
      name: 'homepageTeasers',
      title: 'Homepage Teaser Cards',
      description: 'The row of cards just under the homepage hero. Add, remove or reorder as needed.',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'teaser',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
          ],
          preview: {
            select: { title: 'title', media: 'image' },
          },
        },
      ],
    },

    { name: 'aboutHeroHeading', title: 'About Hero Heading', type: 'string' },
    { name: 'aboutHeroIntro', title: 'About Hero Intro', type: 'text' },
    { name: 'aboutHeroImage', title: 'About Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'aboutPortraitImage', title: 'About Portrait Image', type: 'image', options: { hotspot: true } },
    { name: 'aboutQuoteImage', title: 'About Quote Image', type: 'image', options: { hotspot: true } },
    { name: 'aboutCtaImage', title: 'About CTA Image', type: 'image', options: { hotspot: true } },
    { name: 'aboutSectionLabel', title: 'About Section Label', type: 'string' },
    { name: 'aboutBio', title: 'About Bio', type: 'text' },
    { name: 'aboutQuote', title: 'About Quote', type: 'text' },
    { name: 'aboutCtaHeading', title: 'About CTA Heading', type: 'string' },
    { name: 'aboutCtaText', title: 'About CTA Text', type: 'text' },

    {
      name: 'awards',
      title: 'Awards & Recognition',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'award',
          fields: [
            { name: 'title', title: 'Award Name', type: 'string' },
            { name: 'category', title: 'Category', type: 'string' },
            { name: 'year', title: 'Year', type: 'string' },
          ],
          preview: {
            select: { title: 'title', subtitle: 'year' },
          },
        },
      ],
    },

    { name: 'aboutSpecialties', title: 'Quick Facts: Specialties', type: 'string' },
    { name: 'aboutEquipment', title: 'Quick Facts: Equipment', type: 'string' },
    { name: 'aboutPublished', title: 'Quick Facts: Published / Featured', type: 'string' },

    { name: 'contactLocation', title: 'Contact Location', type: 'string' },
    { name: 'contactEmail', title: 'Contact Email', type: 'string' },
    { name: 'availableFor', title: 'Available For', type: 'string' },

    { name: 'instagramUrl', title: 'Instagram URL', type: 'url' },
    { name: 'facebookUrl', title: 'Facebook URL', type: 'url' },
    { name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' },
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
}
