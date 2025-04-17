import { PropsWithChildren } from "react";

const PageLayout = ({ children }: PropsWithChildren) => {
  return <div className="px-4 pt-6 pb-16 h-dvh">{children}</div>;
};

export default PageLayout;
