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
import { signOut } from "next-auth/react";

import React, { useState } from "react";

const SignoutButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <Drawer open={open} onOpenChange={() => setOpen(!open)}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-full hover:bg-accent-blue hover:border-black text-black font-semibold"
        >
          로그아웃
        </Button>
      </DrawerTrigger>
      <DrawerContent className="w-full max-w-[430px] mx-auto">
        <DrawerHeader>
          <DrawerTitle>정말 로그아웃하시겠어요?</DrawerTitle>
          <DrawerDescription>
            로그아웃하시면 다시 로그인해야 해요.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex gap-4 p-4 w-full">
          <Button
            className="w-full hover:bg-accent-blue hover:border-black hover:text-black font-semibold"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            로그아웃
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

export default SignoutButton;
