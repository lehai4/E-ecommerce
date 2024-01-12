"use client";
import { verifyEmailWithCredentials } from "@/lib/actions";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const VerifyPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [message, setMessage] = useState<string>("");

  const handleVerify = async () => {
    const res = await verifyEmailWithCredentials(token);
    setMessage(res?.msg);
  };
  useEffect(() => {
    return () => {
      handleVerify();
    };
  }, []);
  return (
    <div className="text-center px-8 py-24">
      <h1 className="text-green-500 text-3xl font-semibold">{message}</h1>
    </div>
  );
};

export default VerifyPage;
