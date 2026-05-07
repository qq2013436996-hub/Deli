import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'brand', title: 'Brand'},
    {name: 'contact', title: 'Contact'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      group: 'brand',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyDescription',
      title: 'Company Description',
      type: 'text',
      rows: 4,
      group: 'brand',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
      group: 'brand',
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Theme Color',
      type: 'string',
      description: 'Hex color, e.g. #ff6600',
      group: 'brand',
      validation: (rule) => rule.regex(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, {name: 'hex color'}),
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
      group: 'contact',
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
      title: 'companyName',
      media: 'logo',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Site Settings',
        subtitle: 'Global settings',
        media: selection.media,
      }
    },
  },
})
