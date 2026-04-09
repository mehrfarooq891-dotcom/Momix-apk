import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export default function ReviewCard({ name, rating, comment, date }: ReviewCardProps) {
  return (
    <div className="bg-[#141414] p-8 rounded-2xl border border-white/5 space-y-4">
      <div className="flex justify-between items-start">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              fill={i < rating ? "#f5c518" : "none"} 
              className={i < rating ? "text-accent" : "text-zinc-700"} 
            />
          ))}
        </div>
        <span className="text-zinc-600 text-xs">{date}</span>
      </div>
      <p className="text-zinc-300 italic text-sm leading-relaxed">&quot;{comment}&quot;</p>
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
          {name.charAt(0)}
        </div>
        <span className="text-white font-bold text-sm">{name}</span>
      </div>
    </div>
  );
}
