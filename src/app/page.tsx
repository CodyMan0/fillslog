import Image from "next/image";
import Drum from "@/shared/assets/images/drum.png";
export default function Home() {
  return (
    <div>
      <h1>Fills log</h1>
      <Image src={Drum} alt="hero_drum" />
    </div>
  );
}
