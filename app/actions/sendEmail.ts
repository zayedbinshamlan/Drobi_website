"use server";

import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const ContactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, "الاسم مطلوب")
    .min(2, "الاسم يجب أن يكون أكثر من حرفين"),
    
  email: z.string()
    .trim()
    .min(1, "البريد الإلكتروني مطلوب")
    .email("البريد الإلكتروني غير صالح"),
    
  message: z.string()
    .trim()
    .min(1, "الرسالة مطلوبة")
    .min(10, "الرسالة يجب أن تكون أكثر من 10 حروف"),
});

export async function sendEmail(formData: FormData) {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "يوجد خطأ في البيانات المدخلة.",
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    await resend.emails.send({
      from: 'Drobi <info@drobi.sa>',
      to: 'info@drobi.sa',
      replyTo: email,
      subject: `[نموذج تواصل] رسالة من ${name}`,
      html: `
<div style="font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; direction: rtl; text-align: right; line-height: 1.6; color: #333;">
<h2 style="color: #390D8E;">رسالة جديدة عبر نموذج التواصل في موقع Drobi</h2>
         <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد:</strong> ${email}</p>
          <p><strong>الرسالة:</strong></p>
          <p style="background: #f4f4f4; padding: 10px;">${message}</p>
        </div>
      `,
    });

    return {
      success: true, message: "تم استلام رسالتك بنجاح! فريقنا سيتواصل معك في أقرب وقت."
    };
  } catch (error) {
    console.error("Email Error:", error);

    return {
      success: false,
      message: "عذراً، تعذر إرسال الرسالة حالياً. يرجى المحاولة لاحقاً."
    };
  }
}