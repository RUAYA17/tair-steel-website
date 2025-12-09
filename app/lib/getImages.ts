// app/lib/getImages.ts
import fs from "fs";
import path from "path";

export function getImagesFrom(folder: string): string[] {
  // בונה נתיב פיזי לתיקייה בתוך public/images/<folder>
  const fullPath = path.join(process.cwd(), "public", "images", folder);

  // לוג עזר – תראי בטרמינל שהנתיב באמת נכון
  console.log("🔍 reading images from:", fullPath);

  if (!fs.existsSync(fullPath)) {
    console.warn("⚠️ images folder not found:", fullPath);
    return [];
  }

  try {
    const files = fs
      .readdirSync(fullPath, { withFileTypes: true })
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((file) => /\.(jpe?g|png|webp|gif)$/i.test(file))
      .map((file) => `/images/${folder}/${file}`);

    console.log(`✅ found ${files.length} images in ${folder}`);
    return files;
  } catch (err) {
    console.error("❌ error while reading images from", fullPath, err);
    return [];
  }
}
