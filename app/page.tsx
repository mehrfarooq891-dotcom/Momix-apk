import Link from "next/link";
import { Download, Play, ShieldCheck, Zap, Tv, Smartphone, Globe, Lock, Ban, DownloadCloud } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export default function HomePage() {
  const features = [
    {
      title: "Free Streaming",
      desc: "Access premium movies and shows from top OTT platforms without any subscription fees.",
      icon: <Tv className="text-[#e50914]" size={32} />,
    },
    {
      title: "HD Quality",
      desc: "Stream your favorite content in 720p, 1080p, and even 4K resolution with multiple server links.",
      icon: <Zap className="text-[#e50914]" size={32} />,
    },
    {
      title: "No Login Required",
      desc: "Start watching immediately. No registration, no email, and no personal data needed.",
      icon: <Lock className="text-[#e50914]" size={32} />,
    },
    {
      title: "No Ads",
      desc: "Enjoy uninterrupted entertainment with our built-in ad-blocker that removes all annoying pop-ups.",
      icon: <Ban className="text-[#e50914]" size={32} />,
    },
    {
      title: "Offline Download",
      desc: "Download your favorite episodes and movies directly to your storage for offline viewing.",
      icon: <DownloadCloud className="text-[#e50914]" size={32} />,
    },
    {
      title: "Multi-language",
      desc: "Content available in multiple languages including English, Hindi, Spanish, and more.",
      icon: <Globe className="text-[#e50914]" size={32} />,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Download APK",
      desc: "Click the download button to get the latest Momix APK file safely from our servers.",
    },
    {
      step: "02",
      title: "Enable Unknown Sources",
      desc: "Go to your device settings and allow installation from unknown sources to proceed.",
    },
    {
      step: "03",
      title: "Install & Enjoy",
      desc: "Open the downloaded file, tap install, and start streaming your favorite content for free.",
    },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 md:pt-24 text-center space-y-8">
        <div className="flex flex-wrap justify-center gap-3">
          {["v3.2.1", "Free", "No Ads", "HD"].map((badge) => (
            <span key={badge} className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-zinc-400">
              {badge}
            </span>
          ))}
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
          Momix APK - <br />
          <span className="text-[#e50914]">Free HD Streaming App</span>
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          The ultimate streaming companion for Android. Get instant access to thousands of movies, web series, and live TV channels in HD quality—completely free.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <Link href="/download" className="btn-primary text-xl px-12 py-5">
            <Download size={24} />
            Download Now
          </Link>
          <Link href="/how-to-install" className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-bold flex items-center justify-center gap-2 transition-all">
            <Play size={20} fill="currentColor" />
            How to Install
          </Link>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-zinc-500 pt-4">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-green-500" />
            <span>Virus Checked</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-[#e50914]" />
            <span>Fast Servers</span>
          </div>
        </div>
      </section>

      {/* App Info Bar */}
      <section className="bg-[#141414] border-y border-white/5 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Version</p>
              <p className="text-white font-black text-xl">3.2.1</p>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Size</p>
              <p className="text-white font-black text-xl">18 MB</p>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Android</p>
              <p className="text-white font-black text-xl">5.0+</p>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Status</p>
              <p className="text-green-500 font-black text-xl">Working</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black tracking-tighter">Premium Features</h2>
          <p className="text-zinc-500">Everything you need for a perfect streaming experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="card-base space-y-4">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Install Guide */}
      <section className="bg-[#050505] py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black tracking-tighter">How to Install</h2>
            <p className="text-zinc-500">Simple 3-step guide to get started.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="text-center space-y-6 relative">
                <div className="text-6xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 select-none">
                  {step.step}
                </div>
                <div className="w-20 h-20 bg-[#e50914] rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-red-900/20 relative z-10">
                  {i === 0 && <Download size={32} />}
                  {i === 1 && <Smartphone size={32} />}
                  {i === 2 && <Play size={32} fill="currentColor" />}
                </div>
                <h3 className="text-2xl font-bold relative z-10">{step.title}</h3>
                <p className="text-zinc-500 leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-black tracking-tighter">Common Questions</h2>
          <p className="text-zinc-500">Find answers to your doubts about Momix APK.</p>
        </div>
        <FAQAccordion limit={5} />
      </section>

      {/* Bottom CTA */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/5 rounded-[3rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e50914]/5 blur-[100px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#e50914]/5 blur-[100px] rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Ready to Stream <br />
            <span className="text-[#e50914]">Your Favorite Shows?</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-xl mx-auto">
            Join millions of users and start watching premium content for free today.
          </p>
          <div className="flex justify-center pt-4">
            <Link href="/download" className="btn-primary text-2xl px-16 py-6">
              <Download size={32} />
              Download Momix APK
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
