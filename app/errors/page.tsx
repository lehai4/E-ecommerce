"use client";
import { Button, Space } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
const ErrorPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const errMessage = searchParams.get("error");
  return (
    <div className="h-full min-h-screen flex items-center justify-center">
      <Space direction="vertical" align="center">
        <h1 className="text-red-500 text-3xl font-bold">{errMessage}</h1>
        <Button onClick={() => router.back()}>Try Again</Button>
      </Space>
    </div>
  );
};

export default ErrorPage;
