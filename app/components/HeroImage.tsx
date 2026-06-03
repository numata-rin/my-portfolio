"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images = [
  { src: "/home-images/image-me.webp", alt: "プロフィール" },
  { src: "/about-images/image-company.webp", alt: "学内カンパニー" },
  { src: "/about-images/image-dev.webp", alt: "開発" },
  { src: "/about-images/image-study.webp", alt: "学習" },
];

export default function HeroImage() {
  const [current, setCurrent] = useState(0);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <div className="fade-in-1 px-6 pt-4">
      <div className="relative w-full h-[48vh] overflow-hidden bg-gray-100 rounded-sm">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1448px) calc(100vw - 48px), 1400px"
            className={`object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            {...(i === 0 ? { priority: true } : { loading: "lazy" as const })}
          />
        ))}
      </div>
    </div>
  );
}
