import { GrVolumeLow, GrVolumeMute, GrVolume } from "react-icons/gr";
import { useState, useEffect } from "react";

const VolumeBar = () => {
  const [volume, setVolume] = useState(0);
  const [isMute, setIsMute] = useState(true);
  const [isHighVolume, setIsHighVolume] = useState(false);

  const handleVolume = (e) => {
    const { value } = e.target;
    setVolume(value);
  };

  useEffect(() => {
    if (volume == 0) {
      setIsMute(true);
    } else if (volume < 70) {
      setIsMute(false);
      setIsHighVolume(false);
    } else {
      setIsMute(false);
      setIsHighVolume(true);
    }
  }, [volume]);

  const handleMute = () => {
    setVolume(0);
    setIsMute((prev) => !prev);
  };

  const handleUnMute = () => {
    setVolume(20);
    setIsMute((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-2 cursor-default transition-all duration-200 group range-box">
      {isMute ? (
        <GrVolumeMute onClick={handleUnMute} />
      ) : isHighVolume ? (
        <GrVolume onClick={handleMute} />
      ) : (
        <GrVolumeLow onClick={handleMute} />
      )}

      <div className="relative h-1 flex items-center bg-[#4d4c4d] rounded-full transition-all duration-500">
        <input
          type="range"
          className={`w-24 h-1 rounded-full bg-transparent appearance-none  z-50 transition-all duration-500 range`}
          min={0}
          max={100}
          value={volume}
          onChange={handleVolume}
        />
        <div
          style={{ width: volume + "%" }}
          className="absolute h-full rounded-full bg-white"
        ></div>
        <div
          style={{ width: volume + "%" }}
          className="absolute h-full rounded-full bg-green-500 hidden group-hover:block"
        ></div>
      </div>
    </div>
  );
};
export default VolumeBar;
