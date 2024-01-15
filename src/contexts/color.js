import { createContext,useContext } from "react";
export const ColorContext = createContext({
    color:'bg-[rgb(12,12,12)]',
    topBarColor:'bg-[rgb(12,12,12)]',
    updateColor:() =>{},
    updateTopBarColor:() =>{},
})
export const ColorProvider = ColorContext.Provider;

const useColor = () => {
     return useContext(ColorContext)
}
export default useColor;