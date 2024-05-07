// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
      router: {
        base: '/' // Adjust this to match your repository name
      }
    },
    plugins: ["~/plugins/preline.client.ts"],
  })
  