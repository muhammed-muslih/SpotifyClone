import PropTypes from "prop-types";
import { IoMdPlay } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Card = ({ img, title, description, id, playlist }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/playlist/${playlist}/${id}`);
  };

  return (
    <div
      className="bg-[rgb(24,24,24)] sm:w-48 sm:h-72 p-4 rounded-lg text-white cursor-pointer hover:bg-[rgb(36,36,36)] relative group"
      onClick={handleNavigate}
    >
      <img src={img} alt="" className="rounded-lg w-96" />
      <div className="absolute rounded-full p-3 bg-green-500  hover:bg-green-400 hover:scale-105 right-6 group-hover:-translate-y-14 group-hover:transition hidden group-hover:duration-1000 group-hover:block">
        <IoMdPlay size={24} color="black" />
      </div>

      <h1 className="font-medium sm:font-semibold pt-5 text-xs sm:text-base capitalize">
        {title}
      </h1>
      <p className="text-xs sm:text-sm text-white/50 pt-3 font-light sm:font-medium capitalize line-clamp-2">
        {description}
      </p>
    </div>
  );
};
Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  playlist: PropTypes.string,
};
export default Card;
