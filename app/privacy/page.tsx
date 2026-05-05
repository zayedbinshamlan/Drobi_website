import { Metadata } from "next";
import { Suspense } from "react";
import PrivacyClient from "../components/legal/PrivacyClient";

export const metadata: Metadata = {
  title: "سياسة الخصوصية - دروبي",
  description:
    "توضح سياسة الخصوصية في دروبي كيفية جمع واستخدام وحماية البيانات الشخصية للمستخدمين داخل المملكة العربية السعودية.",
  keywords: [
    "سياسة الخصوصية دروبي",
    "حماية البيانات",
    "خصوصية المستخدم",
    "drobi privacy policy",
    "بيانات المستخدم السعودية",
  ],
};

export default function PrivacyPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#390D8E]"></div>
        </div>
      }
    >
      <PrivacyClient />
    </Suspense>
  );
}
