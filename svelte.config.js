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
      fallback: "index.html",
    }),
    paths: {
      base: '',
    },
    prerender: {
      handleHttpError: "warn",
    },
  },
};

export default config;
