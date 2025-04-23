interface FillCardProps {
  title: string;
  description?: string;
  videoUrl?: string;
  createdAt: string; // ISO string or Date
}
import { CalendarDays, PlayCircle } from "lucide-react";
import dayjs from "dayjs";
import { DATE_FORMAT_DD_MM_YYYY_HH_mm } from "@/shared/lib/date";

export function FillCard({
  title,
  videoUrl,
  description,
  createdAt,
}: FillCardProps) {
  const formatted = dayjs(createdAt).format(DATE_FORMAT_DD_MM_YYYY_HH_mm);
  return (
    <div className="rounded-xl bg-zinc-800 hover:bg-accent-blue p-4 shadow-md border border-zinc-800 hover:border-zinc-700 transition-all hover:text-black">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold ">{title}</h2>
        <div className="flex items-center gap-1 text-xs">
          <CalendarDays className="w-4 h-4" />
          {formatted}
        </div>
      </div>

      {description && <p className="mt-2 text-sm">{description}</p>}

      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-800 transition"
        >
          <PlayCircle className="w-4 h-4" />
          영상 보기
        </a>
      )}
    </div>
  );
}
