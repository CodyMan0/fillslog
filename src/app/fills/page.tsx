import Header from "@/features/layouts/Header";

import PageLayout from "@/features/layouts/PageLayout";

import {
  FlaskConical,
  LucideIcon,
  Music,
  Plus,
  Rocket,
  Zap,
} from "lucide-react";
import Link from "next/link";

import { fillsApi } from "../api/fills/api";
import FloatingMotionButton from "@/features/fills/FloatingMotionButton";
import { Button } from "@/shared/ui";

const categoryMeta: Record<
  string,
  {
    displayName: string;
    icon: LucideIcon;
    color: string;
  }
> = {
  forth_note: {
    displayName: "4분음표 Fill",
    icon: Music,
    color: "bg-red-500",
  },
  eighth_note: {
    displayName: "8분음표 Fill",
    icon: Zap,
    color: "bg-blue-500",
  },
  sixteenth_note: {
    displayName: "16분음표 Fill",
    icon: Music,
    color: "bg-green-500",
  },
  thirty_second_note: {
    displayName: "32분음표 Fill",
    icon: Zap,
    color: "bg-yellow-400",
  },
  triplet: {
    displayName: "3연음 Fill",
    icon: Zap,
    color: "bg-purple-500",
  },
  sextuplet: {
    displayName: "6연음 Fill",
    icon: Rocket,
    color: "bg-red-500",
  },
  hybrid: {
    displayName: "Hybrid Fill",
    icon: FlaskConical,
    color: "bg-gray-700",
  },
};

export default async function Home() {
  const fillCounts = await fillsApi.getFillsCount();

  return (
    <PageLayout>
      <Header>
        <Header.Text text="Fills log" />
      </Header>
      <div>
        <div className="grid grid-cols-2 gap-4 p-4 max-w-[430px] mx-auto">
          {fillCounts.map((item) => {
            const Icon = categoryMeta[item.category_name].icon;
            return (
              <Link
                key={item.category_id}
                href={`/fills/${item.category_id}`}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg text-white text-lg font-semibold shadow-md ${
                  categoryMeta[item.category_name].color
                } hover:opacity-90 transition relative`}
              >
                <Icon className="w-10 h-10 mb-2" color="white" />
                {categoryMeta[item.category_name].displayName}
                <div className="absolute bottom-2 right-2 bg-white text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow">
                  {item.count}
                </div>
              </Link>
            );
          })}
          <FloatingMotionButton>
            <Button
              className="rounded-full px-4 py-2 shadow-md bg-white text-black hover:scale-105 transition-all duration-200 ease-in-out hover:bg-white/80"
              asChild
            >
              <Link href="/fills/add">
                <Plus className="mr-2 h-4 w-4" />
                필인 줍줍
              </Link>
            </Button>
          </FloatingMotionButton>
        </div>
      </div>
    </PageLayout>
  );
}
