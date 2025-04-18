"use client";

import { User } from "lucide-react";
import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();
  return (
    <section className="flex items-center justify-between gap-4xs p-2xs">
      <User size={32} />
      <p className="font-bold">{session.data?.user?.name}</p>
    </section>
  );
};

export default Profile;
