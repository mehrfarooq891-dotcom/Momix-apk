import { Download, ShieldCheck, Info, FileText, AlertCircle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Download Momix APK v3.2.1 (Latest Version) - 100% Safe",
  description: "Get the official Momix APK download link. Latest version v3.2.1 with no ads, HD quality, and premium unlocked. 100% safe and virus-free.",
};

export default function DownloadPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-5xl">
      <div className="text-center space-y-6 mb-16">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          Download <span className="text-[#e50914]">Momix APK</span>
        </h1>
        <p className="text-xl text-zinc-400">Latest Version v3.2.1 • 100% Safe & Secure</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main Download Card */}
          <div className="bg-[#141414] rounded-[2.5rem] border border-white/5 p-8 md:p-16 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e50914] to-transparent" />
            
            <div className="w-24 h-24 bg-[#e50914] rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-red-900/30">
              <Download size={48} className="text-white" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Momix APK v3.2.1</h2>
              <p className="text-zinc-500 font-medium tracking-widest uppercase text-xs">Official Release • 18 MB</p>
            </div>

            <div className="flex flex-col gap-4">
              <a 
                href="#" 
                className="btn-primary py-6 text-2xl animate-pulse"
              >
                <Download size={28} />
                Download Now (Direct)
              </a>
              <a 
                href="#" 
                className="bg-white/5 hover:bg-white/10 border border-white/10 py-4 rounded-full font-bold transition-all text-zinc-400"
              >
                Mirror Link (Mediafire)
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-green-500 text-sm font-bold">
                <ShieldCheck size={18} />
                <span>CLEAN</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="text-zinc-500 text-sm font-mono">MD5: 8f2d3e...9a1b</div>
            </div>
          </div>

          {/* Version History */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <FileText className="text-[#e50914]" />
              Version History
            </h3>
            <div className="bg-[#141414] rounded-2xl border border-white/5 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-zinc-500 text-xs uppercase tracking-widest font-bold">
                  <tr>
                    <th className="px-6 py-4">Version</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="px-6 py-4 font-bold">v3.2.1</td>
                    <td className="px-6 py-4 text-zinc-400">Apr 2026</td>
                    <td className="px-6 py-4"><span className="text-[#e50914] font-bold">Latest</span></td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold">v3.1.5</td>
                    <td className="px-6 py-4 text-zinc-400">Feb 2026</td>
                    <td className="px-6 py-4"><span className="text-zinc-600">Old</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* File Details */}
          <div className="bg-[#141414] rounded-2xl border border-white/5 p-8 space-y-6">
            <h3 className="font-bold flex items-center gap-2 text-white">
              <Info size={18} className="text-[#e50914]" />
              App Information
            </h3>
            <div className="space-y-4 text-sm">
              {[
                { label: "Name", value: "Momix APK" },
                { label: "Size", value: "18 MB" },
                { label: "Android", value: "5.0+" },
                { label: "Category", value: "Entertainment" },
                { label: "Price", value: "Free" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-zinc-500 font-medium">{item.label}</span>
                  <span className="text-white font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-red-600/5 rounded-2xl border border-red-600/20 p-8 space-y-4">
            <h3 className="font-bold flex items-center gap-2 text-[#e50914]">
              <AlertCircle size={18} />
              Requirements
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex gap-2">
                <CheckCircle2 size={14} className="text-[#e50914] shrink-0 mt-1" />
                <span>Android 5.0 or higher.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={14} className="text-[#e50914] shrink-0 mt-1" />
                <span>Enable &quot;Unknown Sources&quot;.</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 size={14} className="text-[#e50914] shrink-0 mt-1" />
                <span>Stable internet connection.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
