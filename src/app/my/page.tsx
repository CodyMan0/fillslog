import PageLayout from "@/features/layouts/PageLayout";
import BottomNav from "../components/MobileNav";

import Header from "@/features/layouts/Header";
import Profile from "./components/Profile";
import ComingSoon from "../components/ComingSoon";

const page = () => {
  return (
    <PageLayout>
      <div>
        <Header>
          <Header.Previous />
          <Header.Text text="My Page" />
        </Header>

        <Profile />

        <ComingSoon />

        <BottomNav />
      </div>
    </PageLayout>
  );
};

export default page;
