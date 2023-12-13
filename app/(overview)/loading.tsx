"use client";
import { Spin } from "antd";
import { useEffect, useState } from "react";

const Loading = () => {
  const [spinning, setSpinning] = useState<boolean>(false);

  useEffect(() => {
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  }, []);
  return <Spin spinning={spinning} fullscreen />;
};

export default Loading;
