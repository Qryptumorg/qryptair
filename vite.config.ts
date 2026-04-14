import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({ globals: { Buffer: true, global: true, process: true } }),
  ],
  base: "/qryptair/",
  build: {
    target: "esnext",
    outDir: "dist",
    rollupOptions: { output: { manualChunks: undefined } },
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});