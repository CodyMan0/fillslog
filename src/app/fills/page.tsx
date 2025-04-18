import Header from "@/features/layouts/Header";

import PageLayout from "@/features/layouts/PageLayout";

import { FlaskConical, LucideIcon, Music, Rocket, Zap } from "lucide-react";
import Link from "next/link";

const categories: {
  name: string;
  slug: string;
  color: string;
  icon: LucideIcon;
  count: number;
}[] = [
  {
    name: "16분음표 Fill",
    slug: "16th",
    color: "bg-green-500",
    icon: Music,
    count: 0,
  },
  {
    name: "32분음표 Fill",
    slug: "32nd",
    color: "bg-yellow-400",
    icon: Zap,
    count: 0,
  },
  {
    name: "8분음표 Fill",
    slug: "8th",
    color: "bg-blue-500",
    icon: Zap,
    count: 0,
  },
  {
    name: "3연음 Fill",
    slug: "triplet",
    color: "bg-purple-500",
    icon: Zap,
    count: 0,
  },
  {
    name: "6연음 Fill",
    slug: "sixtuplet",
    color: "bg-red-500",
    icon: Rocket,
    count: 0,
  },
  {
    name: "Hybrid Fill",
    slug: "hybrid",
    color: "bg-gray-700",
    icon: FlaskConical,
    count: 0,
  },
];
const page = () => {
  return (
    <PageLayout>
      <Header>
        <Header.Text text="Fills log" />
      </Header>
      <div>
        <div className="grid grid-cols-2 gap-4 p-4 max-w-[430px] mx-auto">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/fills/${cat.slug}`}
              className={`aspect-square flex flex-col items-center justify-center rounded-lg text-white text-lg font-semibold shadow-md ${cat.color} hover:opacity-90 transition relative`}
            >
              <cat.icon className="w-8 h-8 mb-2" />
              {cat.name}
              <div className="absolute bottom-2 right-2 bg-white text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow">
                {cat.count}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default page;
