import { FillCard } from "@/features/fills";
import BottomNav from "../components/MobileNav";
import PageLayout from "@/features/layouts/PageLayout";
import { Button } from "@/shared/ui";

const page = () => {
  return (
    <PageLayout>
      <div>
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
        <Button className="bg-white rounded-full text-black hover:scale-110">
          필인 줍줍
        </Button>

        <BottomNav />
      </div>
    </PageLayout>
  );
};

export default page;
