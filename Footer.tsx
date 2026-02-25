"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-neutral text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold mb-4">NexRoute&nbsp;Pro</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            منصة متكاملة لإدارة عمليات الشحن للتجارة الإلكترونية في الشرق الأوسط وشمال أفريقيا.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#features" className="hover:text-white">الميزات</a></li>
            <li><a href="#pricing" className="hover:text-white">الأسعار</a></li>
            <li><a href="#" className="hover:text-white">المدونة</a></li>
            <li><a href="#" className="hover:text-white">تواصل معنا</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">الموارد</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">وثائق الاستخدام</a></li>
            <li><a href="#" className="hover:text-white">الأسئلة الشائعة</a></li>
            <li><a href="#" className="hover:text-white">الدعم الفني</a></li>
            <li><a href="#" className="hover:text-white">الشروط والأحكام</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">اشترك في النشرة</h4>
          <p className="text-sm text-gray-300 mb-4">احصل على آخر الأخبار والعروض مباشرة إلى بريدك.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="بريدك الإلكتروني"
              className="input input-bordered w-full text-neutral"
            />
            <button type="submit" className="btn btn-primary">اشترك</button>
          </form>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/30 hover:bg-primary/50">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/30 hover:bg-primary/50">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/30 hover:bg-primary/50">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} NexRoute&nbsp;Pro. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}