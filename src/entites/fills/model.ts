export type Fill = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  url: string;
  category: Category;
  tag: string | null;
};

export type CategoryCount = {
  count: number;
};

export type Category = {
  id: number;
  name: string;
};

export type FillPostDto = {
  created_at: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tag: string | null;
};
