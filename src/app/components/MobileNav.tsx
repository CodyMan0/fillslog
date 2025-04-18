"use client";

import { usePathname } from "next/navigation";

import { UserIcon, DrumIcon, NetworkIcon } from "lucide-react";
import ExtendedLink from "./ExtendedLink";

const navItems = [
  { href: "/fills", label: "내 필인", icon: <DrumIcon size={20} /> },
  { href: "/map", label: "필인 지도", icon: <DrumIcon size={20} /> },
  { href: "/grow", label: "성장 로그", icon: <NetworkIcon size={20} /> },
  { href: "/my", label: "마이페이지", icon: <UserIcon size={20} /> },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] border-t border-zinc-800 bg-main text-sm flex justify-around items-center h-16 z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <ExtendedLink
            key={item.href}
            href={item.href}
            className={` flex-1 flex flex-col items-center gap-1 ${
              isActive ? "text-accent-blue " : "text-zinc-400"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </ExtendedLink>
        );
      })}
    </nav>
  );
}
