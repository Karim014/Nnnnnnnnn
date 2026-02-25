"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };
  const navItems = [
    { href: '/', label: 'الرئيسية' },
    { href: '/dashboard', label: 'لوحة التحكم' },
    { href: '/orders', label: 'الطلبات' },
    { href: '/shipments', label: 'الشحنات' },
    { href: '/waybills', label: 'بوليصات الشحن' },
    { href: '/compare', label: 'المقارنة' },
    { href: '/notifications', label: 'الإشعارات' },
    { href: '/cod', label: 'الدفع عند التسليم' },
    { href: '/analytics', label: 'التحليلات' },
    { href: '/account', label: 'الإعدادات' },
  ];
  return (
    <nav className="bg-white dark:bg-neutral shadow-md fixed top-0 right-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-primary font-bold text-xl">NexRoute</Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-ghost text-primary hidden sm:flex"
            aria-label="Toggle dark mode"
          >
            ☀︎/🌙
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden btn btn-ghost"
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
        <ul className={`sm:flex sm:static absolute top-full right-0 left-0 bg-white dark:bg-neutral shadow-md sm:shadow-none sm:bg-transparent sm:dark:bg-transparent px-4 sm:px-0 py-4 sm:py-0 space-y-2 sm:space-y-0 sm:space-x-4 sm:flex-row flex-col ${open ? 'flex' : 'hidden'}`}
        >
          {navItems.map((item) => (
            <li key={item.href} className="">
              <Link
                href={item.href}
                className={`block px-2 py-1 rounded-md text-sm sm:text-base ${pathname === item.href ? 'bg-primary text-white' : 'text-neutral-700 dark:text-gray-200 hover:bg-primary hover:text-white'}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}