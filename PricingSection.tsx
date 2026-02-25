"use client";

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const plans = [
  {
    name: 'مجاني',
    price: 0,
    shipmentLimit: 30,
    features: [
      'تجميع الطلبات من منصتين',
      'مقارنة أسعار الشحن الأساسية',
      'توليد بوليصة شحن واحدة في كل مرة',
      'دعم عبر البريد الإلكتروني فقط',
    ],
  },
  {
    name: 'ستاندرد',
    price: 99,
    shipmentLimit: 150,
    features: [
      'تجميع الطلبات من أربع منصات',
      'محرك مقارنة أسعار متقدم',
      'توليد بوليصات مجمعة',
      'دعم عبر الدردشة',
    ],
  },
  {
    name: 'برو',
    price: 199,
    shipmentLimit: 599,
    features: [
      'كل ميزات ستاندرد',
      'تنبيهات ورسائل واتساب',
      'تقارير وتحليلات متقدمة',
      'دعم على مدار الساعة',
    ],
  },
  {
    name: 'المؤسسات',
    price: null,
    shipmentLimit: null,
    features: [
      'خطط مخصصة لكبار العملاء',
      'تكاملات مخصصة مع الأنظمة',
      'مدير حساب مخصص',
      'ميزات وأمان متقدم',
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          خطط الأسعار
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className="card border border-gray-200 rounded-xl p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  {plan.name}
                </h3>
                <div className="text-center mb-4">
                  {plan.price === null ? (
                    <span className="text-4xl font-semibold text-primary">مخصص</span>
                  ) : (
                    <span className="text-4xl font-semibold text-primary">
                      <CountUp end={plan.price} duration={1.5} />
                      <span className="text-lg font-normal"> ر.س/شهر</span>
                    </span>
                  )}
                </div>
                {plan.shipmentLimit && (
                  <p className="text-center text-neutral-600 mb-4">
                    عدد الشحنات الشهري: <strong>{plan.shipmentLimit}</strong>
                  </p>
                )}
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">✓</span>
                      <span className="text-neutral-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="btn btn-primary w-full mt-auto">
                {plan.price === 0 ? 'ابدأ مجاناً' : plan.price ? 'اختر الخطة' : 'تواصل معنا'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}