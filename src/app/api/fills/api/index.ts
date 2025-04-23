import { Fill } from "@/entites";

export type FillsCount = {
  category_id: number;
  category_name: string;
  count: number;
};

const getFillsCount = async (): Promise<FillsCount[]> => {
  const response = await fetch("http://localhost:3000/api/fillsCount", {
    method: "GET",
    cache: "no-store",
  });

  const fillCounts = await response.json();
  return fillCounts.data;
};

const getFillById = async ({ id }: { id: string }): Promise<Fill> => {
  const response = await fetch(`http://localhost:3000/api/fills/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  const result = await response.json();
  return result.data;
};

export const fillsApi = {
  getFillsCount,
  getFillById,
};
