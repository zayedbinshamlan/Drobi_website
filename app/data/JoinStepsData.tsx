export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string; 
}

export const STEPS_DATA: Step[] = [
  {
    id: 1,
    title: "سجّل بياناتك",
    description:
      "ابدأ بتعبئة نموذج الطلب الأولي عبر موقعنا الإلكتروني أو تطبيق الكابتن.",
    icon: "/icons/user-add.svg",
  },
  {
    id: 2,
    title: "ارفع مستنداتك",
    description:
      "قم برفع صور واضحة لبطاقة الهوية، رخصة القيادة، واستمارة تأمين السيارة.",
    icon: "/icons/upload.svg",
  },
  {
    id: 3,
    title: "ابدأ استقبال الرحلات",
    description:
      "بمجرد مراجعة طلبك وتفعيله، ستكون جاهزاً فوراً لاستقبال أول مشوار وزيادة دخلك.",
    icon: "/icons/navigation-step.svg",
  },
];
