"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/works", label: "Works" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>

        {/* PC: インラインのナビ */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-black font-medium"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* スマホ: ハンバーガーボタン */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center text-2xl text-gray-700 hover:text-black transition-colors"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* スマホ: 開閉するメニュー */}
      {open && (
        <nav className="md:hidden border-t border-gray-100 bg-white">
          <div className="max-w-4xl mx-auto px-6 py-2 flex flex-col">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base transition-colors ${
                  pathname === href
                    ? "text-black font-medium"
                    : "text-gray-500 hover:text-black"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
