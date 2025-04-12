interface FillCardProps {
  title: string;
  bpm: number;
  videoUrl?: string;
  description?: string;
}

export default function FillCard({
  title,
  bpm,
  videoUrl,
  description,
}: FillCardProps) {
  return (
    <div className="bg-gray-900 rounded-xl p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-400">BPM: {bpm}</p>
      {description && <p className="mt-1 text-sm">{description}</p>}
      {videoUrl && (
        <a
          href={videoUrl}
          className="text-blue-400 text-sm underline mt-2 inline-block"
          target="_blank"
        >
          영상 보기
        </a>
      )}
    </div>
  );
}
