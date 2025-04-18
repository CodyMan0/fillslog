"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const session = useSession();
  return (
    <section className="flex items-center justify-between gap-4xs p-2xs">
      <Image
        src={session.data?.user?.image || ""}
        alt="img"
        width={50}
        height={50}
        className="rounded-full"
      />
      <div className="flex flex-col items-end">
        <p className="text-sm text-muted-foreground">
          {session.data?.user?.email}
        </p>
        <p className="font-bold">{session.data?.user?.name}</p>
      </div>
    </section>
  );
};

export default Profile;
