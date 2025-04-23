interface FillCardProps {
  title: string;
  bpm?: number;
  videoUrl?: string;
  description?: string;
}

export function FillCard({ title, bpm, videoUrl, description }: FillCardProps) {
  return (
    <div className="bg--card rounded-xl p-4 shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-accent-blue font-medium mt-1">BPM: {bpm}</p>
      {description && (
        <p className="mt-2 text-sm text-text-secondary">{description}</p>
      )}
      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-blue text-sm underline mt-3 inline-block hover:shadow-glow transition-shadow"
        >
          🎥 영상 보기
        </a>
      )}
    </div>
  );
}
