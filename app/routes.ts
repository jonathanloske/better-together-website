import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about-us", "routes/about-us.tsx"),
  route("contact", "routes/contact.tsx"),
  route("imprint", "routes/imprint.tsx"),
] satisfies RouteConfig;
