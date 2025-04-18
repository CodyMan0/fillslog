"use client";

import { Button } from "@/shared/ui";
import { signOut } from "next-auth/react";

import React from "react";

const SignoutButton = () => {
  return (
    <Button
      variant="outline"
      className="w-full hover:bg-accent-blue hover:text-black"
      onClick={() => {
        signOut({ callbackUrl: "/" });
      }}
    >
      로그아웃
    </Button>
  );
};

export default SignoutButton;
