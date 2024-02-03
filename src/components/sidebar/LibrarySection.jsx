import { BiLibrary } from "react-icons/bi";
import { GoPlus } from "react-icons/go";
import { PiGlobeSimple } from "react-icons/pi";
import Scroll from "../scrollbar/Scrollbar";
const LibrarySection = () => {
  return (
    <div className="bg-[rgba(18,18,18)] rounded-lg text-white  h-fit py-5 hidden flex-grow md:flex md:h-screen xl:h-fit ">
      <div id="libraryId">
        <Scroll id={"libraryId"} findHeight={false} />
        <div className="flex justify-between px-6">
          <div className="text-white/50 hover:text-white transition-all duration-700 cursor-pointer flex gap-2">
            <BiLibrary size={26} />
            <span className="capitalize font-medium">your library</span>
          </div>
          <div
            className="p-0.5 text-white/50 hover:text-white transition-all duration-700 rounded-full hover:bg-[rgb(36,36,36)] cursor-pointer"
            title="add"
          >
            <GoPlus size={26} />
          </div>
        </div>

        <div className="m-2 bg-[rgb(36,36,36)] text-white rounded-lg px-4 py-4 mt-5">
          <h1 className="font-medium">Create your first playlist</h1>
          <p className="text-sm pt-2">it&#39;s easy,we&#39;ll help you</p>
          <button className="bg-white rounded-full text-sm font-semibold px-4 py-1.5 text-black mt-4 transition  hover:scale-105 hover:bg-white/95">
            Create playlist
          </button>
        </div>

        <div className="m-2 bg-[rgb(36,36,36)] text-white rounded-lg px-4 py-4 mt-5">
          <h1 className="font-medium">
            Let&#39;s find some podcasts to follow
          </h1>
          <p className="text-sm pt-2">
            We&#39;ll keep you updated on new episodes
          </p>
          <button className="bg-white rounded-full text-sm font-semibold px-4 py-1.5 text-black mt-4 transition  hover:scale-105 hover:bg-white/95">
            Browse podcasts
          </button>
        </div>

        <div className="px-6 mt-40">
          <ul className="text-xs flex flex-wrap gap-6 text-white/50">
            <li className="cursor-pointer">Legal</li>
            <li className="cursor-pointer">Privacy Center</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Cookies</li>
            <li className="cursor-pointer">About Ads</li>
            <li className="cursor-pointer">Accessibility</li>
          </ul>
          <p className="text-xs text-white/50 mt-5 cursor-pointer hover:underline">
            Cookies
          </p>
          <button className="flex  gap-1 rounded-full items-center border border-white/50 text-sm px-3.5 py-1.5 font-semibold mt-6 mb-5 hover:scale-105 hover:border-white">
            <PiGlobeSimple size={20} />
            <span>English</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default LibrarySection;
