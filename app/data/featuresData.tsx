
export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const featuresData: Feature[] = [
  {
    id: 1,
    title: "أمان وتتبع مباشر",
    description: "تابع رحلتك لحظة بلحظة.",
    icon: "/icons/Frame-why-drobi.svg",
  },
  {
    id: 2,
    title: "أسعار واضحة",
    description: "بدون مفاجآت أو رسوم مخفية.",
    icon: "/icons/Money.svg",
  },
  {
    id: 3,
    title: "دعم محلي سريع",
    description: "فريق سعودي جاهز لمساعدتك.",
    icon: "/icons/Support-24h.svg",
  },
  {
    id: 4,
    title: "حجز في ثواني",
    description: "اضغط... والكابتن في طريقه لك.",
    icon: "/icons/icon_booking.svg",
  },
];
