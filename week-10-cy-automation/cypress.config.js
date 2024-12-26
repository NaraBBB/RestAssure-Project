import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://dev.delekhomes.com',
    viewportWidth: 1400,  
    viewportHeight: 1200,
  },
});
