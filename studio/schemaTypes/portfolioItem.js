export default {
  name: 'portfolioItem',
  title: 'Portfolio Item',
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
          { title: 'Mountains', value: 'mountains' },
          { title: 'Coastal', value: 'coastal' },
          { title: 'Wilderness', value: 'wilderness' },
          { title: 'Aerial', value: 'aerial' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() },
    { name: 'order', title: 'Order', type: 'number' },
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
}
