"use client";

import { signIn } from "next-auth/react";

const KakaoLoginButton = () => {
  return (
    <button
      className="w-[90%] h-14 rounded-lg bg-kakao px-[14px] text-black font-bold cursor-pointer"
      onClick={() =>
        signIn("kakao", {
          callbackUrl: `${window.location.origin}/fills`,
        })
      }
    >
      카카오로 시작하기
    </button>
  );
};

export default KakaoLoginButton;
