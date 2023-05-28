import { createContext, useState,useEffect } from "react";
import { onAuhStateChangedListener } from "../utlis/firbase/firebase";
interface User {
  // Define your user properties here
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
   const unsubscribe =  onAuhStateChangedListener((user:any) => {
    console.log(user)
   })


   return unsubscribe
  },[])
  return (
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
  );
};
