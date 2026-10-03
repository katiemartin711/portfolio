import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the built site works at
// https://<user>.github.io/portfolio/ and at a custom domain.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
