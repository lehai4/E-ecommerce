import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Ecommerce",
    default: "Ecommerce",
  },
  description: "Ecommerce of LeChiHai",
};
const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default ContactLayout;
