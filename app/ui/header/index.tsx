"use client";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, List, Popover, Space } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import AndyLogo from "../logo";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="relative w-full h-[89px] z-40">
      <div className="h-full w-full shadow-md">
        <div className="px-[14px] h-full container">
          <div className="h-full flex flex-row items-center justify-between">
            <AndyLogo css={"text-black"} />
            {children}
            <div className="flex flex-row items-center gap-2 text-xl h-full">
              <SearchOutlined />
              <ShoppingCartOutlined />
              {session?.user ? (
                <Popover
                  content={
                    <div>
                      <List>
                        <List.Item>Username: {session?.user.name}</List.Item>
                        <List.Item>Email: {session?.user.email}</List.Item>
                        <Space
                          align="center"
                          direction="horizontal"
                          className="pt-[5px]"
                        >
                          <Button onClick={() => signOut()}>Logout</Button>
                          <Link href="/profile">
                            <Button type="primary" className="bg-blue-500">
                              Profile
                            </Button>
                          </Link>
                        </Space>
                      </List>
                    </div>
                  }
                >
                  <Image
                    src={`${
                      session?.user?.image
                        ? session?.user?.image
                        : "/default_user.png"
                    }`}
                    className="rounded-full relative h-3/6 w-6/12 "
                    width={50}
                    height={50}
                    alt="Picture of the user"
                    priority
                  />
                </Popover>
              ) : (
                <div>
                  <Link
                    href="/auth/signin"
                    className={`${
                      pathname === "/auth/signin" ? "text-sky-600" : ""
                    }`}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* sticky */}
      <div
        className={`fixed top-0 bg-white shadow-md left-0 h-[89px] w-full z-50 -translate-y-full transition-transform duration-400 ease-in ${
          scrollPosition > 95 ? "translate-y-0" : ""
        }`}
      >
        <div className="px-[14px] h-full container">
          <div className="h-full flex flex-row items-center justify-between">
            <AndyLogo css={"text-black"} />
            {children}
            <div className="flex flex-row items-center gap-2 text-xl h-full">
              <SearchOutlined />
              <ShoppingCartOutlined />
              {session?.user ? (
                <Popover
                  content={
                    <div>
                      <List>
                        <List.Item>Username: {session?.user.name}</List.Item>
                        <List.Item>Email: {session?.user.email}</List.Item>
                        <Space
                          align="center"
                          direction="horizontal"
                          className="pt-[5px]"
                        >
                          <Button onClick={() => signOut()}>Logout</Button>
                          <Link href="/profile">
                            <Button type="primary" className="bg-blue-500">
                              Profile
                            </Button>
                          </Link>
                        </Space>
                      </List>
                    </div>
                  }
                >
                  <Image
                    src={`${
                      session?.user?.image
                        ? session?.user?.image
                        : "/default_user.png"
                    }`}
                    className="rounded-full relative h-3/6 w-6/12"
                    width={50}
                    height={50}
                    alt="Picture of the user"
                    priority
                  />
                </Popover>
              ) : (
                <div>
                  <Link
                    href="/auth/signin"
                    className={`${
                      pathname === "/auth/signin" ? "text-sky-600" : ""
                    }`}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
