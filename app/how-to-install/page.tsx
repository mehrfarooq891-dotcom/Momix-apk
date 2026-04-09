import Image from "next/image";
import { CheckCircle2, AlertTriangle, Smartphone, Settings, Download, Play } from "lucide-react";

export const metadata = {
  title: "How to Install Momix APK on Android & Firestick (Step-by-Step)",
  description: "Learn how to install Momix APK on your Android phone, Firestick, and Smart TV. Follow our easy step-by-step guide with screenshots.",
};

export default function InstallPage() {
  const steps = [
    {
      title: "Download the APK",
      icon: <Download className="text-primary" />,
      desc: "First, you need to download the latest version of Momix APK from our official download page. Make sure the download is complete before proceeding.",
      tip: "Check your 'Downloads' folder in your file manager."
    },
    {
      title: "Enable Unknown Sources",
      icon: <Settings className="text-accent" />,
      desc: "Go to your Android Settings > Security (or Privacy) and look for 'Install Unknown Apps'. Toggle the switch for your browser or file manager to allow installation.",
      tip: "On newer Android versions, this is done per-app."
    },
    {
      title: "Install the App",
      icon: <Smartphone className="text-blue-500" />,
      desc: "Open your file manager, find the Momix APK file, and tap on it. Click 'Install' when prompted and wait for the process to finish.",
      tip: "It usually takes less than 30 seconds."
    },
    {
      title: "Launch & Enjoy",
      icon: <Play className="text-green-500" fill="currentColor" />,
      desc: "Once installed, click 'Open' or find the Momix icon on your home screen. You can now start streaming your favorite movies and shows for free!",
      tip: "No login or registration is required."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">How to Install <span className="text-primary">Momix APK</span></h1>
          <p className="text-xl text-zinc-400">Follow our simple guide to get Momix running on your device in minutes.</p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#141414] rounded-3xl border border-white/5 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center font-bold text-xl text-primary border border-white/10">
                      {index + 1}
                    </div>
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
                  <div className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0 mt-1" />
                    <p className="text-sm text-zinc-300 font-medium">Pro Tip: {step.tip}</p>
                  </div>
                </div>
                <div className="bg-white/5 relative aspect-video md:aspect-auto flex items-center justify-center p-8">
                  <div className="w-full h-full relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image 
                      src={`https://picsum.photos/seed/install-step-${index}/600/400`} 
                      alt={step.title} 
                      fill 
                      className="object-cover opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Troubleshooting */}
        <div className="mt-24 space-y-8">
          <h2 className="text-3xl font-bold text-center">Troubleshooting Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-[#141414] rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <AlertTriangle size={24} />
                <h3 className="text-xl font-bold">App Not Installed</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                This usually happens if you have an older version of Momix already installed. Uninstall the old version first, clear your cache, and then try installing the new APK.
              </p>
            </div>
            <div className="p-8 bg-[#141414] rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-center gap-3 text-accent">
                <AlertTriangle size={24} />
                <h3 className="text-xl font-bold">Parsing Error</h3>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A parsing error means the APK file was not downloaded completely or is corrupted. Delete the file and download it again using a stable internet connection.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "How to Install Momix APK",
            "description": "Step-by-step guide to install Momix APK on Android devices.",
            "step": steps.map((step, i) => ({
              "@type": "HowToStep",
              "position": i + 1,
              "name": step.title,
              "text": step.desc
            }))
          })
        }}
      />
    </div>
  );
}
