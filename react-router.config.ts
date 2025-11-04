import type { Config } from "@react-router/dev/config";

export default {
  // Disable SSR and use pure Static Site Generation
  ssr: false,

  // Prerender all routes as static HTML at build time
  async prerender() {
    return [
      // German routes (default)
      "/",
      "/about-us",
      "/contact",
      "/imprint",
      // English routes
      "/en",
      "/en/about-us",
      "/en/contact",
      "/en/imprint",
    ];
  },
} satisfies Config;
