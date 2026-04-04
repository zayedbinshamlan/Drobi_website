export interface Service {
  id: number;
  title: string;
  description: string;
  iconPath: string;
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "واجهة سهلة",
    description: "تصميم ذكي يتيح للعميل طلب رحلته بسرعة وسلاسة دون أي تعقيد.",
    iconPath: "/icons/smart-phone-01.svg",
  },
  {
    id: 2,
    title: "جدولة المشاوير",
    description:
      "مع تطبيق دروبي (Drobi)، رحلتك بدون انتظار ولا قلق من توفر السائق.",
    iconPath: "/icons/Daily.svg",
  },
  {
    id: 3,
    title: "أسعار تنافسية",
    description: "تسعيرة عادلة وواضحة لكل كيلومتر لضمان أفضل تكلفة وجودة خدمة.",
    iconPath: "/icons/percent.svg",
  },
  {
    id: 4,
    title: "برامج ولاء حصرية",
    description:
      "اكسب نقاطًا ومكافآت مع كل رحلة، واستبدلها بعروض وخصومات مميزة.",
    iconPath: "/icons/coins-01.svg",
  },
  {
    id: 5,
    title: "كابتن موثوق",
    description:
      "جميع الكباتن معتمدون ومدربون لتقديم خدمة آمنة واحترافية في كل رحلة.",
    iconPath: "/icons/drive.svg",
  },
  {
    id: 6,
    title: "سائقات متخصصات عند الطلب",
    description:
      "اختيار سائقات محترفات لتوفير تجربة تنقّل مريحة وآمنة عند الحاجة.",
    iconPath: "/icons/woman.svg",
  },
  {
    id: 7,
    title: "خدمة استرجاع المفقودات",
    description: "تضمن لك استرجاع أي متعلقات نسيتها داخل المركبة بسهولة وأمان.",
    iconPath: "/icons/restore-bin.svg",
  },
  {
    id: 8,
    title: "خيارات دفع متعددة",
    description:
      "ادفع بسهولة وأمان بالطريقة اللي تريحك: بطاقة، محفظة، أو نقدًا.",
    iconPath: "/icons/Frame.svg",
  },
  {
    id: 9,
    title: "خدمة عملاء 24 ساعة",
    description:
      "فريق دعم متواجد على مدار الساعة لخدمتك والإجابة على استفساراتكم.",
    iconPath: "/icons/Support-24h.svg",
  },
];
