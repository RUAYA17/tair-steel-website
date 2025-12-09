// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://tairsteel.co.il";

export const metadata: Metadata = {
  title: {
    default: "מסגריית תאיר דחלה – TAIR STEEL",
    template: "%s | מסגריית תאיר דחלה",
  },
  description:
    "עבודות מסגרות מקצועיות: שערים, מעקות, מדרגות, פרגולות, מחסנים, חיזוקי מבנה ועוד. תאיר דחלה – איכות, עמידות ושירות אישי.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      "he-IL": baseUrl,
      "ar-IL": `${baseUrl}/?lang=ar`,
      "en-US": `${baseUrl}/?lang=en`,
    },
  },
  openGraph: {
    type: "website",
    locale: "he_IL",
    alternateLocale: ["ar_IL", "en_US"],
    title: "מסגריית תאיר דחלה – TAIR STEEL",
    description:
      "עבודות מסגרות מקצועיות בצפון: שערים, גדרות, מדרגות, פרגולות ועוד.",
    url: baseUrl,
    siteName: "TAIR STEEL",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "מסגריית תאיר דחלה – עבודות מסגרות",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he">
      <body dir="rtl" className="text-slate-50">
        <div className="min-h-screen flex flex-col bg-black/40">
          {/* כפתור וואטסאפ צף למסגרייה */}
          <a
            href="https://wa.me/972528487823"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 left-4 md:bottom-6 md:left-6 w-12 h-12 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center text-2xl hover:bg-green-600"
            aria-label="שליחת הודעה בוואטסאפ למסגריית תאיר דחלה"
          >
            💬
          </a>

          {/* תוכן הדפים */}
          <div className="flex-1">{children}</div>

          {/* FOOTER */}
          <footer className="border-t bg-black/80 text-xs md:text-sm text-slate-200">
            {/* שורה עליונה: עסק + בניית אתרים */}
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              {/* פרטי המסגרייה */}
              <div className="text-right space-y-1">
                <div className="font-semibold text-sm md:text-base">
                  מסגריית תאיר דחלה · Tair Dahla
                </div>
                <div>טלפון: 052-848-7823</div>
                <div>אזור עבודה: צפון הארץ והסביבה</div>
              </div>

              {/* פרטי יצירת קשר איתך לבניית אתר */}
              <div className="text-right space-y-1">
                <div className="font-semibold text-sm md:text-base">
                  רוצים אתר מקצועי כמו זה לעסק שלכם? פנו אליי 👇
                </div>
                <div>
                  מייל:{" "}
                  <a
                    href="mailto:ruaya994@gmail.com"
                    className="text-green-400 underline hover:text-green-300 ml-1"
                  >
                    ruaya94@gmail.com
                  </a>
                </div>
                <div>
                  וואטסאפ:{" "}
                  <a
                    href="https://wa.me/972528091639"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 underline hover:text-green-300 ml-1"
                  >
                    052-809-1639
                  </a>
                </div>
              </div>
            </div>

            {/* שורה תחתונה: זכויות + קרדיט */}
            <div className="border-t border-slate-800">
              <div className="max-w-5xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
                <span>
                  © {new Date().getFullYear()} מסגריית תאיר דחלה – כל
                  הזכויות שמורות.
                </span>
                <span className="text-[11px] md:text-xs text-slate-400">
                  Website design & development:{" "}
                  <a
                    href="mailto:ruaya94@gmail.com"
                    className="text-green-400 underline hover:text-green-300"
                  >
                    Ruaya Dahla
                  </a>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
