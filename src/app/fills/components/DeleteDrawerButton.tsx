"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui";
import { TrashSimple } from "@phosphor-icons/react";

import React, { useState } from "react";

const DeleteDrawerButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={() => setOpen(!open)}>
      <DrawerTrigger asChild>
        <Button
          className="rounded-full px-4 py-2 shadow-md bg-white text-black hover:scale-105 transition-all duration-200 ease-in-out hover:bg-white/80"
          asChild
        >
          <div>
            <TrashSimple className=" h-4 w-4" />
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-[430px] mx-auto">
        <DrawerHeader>
          <DrawerTitle>기능 준비중</DrawerTitle>
          <DrawerDescription>기능을 준비중이에요!</DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default DeleteDrawerButton;
