"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  NavigationDirection,
  useRouterWrapper,
} from "./provider/RouterWrapperProvider";
import BottomNav from "./components/MobileNav";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { direction } = useRouterWrapper();
  const isRoot = pathname === "/";

  return (
    <div className="relative mx-auto max-w-[430px] w-full overflow-hidden">
      <motion.div
        key={pathname}
        custom={direction}
        variants={{
          enter: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "100%" : "-100%",
          }),
          center: {
            x: 0,
          },
        }}
        initial={"enter"}
        animate={"center"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>

      {!isRoot && <BottomNav />}

      <motion.div
        key={"prev cache page"}
        custom={direction}
        variants={{
          center: {
            x: 0,
          },
          exit: (direction: NavigationDirection) => ({
            x: direction === "forward" ? "-100%" : "100%",
          }),
        }}
        initial={"center"}
        animate={"exit"}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "100%",
        }}
      >
        {"caching page"}
      </motion.div>
    </div>
  );
}
