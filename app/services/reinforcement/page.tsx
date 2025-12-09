import Image from "next/image";
import { getImagesFrom } from "../../lib/getImages";

export default function ReinforcementPage() {
  const images = getImagesFrom("reinforcement");

  return (
    <main className="min-h-screen bg-transparent text-slate-900 px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-6 text-right">
        <a href="/" className="text-sm text-slate-600 hover:underline">
          ← חזרה לדף הבית
        </a>

        <h1 className="text-3xl font-bold">חיזוק מבנים ועמודים</h1>

        <p className="text-base md:text-lg leading-relaxed">
          עבודות חיזוק לפי דרישות מהנדס קונסטרוקציה – קורות פלדה, עמודים, חיזוק מרפסות ופתרונות תומכים נוספים.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          כל עבודה מבוצעת בהתאם לתקנים, עם ריתוכים חזקים וחומרים איכותיים לשקט ובטיחות לשנים קדימה.
        </p>

        {/* גלריית חיזוקים */}
        <section className="mt-6 space-y-3">
          <h2 className="text-xl font-semibold">דוגמאות לעבודות חיזוק</h2>
          {images.length === 0 ? (
            <div className="flex items-center justify-center h-40 rounded-2xl bg-slate-900/40 text-slate-300 text-sm">
              תיעוד מצולם יתווסף לאחר סיום פרויקטים נוספים.
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
                    alt="עבודת מסגרות – חיזוק מבנה או מרפסת"
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
