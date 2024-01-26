import PropTypes from "prop-types";
import { FaSpotify } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const PlaylistHeader = ({ id, img, title, description, color,likes,songs,hours }) => {
  return (
    <div>
      <div
        className={`p-6 ${color} flex lg:flex-row flex-col items-center text-white gap-6`}
        id={id}
      >
        <img
          src={img}
          className={`h-60 rounded drop-shadow-lg shadow-gray-800  shadow-md`} alt="cover img"
        />
        <div>
          <h6 className="text-sm font-semibold animate-bounce hover:animate-none cursor-default">Playlist</h6>
          <h1 className="lg:text-8xl text-2xl font-black leading-normal cursor-default capitalize">
            {title}
          </h1>
          <p className="font-semibold text-white/80 lg:pt-4 pt-2 text-sm">{description}</p>
          <div className="flex items-center flex-col md:flex-row  gap-1 pt-2 cursor-pointer text-white ">
            <FaSpotify
              size={24}
              className="rounded-full text-green-500 "
              style={{ backgroundColor: "black" }}
            />
            <span className="font-bold text-sm text-white hover:underline">
              Spotify
            </span>
            
            <GoDotFill size={8} />
            <h6 className="text-sm font-semibold">
              <span className="text-base">{likes}</span> likes
            </h6>
            <GoDotFill size={8} />
            <h6 className="text-sm font-semibold">
              <span className="text-base">{songs}</span> songs, over{" "}
              <span className="text-base">{hours}</span> hr
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlaylistHeader;
PlaylistHeader.propTypes = {
  id: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  likes: PropTypes.string,
  songs: PropTypes.string,
  hours: PropTypes.string
};
