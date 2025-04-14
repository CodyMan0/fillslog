import { ReactNode } from "react";

export default function MobileContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[430px] min-h-dvh bg-main text-white">
      {children}
    </div>
  );
}
