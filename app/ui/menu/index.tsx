"use client";
import { page } from "@/mockAPI";
import { Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuPage = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center gap-6">
      {page.map((item, index) => (
        <Link href={`${item.path}`} key={index}>
          <Typography.Text
            className={`text-[16px] relative hover:text-blue-500 duration-200 ease-in transition-all ${
              pathname === `${item.path}` ? "text-blue-500 " : "text-black"
            }`}
          >
            {item.content}
          </Typography.Text>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
