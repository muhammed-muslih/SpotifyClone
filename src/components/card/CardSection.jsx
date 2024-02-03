import { useEffect, useState } from "react";
import Card from "./Card";
import useColor from "../../contexts/color";
import PropTypes from "prop-types";

const CardSection = ({ playlist, playlistTitle }) => {
  const [visibleCards, setVisibleCards] = useState(7);
  const { updateColor, updateTopBarColor } = useColor();
  const [currentPlaylist, setCurrentPlaylist] = useState("spotifyplaylists");
  const cards = playlist?.map((item, index) => (
    <div key={index} className={`${index < visibleCards ? "block" : "hidden"}`}>
      <Card
        img={item.img}
        title={item.title}
        description={item.description}
        id={item.id}
        playlist={currentPlaylist}
      />
    </div>
  ));
  useEffect(() => {
    const modifiedPlaylist = playlistTitle.toLowerCase().replace(/\s/g, "");
    setCurrentPlaylist(modifiedPlaylist);
  }, []);

  const changeColor = (newColor) => {
    updateColor(newColor);
  };
  const changeTopBarColor = (newTopBarColor) => {
    updateTopBarColor(newTopBarColor);
  };
  useEffect(() => {
    changeColor("bg-[rgb(12,12,12)]");
    changeTopBarColor("bg-[rgb(12,12,12)]");
  }, []);

  return (
    <div className="px-4 sm:px-9 bg-[rgb(18,18,18)] py-2 pb-8 h-auto">
      <div className="flex justify-between text-white">
        <h1 className="text-white font-semibold text-xs sm:text-2xl hover:underline cursor-pointer capitalize">
          {playlistTitle}
        </h1>
        <h3
          className={`text-white/50 text-xs font-normal cursor-pointer hover:underline ${
            visibleCards === playlist.length && "hidden"
          }`}
          onClick={() => setVisibleCards(playlist.length)}
        >
          Show all
        </h3>
      </div>
      <div className="flex flex-wrap gap-4 lg:gap-1 xl:gap-4  pt-4">
        {cards}
      </div>
    </div>
  );
};
export default CardSection;
CardSection.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      img: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      color: PropTypes.string,
      topBarColor: PropTypes.string,
      likes: PropTypes.string,
      songs: PropTypes.string,
      hours: PropTypes.string,
      gradient: PropTypes.string,
    })
  ),
  playlistTitle: PropTypes.string,
};
