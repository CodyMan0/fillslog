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

export const fillsApi = {
  getFillsCount,
};
