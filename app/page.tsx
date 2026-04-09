import Link from "next/link";
import Image from "next/image";
import { Download, Star, ShieldCheck, Zap, Globe, Tv, Smartphone, Play } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import ReviewCard from "@/components/ReviewCard";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import FAQAccordion from "@/components/FAQAccordion";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium">
              <Star size={14} fill="currentColor" />
              <span>Rated 4.8/5 by 2M+ Users</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]">
              Watch Anything, <br />
              <span className="text-primary">Anywhere, Anytime.</span>
            </h1>
            
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              Momix APK is the ultimate streaming companion for Android. Get instant access to thousands of movies, web series, and live TV channels in HD quality—completely free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/download" className="btn-primary text-xl px-10 py-5 flex items-center justify-center gap-3 animate-pulse-slow">
                <Download size={24} />
                Download Now
              </Link>
              <Link href="/how-to-install" className="btn-gold text-xl px-10 py-5 flex items-center justify-center gap-3">
                <Play size={24} fill="currentColor" />
                How to Use
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-green-500" />
                <span>Virus Checked</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-accent" />
                <span>Fast Servers</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-blue-400" />
                <span>Global Content</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000">
            <div className="relative z-10 glass rounded-[2.5rem] p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-white/5 aspect-[9/19] relative">
                <Image 
                  src="https://picsum.photos/seed/momix-ui/400/800" 
                  alt="Momix App Interface" 
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute bottom-8 left-0 w-full px-6 space-y-4">
                  <div className="w-12 h-1 bg-primary rounded-full" />
                  <h3 className="text-2xl font-bold">Premium Experience</h3>
                  <p className="text-sm text-zinc-400">Stream your favorite content in 4K resolution without any interruptions.</p>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full" />
          </div>
        </div>
      </section>

      {/* App Info Bar */}
      <section className="bg-[#141414] border-y border-white/5 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Version</p>
              <p className="text-white font-bold text-lg">v3.2.1 (Latest)</p>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">File Size</p>
              <p className="text-white font-bold text-lg">18.4 MB</p>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Last Updated</p>
              <p className="text-white font-bold text-lg">Today</p>
            </div>
            <div className="space-y-1">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Android Req.</p>
              <p className="text-white font-bold text-lg">5.0 and Up</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose <span className="text-primary">Momix APK?</span></h2>
            <p className="text-zinc-400">Experience entertainment like never before with these premium features available for free.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Tv className="text-primary" />}
              title="Free Streaming"
              description="Access premium content from Netflix, Disney+, and HBO without paying a single penny."
            />
            <FeatureCard 
              icon={<Zap className="text-accent" />}
              title="HD Quality"
              description="Watch movies and shows in 720p, 1080p, and even 4K resolution with multiple server links."
            />
            <FeatureCard 
              icon={<ShieldCheck className="text-green-500" />}
              title="No Login Required"
              description="Start watching immediately. No registration, no email, and no personal data needed."
            />
            <FeatureCard 
              icon={<Play className="text-blue-500" />}
              title="Ad-Free Experience"
              description="Enjoy uninterrupted entertainment with our built-in ad-blocker that removes all annoying pop-ups."
            />
            <FeatureCard 
              icon={<Download className="text-purple-500" />}
              title="Offline Download"
              description="Download your favorite episodes and movies directly to your storage for offline viewing."
            />
            <FeatureCard 
              icon={<Globe className="text-orange-500" />}
              title="Multi-language"
              description="Content available in multiple languages including English, Hindi, Spanish, and more."
            />
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">App Screenshots</h2>
              <p className="text-zinc-500">Take a look at the beautiful and intuitive user interface.</p>
            </div>
          </div>
          <ScreenshotGallery />
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">How to Get Started</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2 -z-10" />
            
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center mx-auto text-3xl font-bold shadow-xl shadow-primary/20">1</div>
              <h3 className="text-xl font-bold">Download APK</h3>
              <p className="text-zinc-400">Click the download button to get the latest Momix APK file safely.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto text-3xl font-bold text-black shadow-xl shadow-accent/20">2</div>
              <h3 className="text-xl font-bold">Install on Android</h3>
              <p className="text-zinc-400">Enable &quot;Unknown Sources&quot; in settings and install the downloaded APK file.</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-green-500 rounded-3xl flex items-center justify-center mx-auto text-3xl font-bold shadow-xl shadow-green-500/20">3</div>
              <h3 className="text-xl font-bold">Start Watching</h3>
              <p className="text-zinc-400">Open the app, choose your favorite movie, and enjoy free streaming!</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">What Users Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ReviewCard 
              name="Rahul Sharma"
              rating={5}
              comment="Best app for movies! I was paying for 3 different subscriptions, now I have everything in one place for free. Highly recommended."
              date="2 days ago"
            />
            <ReviewCard 
              name="Sarah Jenkins"
              rating={5}
              comment="The streaming quality is amazing. I watched the latest web series in 4K without any buffering. The UI is also very clean."
              date="1 week ago"
            />
            <ReviewCard 
              name="Amit Patel"
              rating={4}
              comment="Great app, works perfectly on my Firestick. Only issue is sometimes links take a few seconds to load, but otherwise it&apos;s perfect."
              date="3 days ago"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion limit={5} />
          <div className="text-center mt-12">
            <Link href="/faq" className="text-primary font-medium hover:underline">View all 10+ questions →</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10" />
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready to Join 2M+ Happy Streamers?</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Don&apos;t miss out on the latest movies and shows. Download Momix APK now and start your premium journey for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/download" className="btn-primary text-2xl px-12 py-6 flex items-center gap-3">
              <Download size={28} />
              Download Momix v3.2.1
            </Link>
          </div>
          <p className="text-sm text-zinc-500">100% Safe • No Ads • No Login • HD Content</p>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Momix APK",
            "operatingSystem": "Android",
            "applicationCategory": "EntertainmentApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "2150000"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </div>
  );
}
