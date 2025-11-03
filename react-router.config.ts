import type { Config } from "@react-router/dev/config";

export default {
  // Disable SSR and use pure Static Site Generation
  ssr: false,

  // Prerender all routes as static HTML at build time
  async prerender() {
    return ["/", "/about-us", "/contact", "/imprint"];
  },
} satisfies Config;
