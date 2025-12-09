"use client";

import Image from "next/image";
import { useState } from "react";

type Lang = "he" | "ar" | "en";

type GalleryProps = {
  gatesFences: string[];
  railingsStairs: string[];
  pergolasRoofs: string[];
  shedsRooms: string[];
  reinforcement: string[];
  custom: string[];
};

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryBuilt = {
  gatesFences: GalleryImage[];
  railingsStairs: GalleryImage[];
  pergolasRoofs: GalleryImage[];
  shedsRooms: GalleryImage[];
  reinforcement: GalleryImage[];
  custom: GalleryImage[];
};

const texts: Record<Lang, any> = {
  he: {
    nav: { home: "בית", about: "אודות", gallery: "גלריה", contact: "יצירת קשר" },

    // הירו
    heroTop: "עבודות מסגרות לכל צורך – בית פרטי, עסק ומשק",
    heroTitle: "מסגריית תאיר דחלה",
    heroSub: "עבודות מסגרות איכותיות – מדרגות, מעקות, פרגולות, גדרות ועוד.",
    heroCtaQuote: "קבלת הצעת מחיר",
    heroCtaGallery: "צפייה בגלריית עבודות",
    headerCta: "לקבלת הצעת מחיר",

    // אודות
    aboutTitle: "אודות החברה – תאיר דחלה עבודות מסגרות (TAIR STEEL)",
    aboutBody: `חברת TAIR STEEL נוסדה בשנת 2013, ומאז מובילה בתחום עבודות המסגרות בצפון הארץ.
החברה מתמחה בתכנון, ייצור והתקנה של מגוון רחב של פרויקטים במתכת –
החל ממדרגות ומעקות, גגות ופרגולות, ועד לשערים חשמליים, גדרות, חיפויי מתכת ומבני פלדה תעשייתיים.

החברה מנוהלת על-ידי תאיר דחלה, אשת מקצוע בעלת ניסיון עשיר בניהול, תכנון ותפעול מערכות מתכת מורכבות.
חברת תאיר משלבת בין הבנה טכנולוגית עמוקה לבין חזון עסקי וחשיבה יצירתית –
היא אחראית על ניהול כולל של פעילות החברה, ניהול עובדים ולוחות זמנים,
שיווק ופרסום דיגיטלי, פיתוח אתר החברה, ניתוח נתונים וניהול מערכות מידע מתקדמות.

החברה ידועה באמינותה, באיכות הגימור הגבוהה ובשירות האישי לכל לקוח –
עם דגש על בטיחות, עמידות לאורך שנים ועיצוב מודרני המתאים לכל סגנון.

אנו מלווים את הלקוחות שלנו משלב הייעוץ והמדידות, דרך התכנון והייצור, ועד ההתקנה באתר.
כל פרויקט זוכה ליחס אישי, עבודה מדויקת ותוצאה מרהיבה – כזו שמשלבת דיוק הנדסי, עיצוב מוקפד ומגע אנושי חם.

📍 מיקום: טורעאן, אזור הצפון
📞 טלפון: 052-848-7823
✉ דוא״ל: tairdahle@gmail.com
🌐 אתר: tairsteel.co.il`,

    // למה לבחור
    whyTitle: "למה לבחור במסגריית תאיר דחלה?",
    whyExperienceTitle: "ניסיון ודיוק",
    whyExperienceText:
      "שנים של ניסיון בעבודות מסגרות לבתים פרטיים, עסקים ומשקים – עם הקפדה על כל פרט.",
    whyQualityTitle: "איכות ובטיחות",
    whyQualityText:
      "שימוש בחומרים איכותיים, ריתוכים חזקים ועמידה בתקני בטיחות מחמירים בכל עבודה.",
    whyClientTitle: "תכנון לפי הלקוח",
    whyClientText:
      "כל פרויקט מתוכנן יחד עם הלקוח – מהרעיונות, דרך השרטוטים ועד הגימור הסופי בשטח.",
    whyCta: "לקביעת שיחה / הצעת מחיר",

    // גלריה
    galleryTitle: "גלריית עבודות",
    galleryBody:
      "בחרנו כמה פרויקטים שמייצגים את העבודה שלנו בשערים, גדרות, מדרגות, פרגולות ועוד. בהמשך נוסיף עוד תמונות מעבודות נוספות.",

    // יצירת קשר
    contactTitle: "יצירת קשר",
    contactPhone: "טלפון: 052-848-7823",
    contactArea: "אזור עבודה: צפון הארץ • מיקום: טורעאן • אתר: tairsteel.co.il",
    contactIntro1:
      "נשמח לשמוע על הפרויקט שלכם – מדרגות, שער, פרגולה, מחסן או כל עבודת מתכת אחרת.",
    contactIntro2:
      "השאירו פרטים בטופס, או פנו אלינו בוואטסאפ לשיחה מהירה ותיאום מדידות בשטח.",
    contactCallNow: "התקשר עכשיו",
    contactWhatsAppButton: "שליחת הודעה ב־WhatsApp",

    // טופס
    form: {
      nameLabel: "שם מלא",
      namePlaceholder: "לדוגמה: תאיר דחלה",
      phoneLabel: "טלפון לחזרה",
      phonePlaceholder: "05X-XXXXXXX",
      messageLabel: "מה סוג העבודה?",
      messagePlaceholder: "מדרגות, מעקות, פרגולה, שער... מה הצורך שלך?",
      submit: "שליחת פנייה ב־WhatsApp",

      whatsNameLabel: "שם מלא",
      whatsPhoneLabel: "טלפון לחזרה",
      whatsJobLabel: "סוג העבודה",
    },

    emailLabel: "אימייל ליצירת קשר:",
  },

  ar: {
    nav: { home: "الرئيسية", about: "من نحن", gallery: "معرض الأعمال", contact: "اتصال" },

    heroTop: "أعمال حدادة لكل حاجة – بيت خاص، عمل ومزرعة",
    heroTitle: "محددة ثائر دحلة",
    heroSub: "أعمال حدادة احترافية – درجات، درابزين، برچولات، أسوار وأكثر.",
    heroCtaQuote: "الحصول على عرض سعر",
    heroCtaGallery: "عرض معرض الأعمال",
    headerCta: "الحصول على عرض سعر",

    aboutTitle: "من نحن – شركة תאיר דחלה للأعمال المعدنية (TAIR STEEL)",
    aboutBody: `مرحبًا بكم في TAIR STEEL – وجهتكم الأولى للأعمال المعدنية عالية الجودة في شمال البلاد.
نُقدّم حلولاً متكاملة في مجال الحدادة الحديثة، بتصاميم دقيقة ولمسات فنية تجمع بين الجمال والقوة.

تأسست الشركة عام 2013، ومنذ ذلك الحين أصبحت من الشركات الرائدة في مجال الأعمال المعدنية في المنطقة الشمالية.
نتخصّص في تصميم، تصنيع، وتركيب مشاريع معدنية متنوعة:
من الدرج والدرابزين، مرورًا بالأسقف والبرجولات، إلى البوابات الكهربائية، الأسوار، الكسوات المعدنية والهياكل الفولاذية الصناعية.

تُدار الشركة بإشراف رؤيا دحلة – سيدة محترفة ذات خبرة واسعة في الإدارة والتخطيط وتشغيل أنظمة معدنية معقّدة.
تجمع بين رؤية إبداعية وفكر إداري حديث، وتشرف على إدارة العمليات اليومية، الموظفين، الحملات التسويقية الرقمية،
وتطوير الموقع الإلكتروني وتحليل البيانات وإدارة الأنظمة التقنية المتقدمة.

تشتهر الشركة بالمصداقية، جودة التشطيب العالية، والخدمة الشخصية التي تمنح كل زبون اهتمامًا خاصًا.
نعمل وفق أعلى معايير الأمان والدقة لنضمن أعمالًا متينة، جميلة ومصممة لتدوم لسنوات طويلة.

نرافق زبائننا منذ لحظة الاستشارة والقياسات الميدانية، مرورًا بالتصميم والإنتاج، وحتى التركيب النهائي في الموقع –
لتحصلوا على نتيجة هندسية دقيقة ولمسة تصميم فريدة.

📍 العنوان: طرعان – منطقة الشمال
📞 الهاتف: 052-848-7823
✉ البريد: tairdahle@gmail.com
🌐 الموقع: tairsteel.co.il`,

    whyTitle: "لماذا تختارون مسغرية تائر دحلة؟",
    whyExperienceTitle: "خبرة ودقة",
    whyExperienceText:
      "سنوات من الخبرة في أعمال الحدادة للمنازل الخاصة، المصالح والمزارع – مع اهتمام بكل تفصيل.",
    whyQualityTitle: "جودة وأمان",
    whyQualityText:
      "استخدام مواد عالية الجودة، لحامات قوية والالتزام بمعايير أمان صارمة في كل مشروع.",
    whyClientTitle: "تصميم حسب الزبون",
    whyClientText:
      "كل مشروع يُصمَّم مع الزبون – من الفكرة والرسم حتى التشطيب النهائي في الموقع.",
    whyCta: "لتحديد مكالمة / عرض سعر",

    galleryTitle: "معرض الأعمال",
    galleryBody:
      "مجموعة من المشاريع التي نفّذناها في البوابات، الأسوار، الدرج، البرجولات وغيرها. سيتم إضافة أعمال أخرى لاحقًا.",

    contactTitle: "اتصال",
    contactPhone: "هاتف: 052-848-7823",
    contactArea: "منطقة العمل: شمال البلاد • العنوان: طرعان • الموقع: tairsteel.co.il",
    contactIntro1:
      "نَسعد بسماع تفاصيل مشروعكم – درج، بوابة، برچولة، مخزن أو أي عمل معدني آخر.",
    contactIntro2:
      "اتركوا تفاصيلكم في النموذج، أو تواصلوا معنا عبر الواتساب لمكالمة سريعة وتنسيق قياسات في الميدان.",
    contactCallNow: "اتصل الآن",
    contactWhatsAppButton: "إرسال رسالة عبر WhatsApp",

    form: {
      nameLabel: "الاسم الكامل",
      namePlaceholder: "مثال: تائر دحلة",
      phoneLabel: "هاتف للرجوع",
      phonePlaceholder: "05X-XXXXXXX",
      messageLabel: "ما نوع العمل؟",
      messagePlaceholder: "درج، درابزين، برچولة، بوابة... ما حاجتك؟",
      submit: "إرسال توجّه عبر WhatsApp",

      whatsNameLabel: "الاسم الكامل",
      whatsPhoneLabel: "هاتف للرجوع",
      whatsJobLabel: "نوع العمل",
    },

    emailLabel: "بريد للتواصل:",
  },

  en: {
    nav: { home: "Home", about: "About", gallery: "Gallery", contact: "Contact" },

    heroTop: "Metalwork solutions for any need – home, business and farm",
    heroTitle: "Tair Dahla Metalworks",
    heroSub: "High–quality metal works – stairs, railings, pergolas, fences and more.",
    heroCtaQuote: "Get a Quote",
    heroCtaGallery: "View Project Gallery",
    headerCta: "Get a Quote",

    aboutTitle: "About the Company – Tair Dahla Steel Works (TAIR STEEL)",
    aboutBody: `Welcome to TAIR STEEL – where precision meets strength and design meets innovation.
Since 2013, TAIR STEEL has been a leading name in metalwork and steel fabrication across Northern Israel.

We specialize in designing, manufacturing, and installing a wide range of steel projects –
from stairs and railings to roofs, pergolas, electric gates, fences, claddings, and industrial steel structures.

The company is managed by Ruaya Dahla, an experienced professional in operations, planning, and advanced metal systems management.
She combines strong technical knowledge with creative business vision, overseeing company operations,
employee coordination, digital marketing, website development, data analysis, and information systems management.

TAIR STEEL is recognized for its reliability, top-quality finishing, and personalized service,
placing great emphasis on safety, durability, and modern design.

We accompany our clients through every stage – from consultation and measurement,
through design and production, to precise installation on-site –
delivering elegant, durable results that reflect both engineering precision and personal care.

📍 Location: Tur’an, Northern District
📞 Phone: +972-52-848-7823
✉ Email: tairdahle@gmail.com
🌐 Website: tairsteel.co.il`,

    whyTitle: "Why Choose Tair Dahla Metalworks?",
    whyExperienceTitle: "Experience & Precision",
    whyExperienceText:
      "Years of experience in metalwork for private homes, businesses and farms – with attention to every detail.",
    whyQualityTitle: "Quality & Safety",
    whyQualityText:
      "High–grade materials, strong welding and strict safety standards on every project.",
    whyClientTitle: "Client–Focused Design",
    whyClientText:
      "Each project is designed together with the client – from ideas and sketches to on–site finishing.",
    whyCta: "Request a Call / Quote",

    galleryTitle: "Work Gallery",
    galleryBody:
      "A selection of projects we completed: gates, fences, stairs, pergolas and more. More examples will be added soon.",

    contactTitle: "Contact",
    contactPhone: "Phone: +972-52-848-7823",
    contactArea: "Serving Northern Israel • Location: Tur’an • Website: tairsteel.co.il",
    contactIntro1:
      "We’d be happy to hear about your project – stairs, gates, pergolas, sheds or any other metal work.",
    contactIntro2:
      "Leave your details in the form, or contact us on WhatsApp for a quick conversation and on–site measurements.",
    contactCallNow: "Call Now",
    contactWhatsAppButton: "Send WhatsApp Message",

    form: {
      nameLabel: "Full Name",
      namePlaceholder: "Example: Tair Dahla",
      phoneLabel: "Phone Number",
      phonePlaceholder: "05X-XXXXXXX",
      messageLabel: "Type of Work",
      messagePlaceholder: "Stairs, railings, pergola, gate... what do you need?",
      submit: "Send via WhatsApp",

      whatsNameLabel: "Full Name",
      whatsPhoneLabel: "Phone",
      whatsJobLabel: "Type of Work",
    },

    emailLabel: "Contact Email:",
  },
};

