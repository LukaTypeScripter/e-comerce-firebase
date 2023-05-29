import { createContext, useState,useEffect } from "react";
import { createUserDocumentFromAuth, onAuhStateChangedListener } from "../utlis/firbase/firebase";
interface User {
// Dont know what is types in here it gives me error everytime
  
}

interface UserContextValue {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextValue>({
  currentUser: null,
  setCurrentUser: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const value: UserContextValue = { currentUser, setCurrentUser };
  useEffect(() => {
   const unsubscribe =  onAuhStateChangedListener((user:string) => {
    if(user) {
      createUserDocumentFromAuth(user,{})
    }
    setCurrentUser(user)
   })


   return unsubscribe
  },[])
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
