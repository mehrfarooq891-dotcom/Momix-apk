import { Download, Settings, Smartphone, Play, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata = {
  title: "How to Install Momix APK on Android & Firestick (Step-by-Step)",
  description: "Learn how to install Momix APK on your Android phone, Firestick, and Smart TV. Follow our easy step-by-step guide with screenshots.",
};

export default function InstallPage() {
  const steps = [
    {
      title: "Download the APK",
      icon: <Download className="text-[#e50914]" size={32} />,
      desc: "First, click the download button on our site to get the latest Momix APK file. Ensure the download is 100% complete before opening.",
    },
    {
      title: "Enable Unknown Sources",
      icon: <Settings className="text-[#e50914]" size={32} />,
      desc: "Go to Settings > Security and enable &apos;Unknown Sources&apos;. This allows your Android device to install apps from outside the Play Store.",
    },
    {
      title: "Install the App",
      icon: <Smartphone className="text-[#e50914]" size={32} />,
      desc: "Locate the downloaded APK in your file manager, tap on it, and select &apos;Install&apos;. The process usually takes less than 30 seconds.",
    },
    {
      title: "Launch & Enjoy",
      icon: <Play className="text-[#e50914]" size={32} fill="currentColor" />,
      desc: "Once installed, open the app from your home screen. You can now start streaming movies and shows in HD for free!",
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          How to <span className="text-[#e50914]">Install</span>
        </h1>
        <p className="text-xl text-zinc-400">Follow these simple steps to get started on Android.</p>
      </div>

      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-[#141414] rounded-3xl border border-white/5 p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:border-red-600/20 transition-all">
            <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-[#e50914] font-black text-2xl">0{index + 1}</span>
                <h2 className="text-2xl font-bold">{step.title}</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-green-500 text-sm font-bold">
                <CheckCircle2 size={16} />
                <span>Verified Step</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Troubleshooting */}
      <div className="mt-24 space-y-8 p-12 bg-red-600/5 border border-red-600/10 rounded-[3rem]">
        <div className="flex items-center gap-4 justify-center md:justify-start">
          <AlertTriangle className="text-[#e50914]" size={40} />
          <h2 className="text-3xl font-black tracking-tighter">Troubleshooting</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">App Not Installed</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              If you see this error, ensure you have uninstalled any previous version of Momix. Also, check if you have enough storage space.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Parse Error</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              This usually means the APK file was not downloaded correctly. Delete the file and try downloading it again over a stable connection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
