"use client";

import { motion } from "framer-motion";

import { PropsWithChildren } from "react";
import { ClassNameValue } from "tailwind-merge";
import { cn } from "@/lib/utils";

const FloatingMotionButton = ({
  className,
  children,
}: PropsWithChildren & { className?: ClassNameValue }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(`absolute bottom-20 right-4 z-50`, className)}
    >
      {children}
    </motion.div>
  );
};

export default FloatingMotionButton;
