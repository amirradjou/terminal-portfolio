/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

const maskableIcons = [48, 72, 96, 128, 192, 384, 512].map(size => ({
  src: `/maskable-icons/maskable_icon_x${size}.png`,
  sizes: `${size}x${size}`,
  type: "image/png",
  purpose: "any maskable",
}));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        // The SPA fallback must never answer a navigation to a real file:
        // window.open("/CV.pdf") was being served index.html by the service
        // worker (CV.pdf is deliberately not precached). Anything with a file
        // extension, or under /.netlify/, goes to the network instead.
        navigateFallbackDenylist: [/\.[a-z0-9]+$/i, /^\/\.netlify\//],
        cleanupOutdatedCaches: true,
      },
      // CV.pdf and og.png are served straight from public/; keep them out of
      // the service-worker precache so a first visit does not download them.
      // Web App Manifest keys are snake_case by specification.
      /* eslint-disable camelcase */
      manifest: {
        name: "Amirreza Radjou",
        short_name: "Radjou",
        description:
          "Amirreza Radjou's terminal-style portfolio: Senior Full Stack Developer at CIBC, Toronto.",
        start_url: "/",
        display: "standalone",
        lang: "en",
        theme_color: "#1d2a35",
        background_color: "#1d2a35",
        icons: maskableIcons,
      },
      /* eslint-enable camelcase */
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
