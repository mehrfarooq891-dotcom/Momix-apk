import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <Link href="/" className="text-2xl font-black tracking-tighter">
              <span className="text-[#e50914]">MOMIX</span>
              <span className="text-white">APK</span>
            </Link>
            <p className="text-zinc-500 max-w-sm">
              The ultimate streaming destination for Android users. Watch movies, shows, and live TV in HD for free.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/download" className="hover:text-white">Download APK</Link></li>
              <li><Link href="/how-to-install" className="hover:text-white">Install Guide</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-zinc-500 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">DMCA</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-zinc-600 text-xs">
          <p>© {new Date().getFullYear()} Momix APK. All rights reserved.</p>
          <p className="mt-2">Disclaimer: We are not affiliated with Momix. This is a review and guide site.</p>
        </div>
      </div>
    </footer>
  );
}
