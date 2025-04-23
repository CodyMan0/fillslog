import React from "react";

export default function EmptyFillsPage() {
  return (
    // TODO: pr-8: 오른쪽 여백을 추가하여 내용이 오른쪽으로 밀리도록 설정
    <div className="absolute inset-y-20 w-full flex flex-col items-center justify-center pr-8">
      <div className="text-2xl font-bold">아직 등록된 필인이 없어요</div>
      <div className="text-sm text-text-secondary mt-2">
        <span className="text-accent-blue font-bold">
          금방 머리속에서 떠나가는 필인
        </span>
        을 저장해보세요!
      </div>
    </div>
  );
}
