import FillCard from "./components/FillCard";

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-bold">나의 필인 기록</h1>
      <FillCard
        title="4연음 트릴"
        bpm={70}
        videoUrl="https://youtube.com"
        description="느린 발라드에서 리드인용으로 사용"
      />
      <FillCard
        title="4연음 트릴"
        bpm={70}
        videoUrl="https://youtube.com"
        description="느린 발라드에서 리드인용으로 사용"
      />
      <FillCard
        title="4연음 트릴"
        bpm={70}
        videoUrl="https://youtube.com"
        description="느린 발라드에서 리드인용으로 사용"
      />
    </div>
  );
}
