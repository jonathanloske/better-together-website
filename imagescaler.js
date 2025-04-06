import Sharp from "sharp";
import fs from "fs";

async function imgen() {
  const imgDir = "public/img";
  const sizes = { smol: 300, mid: 600, big: 1200 };

  for (const filename of fs
    .readdirSync(imgDir)
    .filter((file) => file.endsWith(".jpg"))) {
    const filePath = `${imgDir}/${filename}`;

    for (let size in sizes) {
      console.log(`Resizing ${filename} to be ${size}`);
      await Sharp(filePath)
        .resize(sizes[size])
        .toFormat("webp")
        .toFile(`${imgDir}/${size}/${filename.replace(/\.jpg$/, ".webp")}`)
        .catch((error) =>
          console.error(`Error processing ${filePath}:`, error),
        );
    }
  }
}

imgen();
