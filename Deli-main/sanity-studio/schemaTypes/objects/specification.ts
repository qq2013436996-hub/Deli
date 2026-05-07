import {defineField, defineType} from 'sanity'

export const specification = defineType({
  name: 'specification',
  title: 'Specification Row',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'string',
      description: 'Optional unit, e.g. W, V, lm',
    }),
  ],
  preview: {
    select: {
      label: 'label',
      value: 'value',
      unit: 'unit',
    },
    prepare(selection) {
      const {label, value, unit} = selection
      return {
        title: label || 'Specification',
        subtitle: [value, unit].filter(Boolean).join(' '),
      }
    },
  },
})
