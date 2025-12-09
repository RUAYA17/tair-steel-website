// app/services/custom/page.tsx
import Image from "next/image";
import { getImagesFrom } from "../../lib/getImages";

export default function CustomWorkPage() {
  const images = getImagesFrom("custom");

  return (
    <main className="min-h-screen bg-transparent text-slate-900 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6 text-right">
        <a href="/" className="text-sm text-slate-600 hover:underline">
          ← חזרה לדף הבית
        </a>

        <h1 className="text-3xl font-bold">עבודות מיוחדות לפי דרישה</h1>

        <p className="text-base md:text-lg leading-relaxed">
          ייצור עבודות ברזל בהתאמה אישית – ריהוט ברזל, אלמנטים דקורטיביים,
          פריטים מיוחדים לגינות ולעסקים ועוד.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          אפשר לשלוח לנו סקיצה, תמונה או רעיון – ואנחנו נתכנן ונייצר פתרון
          שמותאם בדיוק לצורך שלכם.
        </p>

        {/* גלריית עבודות מיוחדות */}
        <section className="mt-6 space-y-3">
          <h2 className="text-xl font-semibold">דוגמאות לעבודות מיוחדות</h2>

          {/* שורה קטנה לדיבוג – לראות כמה תמונות נטענו */}
          <p className="text-xs text-slate-500">
            נטענו {images.length} תמונות מתיקיית <code>public/images/custom</code>
          </p>

          {images.length === 0 ? (
            <div className="flex items-center justify-center h-40 rounded-2xl bg-slate-900/40 text-slate-300 text-sm">
              ניתן לשלוח אלינו תמונה לדוגמה ואנחנו נתאים את העבודה.
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((src) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-900/60 group"
                >
                  <Image
                    src={src}
                    alt="עבודת מסגרות מיוחדת לפי דרישה"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
