import BottomNav from "@/app/components/MobileNav";
import { FillCard } from "@/features/fills";
import FillFab from "@/features/fills/FloatingFillButton";
import Header from "@/features/layouts/Header";
import PageLayout from "@/features/layouts/PageLayout";

import React from "react";

const mock = [
  {
    title: "필인 제목",
    bpm: 120,
    videoUrl: "https://www.youtube.com/watch?v=abc123",
    description: "필인 설명",
  },
];

const Page = () => {
  return (
    <PageLayout>
      <Header>
        <Header.Previous />
      </Header>

      <div className="flex flex-col gap-2">
        {mock.map((fill) => (
          <>
            {fill.title ? (
              <FillCard
                key={fill.title}
                title={fill.title}
                bpm={fill.bpm}
                videoUrl={fill.videoUrl}
                description={fill.description}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-2xl font-bold">
                  아직 등록된 필인이 없어요
                </div>
                <div className="text-sm text-text-secondary mt-2">
                  <span className="text-accent-blue font-bold">
                    금방 머리속에서 떠나가는 필인
                  </span>
                  을 저장해보세요!
                </div>
              </div>
            )}
          </>
        ))}

        <FillFab />
        <BottomNav />
      </div>
    </PageLayout>
  );
};

export default Page;
