import Image from "next/image";
import introImg from "@/assets/images/profile1.jpg";

export default function IntroPage() {
  return (
    <div>
      <Image src={introImg} alt="IntroImg" />
      <div className="text-xl">
        프론트엔드 개발자를 희망하는
        <br />
        <span className="font-bold underline underline-offset-[-2px] decoration-8 decoration-p_green">
          이지은
        </span>
        입니다
      </div>
    </div>
  );
}
