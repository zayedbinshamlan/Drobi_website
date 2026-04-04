export interface FairFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const FAIR_EXPERIENCE_DATA: FairFeature[] = [
  {
    id: 1,
    title: "تحويل أرباح سريع",
    description: "أرباحك تصلك دورياً وبشكل منتظم ومؤتمن بالكامل.",
    icon: "/icons/Money.svg", 
  },
  {
    id: 2,
    title: "تفاصيل واضحة",
    description: "شاهد تفاصيل الأرباح والمشوار في التطبيق لحظة بلحظة.",
    icon: "/icons/icon-trust.svg",
  },
  {
    id: 3,
    title: "تسويات شفافة",
    description: "نظام مالي متطور يضمن لك حقك في كل هللة تربحها.",
    icon: "/icons/icon-trust-1.svg", 
  },
  {
    id: 4,
    title: "نظام تقييم عادل",
    description: "آلية تقييم متبادلة تحميك وتضمن جودة التجربة للجميع.",
    icon: "/icons/icon-trust-2.svg",
  },
];
