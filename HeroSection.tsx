"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Image
        src="/images/hero.png"
        alt="شبكة لوجستية"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-snug">
          تبسيط عمليات الشحن للمتاجر الإلكترونية
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
          NexRoute&nbsp;Pro يجمع الطلبات، يقارن الأسعار، يولد بوليصات الشحن، ويتابع الطرود في مكان واحد.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection('features')}
            className="btn btn-primary rounded-full px-8 py-3 text-lg"
          >
            ابدأ الآن مجاناً
          </button>
          <button
            onClick={() => scrollToSection('pricing')}
            className="btn btn-outline border-white text-white rounded-full px-8 py-3 text-lg hover:bg-white/10"
          >
            تعرف على الأسعار
          </button>
        </div>
      </motion.div>
    </section>
  );
}