import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdDevicesOther } from "react-icons/md";
import useSong from "../../contexts/song";
import { RiHeartLine } from "react-icons/ri";
import ProgressBar from "../progressBar/ProgressBar";
import VolumeBar from "../volumeBar/VolumeBar";

const MusicBar = () => {
  const { currentSong } = useSong();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-black py-3.5 px-6 xl:px-2">
      <div>
        {currentSong && (
          <div className="flex gap-4 md:gap-6 items-center transition-all duration-300">
            <img
              src={currentSong?.imgUrl}
              alt=""
              className="h-14  md:h-14 rounded-md"
            />
            <div className="flex gap-4">
              <div>
                <h1 className="text-white/90 text-xs md:text-sm font-normal md:font-semibold cursor-pointer hover:underline">
                  {currentSong?.title}
                </h1>
                <h2 className="text-xs font-extralight md:font-normal text-white/70 cursor-pointer hover:underline">
                  {currentSong?.artist}
                </h2>
              </div>
              <div className="text-white/50 hover:text-white text-lg md:text-2xl cursor-pointer animate-pulse hover:animate-none">
                <RiHeartLine />
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <ProgressBar />
      </div>
      <div className="hidden md:flex md:justify-end">
        <div className="text-white/70 text-lg flex flex-row gap-4  items-center">
          <div className="text-[#4d4c4d] cursor-not-allowed">
            <AiOutlinePlaySquare />
          </div>
          <div className="cursor-pointer hover:text-white transition-all duration-200">
            <HiOutlineQueueList />
          </div>
          <div className="cursor-default hover:text-white transition-all duration-200">
            <MdDevicesOther />
          </div>
          <VolumeBar />
        </div>
      </div>
    </div>
  );
};
export default MusicBar;
