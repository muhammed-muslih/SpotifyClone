import { Link } from "react-router-dom";
import { FaSpotify } from "react-icons/fa6";

const LoginTop = () => {
  return (
    <div className="bg-[#121212] py-8 px-12">
      <Link to={"/"}>
        <div
          className="flex items-center gap-1 cursor-pointer text-white"
          title="spotify"
        >
          <FaSpotify size={36} />
          <span className="font-bold text-xl ">Spotify</span>
        </div>
      </Link>
    </div>
  );
};
export default LoginTop;
