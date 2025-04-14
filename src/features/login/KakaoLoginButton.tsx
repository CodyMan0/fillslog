"use client";

import Link from "next/link";

const KakaoLoginButton = () => {
  return (
    <Link href={"/fills"} className="w-[80%]">
      <button className="w-full h-14 rounded-lg bg-kakao px-[14px] text-black font-bold">
        카카오로 시작하기
      </button>
    </Link>
  );
};

export default KakaoLoginButton;
