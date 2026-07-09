export default {
  name: 'journalPost',
  title: 'Journal Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    { name: 'date', title: 'Date', type: 'date', validation: (Rule) => Rule.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
  ],
  orderings: [
    {
      title: 'Date, newest first',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'date', media: 'coverImage' },
  },
}
