import { IoMdPlay } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaListUl } from "react-icons/fa";
import PropTypes from "prop-types";

const PlaylistIcons = ({ gradient }) => {
  return (
    <div
      className={` px-7 py-6 flex flex-col md:flex-row md:justify-between gap-4`}
      style={{ background: gradient }}
    >
      <div className="flex items-center gap-8">
        <div className="rounded-full p-4 bg-green-500  hover:bg-green-400 hover:scale-105 w-fit duration-300">
          <IoMdPlay size={26} color="black" />
        </div>
        <RiHeartLine
          size={40}
          className="text-white/50 hover:text-white duration-300 cursor-pointer hover:scale-105 animate-pulse hover:animate-none"
        />
        <HiOutlineDotsHorizontal
          size={30}
          className="text-white/50 hover:text-white duration-300 cursor-pointer hover:scale-105 animate-pulse hover:animate-none"
        />
      </div>
      <div className="flex items-center gap-2 text-white/50 cursor-pointer font-bold hover:text-white duration-500 transition-all">
        <span className="">List</span>
        <FaListUl />
      </div>
    </div>
  );
};
PlaylistIcons.propTypes = {
  gradient: PropTypes.string,
};
export default PlaylistIcons;
