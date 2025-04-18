"use client";

import { useRouterWrapper } from "@/app/provider/RouterWrapperProvider";
import { ChevronLeft } from "lucide-react";

const Previous = () => {
  const router = useRouterWrapper();

  return <ChevronLeft onClick={() => router.back()} />;
};

export default Previous;
