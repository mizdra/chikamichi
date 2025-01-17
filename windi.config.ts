import { resolve } from 'path'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  // https://windicss.org/posts/v30.html#attributify-mode
  extract: {
    include: [
      resolve(__dirname, 'src/**/*.{vue,html}'),
    ],
  },
  plugins: [
    require('windicss/plugin/forms'),
  ],
})
