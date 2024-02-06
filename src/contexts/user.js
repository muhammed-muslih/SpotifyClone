import { createContext,useContext } from "react";
const parsedData = JSON.parse(localStorage.getItem("user")) 
const isloggedIn = parsedData?.isLoggedIn??false;
const user = parsedData?.userId ?? '';

export const UserContext = createContext({
    isUserLiggedIn: isloggedIn,
    userId :user,
    handleUserLoggedIn: () => {},
    handleUserId: () => {},
})
export const UserProvider = UserContext.Provider;
const useUser = () => {
    return useContext(UserContext)
}
export default useUser