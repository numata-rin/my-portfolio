import Link from "next/link";

const footerLinks = [
  { href: "/", label: "ホームを見る" },
  { href: "/about", label: "自己紹介を見る" },
  { href: "/skills", label: "スキルを見る" },
  { href: "/works", label: "制作物を見る" },
  { href: "/experience", label: "経歴を見る" },
  { href: "/contact", label: "問い合わせ先を見る" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto py-6">
      <div className="max-w-4xl mx-auto px-6">
        {/* 3行2列でページリンクを中央寄せで配置 */}
        <nav className="grid grid-cols-2 grid-rows-3 gap-x-12 gap-y-2 max-w-xs mx-auto text-center">
          {footerLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm text-white hover:text-gray-300 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mt-5 text-xs text-gray-400 text-center">© 2026 Numata Rin</div>
      </div>
    </footer>
  );
}
