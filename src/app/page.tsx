import Image from "next/image";
import Drum from "@/shared/assets/images/drum.png";
import KakaoLoginButton from "@/features/login/KakaoLoginButton";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">
          <span className="underline underline-offset-8 decoration-accent-blue">
            F
          </span>
          <span>i</span>
          <span className="underline underline-offset-8 decoration-accent-blue">
            l
          </span>
          <span>l</span>
          <span className="underline underline-offset-8 decoration-accent-blue">
            s
          </span>

          <span>L</span>
          <span className="underline underline-offset-8 decoration-accent-blue">
            o
          </span>
          <span>g</span>
        </h1>
        <p className="text-white/70 my-8 text-center">
          마음에 든 <strong className="text-accent-blue">필인</strong>을
          기록해두고
          <br />
          언제든 꺼내 쓸 수 있어요.
        </p>
        <Image src={Drum} alt="hero_drum" />
      </div>

      <KakaoLoginButton />
    </div>
  );
}
