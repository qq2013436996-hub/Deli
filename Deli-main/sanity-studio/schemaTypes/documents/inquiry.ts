import {defineField, defineType} from 'sanity'

export const inquiry = defineType({
  name: 'inquiry',
  title: 'Inquiry',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: '待处理',
      options: {
        list: [
          {title: '待处理', value: '待处理'},
          {title: '已联系', value: '已联系'},
          {title: '已关闭', value: '已关闭'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'createdAtDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Inquiry',
        subtitle: [selection.subtitle, selection.status].filter(Boolean).join(' · '),
      }
    },
  },
})
