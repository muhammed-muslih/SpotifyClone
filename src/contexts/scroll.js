import { createContext,useContext } from "react";

export const ScrollContext =createContext ({
    isScrollHeightReached:false,
    updateScrollHeightReached:()=>{}
})
export const ScrollProvider = ScrollContext.Provider
const useScroll = () =>{
    return useContext(ScrollContext)
} 
export default useScroll
