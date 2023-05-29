import { createContext,useState } from "react";
interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    quantity?:number
}
interface ProductContextValue {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    cartItems:Product[];
    addItemToCart: (productToAdd: Product) => void;
}
const addCartItem = (cartItems: Product[], productToAdd: Product) => {
    const existingCartItem = cartItems.find((item) => item.id === productToAdd.id);
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: (cartItem.quantity! + 1) }
          : cartItem
      );
    }
  
  
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
export const DropdownContext = createContext<ProductContextValue>({
    isOpen:false,
    setIsOpen:()=>{},
    cartItems:[],
    addItemToCart: () => {},
})

export const DropdownProvider = ({children}: { children: React.ReactNode }) => {
    const [isOpen,setIsOpen] = useState(false)
    const [cartItems,setCartitems] = useState<Product[]>([])
    const addItemToCart = (productToAdd:Product) => {
        setCartitems(addCartItem(cartItems, productToAdd))
    }
    return (
        <DropdownContext.Provider value={{isOpen,setIsOpen,addItemToCart,cartItems}}>
            {children}
        </DropdownContext.Provider>
    )
}