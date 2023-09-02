import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "{gym-qr-code}",
  define: {
    "process.env": {},
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
  plugins: [react()],
});
