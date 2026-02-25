"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const faqs = [
  {
    q: 'كيف أقوم بربط متجري؟',
    a: 'يمكنك ربط متجرك بسهولة من خلال لوحة التحكم. اذهب إلى قسم الإعدادات واختر المنصة المناسبة مثل زد أو سلة أو شوبيفاي ثم اتبع التعليمات لإضافة مفاتيح API.'
  },
  {
    q: 'ما هي شركات الشحن التي تدعمونها؟',
    a: 'ندعم حالياً أرامكس، سمسا، دي إتش إل، وجي آند تي، مع خطط لإضافة المزيد من الشركات قريباً.'
  },
  {
    q: 'كيف يتم حساب الأسعار؟',
    a: 'يعتمد حساب الأسعار على وزن الشحنة، المدينة والبلد، إضافة إلى رسوم ثابتة لكل شركة. نقارن الأسعار في الوقت الفعلي لنوفر لك الخيار الأنسب.'
  },
  {
    q: 'هل يمكنني تتبع الشحنات في الوقت الفعلي؟',
    a: 'نعم، يتم تحديث حالة الشحنات تلقائياً عبر التكامل مع APIs شركات الشحن، ويمكنك أيضاً إرسال تحديثات للعملاء عبر الرسائل.'
  },
  {
    q: 'ماذا عن الدفع عند الاستلام؟',
    a: 'نوفر نظاماً متكاملاً لتتبع المدفوعات عند التسليم ومطابقتها مع الطلبات، مع تقارير مفصلة لكل فترة.'
  },
  {
    q: 'كيف أنشئ بوليصات الشحن؟',
    a: 'قم باختيار الطلبات من لوحة الطلبات وانقر على “توليد بوليصة”. سيقوم النظام بإنشاء ملف PDF جاهز للطباعة متضمناً باركود التتبع.'
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          الأسئلة الشائعة
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-right bg-secondary hover:bg-secondary/80 transition-colors focus:outline-none"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-medium text-primary">{item.q}</span>
                <span className="ml-2 text-primary text-xl">
                  {open === idx ? '-' : '+'}
                </span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={open === idx ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-4 overflow-hidden"
              >
                <p className="py-3 text-neutral-600 leading-relaxed">{item.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}