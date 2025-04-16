"use client";

import { createClient } from "@/shared/utils/supabase/client";

const KakaoLoginButton = () => {
  const signInWithKakao = async () => {
    const supabase = await createClient();

    await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <button
      className="w-[80%] h-14 rounded-lg bg-kakao px-[14px] text-black font-bold"
      onClick={signInWithKakao}
    >
      카카오로 시작하기
    </button>
  );
};

export default KakaoLoginButton;
