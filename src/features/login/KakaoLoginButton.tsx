"use client";

const KakaoLoginButton = () => {
  const signInWithKakao = async (next = "/") =>
    await fetch(`/api/auth/kakao?next=${encodeURIComponent(next)}`).then(
      (res) => res.json()
    );

  return (
    <button
      className="w-[80%] h-14 rounded-lg bg-kakao px-[14px] text-black font-bold"
      onClick={() => signInWithKakao()}
    >
      카카오로 시작하기
    </button>
  );
};

export default KakaoLoginButton;
