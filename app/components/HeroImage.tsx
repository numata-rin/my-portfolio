import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="fade-in-1 px-6 pt-4">
      <div className="relative w-full h-[48vh] overflow-hidden bg-gray-100 rounded-sm">
      <Image
        src="/home-images/image-me.webp"
        alt="プレースホルダー画像"
        fill
        sizes="(max-width: 768px) 100vw, 768px"
        className="object-cover"
        priority
      />
      </div>
    </div>
  );
}
