import { FillCard } from "@/features/fills";
import FillFab from "@/features/fills/FloatingFillButton";
import Header from "@/features/layouts/Header";
import PageLayout from "@/features/layouts/PageLayout";

import React from "react";

const mock = [];

// const emptyMock = [];
const Page = () => {
  return (
    <PageLayout>
      <Header>
        <Header.Previous />
      </Header>

      <div className="flex flex-col gap-2">
        {mock.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-2xl font-bold">아직 등록된 필인이 없어요</div>
            <div className="text-sm text-text-secondary mt-2">
              <span className="text-accent-blue font-bold">
                금방 머리속에서 떠나가는 필인
              </span>
              을 저장해보세요!
            </div>
          </div>
        ) : (
          <>
            {mock.map((fill) => (
              <FillCard
                key={fill.title}
                title={fill.title}
                bpm={fill.bpm}
                videoUrl={fill.videoUrl}
                description={fill.description}
              />
            ))}
          </>
        )}

        <FillFab />
      </div>
    </PageLayout>
  );
};

export default Page;
