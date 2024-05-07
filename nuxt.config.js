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
    modules: [['nuxt-mail',{
      message: {
        to: process.env.SMTP_USER,
      },
      smtp:{
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
      }
    }]]
  })
  