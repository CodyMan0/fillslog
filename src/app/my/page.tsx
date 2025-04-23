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

        <div className="flex flex-col gap-2 mt-4">
          <Profile />
          <div className="flex flex-col gap-2 mt-4">
            <SignoutButton />
          </div>
        </div>

        <ComingSoon />
      </div>
    </PageLayout>
  );
};

export default page;
