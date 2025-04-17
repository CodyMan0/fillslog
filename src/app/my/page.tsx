import PageLayout from "@/features/layouts/PageLayout";
import BottomNav from "../components/MobileNav";
import ComingSoon from "../components/ComingSoon";

const page = () => {
  return (
    <PageLayout>
      <div>
        <ComingSoon />
        <BottomNav />
      </div>
    </PageLayout>
  );
};

export default page;
