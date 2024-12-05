import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import {ghPages} from 'vite-plugin-gh-pages';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/gbdRecruitment/',

=======
import { ghPages } from 'vite-plugin-gh-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  // base: '/gbd/', 
>>>>>>> origin/main
})
