import { useState } from "react";
import { Play } from "lucide-react";

export function YouTubeEmbed({
  videoId,
  title,
  className = "",
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className={`relative aspect-video overflow-hidden ${className}`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Assistir: ${title}`}
      className={`group relative aspect-video w-full overflow-hidden block ${className}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="grid place-items-center h-16 w-16 rounded-full bg-background/95 text-primary group-hover:scale-110 group-hover:bg-background transition-all duration-300 shadow-[var(--shadow-soft)]">
          <Play className="h-6 w-6 ml-1" fill="currentColor" />
        </span>
        <p className="mt-4 font-display text-xl md:text-2xl text-primary-foreground text-balance">{title}</p>
      </div>
    </button>
  );
}
