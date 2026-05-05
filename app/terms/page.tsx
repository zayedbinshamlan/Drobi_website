import { Metadata } from "next";
import { Suspense } from "react";
import TermsClient from "../components/terms/TermsClient";

export const metadata: Metadata = {
  title: "شروط الاستخدام - دروبي",
  description:
    "شروط وأحكام استخدام منصة دروبي للتوصيل داخل المملكة العربية السعودية، بما يشمل حقوق والتزامات المستخدمين والكباتن.",
  keywords: [
    "شروط الاستخدام دروبي",
    "شروط وأحكام التوصيل",
    "قوانين استخدام التطبيق",
    "terms of service drobi",
    "شروط الكباتن السعودية",
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
      <TermsClient />
    </Suspense>
  );
}
