"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  quote: string;
  name: string;
  store: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'نظام NexRoute Pro ساعدنا على تسريع عملية الشحن وتقليل التكلفة. أصبحنا نقارن الأسعار ونختار أفضل خيار بسهولة تامة.',
    name: 'أحمد',
    store: 'متجر الهدايا',
    rating: 5,
  },
  {
    quote:
      'بوليصات الشحن الجاهزة وتحديثات التتبع اللحظية جعلت عملائنا أكثر رضاً. تجربة رائعة بالفعل!',
    name: 'ليلى',
    store: 'أزياء مودرن',
    rating: 5,
  },
  {
    quote:
      'كنا نعاني من متابعة الطلبات يدويًا، ولكن مع NexRoute Pro أصبح كل شيء منظمًا وسهلاً.',
    name: 'سالم',
    store: 'الكترونيات سالم',
    rating: 4,
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          ماذا يقول عملاؤنا
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="card bg-white shadow-md p-8 rounded-lg text-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg mb-4 text-neutral-700 leading-relaxed">
                “{testimonials[index].quote}”
              </p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`mx-0.5 ${i < testimonials[index].rating ? 'text-yellow-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <h4 className="font-semibold text-primary text-lg">
                {testimonials[index].name}
              </h4>
              <span className="text-sm text-neutral-500">{testimonials[index].store}</span>
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-y-0 flex items-center justify-between w-full px-4 pointer-events-none">
            <button onClick={prev} className="btn btn-circle btn-sm bg-primary text-white pointer-events-auto">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={next} className="btn btn-circle btn-sm bg-primary text-white pointer-events-auto">
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}