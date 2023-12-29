import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Ecommerce | Contact",
};

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default ContactLayout;
