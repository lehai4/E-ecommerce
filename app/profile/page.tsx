"use client";
import { useSession } from "next-auth/react";
import Profile from "../ui/profile";

const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col">
      <div className="bg-sky-500 h-[250px]"></div>
      <Profile user={session?.user} />
    </div>
  );
};

export default ProfilePage;
