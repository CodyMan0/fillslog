"use client";

import { User } from "lucide-react";

const Profile = () => {
  //client session 가지고 오기
  return (
    <section className="flex items-center gap-4xs p-2xs">
      <User size={32} />
      <p className="grow text-gray-600">유저 이름</p>
    </section>
  );
};

export default Profile;
