import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href="/">Home</Link>, "/"),
  getItem("Shop", "/#shop", "", [
    getItem(
      <Link href="/shop/shop-category">Shop Category</Link>,
      "/shop/shop-category"
    ),
    getItem(
      <Link href="/shop/product-details">Product Details</Link>,
      "/shop/product-details"
    ),
  ]),
  getItem("Blog", "/#blog", "", [
    getItem(<Link href="/blog">Blog</Link>, "/blog", ""),
    getItem(
      <Link href="/blog/blog-detail">Blog Detail</Link>,
      "/blog/blog-detail"
    ),
  ]),
  getItem(<Link href="/pages">Pages</Link>, "/pages"),

  getItem(<Link href="/contact">Contact</Link>, "/contact"),
];
const MenuPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const onClick: MenuProps["onClick"] = (e) => {
    router.push(`${e.key}`);
  };
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={[`${pathname}`]}
      items={items}
      style={{
        width: "inherit",
        float: "right",
        border: "none",
        fontSize: 16,
      }}
      onClick={onClick}
      selectedKeys={[`${pathname}`]}
      className="bg-white"
    />
  );
};

export default MenuPage;
