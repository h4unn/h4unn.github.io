import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@public": path.resolve(__dirname, "./public"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    port: 3000,
  },
});
