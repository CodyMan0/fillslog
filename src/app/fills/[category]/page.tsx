import BottomNav from "@/app/components/MobileNav";
import { FillCard } from "@/features/fills";
import FillFab from "@/features/fills/FloatingFillButton";
import PageLayout from "@/features/layouts/PageLayout";

import React from "react";

const Page = () => {
  return (
    <PageLayout>
      <div>
        <FillCard
          title="4연음 트릴"
          bpm={140}
          videoUrl="https://youtube.com"
          description="느린 발라드에서 리드인용으로 사용"
        />
        <FillCard
          title="4연음 트릴"
          bpm={90}
          videoUrl="https://youtube.com"
          description="느린 발라드에서 리드인용으로 사용"
        />
        <FillFab />
        <BottomNav />
      </div>
    </PageLayout>
  );
};

export default Page;
