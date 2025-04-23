"use client";

import FloatingMotionButton from "@/features/fills/FloatingMotionButton";
import { DATE_FORMAT_DD_MM_YYYY } from "@/shared/lib/date";
import dayjs from "dayjs";
import { ExternalLink } from "lucide-react";
import UpdateDrawerButton from "../fills/components/UpdateDrawerButton";
import DeleteDrawerbutton from "../fills/components/DeleteDrawerButton";
import ComingSoon from "./ComingSoon";
import { useRouter } from "next/navigation";
import { fillsApi } from "../api/fills/api";

interface FillDetailProps {
  id: number;
  title: string;
  description?: string;
  createdAt: string;
  videoUrl?: string;
  categoryName: string;
}

export function FillDetail({
  id,
  title,
  description,
  createdAt,
  videoUrl,
}: FillDetailProps) {
  const router = useRouter();
  const fill_id = id;

  const handleDelete = async () => {
    const response = await fillsApi.deleteFillById({ id: String(fill_id) });
    console.log("response", response);
    if (response.ok) {
      router.push("/fills");
    }
  };
  return (
    <div className="p-4 space-y-4">
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">{title}</h1>
        <span className="text-sm text-gray-400">
          📅 {dayjs(createdAt).format(DATE_FORMAT_DD_MM_YYYY)}
        </span>
      </div>

      {/* 설명 */}
      {description && (
        <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      )}

      {/* 영상 버튼 */}
      {videoUrl && (
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-blue-400 hover:underline text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          영상 보기
        </a>
      )}
      {/* 버튼들 */}

      <ComingSoon />
      <FloatingMotionButton>
        <DeleteDrawerbutton onDelete={handleDelete} />
      </FloatingMotionButton>
      <FloatingMotionButton className="bottom-40">
        <UpdateDrawerButton />
      </FloatingMotionButton>
    </div>
  );
}
