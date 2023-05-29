import { createContext, useState,useEffect } from "react";
import { createUserDocumentFromAuth, onAuhStateChangedListener } from "../utlis/firbase/firebase";
import SHOP_DATA from "../shop-data.json"
interface Product {
  name: string;
  id:number;
  imageUrl:string
  price:number
}

interface ProductContextValue {
    product: Product[];
    setProduct: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductContext = createContext<ProductContextValue>({
  product: [],
  setProduct: () => {},
});

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
  const [product, setProduct] = useState<Product[]>(SHOP_DATA);
  const value: ProductContextValue = { product, setProduct };
  


  
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
