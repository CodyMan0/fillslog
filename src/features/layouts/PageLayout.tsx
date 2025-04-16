import { PropsWithChildren } from "react";
import Navbar from "./Navbar";

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="px-4 py-6">
      <Navbar />
      {children}
    </div>
  );
};

export default PageLayout;
