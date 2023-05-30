import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocs } from "../utlis/firbase/firebase";

export interface Product {
  name: string;
  id: number;
  imageUrl: string;
  price: number;
}

interface ShopData {
  [key: string]: Product[];
}

interface CategoriesContextValue {
  categoriesMap: ShopData;
  setCategoriesMap: React.Dispatch<React.SetStateAction<ShopData>>;
}

export const CategoriesContext = createContext<CategoriesContextValue>({
  categoriesMap: {},
  setCategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoriesMap, setCategoriesMap] = useState<ShopData>({});

  useEffect(() => {
    const getCat = async () => {
      const map = await getCategoriesAndDocs();
      setCategoriesMap(map);
    };

    getCat();
  }, []);

  const value: CategoriesContextValue = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
