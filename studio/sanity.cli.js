import { defineCliConfig } from 'sanity/cli'

// Keep in sync with studio/.env (SANITY_STUDIO_PROJECT_ID / SANITY_STUDIO_DATASET).
export default defineCliConfig({
  api: {
    projectId: '8x8hmgva',
    dataset: 'production',
  },
  studioHost: 'samgoodwinphotography',
})
