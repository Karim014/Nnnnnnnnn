"use client";

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

interface Carrier {
  name: string;
  base: number;
  factor: number;
  rating: number;
  delivery: string;
}

const carriers: Carrier[] = [
  { name: 'أرامكس', base: 12, factor: 1.2, rating: 4.5, delivery: '1-5 أيام' },
  { name: 'سمسا', base: 10, factor: 1.1, rating: 4.2, delivery: '1-7 أيام' },
  { name: 'دي إتش إل', base: 14, factor: 1.3, rating: 4.8, delivery: '1-5 أيام' },
  { name: 'جي آند تي', base: 9, factor: 1.0, rating: 4.0, delivery: '1-3 أيام' },
];

export default function ComparisonSection() {
  const [weight, setWeight] = useState(5);
  const prices = useMemo(() => {
    return carriers.map((c) => {
      const price = c.base + c.factor * weight;
      return { ...c, price: parseFloat(price.toFixed(2)) };
    });
  }, [weight]);
  const bestPrice = Math.min(...prices.map((p) => p.price));

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          قارن شركات الشحن لحظياً
        </motion.h2>
        <p className="text-center text-neutral-600 mb-8 max-w-2xl mx-auto">
          اختر وزن الشحنة وشاهد الأسعار المتوقعة لوجهة الرياض، السعودية. يتم حساب الأسعار تقريبياً لأغراض العرض فقط.
        </p>
        <div className="flex flex-col items-center gap-6 mb-8">
          <label className="text-neutral-700 font-medium">
            وزن الشحنة (كجم): {weight}
          </label>
          <input
            type="range"
            min={1}
            max={20}
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="range range-primary w-full max-w-md"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th className="bg-secondary">الناقل</th>
                <th className="bg-secondary">السعر (ر.س)</th>
                <th className="bg-secondary">المدة</th>
                <th className="bg-secondary">التقييم</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, idx) => (
                <tr
                  key={idx}
                  className={row.price === bestPrice ? 'bg-primary/10 font-bold' : ''}
                >
                  <td>{row.name}</td>
                  <td>{row.price.toFixed(2)}</td>
                  <td>{row.delivery}</td>
                  <td>
                    {Array.from({ length: 5 }, (_, i) => {
                      const full = i + 1 <= Math.floor(row.rating);
                      const half = !full && i + 0.5 <= row.rating;
                      return (
                        <span key={i} className="text-yellow-500 text-lg">
                          {full ? '★' : half ? '☆' : '☆'}
                        </span>
                      );
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-neutral-500 mt-4">
          * سيقوم محرك مقارنة الأسعار لدينا بتحديث الأسعار الفعلية حسب الوزن والوجهة الحقيقية الخاصة بك.
        </p>
      </div>
    </section>
  );
}