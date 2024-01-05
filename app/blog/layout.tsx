import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Ecommerce | Blog",
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default BlogLayout;
