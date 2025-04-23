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

const DeleteDrawerButton = ({ onDelete }: { onDelete: VoidFunction }) => {
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
          <DrawerTitle>정말 삭제하시겠어요?</DrawerTitle>
          <DrawerDescription>삭제하면 복구할 수 없어요.</DrawerDescription>
        </DrawerHeader>
        <div className="flex gap-4 p-4 w-full">
          <Button
            className="w-full bg-destructive text-white hover:bg-destructive/70 font-semibold"
            onClick={() => {
              onDelete();
              setOpen(false);
            }}
          >
            확인
          </Button>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => setOpen(false)}
          >
            취소
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DeleteDrawerButton;
