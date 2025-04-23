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
import { PencilSimple } from "@phosphor-icons/react";

import React, { useState } from "react";

const UpdateDrawerButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={() => setOpen(!open)}>
      <DrawerTrigger asChild>
        <Button
          className="rounded-full px-4 py-2 shadow-md bg-accent-orange text-black hover:scale-105 transition-all duration-200 ease-in-out hover:bg-accent-orange/90"
          asChild
        >
          <div>
            <PencilSimple className="h-4 w-4" />
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

export default UpdateDrawerButton;
