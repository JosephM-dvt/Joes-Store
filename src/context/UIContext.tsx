import { createContext, useContext, useState } from "react";

type SortOption = "price-asc" | "price-desc" | "title-asc" | "title-desc";

type UIContextType = {
  search: string;
  setSearch: (value: string) => void;
  sort: SortOption;
  setSort: (value: SortOption) => void;
};

const UIContext = createContext<UIContextType | null>(null);

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("price-asc");

  return (
    <UIContext.Provider value={{ search, setSearch, sort, setSort }}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);

  if (!context) throw new Error("useUI must be used within UIProvider");

  return context;
}
