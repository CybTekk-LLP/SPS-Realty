import staticAdapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    preprocess({
      scss: {},
    }),
  ],
  kit: {
    adapter: staticAdapter({
      // Set fallback to '200.html' if using SPA mode, or 'index.html' otherwise
      fallback: "index.html",
    }),
    paths: {
      base: '/SPS-Realty', // Adjust this to your repo name
    },
    prerender: {
      handleHttpError: "warn",
    },
  },
};

export default config;
