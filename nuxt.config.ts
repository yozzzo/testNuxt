// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
    publicPath: "/assets/",
  },
  components: [
    {
      path: "~/components/",
      pathPrefix: false,
    },
  ],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  // plugins: ["~/plugins/aframe.client.ts", "~/plugins/mindAR.client.ts"],
  vite: {
    plugins: [
      vuetify({ autoImport: true }),
      // その他のViteプラグイン...
    ],
    vue: {
      template: {
        transformAssetUrls,
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes("a-"),
        },
      },
    },
  },
});
