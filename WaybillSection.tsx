"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines, faBarcode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function WaybillSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          توليد بوليصات الشحن بسهولة
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <motion.div
            className="flex-1 card bg-white shadow-md p-6 rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              قوالب مخصصة لبوليصات الشحن
            </h3>
            <p className="text-neutral-700 mb-4">
              أنشئ بوليصة شحن تحتوي على جميع تفاصيل الطلب: عنوان العميل، المنتج، السعر، وباركود التتبع.
              يدعم النظام إنشاء بوليصات فردية أو مجمعة للطباعة بكميات كبيرة.
            </p>
            <ul className="space-y-2 text-neutral-600 list-disc list-inside">
              <li>قوالب تصميم قابلة للتخصيص</li>
              <li>توليد باركود قابل للمسح</li>
              <li>تصدير بصيغة PDF جاهزة للطباعة</li>
              <li>حفظ في التخزين السحابي مع رابط تحميل</li>
            </ul>
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <FontAwesomeIcon icon={faFileLines} className="text-primary text-8xl mb-4" />
            <FontAwesomeIcon icon={faBarcode} className="text-primary text-6xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}