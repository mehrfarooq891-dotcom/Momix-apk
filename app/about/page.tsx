import { ShieldCheck, Users, Target, AlertCircle } from "lucide-react";

export const metadata = {
  title: "About Us - Momix APK Official Review & Guide",
  description: "Learn about the mission behind Momix APK. We provide safe, updated, and honest reviews of the best streaming apps for Android.",
};

export default function AboutPage() {
  const values = [
    {
      title: "User Safety",
      icon: <ShieldCheck className="text-[#e50914]" size={32} />,
      desc: "We scan every APK file with multiple antivirus engines before sharing it with our users."
    },
    {
      title: "Community First",
      icon: <Users className="text-[#e50914]" size={32} />,
      desc: "Our guides are built based on real user feedback and troubleshooting experiences."
    },
    {
      title: "Honest Reviews",
      icon: <Target className="text-[#e50914]" size={32} />,
      desc: "We provide unbiased information about the app's features, pros, and cons."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="text-center space-y-6 mb-24">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          About <span className="text-[#e50914]">Momix APK</span>
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          We are dedicated to providing the most reliable information and safe download links for the Momix streaming application.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {values.map((value, i) => (
          <div key={i} className="card-base text-center space-y-4">
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold">{value.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{value.desc}</p>
          </div>
        ))}
      </div>

      <div className="space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-black tracking-tighter">Our Mission</h2>
          <p className="text-zinc-400 leading-relaxed text-lg">
            In a world where premium streaming subscriptions are becoming increasingly expensive, we believe everyone deserves access to high-quality entertainment. Our mission is to provide a safe and easy way for users to enjoy their favorite movies and shows without financial barriers.
          </p>
        </section>

        <section className="space-y-6 p-12 bg-[#141414] rounded-[3rem] border border-white/5">
          <div className="flex items-center gap-3 text-[#e50914]">
            <AlertCircle size={24} />
            <h2 className="text-2xl font-bold">Legal Disclaimer</h2>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Momixapk.example.com is an independent review and guide website. We are not the developers of the Momix application, nor are we affiliated with them in any official capacity. We do not host any copyrighted files on our servers. All download links provided are for educational and informational purposes only. Users are responsible for their own actions and should comply with local laws regarding streaming and copyright.
          </p>
        </section>
      </div>
    </div>
  );
}
