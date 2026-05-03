import {defineField, defineType} from 'sanity'

export const photo = defineType({
  name: 'photo',
  title: 'Foto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Arquitectura', value: 'arquitectura'},
          {title: 'Natura', value: 'natura'},
          {title: 'Still Life', value: 'still-life'},
          {title: 'Dulce espera', value: 'dulce-espera'},
          {title: 'New Born', value: 'new-born'},
          {title: 'Niños', value: 'ninos'},
          {title: 'Comuniones', value: 'comuniones'},
          {title: 'Mayores', value: 'mayores'},
          {title: 'Clientes privados', value: 'clientes'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Etiquetas',
      type: 'array',
      of: [{type: 'string'}],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'isVisible',
      title: 'Visible en la web',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'isFeatured',
      title: 'Destacada',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Orden',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'clientName',
      title: 'Cliente privado',
      type: 'string',
      description: 'Sólo rellenar si esta foto pertenece a una galería privada.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
