import { PropsWithChildren } from "react";

const PageLayout = ({ children }: PropsWithChildren) => {
  return <div className="px-4 pt-6 pb-18 min-h-dvh relative">{children}</div>;
};

export default PageLayout;
