import FAQAccordion from "@/components/FAQAccordion";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions - Momix APK Support",
  description: "Find answers to common questions about Momix APK. Safety, installation, updates, and troubleshooting guide for Android users.",
};

export default function FAQPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-6 mb-16">
          <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto text-primary mb-8">
            <HelpCircle size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Frequently Asked <span className="text-primary">Questions</span></h1>
          <p className="text-xl text-zinc-400">Everything you need to know about Momix APK in one place.</p>
        </div>

        <div className="space-y-12">
          <FAQAccordion />
        </div>

        <div className="mt-24 p-12 bg-[#141414] rounded-[2.5rem] border border-white/5 text-center space-y-6">
          <h2 className="text-2xl font-bold">Still have questions?</h2>
          <p className="text-zinc-400">If you couldn&apos;t find the answer you were looking for, feel free to reach out to us.</p>
          <a 
            href="mailto:support@momixapk.example.com" 
            className="inline-block btn-primary px-10"
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Is Momix APK safe to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Momix APK is 100% safe. We scan every file with multiple antivirus engines before uploading."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to pay for a subscription?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Momix APK is completely free. You can watch movies, web series, and live TV channels without paying any subscription fees."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
