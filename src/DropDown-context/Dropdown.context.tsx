import { createContext,useState } from "react";

interface ProductContextValue {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const DropdownContext = createContext<ProductContextValue>({
    isOpen:false,
    setIsOpen:()=>{}
})

export const DropdownProvider = ({children}: { children: React.ReactNode }) => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <DropdownContext.Provider value={{isOpen,setIsOpen}}>
            {children}
        </DropdownContext.Provider>
    )
}