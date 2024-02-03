import { useEffect, useState } from "react";
import { PlaylistHeader, PlaylistIcons, MusicTable } from "../components";
import { useParams } from "react-router-dom";
import { playlist1, playlist2 } from "../data/playlists";
import useColor from "../contexts/color";
import usePlaylist from "../contexts/playlist";

const Playlist = () => {
  const { id, playlist } = useParams();
  const [currentPlaylist, setCurrentPlayList] = useState({});
  const { updateColor, updateTopBarColor } = useColor();
  const { updatePlaylistTitle } = usePlaylist();

  const changeColor = (newColor) => {
    updateColor(newColor);
  };
  const changeTopBarColor = (newTopBarColor) => {
    updateTopBarColor(newTopBarColor);
  };

  useEffect(() => {
    let currentPlaylist;
    if (playlist === "spotifyplaylists") {
      currentPlaylist = playlist1.find((playlist) => playlist.id === id);
    } else {
      currentPlaylist = playlist2.find((playlist) => playlist.id === id);
    }
    if (currentPlaylist) {
      setCurrentPlayList(currentPlaylist);
      updatePlaylistTitle(currentPlaylist.title);
    } else {
      console.error(`Playlist with playlis ${playlist} and  id ${id} not found.`);
    }
  }, [playlist, id]);

  useEffect(() => {
    if (currentPlaylist) {
      changeColor(
        currentPlaylist?.color ? currentPlaylist?.color : "rgb(16,16,16)"
      );
      changeTopBarColor(
        currentPlaylist?.topBarColor
          ? currentPlaylist?.topBarColor
          : "rgb(16,16,16)"
      );
    }
  }, [currentPlaylist]);

  return (
    <div className="">
      <PlaylistHeader
        id={id}
        img={currentPlaylist?.img}
        title={currentPlaylist?.title}
        description={currentPlaylist?.description}
        color={currentPlaylist?.color}
        likes={currentPlaylist?.likes}
        songs={currentPlaylist?.songs}
        hours={currentPlaylist?.hours}
      />
      <PlaylistIcons gradient={currentPlaylist?.gradient} />
      <MusicTable />
    </div>
  );
};
export default Playlist;
