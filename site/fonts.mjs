import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const SUBSETS = {
  latin: {
    "latin-400-normal":
      "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
    "latin-ext-400-normal":
      "U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF",
  },
};

// German/English content only needs the latin + latin-ext subsets, not the
// cyrillic/greek/vietnamese ones @fontsource ships by default.
const FILES = [
  { key: "latin-400-normal", weight: 400 },
  { key: "latin-ext-400-normal", weight: 400 },
  { key: "latin-700-normal", weight: 700 },
  { key: "latin-ext-700-normal", weight: 700 },
];

const RANGES = {
  "latin-400-normal": SUBSETS.latin["latin-400-normal"],
  "latin-ext-400-normal": SUBSETS.latin["latin-ext-400-normal"],
  "latin-700-normal": SUBSETS.latin["latin-400-normal"],
  "latin-ext-700-normal": SUBSETS.latin["latin-ext-400-normal"],
};

export function buildFonts({ rootDir, buildDir }) {
  const sourceDir = path.join(
    rootDir,
    "node_modules/@fontsource/nunito-sans/files",
  );
  const fontsOutDir = path.join(buildDir, "fonts");
  mkdirSync(fontsOutDir, { recursive: true });

  const faces = FILES.map(({ key, weight }) => {
    const basename = `nunito-sans-${key}`;
    for (const ext of ["woff2", "woff"]) {
      copyFileSync(
        path.join(sourceDir, `${basename}.${ext}`),
        path.join(fontsOutDir, `${basename}.${ext}`),
      );
    }

    return `@font-face {
  font-family: 'Nunito Sans';
  font-style: normal;
  font-display: swap;
  font-weight: ${weight};
  src: url(/fonts/${basename}.woff2) format('woff2'), url(/fonts/${basename}.woff) format('woff');
  unicode-range: ${RANGES[key]};
}`;
  });

  writeFileSync(
    path.join(buildDir, "assets", "fonts.css"),
    faces.join("\n\n") + "\n",
  );
}
