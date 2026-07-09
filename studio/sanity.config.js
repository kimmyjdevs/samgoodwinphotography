import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { deskStructure } from './deskStructure'

// Set via studio/.env (SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET) — see studio/README.md.
const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'default',
  title: 'Sam Goodwin Photography',

  projectId,
  dataset,

  plugins: [structureTool({ structure: deskStructure }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
