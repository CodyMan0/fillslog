import { PropsWithChildren } from "react";

const PageLayout = ({ children }: PropsWithChildren) => {
  return <div className="px-4 py-6">{children}</div>;
};

export default PageLayout;
