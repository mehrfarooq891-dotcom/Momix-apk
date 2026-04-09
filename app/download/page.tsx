import Link from "next/link";
import { Download, ShieldCheck, Info, FileText, CheckCircle2, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Download Momix APK Latest Version 2025 (v3.2.1)",
  description: "Get the official Momix APK download link. Latest version v3.2.1 with no ads, HD quality, and premium unlocked. 100% safe and virus-free.",
};

export default function DownloadPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Download <span className="text-primary">Momix APK</span></h1>
          <p className="text-xl text-zinc-400">Get the latest version v3.2.1 for Android. Ad-free streaming starts here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2 space-y-8">
            {/* Main Download Card */}
            <div className="bg-[#141414] rounded-3xl border border-white/5 p-8 md:p-12 text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <div className="w-24 h-24 bg-primary rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-primary/30">
                <Download size={48} className="text-white" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-bold">Momix APK v3.2.1</h2>
                <p className="text-zinc-500">Official Release • 18.4 MB</p>
              </div>

              <div className="flex flex-col gap-4">
                <a 
                  href="#" 
                  className="btn-primary py-6 text-2xl flex items-center justify-center gap-3 animate-pulse-slow"
                >
                  <Download size={28} />
                  Download Now (Direct)
                </a>
                <a 
                  href="#" 
                  className="bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-full font-bold transition-all"
                >
                  Mirror Link 1 (Mediafire)
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                  <ShieldCheck size={18} />
                  <span>Virus Scanned (Clean)</span>
                </div>
                <div className="w-px h-4 bg-white/10" />
                <div className="text-zinc-500 text-sm">MD5: 8f2d3e...9a1b</div>
              </div>
            </div>

            {/* Version History */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <FileText className="text-primary" />
                Version History
              </h3>
              <div className="bg-[#141414] rounded-2xl border border-white/5 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-zinc-500 text-xs uppercase tracking-widest">
                    <tr>
                      <th className="px-6 py-4">Version</th>
                      <th className="px-6 py-4">Date</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="px-6 py-4 font-bold">v3.2.1</td>
                      <td className="px-6 py-4 text-zinc-400">Apr 2025</td>
                      <td className="px-6 py-4"><span className="text-primary font-medium">Current</span></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold">v3.1.5</td>
                      <td className="px-6 py-4 text-zinc-400">Feb 2025</td>
                      <td className="px-6 py-4"><a href="#" className="text-zinc-500 hover:text-white underline">Download</a></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold">v3.0.0</td>
                      <td className="px-6 py-4 text-zinc-400">Dec 2024</td>
                      <td className="px-6 py-4"><a href="#" className="text-zinc-500 hover:text-white underline">Download</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* File Details */}
            <div className="bg-[#141414] rounded-2xl border border-white/5 p-6 space-y-6">
              <h3 className="font-bold flex items-center gap-2">
                <Info size={18} className="text-accent" />
                File Information
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">App Name</span>
                  <span className="text-white font-medium">Momix APK</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">Package</span>
                  <span className="text-white font-medium">com.momix.app</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">Size</span>
                  <span className="text-white font-medium">18.4 MB</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">Android</span>
                  <span className="text-white font-medium">5.0+</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500">Developer</span>
                  <span className="text-white font-medium">Momix Team</span>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <div className="bg-primary/5 rounded-2xl border border-primary/20 p-6 space-y-4">
              <h3 className="font-bold flex items-center gap-2 text-primary">
                <AlertCircle size={18} />
                Prerequisites
              </h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="text-primary shrink-0 mt-1" />
                  <span>Enable &quot;Unknown Sources&quot; in Settings.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="text-primary shrink-0 mt-1" />
                  <span>At least 50MB free storage space.</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 size={14} className="text-primary shrink-0 mt-1" />
                  <span>Stable internet connection for streaming.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
