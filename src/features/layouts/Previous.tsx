"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Previous = () => {
  const router = useRouter();

  return <ChevronLeft onClick={() => router.back()} />;
};

export default Previous;
