import { IoMdPause, IoIosSkipForward, IoIosSkipBackward } from "react-icons/io";
import { SlLoop } from "react-icons/sl";
import { LiaRandomSolid } from "react-icons/lia";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { HiOutlineQueueList } from "react-icons/hi2";
import { MdDevicesOther } from "react-icons/md";
import { GrVolumeLow } from "react-icons/gr";
const MusicBar = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-black py-3.5 px-6 xl:px-2">
      <div></div>
      <div className="flex flex-col justify-center items-center gap-1 ">
        <div className="flex flex-row  text-[#4d4c4d] text-lg md:text-2xl items-center gap-5 ">
          <div className="text-sm md:text-lg">
            <LiaRandomSolid />
          </div>
          <div>
            <IoIosSkipBackward />
          </div>
          <div className="rounded-full p-2 bg-[#4d4c4d] text-black w-fit text-base md:text-lg hover:scale-105">
            <IoMdPause />
          </div>
          <div>
            <IoIosSkipForward />
          </div>
          <div className="text-xs md:text-base">
            <SlLoop />
          </div>
        </div>
        <div className="w-full flex flex-row text-[#4d4c4d] items-center gap-2">
          <div>
            <span> -:--</span>
          </div>
          <div className="w-auto flex-grow h-1 rounded-full bg-[#4d4c4d]"></div>
          <div>
            <span> -:--</span>
          </div>
        </div>
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
          <div className="flex items-center gap-1 cursor-default transition-all duration-200">
            <GrVolumeLow />
            <div className="rounded-full w-24 h-1 bg-[#4d4c4d]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MusicBar;
