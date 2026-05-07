import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  groups: [
    {name: 'basic', title: 'Basic Info', default: true},
    {name: 'media', title: 'Media'},
    {name: 'specs', title: 'Specs'},
    {name: 'tabs', title: 'Detail Tabs'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      group: 'basic',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'basic',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'productCategory'}],
      group: 'basic',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      group: 'basic',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      group: 'media',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'media',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
    defineField({
      name: 'specifications',
      title: 'Advanced Parameters',
      type: 'array',
      group: 'specs',
      of: [{type: 'specification'}],
    }),
    defineField({
      name: 'description',
      title: 'Overview (Portable Text)',
      type: 'array',
      group: 'tabs',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'detailTabs',
      title: 'Multi-tab Content',
      type: 'array',
      group: 'tabs',
      of: [{type: 'productDetailTab'}],
      description: 'For spec tab, installation tab, packaging tab, etc.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category.title',
      media: 'mainImage',
    },
  },
})
