import { fillsApi } from "@/app/api/fillsCount/api";
import AddFillForm from "@/features/fills/AddFillForm";
import Header from "@/features/layouts/Header";
import PageLayout from "@/features/layouts/PageLayout";

const Home = async () => {
  const fillCounts = await fillsApi.getFillsCount();
  return (
    <PageLayout>
      <Header>
        <Header.Previous />
      </Header>
      <AddFillForm category={fillCounts} />
    </PageLayout>
  );
};

export default Home;
