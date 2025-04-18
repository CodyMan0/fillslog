import AddFillForm from "@/features/fills/AddFillForm";
import Header from "@/features/layouts/Header";
import PageLayout from "@/features/layouts/PageLayout";

const Home = () => {
  return (
    <PageLayout>
      <Header>
        <Header.Previous />
      </Header>
      <AddFillForm />
    </PageLayout>
  );
};

export default Home;
