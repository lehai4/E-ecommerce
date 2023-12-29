"use client";

import { Button, Image, Space, Typography } from "antd";
import Link from "next/link";
const Profile = ({ user }: { user: any }) => {
  return (
    <Space direction="vertical" align="center">
      <Space align="center">
        <Typography.Text strong className="text-3xl text-slate-700 italic">
          User: {user?.name}
        </Typography.Text>
      </Space>
      <Typography.Text strong>Image:</Typography.Text>
      <Space>
        <Image
          src={user?.image ? user.image : "/default_user.png"}
          alt="Image"
          width={50}
          preview={false}
          height={50}
        />
      </Space>
      <Typography.Text strong>Email: {user?.email}</Typography.Text>
      <Typography.Text strong>Role: {user?.role}</Typography.Text>
      <Typography.Text strong>Provider: {user?.provider}</Typography.Text>
      <Link href="/">
        <Button>Back</Button>
      </Link>
    </Space>
  );
};

export default Profile;
