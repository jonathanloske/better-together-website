function netlifyImageUrl(name, width) {
  const params = new URLSearchParams({
    url: `/img/${name}.jpg`,
    w: String(width),
    fm: "webp",
  });
  return `/.netlify/images?${params.toString()}`;
}

const RESPONSIVE_WIDTHS = [300, 600, 1200];

/**
 * Responsive <img> using Netlify's Image CDN for on-request WebP transforms.
 * Mirrors the previous build-time Sharp-resized smol/mid/big variants.
 */
export function responsiveImage({ name, alt, className, priority = false }) {
  const srcset = RESPONSIVE_WIDTHS.map(
    (width) => `${netlifyImageUrl(name, width)} ${width}w`,
  ).join(", ");

  return `<img
  src="${netlifyImageUrl(name, RESPONSIVE_WIDTHS[0])}"
  alt="${alt}"
  class="${className}"
  srcset="${srcset}"
  sizes="(max-width: 640px) 300px, (max-width: 1024px) 600px, 1200px"
  loading="${priority ? "eager" : "lazy"}"
  decoding="async"
/>`;
}

export function heroImage({ name, alt, className, width = 1200 }) {
  return `<img
  src="${netlifyImageUrl(name, width)}"
  alt="${alt}"
  class="${className}"
  fetchpriority="high"
  loading="eager"
  width="1200"
  height="800"
/>`;
}
