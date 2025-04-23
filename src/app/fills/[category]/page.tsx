import EmptyFillsPage from "@/app/components/EmptyFillsPage";
import BottomNav from "@/app/components/MobileNav";
import { Fill } from "@/entites";
import { FillCard } from "@/features/fills";

import Header from "@/features/layouts/Header";
import PageLayout from "@/features/layouts/PageLayout";

import React from "react";

export default async function Home({
  params,
}: {
  params: Promise<{
    category: string;
  }>;
}) {
  const asycParams = await params;

  const response = await fetch(
    `http://localhost:3000/api/fills?categoryId=${asycParams.category}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const fills = await response.json();

  return (
    <PageLayout>
      <Header>
        <Header.Previous />
      </Header>

      <div className="flex flex-col gap-2">
        {fills.data.length > 0 ? (
          // 데이터가 있을 경우 FillCard 렌더링
          fills.data.map((fill: Fill) => (
            <FillCard
              key={fill.id}
              id={fill.id}
              title={fill.title}
              videoUrl={fill.url}
              description={fill.description}
              createdAt={fill.created_at}
              categoryId={fill.category.id}
            />
          ))
        ) : (
          // 데이터가 없을 경우 주석 처리된 UI 렌더링
          <EmptyFillsPage />
        )}

        <BottomNav />
      </div>
    </PageLayout>
  );
}
