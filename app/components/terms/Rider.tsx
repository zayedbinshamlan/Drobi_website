import React from 'react'

export default function Rider() {
  return (
    <div>
      <article className="space-y-6">
        <header className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 border-r-4 border-[#390D8E] pr-4">
            الشروط والأحكام لاستخدام تطبيق دروبي
          </h2>
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 shadow-sm">
            <p className="text-gray-800 leading-relaxed text-justify font-medium">
              يرجى قراءة هذه الشروط والأحكام بعناية. تتضمن هذه الشروط والأحكام
              معلومات عن حقوقك والتزاماتك ومعلومات مهمة أخرى فيما يتعلق
              باستخدامك لتطبيق دروبي.
            </p>
          </div>
          <p className="text-gray-600 mt-4 leading-relaxed text-sm">
            تشمل هذه الشروط والأحكام (أ) شروط الاستخدام العامة المطبقة على
            استخدامك و (ب) أحكام محددة تتعلق بضريبة القيمة المضافة للرحلات داخل
            المملكة العربية السعودية.
          </p>
        </header>

        {/* 1. العلاقة التعاقدية */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-[#390D8E] mb-4 flex items-center">
            <span className="ml-2">1.</span> العلاقة التعاقدية
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              تحكم هذه الشروط، بما فيها شروط الاستخدام العامة وشروط ضريبة القيمة
              المضافة، وصول أو استخدام الأفراد من داخل المملكة العربية السعودية
              للتطبيقات والمواقع الإلكترونية والمحتويات والمنتجات والخدمات
              ("الخدمات") التي توفرها شركة دروبي.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border-r-4 border-[#390D8E]">
              <p className="font-semibold text-gray-900 mb-2">تنبيه هام:</p>
              <p>
                إن وصولك إلى الخدمات واستخدامها يعتبر موافقة منك على الالتزام
                بهذه الشروط، مما يُنشئ علاقة تعاقدية بينك وبين دروبي. وفي حالة
                عدم موافقتك، لا يجوز لك الحصول على الخدمات. تحل هذه الشروط محل
                أي اتفاقات أو ترتيبات سابقة.
              </p>
            </div>
            <p className="text-sm text-gray-500 italic">
              * يجوز لشركة دروبي تعديل الشروط من حين لآخر، وتسري التعديلات فور
              نشرها. إن استمرار استخدامك للخدمات يعتبر موافقة على الصيغة
              المعدلة.
            </p>
          </div>
        </section>

        {/* 2. الخدمات */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-[#390D8E] mb-6 border-b pb-2">
            <span className="ml-2">2.</span> الخدمات
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            تُشكل الخدمات منصة تقنية تمكّن مستخدمي تطبيقات الجوال الخاصة بشركة
            دروبي لتدبير وجدولة خدمات النقل مع الأطراف الخارجية المستقلة. يتم
            توفير الخدمات لاستخداماتك الشخصية غير التجارية فقط.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* الترخيص */}
            <div className="border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-[#390D8E] font-bold mb-3 text-lg">الترخيص</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                تمنحك دروبي ترخيصاً محدوداً غير حصري، غير قابل للترخيص من
                الباطن، وقابل للإلغاء للوصول إلى التطبيقات على جهازك الشخصي
                واستخدام المحتويات والمعلومات المرتبطة بالخدمة للاستخدام الشخصي
                فقط.
              </p>
            </div>

            {/* الملكية */}
            <div className="bg-[#390D8E] text-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold mb-3 text-lg">الملكية</h4>
              <p className="text-sm opacity-90 leading-relaxed">
                تظل الخدمات وجميع الحقوق المتعلقة بها ملكية خاصة بشركة دروبي. لا
                تمنحك هذه الشروط أي حقوق في الخدمات بخلاف الترخيص المحدود، ولا
                تمنحك حق استخدام الأسماء التجارية أو الشعارات الخاصة بدروبي.
              </p>
            </div>
          </div>
        </section>

        {/* القيود - Red Section */}
        <section className="bg-red-50 p-8 rounded-2xl border border-red-100 mb-10">
          <h3 className="text-xl font-bold text-red-800 mb-4">
            القيود والمحظورات
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "إزالة أي من حقوق الطبع أو العلامات التجارية.",
              "استنساخ الخدمات أو تعديلها أو توزيعها دون إذن.",
              "التلاعب بشفرات التطبيق أو عكس هندستها.",
              "إنشاء برامج نصية بغرض كشط البيانات أو فهرسة الخدمات.",
              "محاولة الدخول غير المصرح به للأنظمة والشبكات.",
              "إعاقة عمل أي جانب من الخدمات بشكل غير ملائم.",
            ].map((text, i) => (
              <li key={i} className="flex items-start text-gray-700 text-sm">
                <span className="text-red-500 ml-2">●</span>
                {text}
              </li>
            ))}
          </ul>
        </section>

        {/* تقديم الخدمات والأطراف الخارجية */}
        <section className="mb-10">
          <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-sm">
            <h4 className="font-bold mb-4 text-[#390D8E] bg-white inline-block px-3 py-1 rounded text-sm">
              أطراف خارجية
            </h4>
            <p className="text-sm leading-relaxed opacity-90 mb-4 text-justify">
              قد يتم توفير الخدمات بالاقتران بخدمات ومحتوى أطراف خارجية (مثل
              Apple, Google, Microsoft) والتي لا تخضع لسيطرة دروبي. تقر بأنه قد
              تسري شروط استخدام وسياسات خصوصية مختلفة على تلك الأطراف.
            </p>
            <div className="text-xs text-gray-400 border-t border-gray-700 pt-4">
              * تقر من جانبك بأن دروبي لا تقدم خدمات النقل مباشرة، بل يتم
              تقديمها بواسطة مقاولين خارجيين مستقلين.
            </div>
          </div>
        </section>

        {/* 3. استخدامك للخدمات */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-[#390D8E] mb-6 border-r-8 border-[#390D8E] pr-5">
            3. استخدامك للخدمات
          </h3>

          <div className="space-y-6">
            {/* حسابات المستخدمين */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                حسابات المستخدمين
              </h4>
              <p className="text-gray-700 leading-relaxed text-justify mb-4">
                يجب التسجيل للحصول على حساب شخصي فعّال والمحافظة عليه. يتطلب ذلك
                أن يكون عمرك <strong>18 عاماً على الأقل</strong> وتقديم معلومات
                دقيقة (الاسم، الجوال، وطريقة دفع صحيحة).
              </p>
              <div className="bg-yellow-50 border-r-4 border-yellow-400 p-4 text-sm text-yellow-800">
                تتحمل المسؤولية الكاملة عن الأنشطة التي تُجرى باسم حسابك، وتوافق
                على الحفاظ على أمان وسرية كلمة المرور.
              </div>
            </div>

            {/* متطلبات المستخدم وسلوكه */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 border border-gray-200 rounded-xl">
                <h5 className="font-bold text-[#390D8E] mb-2">
                  السلوك القانوني
                </h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  تلتزم باستخدام الخدمات لأغراض قانونية فقط. يُحظر التسبب في
                  إزعاج أو مضايقة أو أضرار في الملكية لمقدمي الخدمات أو أي طرف
                  آخر.
                </p>
              </div>
              <div className="p-5 border border-gray-200 rounded-xl">
                <h5 className="font-bold text-[#390D8E] mb-2">إثبات الشخصية</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  قد يُطلب منك تقديم إثبات شخصية للوصول إلى الخدمات، وفي حال
                  الرفض قد تُمنع من استخدام التطبيق.
                </p>
              </div>
            </div>

            {/* الرموز الترويجية والمحتوى */}
            <div className="bg-[#390D8E] text-white p-6 rounded-2xl">
              <h4 className="font-bold mb-3">
                الرموز الترويجية ومحتوى المستخدم
              </h4>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                الرموز الترويجية غير قابلة للبيع أو الدفع النقدي، ويجوز لدروبي
                تعطيلها في أي وقت. أما المحتوى الذي تنشره (تعليقات/صور)، فإنك
                تمنح دروبي رخصة عالمية ودائمة لاستخدامه وتعديله دون الحاجة
                لموافقة إضافية أو دفع مبالغ مالية.
              </p>
            </div>
          </div>
        </section>

        {/* 4. الدفع */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-[#390D8E] mb-6 border-r-8 border-[#390D8E] pr-5">
            4. الدفع
          </h3>

          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              تتفهم أن استخدام الخدمات يؤدي إلى فرض رسوم مقابل الخدمات التي تحصل
              عليها. ستسهل دروبي عملية الدفع نيابة عن مقدم الخدمة الخارجي، وتشمل
              الرسوم الضرائب المعمول بها.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border-t-4 border-[#390D8E] text-center">
                <span className="block font-bold text-gray-900 mb-1">
                  الرسوم نهائية
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  غير قابلة للاسترداد إلا بقرار من دروبي
                </span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-t-4 border-[#390D8E] text-center">
                <span className="block font-bold text-gray-900 mb-1">
                  وقت الذروة
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  قد تزيد الرسوم في أوقات ارتفاع الطلب
                </span>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border-t-4 border-[#390D8E] text-center">
                <span className="block font-bold text-gray-900 mb-1">
                  رسوم الإلغاء
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  قد تُطبق رسوم في حال إلغاء الطلب بعد وصول السائق
                </span>
              </div>
            </div>

            {/* الإصلاح أو التنظيف - Red Alert Section */}
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h4 className="text-red-800 font-bold mb-3 flex items-center">
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                رسوم الإصلاح أو التنظيف
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                تتحمل أنت المسؤولية عن تكلفة إصلاح الأضرار أو التنظيف اللازم في
                مركبات مقدم الخدمات الناشئة عن استخدام حسابك (بخلاف البلى
                العادي). في حال ثبوت الضرر، تحتفظ دروبي بالحق في تحصيل التكلفة
                عبر طريقة الدفع المحددة في حسابك.
              </p>
            </div>
          </div>
        </section>

        {/* القسم الخاص بكاميرات المراقبة والخصوصية */}
        <section className="mb-10">
          <h3 className="text-2xl font-bold text-[#390D8E] mb-6 border-r-8 border-[#390D8E] pr-5">
            استخدام كاميرات لوحة القيادة (Dashcam)
          </h3>
          <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
            <p>
              قد يختار الشركاء السائقون تثبيت كاميرا لوحة القيادة واستخدامها
              لتسجيل المشاوير وتقديم الأدلة إلى شركة دروبي، أو جهات تنفيذ
              القانون، أو شركات التأمين في حالة حدوث مشكلة.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
                <h5 className="font-bold text-gray-900 mb-2">
                  المسؤولية القانونية:
                </h5>
                <p className="text-sm">
                  تتطلب القوانين في بعض المواقع موافقة الراكب على التسجيل. يرجى
                  مراجعة القوانين المحلية لفهم مسؤولياتك.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm">
                <h5 className="font-bold text-gray-900 mb-2">
                  مراجعة اللقطات:
                </h5>
                <p className="text-sm">
                  يجوز للسائقين إرسال التسجيلات لدروبي وفقاً لتقديرهم، وستتخذ
                  الشركة الإجراءات اللازمة بما يتوافق مع شروط الاستخدام.
                </p>
              </div>
            </div>
            <div className="bg-red-50 p-5 rounded-xl border-r-4 border-red-500">
              <p className="text-red-800 font-bold mb-1 italic">
                تنبيه هام جداً:
              </p>
              <p className="text-red-700 text-sm">
                تُعد مشاركة صورة شخص أو تسجيل صوتي أو فيديو أو بثها على وسائل
                التواصل الاجتماعي دون موافقته انتهاكاً للقوانين المحلية وقد
                تتطلب تحقيقاً من فريق السلامة وسلطات إنفاذ القانون.
              </p>
            </div>
          </div>
        </section>

        {/* السياسات الصارمة: المخدرات والأسلحة */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="p-6 bg-gray-900 text-white rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
            <h4 className="text-xl font-bold mb-4">تعاطي المخدرات والكحول</h4>
            <p className="text-sm opacity-90 leading-relaxed">
              يُحظر مطلقاً تعاطي المواد المخدرة أو المشروبات الكحولية أثناء
              استخدام التطبيق. إذا كنت راكباً وتظن أن السائق تحت التأثير، يرجى
              إنهاء المشوار فوراً، مغادرة السيارة، والاتصال بالسلطات المحلية ثم
              إبلاغ فريق دروبي.
            </p>
          </div>
          <div className="p-6 bg-gray-100 border-2 border-dashed border-gray-400 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              حظر الأسلحة النارية
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              يُحظر على الركاب ومرافقيهم، وكذلك الشركاء السائقين، حمل أسلحة
              نارية من أي نوع عند استخدام تطبيقات دروبي، وذلك بالقدر الذي يسمح
              به القانون المعمول به.
            </p>
          </div>
        </section>

        {/* 5. إخلاء المسؤولية وحدودها */}
        <section className="mb-10 p-8 border border-gray-100 shadow-2xl rounded-3xl">
          <h3 className="text-2xl font-bold text-[#390D8E] mb-6 flex items-center">
            <span className="ml-2 text-3xl opacity-20">5.</span> إخلاء
            المسؤولية؛ حدود المسؤولية؛ التعويض
          </h3>
          <div className="space-y-6">
            <div className="bg-blue-50 p-5 rounded-xl text-blue-900 text-sm leading-relaxed border border-blue-100">
              تُقدَّم الخدمات <strong>"على حالتها"</strong> و{" "}
              <strong>"بحسب توافرها"</strong>. تُخلي دروبي مسؤوليتها عن جميع
              الإقرارات الصريحة أو الضمنية التي لم يُنص عليها صراحة، بما في ذلك
              جودة مقدمي الخدمات الخارجيين أو سلامتهم.
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-gray-900">حدود المسؤولية:</h4>
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                لن تكون دروبي مسؤولة عن الأضرار غير المباشرة، العرضية، الخاصة،
                أو التبعية بما فيها خسارة الأرباح أو الإصابة الشخصية الناتجة عن
                استخدام الخدمات. لا تتجاوز مسؤولية دروبي الكلية تجاهك ما نُصَّ
                عليه صراحة في هذه الشروط.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100">
              <h4 className="font-bold text-[#390D8E]">التعويض:</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                توافق على تعويض وإبراء ذمة دروبي ومسؤوليها عن جميع المطالبات
                والنفقات (بما فيها أتعاب المحاماة) الناشئة عن خرقك لهذه الشروط
                أو انتهاكك لحقوق الأطراف الخارجية.
              </p>
            </div>
          </div>
        </section>

        {/* 6. القانون الحاكم والتحكيم */}
        <section className="mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-[#390D8E] inline-block pb-1">
            6. القانون الحاكم والتحكيم
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 p-6 rounded-xl border border-gray-200">
            تخضع هذه الشروط لقوانين <strong>المملكة العربية السعودية</strong>{" "}
            وتفسر وفقاً لها. أي منازعات تنشأ عن هذه الخدمات يجب أن تُحل في
            البداية بصورة إلزامية من خلال إجراءات التسوية، وإذا لم تتم التسوية
            خلال (60) يوماً، يتم اللجوء للأنظمة المعمول بها في المملكة.
          </p>
        </section>

        {/* 7. أحكام أخرى */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-[#390D8E] text-white rounded-2xl">
            <h4 className="font-bold mb-4">الإخطارات والشكاوى</h4>
            <p className="text-xs opacity-90 space-y-2">
              <span className="block italic underline">
                الموقع الإلكتروني: https://drobi.sa/
              </span>
              <span className="block italic underline">
                الايميل: support@drobi-sa.com
              </span>
              <span className="block mt-2 font-light italic">
                يجوز للشركة إرسال إخطارات عبر التطبيق أو البريد المسجل في حسابك.
              </span>
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-4 text-sm">أحكام عامة</h4>
            <ul className="text-xs text-gray-600 space-y-2">
              <li>
                • لا ينشأ أي مشروع مشترك أو شراكة أو توظيف نتيجة لهذا العقد.
              </li>
              <li>
                • لا يجوز لك التنازل عن هذه الشروط دون موافقة مسبقة من دروبي.
              </li>
              <li>• بطلان أي حكم لا يؤثر على قانونية وصحة بقية الأحكام.</li>
            </ul>
          </div>
        </section>

        {/* الختام */}
        <div className="text-center pt-10 border-t border-gray-100">
          <p className="text-gray-400 text-xs">
            تشكل هذه الشروط مجمل ما تم الاتفاق عليه بين الطرفين وتحل محل كافة
            الاتفاقيات السابقة.
          </p>
        </div>
        {/* Footer / Final Note */}
        <footer className="mt-10 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 font-bold">
            الشروط والأحكام المتعلقة بضريبة القيمة المضافة
          </p>
          <div
            className="overflow-hidden rounded-xl border border-gray-200 shadow-sm my-8 bg-white"
            dir="rtl"
          >
            <table className="w-full text-right border-collapse table-fixed">
              <thead>
                <tr className="bg-[#390D8E] text-white">
                  <th className="px-6 py-4 font-bold text-lg w-1/3">الفئة</th>
                  <th className="px-6 py-4 font-bold text-lg w-2/3">
                    الأحكام والشروط
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* الأحكام العامة */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800 align-top">
                    أحكام عامة
                    <p className="text-[14px] text-gray-500 mt-1 font-normal">
                      تنظيم سريان الشروط والموافقة عليها
                    </p>
                  </td>
                  <td className="px-6 py-4 text-gray-700 align-top">
                    <ul className="list-disc pr-4 space-y-2 text-sm">
                      <li>
                        تطبق هذه الشروط والأحكام ("شروط ضريبة القيمة المضافة")
                        اعتبارًا من تاريخ إصدارها، وتظل سارية ما لم يتم إنهاؤها
                        صراحةً من قِبَل دروبي.
                      </li>
                      <li>
                        استمرار استخدامكم لتطبيق دروبي في أو بعد تاريخ تسلُّمكم
                        لشروط ضريبة القيمة المضافة هذه يعني موافقتكم على شروط
                        ضريبة القيمة المضافة هذه.
                      </li>
                      <li>
                        تكون للمصطلحات المستخدمة المعاني المعرّفة في شروط
                        الاستخدام العامة أعلاه، ما لم تُعرَّف صراحةً بشكل مختلف
                        في شروط ضريبة القيمة المضافة هذه.
                      </li>
                    </ul>
                  </td>
                </tr>

                {/* ضريبة القيمة المضافة والتعويضات */}
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-gray-800 align-top">
                    ضريبة القيمة المضافة
                    <p className="text-[14px] text-gray-500 mt-1 font-normal">
                      الضمانات، الخصومات وآلية التعويض
                    </p>
                  </td>
                  <td className="px-6 py-4 text-gray-700 align-top">
                    <ul className="list-disc pr-4 space-y-2 text-sm">
                      <li>
                        لا تقدم دروبي أي ضمانة أو تأكيد بأنه سيتم استرداد قيمة
                        ضريبة القيمة المضافة المفروضة على إجمالي أجرة الرحلة
                        وبالتالي لا يمكن لدروبي ضمان قدرتها على التعويض عن ضريبة
                        القيمة المضافة التي دفعتها.
                      </li>
                      <li>
                        يحق لدروبي خصم المصروفات الإدارية والتكاليف الأخرى (بما
                        في ذلك الغرامات وأي تقييم لضريبة القيمة المضافة غير
                        المدفوعة) .
                      </li>
                      <li>
                        مع مراعاة القوانين في المملكة العربية السعودية، أي تعويض
                        تحصل عليه يرد إليك إلى الحساب على شكل رصيد غير قابل
                        للتحويل و غير قابل للاسترداد نقدًا.
                      </li>
                      <li>
                        يكون هذا الرصيد متاح للاستخدام في المملكة العربية
                        السعودية فقط، وتنتهي صلاحيته بعد عام واحد من إصداره (ما
                        لم تقدّم دروبي خلاف ذلك).
                      </li>
                      <li>
                        توافق على أنه لا يحق لك تعويض ضريبة القيمة المضافة
                        نقدًا.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm">
            بمجرد استخدامك للتطبيق، فإنك تقر بقراءة وفهم والالتزام بكافة الشروط
            المذكورة أعلاه.
          </p>
        </footer>
      </article>
    </div>
  );
}
