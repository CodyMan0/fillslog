"use client";

import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui";

const FillFab = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute bottom-20 right-4 z-50"
    >
      <Button
        onClick={() => router.push("/fills/add")}
        className="rounded-full px-4 py-2 shadow-md bg-white text-black hover:scale-105 transition-all duration-200 ease-in-out hover:bg-white/80"
      >
        <Plus className="mr-2 h-4 w-4" />
        필인 줍줍
      </Button>
    </motion.div>
  );
};

export default FillFab;
