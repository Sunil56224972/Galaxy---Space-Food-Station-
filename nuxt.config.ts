// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-07-01",

  modules: ["@storyblok/nuxt"],

  storyblok: {
    accessToken: process.env.STORYBLOK_TOKEN,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en_US" },
      link: [
        {
          rel: "preload",
          href: "/fonts/passata.woff2",
          as: "font",
          type: "font/woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ["three"],
            gsap: ["gsap"],
          },
        },
      },
    },
  },
});
