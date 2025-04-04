import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/catalogo-benuri/", // Base do projeto no GitHub Pages

  server: {
    proxy: {
      "/api": {
        target: "https://backend-benuri.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});