import { createContext,useContext } from "react";
export const SongContext = createContext({
    currentSong:null,
    updateCurrentSong:() =>{},

})
export const SongProvider = SongContext.Provider;
const useSong = () => {
    return useContext(SongContext)
}
export default useSong;