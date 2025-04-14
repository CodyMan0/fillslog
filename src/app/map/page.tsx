import PageLayout from "@/features/layouts/PageLayout";
import BottomNav from "../components/MobileNav";

const page = () => {
  return (
    <PageLayout>
      <div>
        fills map
        <BottomNav />
      </div>
    </PageLayout>
  );
};

export default page;
