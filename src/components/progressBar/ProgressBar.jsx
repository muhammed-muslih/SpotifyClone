import {
  IoMdPause,
  IoIosSkipForward,
  IoIosSkipBackward,
  IoMdPlay,
} from "react-icons/io";
import { SlLoop } from "react-icons/sl";
import { LiaRandomSolid } from "react-icons/lia";
import useSong from "../../contexts/song";
import { useEffect, useState, useRef } from "react";

const ProgressBar = () => {
  const { currentSong } = useSong();
  const [progressbarValue, setProgressbarValue] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [maxValue, setMaxValue] = useState(3);
  const [currentValue, setCurrentValue] = useState("0:00");
  const inputRef = useRef(null);

  const timeStringToNumber = (timeString) => {
    const [minutes, seconds] = timeString.split(":");
    const totalSeconds = parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
    return totalSeconds;
  };
  const numberToTimeString = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const timeString = `${String(minutes)}:${String(seconds)}`;
    return timeString;
  };

  const handleProgressbar = (e) => {
    const { value } = e.target;
    console.log(value);
    const percentage = (value / maxValue) * 100;
    const currentValue = numberToTimeString(value);
    setCurrentValue(currentValue);
    setProgressPercentage(percentage);
    setProgressbarValue(value);
  };

  useEffect(() => {
    if (currentSong) {
      setIsPlaying(true);
      const max = timeStringToNumber(currentSong.duration);
      console.log(max);
      setMaxValue(max);
      inputRef.current.value = 0;
      setProgressbarValue(0);
      setProgressPercentage(1);
      setCurrentValue("0:00 ");
    }
  }, [currentSong]);

  return (
    <div className="flex flex-col justify-center items-center gap-1 ">
      <div className="flex flex-row  text-[#4d4c4d] text-lg md:text-2xl items-center gap-5 ">
        <div className="text-sm md:text-lg">
          <LiaRandomSolid />
        </div>
        <div>
          <IoIosSkipBackward />
        </div>
        <div
          className="rounded-full p-2 bg-[#4d4c4d] text-black w-fit text-base md:text-lg hover:scale-105"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          {isPlaying && currentSong ? (
            <IoMdPause />
          ) : !isPlaying && currentSong ? (
            <IoMdPlay />
          ) : (
            <IoMdPause />
          )}
        </div>
        <div>
          <IoIosSkipForward />
        </div>
        <div className="text-xs md:text-base">
          <SlLoop />
        </div>
      </div>
      <div className="w-full  flex flex-row text-[#4d4c4d] items-center gap-2 ">
        <div className="">
          {currentSong ? (
            <span className="text-sm  text-white/60">{currentValue}</span>
          ) : (
            <span> -:--</span>
          )}
        </div>
        <div
          className={`w-fit h-1 flex-grow bg-[#4d4c4d] relative  rounded-full group ${
            currentSong && "range-box"
          }`}
        >
          <input
            ref={inputRef}
            type="range"
            min={0}
            max={maxValue}
            step={0.25}
            value={progressbarValue}
            onChange={handleProgressbar}
            className="w-full h-1 rounded-full bg-transparent appearance-none absolute z-50 range"
          />
          {currentSong && (
            <>
              <div
                className="absolute h-1 bg-white rounded-full"
                style={{ width: progressPercentage + "%" }}
              ></div>
              <div
                className="absolute h-1 bg-green-500 rounded-full hidden group-hover:block"
                style={{ width: progressPercentage + "%" }}
              ></div>
            </>
          )}
        </div>
        <div className="">
          {currentSong ? (
            <span className="text-sm  text-white/60">
              {currentSong?.duration}
            </span>
          ) : (
            <span> -:--</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
