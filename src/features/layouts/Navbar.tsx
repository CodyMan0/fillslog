"use client";

import { Button } from "@/shared/ui";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Drum from "@/shared/assets/images/drum.png";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center">
      <Link href={"/"}>
        <Image src={Drum} alt="logo" width={50} height={50} />
      </Link>
      {session ? (
        <div>
          <Image
            src={session.user?.image || ""}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain "
          />
          <Button onClick={() => signOut({ callbackUrl: "/" })}>
            sign out
          </Button>
        </div>
      ) : (
        <Button onClick={() => signIn()}>sign in</Button>
      )}
    </div>
  );
};

export default Navbar;
