import { FillCard } from "@/features/fills";
import BottomNav from "../components/MobileNav";
import PageLayout from "@/features/layouts/PageLayout";
import { Button } from "@/shared/ui";

const page = () => {
  return (
    <PageLayout>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">나의 필인 기록</h1>
        <FillCard
          title="4연음 트릴"
          bpm={140}
          videoUrl="https://youtube.com"
          description="느린 발라드에서 리드인용으로 사용"
        />
        <FillCard
          title="4연음 트릴"
          bpm={80}
          videoUrl="https://youtube.com"
          description="느린 발라드에서 리드인용으로 사용"
        />
        <FillCard
          title="4연음 트릴"
          bpm={90}
          videoUrl="https://youtube.com"
          description="느린 발라드에서 리드인용으로 사용"
        />
        <Button>추가</Button>
        <BottomNav />
      </div>
    </PageLayout>
  );
};

export default page;