function buildGallery(lang: Lang, props: GalleryProps): GalleryBuilt {
  const makeAlt = (he: string, ar: string, en: string) =>
    lang === "he" ? he : lang === "ar" ? ar : en;

  return {
    gatesFences: props.gatesFences.map((src) => ({
      src,
      alt: makeAlt(
        "שער או גדר ברזל – עבודת מסגרות",
        "بوابة أو سور حديد – عمل حدادة",
        "Steel gate or fence – metal work"
      ),
    })),
    railingsStairs: props.railingsStairs.map((src) => ({
      src,
      alt: makeAlt(
        "מעקה מדרגות – עבודת מסגרות",
        "درابزين درج – عمل حدادة",
        "Stair railing – metal work"
      ),
    })),
    pergolasRoofs: props.pergolasRoofs.map((src) => ({
      src,
      alt: makeAlt(
        "פרגולה או גג – עבודת מסגרות",
        "برجولة أو سقف – عمل حدادة",
        "Pergola or roof – metal work"
      ),
    })),
    shedsRooms: props.shedsRooms.map((src) => ({
      src,
      alt: makeAlt(
        "מחסן או חדר ברזל – מבנה קל",
        "مخزن أو غرفة حديد – مبنى خفيف",
        "Steel shed or room – light structure"
      ),
    })),
    reinforcement: props.reinforcement.map((src) => ({
      src,
      alt: makeAlt(
        "חיזוק מבנה או מרפסת – קורות ועמודים",
        "تدعيم مبنى أو شرفة – جسور وأعمدة",
        "Structural reinforcement – beams and columns"
      ),
    })),
    custom: props.custom.map((src) => ({
      src,
      alt: makeAlt(
        "עבודת מסגרות מיוחדת לפי דרישה",
        "عمل حدادة خاص حسب الطلب",
        "Custom metal work"
      ),
    })),
  };
}

