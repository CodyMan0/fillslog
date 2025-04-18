import PageLayout from "@/features/layouts/PageLayout";

import Header from "@/features/layouts/Header";
import Profile from "./components/Profile";
import ComingSoon from "../components/ComingSoon";
import SignoutButton from "./components/SignoutButton";

const page = () => {
  return (
    <PageLayout>
      <div>
        <Header>
          <Header.Previous />
          <Header.Text text="My Page" />
        </Header>

        <div className="flex flex-col gap-16 mt-4">
          <Profile />
          <SignoutButton />
        </div>

        <ComingSoon />
      </div>
    </PageLayout>
  );
};

export default page;
