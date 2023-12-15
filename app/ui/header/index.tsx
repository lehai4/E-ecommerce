"use client";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Image, List, Popover, Space, Typography } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import AndyLogo from "../logo";
import { TypeProduct } from "@/interface";
import { clearAllCart, deleteItemCart } from "@/redux/slice/cartSlice";

export const Header = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const dispatcher = useAppDispatch();
  const { data: session } = useSession();
  const cartArr = useAppSelector((state) => state.cart.cartArr);
  const cartLenght = useAppSelector((state) => state.cart.numberCart);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleDeleteItemCart = (item: TypeProduct) => {
    dispatcher(deleteItemCart(item));
  };

  const overallPrice = useCallback(() => {
    return cartArr.reduce((acc, current) => {
      return acc + current.price * current.quantity;
    }, 0);
  }, [cartArr, cartLenght]);

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
      <div className="h-full w-full shadow-sm">
        <div className="px-[14px] h-full container">
          <div className="h-full flex flex-row items-center justify-between">
            <AndyLogo css={"text-black"} />
            {children}
            <div className="flex flex-row items-center gap-2 text-xl h-full">
              <Button
                icon={<SearchOutlined />}
                className="flex items-center justify-center"
              />

              <Popover
                trigger="hover"
                content={
                  cartLenght > 0 ? (
                    <List>
                      {cartArr.map((item, i) => (
                        <List.Item
                          style={{ width: "350px" }}
                          actions={[
                            <Button
                              key="list-loadmore-edit"
                              onClick={() => handleDeleteItemCart(item)}
                            >
                              X
                            </Button>,
                          ]}
                          key={i}
                        >
                          <List.Item.Meta
                            avatar={
                              <Image
                                src={item.image}
                                preview={false}
                                width={100}
                                height={100}
                              />
                            }
                            title={
                              <Typography.Text strong className="text-base">
                                {item.name}
                              </Typography.Text>
                            }
                            description={
                              <Space direction="vertical">
                                <Typography.Text className="text-[14px]">
                                  Quantity: {item.quantity}
                                </Typography.Text>
                                <Typography.Text className="text-[14px]">
                                  Price: &nbsp; ${item.price}
                                </Typography.Text>
                              </Space>
                            }
                          />
                        </List.Item>
                      ))}
                      <Space
                        direction="horizontal"
                        className="flex flex-row justify-between mt-2"
                      >
                        <Typography.Text strong className="text-[16px]">
                          Overall Price: $
                          <span className="underline">{overallPrice()}</span>
                        </Typography.Text>
                        <Button
                          onClick={() => {
                            dispatcher(clearAllCart());
                          }}
                        >
                          Delete All
                        </Button>
                      </Space>
                    </List>
                  ) : (
                    <div>No any item in cart</div>
                  )
                }
              >
                <Link href="/cart">
                  <Badge count={cartLenght} showZero>
                    <Button icon={<ShoppingCartOutlined />} />
                  </Badge>
                </Link>
              </Popover>
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
                    alt="Picture of the user"
                    preview={false}
                    width={40}
                    className="rounded-full"
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
              <Button
                icon={<SearchOutlined />}
                className="flex items-center justify-center"
              />
              <Popover
                trigger="hover"
                content={
                  cartLenght > 0 ? (
                    <List>
                      {cartArr.map((item, i) => (
                        <List.Item
                          style={{ width: "350px" }}
                          actions={[
                            <Button
                              key="list-loadmore-edit"
                              onClick={() => handleDeleteItemCart(item)}
                            >
                              X
                            </Button>,
                          ]}
                          key={i}
                        >
                          <List.Item.Meta
                            avatar={
                              <Image
                                src={item.image}
                                preview={false}
                                width={100}
                                height={100}
                              />
                            }
                            title={
                              <Typography.Text strong className="text-base">
                                {item.name}
                              </Typography.Text>
                            }
                            description={
                              <Space direction="vertical">
                                <Typography.Text className="text-[14px]">
                                  Quantity: {item.quantity}
                                </Typography.Text>
                                <Typography.Text className="text-[14px]">
                                  Price: &nbsp; ${item.price}
                                </Typography.Text>
                              </Space>
                            }
                          />
                        </List.Item>
                      ))}
                      <Space
                        direction="horizontal"
                        className="flex flex-row justify-between mt-2"
                      >
                        <Typography.Text strong className="text-[16px]">
                          Overall Price: $
                          <span className="underline">{overallPrice()}</span>
                        </Typography.Text>
                        <Button
                          onClick={() => {
                            dispatcher(clearAllCart());
                          }}
                        >
                          Delete All
                        </Button>
                      </Space>
                    </List>
                  ) : (
                    <div>No any item in cart</div>
                  )
                }
              >
                <Link href="/cart">
                  <Badge count={cartLenght} showZero>
                    <Button icon={<ShoppingCartOutlined />} />
                  </Badge>
                </Link>
              </Popover>
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
                    alt="Picture of the user"
                    preview={false}
                    width={40}
                    className="rounded-full"
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
