import {defineField, defineType} from 'sanity'

export const productDetailTab = defineType({
  name: 'productDetailTab',
  title: 'Product Detail Tab',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Tab Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Tab Content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content',
    },
    prepare(selection) {
      const textBlock = (selection.content || []).find((item: {_type?: string}) => item?._type === 'block')
      const text = textBlock?.children?.map((child: {text?: string}) => child.text).join('') || ''
      return {
        title: selection.title || 'Tab',
        subtitle: text.slice(0, 60) || 'No content yet',
      }
    },
  },
})
