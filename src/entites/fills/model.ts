export type Fill = {
  id: number;
  created_at: string;
  title: string;
  description: string;
  url: string;
  category: {
    id: number;
    name: string;
  };
  tag: string | null;
};

export type CategoryCount = {
  count: number;
};

export type Category = {
  id: number;
  name: string;
};
