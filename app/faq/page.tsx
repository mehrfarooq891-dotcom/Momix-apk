import FAQAccordion from "@/components/FAQAccordion";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions - Momix APK Support",
  description: "Find answers to common questions about Momix APK. Safety, installation, updates, and troubleshooting guide for Android users.",
};

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
      <div className="text-center space-y-6 mb-16">
        <div className="w-20 h-20 bg-[#e50914]/10 rounded-3xl flex items-center justify-center mx-auto text-[#e50914] mb-8">
          <HelpCircle size={48} />
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
          Common <span className="text-[#e50914]">Questions</span>
        </h1>
        <p className="text-xl text-zinc-400">Everything you need to know about Momix APK.</p>
      </div>

      <div className="space-y-12">
        <FAQAccordion />
      </div>

      <div className="mt-24 p-12 bg-[#141414] rounded-[3rem] border border-white/5 text-center space-y-6">
        <h2 className="text-3xl font-black tracking-tighter">Still have doubts?</h2>
        <p className="text-zinc-500 max-w-md mx-auto">If you couldn&apos;t find your answer here, feel free to reach out to our community or check our guides.</p>
        <div className="flex justify-center pt-4">
          <a 
            href="mailto:support@momixapk.example.com" 
            className="btn-primary px-12"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
