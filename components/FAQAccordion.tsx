"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Momix APK safe to use?",
    answer: "Yes, Momix APK is 100% safe. We scan every file with multiple antivirus engines before uploading. However, since it's a third-party app, always download from our official site to stay protected."
  },
  {
    question: "Do I need to pay for a subscription?",
    answer: "No, Momix APK is completely free. You can watch movies, web series, and live TV channels without paying any subscription fees or hidden charges."
  },
  {
    question: "Does Momix work on Firestick or Android TV?",
    answer: "Yes! Momix is fully compatible with Firestick, Android TV, and Mi Box. You can easily sideload the APK and enjoy content on the big screen."
  },
  {
    question: "How do I update Momix APK?",
    answer: "Since it's not on the Play Store, you need to visit our site regularly. When a new version is released, simply download the latest APK and install it over the existing one."
  },
  {
    question: "Why is the app not installing?",
    answer: "Make sure you have enabled 'Unknown Sources' in your Android settings. Also, check if you have enough storage space and that you've uninstalled any previous conflicting versions."
  },
  {
    question: "Can I download movies for offline viewing?",
    answer: "Yes, Momix provides multiple server links. Many of these links support direct downloading, allowing you to save content to your device storage."
  },
  {
    question: "Is registration required?",
    answer: "No registration or login is required. You can start streaming immediately after installing the app."
  },
  {
    question: "Does it support subtitles?",
    answer: "Yes, most content on Momix comes with multi-language subtitle support. You can choose your preferred language from the player settings."
  },
  {
    question: "What is the minimum Android version required?",
    answer: "Momix APK works on most Android devices running Android 5.0 (Lollipop) or higher."
  },
  {
    question: "Is a VPN required for Momix?",
    answer: "While not strictly required, we recommend using a VPN to protect your privacy and bypass any ISP-level blocks on streaming servers."
  }
];

export default function FAQAccordion({ limit }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="space-y-4">
      {displayedFaqs.map((faq, index) => (
        <div 
          key={index} 
          className={`bg-[#141414] border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? "border-[#e50914]/30 shadow-lg shadow-red-900/5" : "border-white/5"}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
          >
            <span className={`font-bold text-lg transition-colors ${openIndex === index ? "text-[#e50914]" : "text-white"}`}>{faq.question}</span>
            {openIndex === index ? <ChevronUp className="text-[#e50914]" /> : <ChevronDown className="text-zinc-500" />}
          </button>
          
          <div 
            className={`px-8 transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 pb-8 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <p className="text-zinc-400 leading-relaxed border-t border-white/5 pt-4">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
