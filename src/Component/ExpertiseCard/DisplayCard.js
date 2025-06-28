// DisplayCard.jsx
import { Sparkles } from "lucide-react";

export function DisplayCard({
  title = "Title",
  description = "Card description",
  date = "Today",
  Icon = Sparkles, // Pass a component, defaults to Sparkles
}) {
  return (
<div
  style={{ minHeight: "320px" }}
  className="relative flex flex-col justify-between w-full rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md transition-all duration-500 ease-in-out transform hover:scale-[1.03] hover:shadow-2xl hover:border-white/20 hover:bg-white/20 space-y-2"
>
  {/* Header with Dynamic Icon */}
  <div className="flex items-center gap-3">
    <span className="inline-flex items-center justify-center rounded-full bg-blue-800 p-2">
      <Icon className="w-5 h-5 text-blue-300" />
    </span>
    <p className="text-lg sm:text-xl md:text-4xl font-semibold text-blue-400 truncate max-w-[80%]">
  {title}
</p>
  </div>

  {/* Description */}
  <p className="text-sm sm:text-lg text-white leading-snug line-clamp-2">
    {description}
  </p>

  {/* Footer Date */}
  <p className="text-xs sm:text-sm text-gray-400 truncate">
    {date}
  </p>
</div>

  );
}
