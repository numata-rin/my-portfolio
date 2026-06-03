"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  { src: "/about-images/image-company.webp", alt: "学内カンパニー" },
  { src: "/about-images/image-dev.webp", alt: "開発" },
  { src: "/about-images/image-study.webp", alt: "学習" },
];

export default function AboutImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fade-in-1 px-6 pt-4">
      <div className="relative w-full h-[48vh] overflow-hidden bg-gray-100 rounded-sm">
        {images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className={`object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
      </div>
    </div>
  );
}
