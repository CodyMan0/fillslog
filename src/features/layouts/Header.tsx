import { HTMLAttributes } from "react";

import { cn } from "@/shared/lib";
import Previous from "./Previous";

type HeaderProps = { children: React.ReactNode } & HTMLAttributes<HTMLElement>;
const Header = ({ children, className, ...props }: HeaderProps) => {
  return (
    <header
      className={cn(
        "bg-inherit z-50 h-[68px] flex w-full items-center justify-between py-2 shadow-sm backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
};

// const Logo = () => {
//   return <Image src={LogoImage} width={50} height={20} alt="logo" priority />;
// };

type TextProps = {
  text: string;
};
const Text = ({ text }: TextProps) => {
  return <p className="text-2xl font-bold text-white">{text}</p>;
};

export default Object.assign(Header, {
  // Logo,
  Text,
  Previous,
});
