import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  // German routes (default)
  index("routes/_index.tsx"),
  route("about-us", "routes/about-us.tsx"),
  route("contact", "routes/contact.tsx"),
  route("imprint", "routes/imprint.tsx"),

  // English routes
  route("en", "routes/en.tsx", [
    index("routes/en._index.tsx"),
    route("about-us", "routes/en.about-us.tsx"),
    route("contact", "routes/en.contact.tsx"),
    route("imprint", "routes/en.imprint.tsx"),
  ]),
] satisfies RouteConfig;
