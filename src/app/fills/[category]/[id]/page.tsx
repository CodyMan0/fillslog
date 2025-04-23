import { fillsApi } from "@/app/api/fills/api";
import { FillDetail } from "@/app/components/FillDetailSection";
import BottomNav from "@/app/components/MobileNav";

import Header from "@/features/layouts/Header";
import PageLayout from "@/features/layouts/PageLayout";

import React from "react";

export default async function Home({
  params,
}: {
  params: Promise<{
    category: string;
    id: string;
  }>;
}) {
  const asycParams = await params;
  console.log(asycParams.id);

  const specificFills = await fillsApi.getFillById({ id: asycParams.id });
  console.log("specificFills", specificFills);

  return (
    <PageLayout>
      <Header>
        <Header.Previous />
      </Header>

      <div className="flex flex-col gap-2">
        <FillDetail
          id={specificFills.id}
          title={specificFills.title}
          videoUrl={specificFills.url}
          description={specificFills.description}
          createdAt={specificFills.created_at}
          categoryName={specificFills.category.name}
        />
        <BottomNav />
      </div>
    </PageLayout>
  );
}
