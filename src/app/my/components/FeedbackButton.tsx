"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Input,
} from "@/shared/ui";

import React, { PropsWithChildren, useState } from "react";

const FeedbackButton = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={() => setOpen(!open)}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="w-full max-w-[430px] mx-auto">
        <DrawerHeader>
          <DrawerTitle>주고 싶은 피드백이 있으실까요?</DrawerTitle>

          <Input />
        </DrawerHeader>
        <div className="flex gap-4 p-4 w-full">
          <Button
            className="w-full hover:bg-accent-blue hover:border-black hover:text-black font-semibold"
            onClick={() => {
              setOpen(false);
            }}
          >
            피드백 주기
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default FeedbackButton;
