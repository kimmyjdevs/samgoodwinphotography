export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Corporate', value: 'corporate' },
          { title: 'Events', value: 'events' },
          { title: 'Landscapes', value: 'landscapes' },
          { title: 'Branding', value: 'branding' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'coverImage' },
  },
}
