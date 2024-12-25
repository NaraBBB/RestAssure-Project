import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://dev.delekhomes.com',
    viewportWidth: 1400,  // Set to desired width, e.g., 1400 pixels
    viewportHeight: 1200,  // Set to desired height, e.g., 900 pixels
  },
});
