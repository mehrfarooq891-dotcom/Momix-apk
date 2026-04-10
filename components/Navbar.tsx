"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Download", href: "/download" },
    { name: "Install", href: "/how-to-install" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter flex items-center gap-1">
          <span className="text-[#e50914]">MOMIX</span>
          <span className="text-white">APK</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-[#e50914] transition-colors px-2 py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/download" className="btn-primary py-2 px-6 text-sm ml-4">
            <Download size={16} />
            Download
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/5 py-6 px-4 space-y-4 animate-in slide-in-from-top duration-300">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="block text-lg font-medium border-b border-white/5 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/download" 
            className="btn-primary w-full"
            onClick={() => setIsOpen(false)}
          >
            <Download size={20} />
            Download APK
          </Link>
        </div>
      )}
    </nav>
  );
}
