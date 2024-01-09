import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="text-white px-7 py-3 bg-transparent flex justify-between sticky z-50 ">
      <div className="flex gap-2 items-center">
        <div className="bg-black rounded-full w-fit text-white/50">
          <MdOutlineKeyboardArrowLeft size={30} />
        </div>
        <div className="bg-black rounded-full  w-fit text-white/50">
          <MdOutlineKeyboardArrowRight size={30} />
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <Link className="font-bold text-white/50 hover:scale-105 inline-block hover:text-white transition-all duration-300">
          Sign up
        </Link>
        <Link
          to={"/"}
          className="bg-white px-8 py-3 rounded-full text-black font-bold inline-block transform hover:scale-105 transition-transform"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
