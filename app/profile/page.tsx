"use client";
import { useSession } from "next-auth/react";
import Profile from "../ui/profile";
import BannerPage from "../ui/bannerPage";
import Section from "../components/section";

const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <main className="main-content">
      <BannerPage title="Profile Us" />
      <Section className="text-center py-10">
        <Profile user={session?.user} />
      </Section>
    </main>
  );
};

export default ProfilePage;
