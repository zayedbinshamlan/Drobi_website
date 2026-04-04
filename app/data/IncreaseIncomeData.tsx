export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "مرونة كاملة",
    description: "أنت مدير نفسك، أختر الأوقات المناسبة للعمل",
    icon: "/icons/pie-chart.svg", 
  },
  {
    id: 2,
    title: "عمولة تنافسية",
    description: "نحن نقدر جهدك، لذلك نقدم أقل عمولة في السوق",
    icon: "/icons/percent.svg",
  },
  {
    id: 3,
    title: "دعم مستمر",
    description: "فريق متخصص لدعم الكباتن وحل كافة المشكلات التقنية",
    icon: "/icons/Support-24h.svg",
  },
  {
    id: 4,
    title: "نظام مكافآت",
    description: "حوافز أسبوعية وشهرية للأداء المتميز والتقييم العالي",
    icon: "/icons/Gift.svg",
  },
];
