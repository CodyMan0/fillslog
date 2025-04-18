"use client";

import { createContext, useState, useContext } from "react";
import { useRouter } from "next/navigation";

export type NavigationDirection = "forward" | "backward";

interface RouterWrapperContextType {
  direction: NavigationDirection;
  push: (url: string) => void;
  back: () => void;
}

const RouterWrapperContext = createContext<RouterWrapperContextType | null>(
  null
);

export function RouterWrapperProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [direction, setDirection] = useState<NavigationDirection>("forward");
  const router = useRouter();

  const push = (url: string) => {
    setDirection("forward");
    router.push(url);
  };

  const back = () => {
    setDirection("backward");
    router.back();
  };

  return (
    <RouterWrapperContext.Provider value={{ direction, push, back }}>
      {children}
    </RouterWrapperContext.Provider>
  );
}

export function useRouterWrapper() {
  const context = useContext(RouterWrapperContext);
  if (!context) {
    throw new Error(
      "useRouterWrapper must be used within a RouterWrapperProvider"
    );
  }
  return context;
}
