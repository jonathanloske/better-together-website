import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
// Temporarily disabled Netlify plugin due to conflict with prerender
// import netlifyPlugin from "@netlify/vite-plugin-react-router";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [reactRouter()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "app"),
    },
  },
});
