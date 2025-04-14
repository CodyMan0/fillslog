import Image from "next/image";
import Drum from "@/shared/assets/images/drum.png";
import KakaoLoginButton from "@/features/login/KakaoLoginButton";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">Fills log</h1>
      <Image src={Drum} alt="hero_drum" />
      <KakaoLoginButton />
    </div>
  );
}
