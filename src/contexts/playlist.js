import { createContext,useContext } from "react";

const PlaylistContext = createContext({
    playlistTitle:"",
    updatePlaylistTitle :() =>{}
})

export const PlaylistProvider = PlaylistContext.Provider;
const usePlaylist  = () =>{
    return useContext(PlaylistContext)
}
export default usePlaylist