"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import BottomNav from "./components/MobileNav";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isRoot = pathname === "/";
  return (
    <div className="relative mx-auto max-w-[430px] w-full overflow-hidden">
      <motion.div
        key={pathname}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>

      {!isRoot && <BottomNav />}
    </div>
  );
}

const variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 2,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: 10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};
