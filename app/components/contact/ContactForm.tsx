"use client";

import React, { useState } from "react";
import {
  FormField,
  FormTextArea,
  SubmitButton,
} from "@/app/components/contact/FormElements";
import { sendEmail } from "@/app/actions/sendEmail";

// 1. تحديث نوع الحالة ليشمل الأخطاء
type FormStatus = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (formDataInstance: FormData) => {
    setIsLoading(true);
    setStatus(null);

    const result = await sendEmail(formDataInstance);

    setStatus(result);
    setIsLoading(false);

    // تصفير الحقول فقط في حال النجاح
    if (result.success) {
      setFormData({ name: "", email: "", message: "" });
    }
  };
  return (
    <div
      className="relative flex flex-col w-full lg:w-117.75 lg:min-h-171 overflow-hidden rounded-[50px] shadow-2xl px-8 py-10 lg:px-10 lg:py-11 gap-12 bg-linear-to-br from-[#390D8E]/50 to-[#390D8E]"
      dir="rtl"
    >
      <div className="relative z-10 flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-white">أرسل لنا رسالة</h2>
        <p className="text-[#CBB0FF]">يسعدنا تواصلك معنا</p>
      </div>

      <form
        action={handleSubmit}
        className="relative z-10 flex flex-col flex-1 items-start space-y-7"
      >
        <FormField
          name="name"
          label="الاسم بالكامل"
          type="text"
          placeholder="أدخل اسمك بالكامل"
          value={formData.name}
          onChange={handleChange}
        />
        {/* عرض خطأ الاسم */}
        {status?.errors?.name && (
          <p className="text-red-300 text-xs">{status.errors.name[0]}</p>
        )}

        <FormField
          name="email"
          label="الإيميل"
          type="email"
          placeholder="أدخل بريدك الإلكتروني"
          value={formData.email}
          onChange={handleChange}
        />
        {/* عرض خطأ الإيميل */}
        {status?.errors?.email && (
          <p className="text-red-300 text-xs">{status.errors.email[0]}</p>
        )}

        <FormTextArea
          name="message"
          label="كيف يمكننا مساعدتك"
          placeholder="أدخل رسالتك..."
          value={formData.message}
          onChange={handleChange}
        />
        {/* عرض خطأ الرسالة */}
        {status?.errors?.message && (
          <p className="text-red-300 text-xs">{status.errors.message[0]}</p>
        )}

        <div className="flex flex-col items-start w-full gap-8 mt-auto">
          <SubmitButton disabled={isLoading} />

          {/* رسالة النجاح أو الخطأ العام */}
          {status && (
            <p
              className={`text-sm ${status.success ? "text-green-300" : "text-red-300"}`}
            >
              {status.message}
            </p>
          )}

          <p className="pr-4 text-sm font-normal text-white opacity-90">
            عادةً نرد خلال 24 ساعة
          </p>
        </div>
      </form>
    </div>
  );
}
