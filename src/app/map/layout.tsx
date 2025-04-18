import React, { PropsWithChildren } from "react";
import BottomNav from "../components/MobileNav";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <BottomNav />
    </>
  );
};

export default Layout;