export default function HomeClient(props: GalleryProps) {
  const [lang, setLang] = useState<Lang>("he");
  const t = texts[lang];
  const galleryImages = buildGallery(lang, props);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* תפריט עליון */}
      <header className="sticky top-0 z-30 bg-slate-950/95 border-b border-slate-800 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 gap-4">
          {/* לוגו / שם העסק */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl border border-emerald-400 flex items-center justify-center text-sm font-bold">
              TD
            </div>
            <div className="flex flex-col text-right leading-tight">
              <span className="text-lg md:text-xl font-extrabold tracking-tight">
                מסגריית תאיר דחלה
              </span>
              <span className="text-xs md:text-sm text-slate-300">
                Tair Dahla · محددة ثائر دحلة
              </span>
            </div>
          </div>

          {/* ניווט */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-emerald-300 transition-colors">
              {t.nav.home}
            </a>
            <a href="#about" className="hover:text-emerald-300 transition-colors">
              {t.nav.about}
            </a>
            <a href="#gallery" className="hover:text-emerald-300 transition-colors">
              {t.nav.gallery}
            </a>
            <a href="#contact" className="hover:text-emerald-300 transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          {/* בחירת שפה + כפתור הצעת מחיר */}
          <div className="flex items-center gap-3">
            <div className="flex gap-1 text-xs md:text-sm">
              <button
                onClick={() => setLang("he")}
                className={`px-2 py-1 rounded border text-xs md:text-sm ${
                  lang === "he"
                    ? "bg-slate-900 text-white border-slate-500"
                    : "bg-slate-100 text-slate-900"
                }`}
              >
                עברית
              </button>
              <button
                onClick={() => setLang("ar")}
                className={`px-2 py-1 rounded border text-xs md:text-sm ${
                  lang === "ar"
                    ? "bg-slate-900 text-white border-slate-500"
                    : "bg-slate-100 text-slate-900"
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 rounded border text-xs md:text-sm ${
                  lang === "en"
                    ? "bg-slate-900 text-white border-slate-500"
                    : "bg-slate-100 text-slate-900"
                }`}
              >
                English
              </button>
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-emerald-500 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              {t.headerCta}
            </a>
          </div>
        </div>
      </header>

      {/* הירו */}
      <section id="home" className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/backgrounds/bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-28 flex flex-col items-center justify-center text-center gap-4">
          <p className="text-sm md:text-base tracking-wide text-emerald-200">
            {t.heroTop}
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            {t.heroTitle}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold">{t.heroNameLatin}</h2>
          <h3 className="text-lg md:text-xl">{t.heroNameArabic}</h3>
          <p className="mt-4 max-w-2xl text-sm md:text-lg text-slate-100">
            {t.heroSub}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-emerald-500 text-slate-950 font-semibold text-sm md:text-base hover:bg-emerald-400 transition-colors"
            >
              {t.heroCtaQuote}
            </a>
            <a
              href="#gallery"
              className="px-6 py-2 rounded-full bg-emerald-500 text-slate-950 font-semibold text-sm md:text-base hover:bg-emerald-400 transition-colors"
            >
              {t.heroCtaGallery}
            </a>
          </div>
        </div>
      </section>

      {/* שאר התוכן */}
      <div className="bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 space-y-16">
          {/* אודות */}
          <section id="about" className="space-y-4 text-right">
            <h2 className="text-2xl md:text-3xl font-bold">{t.aboutTitle}</h2>
            <p className="text-base md:text-lg leading-relaxed text-slate-100 whitespace-pre-line">
              {t.aboutBody}
            </p>
          </section>

          {/* למה לבחור בנו */}
          <section className="space-y-6 text-right">
            <h2 className="text-2xl md:text-3xl font-bold">{t.whyTitle}</h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-semibold mb-2">{t.whyExperienceTitle}</h3>
                <p className="text-sm text-slate-200">{t.whyExperienceText}</p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-semibold mb-2">{t.whyQualityTitle}</h3>
                <p className="text-sm text-slate-200">{t.whyQualityText}</p>
              </div>

              <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all">
                <h3 className="font-semibold mb-2">{t.whyClientTitle}</h3>
                <p className="text-sm text-slate-200">{t.whyClientText}</p>
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full bg-emerald-500 text-slate-950 text-sm md:text-base font-semibold hover:bg-emerald-400"
              >
                {t.whyCta}
              </a>
            </div>
          </section>

          {/* גלריית עבודות */}
          <section
            id="gallery"
            className="space-y-8 pt-10 md:pt-12 border-t border-slate-800"
          >
            <div className="text-center space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold">{t.galleryTitle}</h2>
              <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
                {t.galleryBody}
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* 1. שערים וגדרות */}
              <article className="rounded-2xl bg-slate-900/80 p-5 shadow-sm border border-slate-700 flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold">
                    {lang === "he"
                      ? "שערים וגדרות"
                      : lang === "ar"
                      ? "بوابات وأسوار"
                      : "Gates & Fences"}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {lang === "he"
                      ? "שערי חניה חשמליים, שערי כניסה וגדרות ברזל לחזית הבית – עם שילוב של בטיחות, פרטיות ועיצוב יוקרתי."
                      : lang === "ar"
                      ? "بوابات مواقف سيارات كهربائية، بوابات مدخل وأسوار حديد لواجهة البيت – أمان، خصوصية وتصميم أنيق."
                      : "Electric parking gates, entrance gates and steel fences for the front of the house – safe, private and elegant."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {galleryImages.gatesFences.map((img) => (
                    <div
                      key={img.src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 group"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  ))}
                </div>
              </article>

              {/* 2. מדרגות ומעקות */}
              <article className="rounded-2xl bg-slate-900/80 p-5 shadow-sm border border-slate-700 flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold">
                    {lang === "he"
                      ? "מדרגות ומעקות"
                      : lang === "ar"
                      ? "درج وحواجز"
                      : "Stairs & Railings"}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {lang === "he"
                      ? "מעקות בטיחות למדרגות פנים וחוץ, עם אפשרות לשילוב עץ וזכוכית – קווים נקיים שמתאימים לכל סגנון עיצוב."
                      : lang === "ar"
                      ? "حواجز أمان لدرج داخلي وخارجي، مع إمكانية دمج الخشب والزجاج – خطوط نظيفة تناسب أي أسلوب تصميم."
                      : "Interior and exterior stair railings, with options to combine wood and glass – clean lines for any design style."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {galleryImages.railingsStairs.map((img) => (
                    <div
                      key={img.src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 group"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  ))}
                </div>
              </article>

              {/* 3. פרגולות וגגות */}
              <article className="rounded-2xl bg-slate-900/80 p-5 shadow-sm border border-slate-700 flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold">
                    {lang === "he"
                      ? "פרגולות וגגות"
                      : lang === "ar"
                      ? "برجولات وأسقف"
                      : "Pergolas & Roofs"}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {lang === "he"
                      ? "פרגולות וגגות קלים למרפסות, חצרות וגגות – פתרונות הצללה והגנה משמש וגשם, בהתאמה מלאה לשטח."
                      : lang === "ar"
                      ? "برجولات وأسقف خفيفة للشرفات والأسطح والحدائق – حلول تظليل وحماية من الشمس والمطر حسب المساحة."
                      : "Pergolas and light roofs for balconies, roofs and yards – shading and weather protection tailored to your space."}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-2">
                  {galleryImages.pergolasRoofs.map((img) => (
                    <div
                      key={img.src}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 group"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  ))}
                </div>
              </article>

              {/* 4. מחסנים וחדרים */}
              <article className="rounded-2xl bg-slate-900/80 p-5 shadow-sm border border-slate-700 flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold">
                    {lang === "he"
                      ? "מחסנים וחדרים"
                      : lang === "ar"
                      ? "مخازن وغرف"
                      : "Sheds & Rooms"}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {lang === "he"
                      ? "מחסני ברזל ומבני פלדה קלים – פתרונות אחסון וחדרי עבודה חזקים ועמידים לפי מידה."
                      : lang === "ar"
                      ? "مخازن حديدية وهياكل فولاذية خفيفة – حلول تخزين وغرف عمل قوية حسب المقاس."
                      : "Steel sheds and light structures for storage and work rooms."}
                  </p>
                </div>

                {galleryImages.shedsRooms.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {galleryImages.shedsRooms.map((img) => (
                      <div
                        key={img.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-32 rounded-xl bg-slate-800 text-sm text-slate-400">
                    {lang === "he"
                      ? "תמונות לדוגמה יתווספו בקרוב"
                      : lang === "ar"
                      ? "سيتم إضافة صور قريبة"
                      : "Photos coming soon"}
                  </div>
                )}
              </article>

              {/* 5. חיזוק מבנים */}
              <article className="rounded-2xl bg-slate-900/80 p-5 shadow-sm border border-slate-700 flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold">
                    {lang === "he"
                      ? "חיזוק מבנים ומרפסות"
                      : lang === "ar"
                      ? "تدعيم مبانٍ وشرفات"
                      : "Structural Reinforcement"}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {lang === "he"
                      ? "עבודות חיזוק לפי דרישת מהנדס קונסטרוקטור – קורות, עמודים ומרפסות."
                      : lang === "ar"
                      ? "أعمال تدعيم حسب مهندس الإنشاء – كمرات، أعمدة وشرفات."
                      : "Reinforcement works according to structural engineer requirements – beams, columns and balconies."}
                  </p>
                </div>

                {galleryImages.reinforcement.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {galleryImages.reinforcement.map((img) => (
                      <div
                        key={img.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-32 rounded-xl bg-slate-800 text-sm text-slate-400">
                    {lang === "he"
                      ? "תיעוד מצולם יתווסף לאחר סיום פרויקטים נוספים"
                      : lang === "ar"
                      ? "سيتم إضافة توثيق مصوَّر لاحقًا"
                      : "Photo documentation will be added later"}
                  </div>
                )}
              </article>

              {/* 6. עבודות מיוחדות לפי דרישה */}
              <article className="rounded-2xl bg-slate-900/80 p-5 shadow-sm border border-slate-700 flex flex-col gap-3">
                <div>
                  <h3 className="text-xl font-bold">
                    {lang === "he"
                      ? "עבודות מיוחדות לפי דרישה"
                      : lang === "ar"
                      ? "أعمال خاصة حسب الطلب"
                      : "Custom Metal Work"}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {lang === "he"
                      ? "ריהוט ברזל, אלמנטים דקורטיביים ופתרונות מיוחדים לגינות, עסקים וחצרות – לפי שרטוט, תמונה או רעיון שלכם."
                      : lang === "ar"
                      ? "أثاث حديدي، عناصر ديكورية وحلول خاصة للحدائق والمحلات – حسب رسم، صورة أو فكرة منكم."
                      : "Custom metal furniture, decorative elements and unique solutions for gardens and businesses – based on your drawing or idea."}
                  </p>
                </div>

                {galleryImages.custom.length > 0 ? (
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {galleryImages.custom.map((img) => (
                      <div
                        key={img.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-800 group"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-32 rounded-xl bg-slate-800 text-sm text-slate-400">
                    {lang === "he"
                      ? "אפשר לשלוח לנו תמונה לדוגמה ואנחנו נתאים את העבודה"
                      : lang === "ar"
                      ? "يمكنكم إرسال صورة كمثال وسننفّذ العمل حسبها"
                      : "Send us a reference photo and we will match the work to it."}
                  </div>
                )}
              </article>
            </div>
          </section>

          {/* יצירת קשר */}
          <section
            id="contact"
            className="space-y-4 text-right pt-10 md:pt-14 border-t border-slate-800"
          >
            <h2 className="text-2xl md:text-3xl font-bold">{t.contactTitle}</h2>
            <p className="text-base md:text-lg text-slate-100">
              {t.contactPhone}
              <br />
              {t.contactArea}
            </p>

            <div className="mt-4 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 items-start">
              {/* טקסט ליד הטופס */}
              <div className="space-y-3 text-sm md:text-base">
                <p>{t.contactIntro1}</p>
                <p>{t.contactIntro2}</p>
                <div className="flex flex-wrap gap-3 justify-start md:justify-end">
                  <a
                    href="tel:0528487823"
                    className="px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-sm font-semibold hover:bg-emerald-400 transition-colors"
                  >
                    {t.contactCallNow}
                  </a>
                  <a
                    href="https://wa.me/972528487823"
                    target="_blank"
                    className="px-4 py-2 rounded-full bg-emerald-500 text-slate-950 text-sm font-semibold hover:bg-emerald-400"
                  >
                    {t.contactWhatsAppButton}
                  </a>
                </div>
              </div>

              {/* טופס וואטסאפ */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const name =
                    (form.elements.namedItem("name") as HTMLInputElement)?.value ||
                    "";
                  const phone =
                    (form.elements.namedItem("phone") as HTMLInputElement)?.value ||
                    "";
                  const message =
                    (form.elements.namedItem(
                      "message"
                    ) as HTMLTextAreaElement)?.value || "";

                  const text = `${t.form.whatsNameLabel}: ${name}\n${t.form.whatsPhoneLabel}: ${phone}\n${t.form.whatsJobLabel}: ${message}`;
                  const url = `https://wa.me/972528487823?text=${encodeURIComponent(
                    text
                  )}`;
                  window.open(url, "_blank");
                }}
                className="max-w-lg w-full ml-auto space-y-3 bg-slate-900/90 border border-slate-700 p-4 md:p-5 rounded-2xl shadow-lg"
              >
                <div className="space-y-1">
                  <label htmlFor="name" className="text-sm font-semibold">
                    {t.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder={t.form.namePlaceholder}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="phone" className="text-sm font-semibold">
                    {t.form.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder={t.form.phonePlaceholder}
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-sm font-semibold">
                    {t.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border border-slate-600 bg-slate-950 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder={t.form.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-500 text-slate-950 py-2 text-sm md:text-base font-semibold hover:bg-emerald-400"
                >
                  {t.form.submit}
                </button>
              </form>
            </div>

            <p className="text-center text-xs md:text-sm text-slate-400 mt-6">
              {t.emailLabel}
              <span className="font-semibold"> tairdahle@gmail.com</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
