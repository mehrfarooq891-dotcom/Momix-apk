import Image from "next/image";

export default function ScreenshotGallery() {
  const screenshots = [
    "https://picsum.photos/seed/momix1/400/800",
    "https://picsum.photos/seed/momix2/400/800",
    "https://picsum.photos/seed/momix3/400/800",
    "https://picsum.photos/seed/momix4/400/800",
    "https://picsum.photos/seed/momix5/400/800",
  ];

  return (
    <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
      {screenshots.map((src, i) => (
        <div 
          key={i} 
          className="flex-none w-[280px] aspect-[9/19] relative rounded-3xl overflow-hidden border border-white/10 snap-center hover:scale-105 transition-transform duration-300"
        >
          <Image 
            src={src} 
            alt={`Momix App Screenshot ${i + 1}`} 
            fill 
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
