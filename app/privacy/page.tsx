"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react"; // استيراد Suspense
import RiderPolicy from "../components/legal/RiderPolicy";
import DriverPolicy from "../components/legal/DriverPolicy";

// 1. انقل كل المنطق إلى مكون فرعي جديد
function PrivacyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const role = searchParams.get("role") || "driver";

  const setRole = (newRole: string) => {
    router.push(`/privacy?role=${newRole}`, { scroll: false });
  };

  const baseClasses =
    "w-full sm:w-52 md:w-56 lg:w-60 h-12 md:h-14 rounded-full md:rounded-3xl shadow-lg transition-all duration-500 ease-in-out font-bold text-base md:text-[20px] flex items-center justify-center";

  const activeClasses = `bg-[#390D8E] text-white ${baseClasses}`;
  const inactiveClasses = `bg-white text-[#390D8E] border-2 border-[#390D8E] shadow-sm hover:shadow-md ${baseClasses}`;

  return (
    <div className="flex flex-col items-center min-h-screen bg-white p-4 md:p-6">
      <div className="flex flex-col items-center w-full max-w-4xl mb-8 md:mb-12">
        <header className="text-center mb-8 mt-20 md:mt-24">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            سياسة الخصوصية
          </h1>
          <p className="text-gray-600 text-sm md:text-base px-2">
            يرجى اختيار فئة المستخدم للاطلاع على سياسة الخصوصية المناسبة لك.
          </p>
        </header>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
          <button
            onClick={() => setRole("driver")}
            className={role === "driver" ? activeClasses : inactiveClasses}
          >
            للكباتن
          </button>
          <button
            onClick={() => setRole("rider")}
            className={role === "rider" ? activeClasses : inactiveClasses}
          >
            للركاب
          </button>
        </div>
      </div>

      <div className="w-full max-w-4xl prose prose-sm md:prose-base text-right px-4">
        {role === "rider" ? <RiderPolicy /> : <DriverPolicy />}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p>جاري التحميل...</p>
        </div>
      }
    >
      <PrivacyContent />
    </Suspense>
  );
}
