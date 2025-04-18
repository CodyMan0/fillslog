import React, { PropsWithChildren } from "react";
import BottomNav from "../components/MobileNav";
import { RouterWrapperProvider } from "../provider/RouterWrapperProvider";
import AnimationProvider from "../provider/AnimationProvider";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <RouterWrapperProvider>
        <AnimationProvider>{children}</AnimationProvider>
      </RouterWrapperProvider>
      <BottomNav />
    </>
  );
};

export default Layout;
