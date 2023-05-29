import { createContext,useEffect,useState } from "react";
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
    count:number
    removeItemToCart: (productToAdd: Product) => void
    delateByid: (idx: number) => void;
    totalPrice:number
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

  const removeCartItem = (cartItems: Product[], cartItemToRemove: Product) => {
    //find specific item with its id
    const existingCartItem = cartItems.find(
      (item) => item.id === cartItemToRemove.id
    );
  //delating if quantity is 1
    if (existingCartItem && existingCartItem.quantity === 1) {
      return cartItems.filter((item) => item.id !== cartItemToRemove.id);
    }
  
    //returning back matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
      ? {
          ...cartItem,
             quantity: (cartItem.quantity! - 1),
          }
        : cartItem
    );
  };
  
export const DropdownContext = createContext<ProductContextValue>({
    isOpen:false,
    setIsOpen:()=>{},
    cartItems:[],
    addItemToCart: () => {},
    count:0,
    removeItemToCart:()=>{},
    delateByid:() =>{},
    totalPrice:0
})

export const DropdownProvider = ({children}: { children: React.ReactNode }) => {
    const [isOpen,setIsOpen] = useState(false)
    const [cartItems,setCartitems] = useState<Product[]>([])
    const [count,setCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + (cartItem.quantity ?? 0),
            0
          );
        setCount(newCartCount)
    },[cartItems])
    const addItemToCart = (productToAdd:Product) => {
        setCartitems(addCartItem(cartItems, productToAdd))
    }
    const removeItemToCart = (cartItemToRemove:Product) => {
        setCartitems(removeCartItem(cartItems, cartItemToRemove))
    }
    const delateByid = (idx:number) => {
      setCartitems(cartItems.filter((item) => item.id !== idx))
    }
    useEffect(() => {
      const newCartTotal = cartItems.reduce(
          (total, cartItem) => total + (cartItem.quantity ?? 0) * cartItem.price,
          0
        );
        setTotalPrice(newCartTotal)
  },[cartItems])
    return (
        <DropdownContext.Provider value={{isOpen,setIsOpen,addItemToCart,cartItems,count,removeItemToCart,delateByid,totalPrice}}>
            {children}
        </DropdownContext.Provider>
    )
}