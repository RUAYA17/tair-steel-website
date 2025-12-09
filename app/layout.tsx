// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        {/* Google Analytics 4 – להחליף את G-DZYWYD3JKS בקוד שלך */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZYWYD3JKS"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DZYWYD3JKS', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body dir="rtl" className="text-slate-50">
        <div className="min-h-screen flex flex-col bg-black/40">
          {/* כפתור וואטסאפ צף */}
          <a
            href="https://wa.me/972528487823"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 left-4 md:bottom-6 md:left-6 w-12 h-12 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center text-2xl hover:bg-green-600"
            aria-label="שליחת הודעה בוואטסאפ"
          >
            💬
          </a>

          {/* תוכן הדפים */}
          <div className="flex-1">{children}</div>

          {/* FOOTER – כולל פרטי יצירת קשר איתך */}
          <footer className="border-t bg-black/70 text-xs md:text-sm text-slate-200">
            <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col gap-3">
              <div className="text-center font-semibold text-base md:text-lg">
                רוצים אתר מקצועי כמו זה לעסק שלכם? פנו אליי 👇
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-right">
                <div>
                  <span>מייל:</span>
                  <a
                    href="mailto:ruaya94@gmail.com"
                    className="text-green-400 underline hover:text-green-300 ml-1"
                  >
                    ruaya94@gmail.com
                  </a>
                </div>

                <div>
                  <span>וואטסאפ:</span>
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

              <div className="text-center text-[11px] md:text-xs text-slate-400 mt-2">
                Website design &amp; development:{" "}
                <span className="text-green-300 font-medium">Ruaya Dahla</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
