"use client";
import { page } from "@/mockAPI";
import { Typography } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { convertPathname } from "@/lib/utils/convertPathname";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "/"),
  getItem("Product", "/product"),
  getItem("Blog", "/blog"),
  getItem("Contact", "/contact"),
  getItem("WishList", "/wish-list"),
  getItem("Cart", "/cart"),
];

export const MenuOfMobile = ({
  pathname,
  router,
  setOpen,
}: {
  pathname: string;
  router: any;
  setOpen: (flag: boolean) => void;
}) => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[`${convertPathname(pathname)}`]}
      style={{ background: "white", textAlign: "center", border: "none" }}
      items={items}
      onClick={(e) => {
        setOpen(false);
        router.push(`${e.key}`);
      }}
    />
  );
};
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
