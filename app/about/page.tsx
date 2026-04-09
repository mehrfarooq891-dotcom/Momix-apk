import { Info, Shield, Target, Users } from "lucide-react";

export const metadata = {
  title: "About Us - Momix APK Official",
  description: "Learn more about Momix APK, our mission to provide free entertainment, and our commitment to user safety and privacy.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">About <span className="text-primary">Momix APK</span></h1>
          <p className="text-xl text-zinc-400">Your #1 source for free premium entertainment on Android.</p>
        </div>

        <div className="prose prose-invert max-w-none space-y-16">
          <section className="space-y-6">
            <div className="flex items-center gap-4 text-primary">
              <Target size={32} />
              <h2 className="text-3xl font-bold m-0">Our Mission</h2>
            </div>
            <p className="text-zinc-400 text-lg leading-relaxed">
              At Momix APK, our mission is simple: to make premium entertainment accessible to everyone, regardless of their financial situation. We believe that high-quality movies, TV shows, and live sports should not be locked behind expensive subscription paywalls.
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We work tirelessly to aggregate the best streaming links from across the web and present them in a clean, user-friendly interface that rivals major streaming platforms.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#141414] rounded-3xl border border-white/5 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold">User Safety</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Safety is our top priority. Every APK file shared on our platform is thoroughly tested and scanned for viruses, malware, and adware. We ensure that your device remains protected while you enjoy your favorite content.
              </p>
            </div>
            <div className="p-8 bg-[#141414] rounded-3xl border border-white/5 space-y-4">
              <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold">Community Driven</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We listen to our users. Our community of millions helps us identify broken links, suggest new features, and keep the app updated. Your feedback is what drives the continuous improvement of Momix.
              </p>
            </div>
          </div>

          <section className="space-y-6 p-12 bg-white/5 rounded-[2.5rem] border border-white/10">
            <div className="flex items-center gap-4 text-accent">
              <Info size={32} />
              <h2 className="text-3xl font-bold m-0">Disclaimer</h2>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed italic">
              MomixAPK.example.com is a review and download site for the Momix application. We do not host any copyrighted content on our servers. All streaming links are aggregated from third-party sources available publicly on the internet. We are not affiliated with the developers of Momix or any of the streaming services mentioned on this site. Use the application at your own discretion and in compliance with your local laws.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
