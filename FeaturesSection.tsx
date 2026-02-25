"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked, faTruck, faFilePdf, faMapLocationDot, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const features = [
  {
    icon: faBoxesStacked,
    title: 'تجميع الطلبات',
    description: 'استقبل طلباتك من منصات متعددة مثل زد وسلة وشوبيفاي وووكومرس في مكان واحد.'
  },
  {
    icon: faTruck,
    title: 'مقارنة أسعار الشحن',
    description: 'قارن بين أكثر من أربع شركات شحن واعرف الأسعار ووقت التوصيل المناسب لعملائك.'
  },
  {
    icon: faFilePdf,
    title: 'توليد بوليصات الشحن',
    description: 'أنشئ بوليصات شحن جاهزة للطباعة بخطوة واحدة واحصل على الباركود بسهولة.'
  },
  {
    icon: faMapLocationDot,
    title: 'تتبع الطرود',
    description: 'تابع حالة الشحنات في الوقت الفعلي وابقِ عملاءك على علم بموقع الطرد.'
  },
  {
    icon: faMoneyBillWave,
    title: 'إدارة الدفع عند الاستلام',
    description: 'سجّل المدفوعات عند التسليم وقم بالمطابقة بين التحصيلات والمبيعات بكل سهولة.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          المزايا الرئيسية
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              className="card bg-white shadow-lg rounded-lg p-6 flex flex-col items-start hover:-translate-y-1 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full mb-4">
                <FontAwesomeIcon icon={feat.icon} size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">
                {feat.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}