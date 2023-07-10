import { defineConfig } from "vite";
import path from "path";
import svgr from "vite-plugin-svgr";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  resolve: {
    alias: [{ find: "@", replacement: path.resolve("src") }],
  },
  define: {
    "process.env": {},
  },
  plugins: [react(), svgr()],
  server: {
    host: "localhost",
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
});
