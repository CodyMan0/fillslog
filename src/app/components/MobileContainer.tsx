import { ReactNode } from "react";

export default function MobileContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[430px] min-h-screen bg-black text-white px-4 py-6">
      {children}
    </div>
  );
}
