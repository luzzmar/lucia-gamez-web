import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes/index.js'

export default defineConfig({
  name: 'luciaGamezPhoto',
  title: 'Lucía Gámez Photo',
  projectId: '1hzwibno',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
