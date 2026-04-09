"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 w-full p-4 bg-[#141414]/90 backdrop-blur-lg border-t border-white/10 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/download"
        className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg"
      >
        <Download size={20} />
        Download Momix APK
      </Link>
    </div>
  );
}
