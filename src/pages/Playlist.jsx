import { useEffect, useState } from "react";
import { PlaylistHeader, PlaylistIcons, MusicTable } from "../components";
import { useParams } from "react-router-dom";
import { playlists } from "../data/playlists";
import useColor from "../contexts/color";

const Playlist = () => {
  const { id } = useParams();
  const [playlist, setPlayList] = useState({});
  const { updateColor, updateTopBarColor } = useColor();
  const changeColor = (newColor) => {
    updateColor(newColor);
  };
  const changeTopBarColor = (newTopBarColor) => {
    updateTopBarColor(newTopBarColor);
  };
  useEffect(() => {
    const playlist = playlists.find((playlist) => playlist.id === id);
    if (playlist) {
      setPlayList(playlist);
    } else {
      console.error(`Playlist with id ${id} not found.`);
    }
  }, [id]);

  useEffect(() => {
    if (playlist) {
      changeColor(playlist?.color ? playlist?.color : "rgb(16,16,16)");
      changeTopBarColor(
        playlist?.topBarColor ? playlist?.topBarColor : "rgb(16,16,16)"
      );
    }
  }, [playlist]);

  return (
    <div>
      <PlaylistHeader
        id={id}
        img={playlist?.img}
        title={playlist?.title}
        description={playlist?.description}
        color={playlist?.color}
        likes={playlist?.likes}
        songs={playlist?.songs}
        hours={playlist?.hours}
      />
      <PlaylistIcons gradient={playlist?.gradient} />
      <MusicTable />
    </div>
  );
};
export default Playlist;
