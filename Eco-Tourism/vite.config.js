import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Make sure the base is correctly set
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/test-setup.js",
  },
});
