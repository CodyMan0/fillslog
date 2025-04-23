import BottomNav from "@/app/components/MobileNav";

import Header from "@/features/layouts/Header";
import PageLayout from "@/features/layouts/PageLayout";

import React from "react";

export default async function Home({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const asycParams = await params;
  console.log(asycParams);

  return (
    <PageLayout>
      <Header>
        <Header.Previous />
      </Header>

      <div className="flex flex-col gap-2">
        <BottomNav />
      </div>
    </PageLayout>
  );
}
