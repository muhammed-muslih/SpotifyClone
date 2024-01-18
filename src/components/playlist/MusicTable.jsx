import { FaRegClock } from "react-icons/fa";
import { IoIosPlay } from "react-icons/io";
import { RiHeartLine } from "react-icons/ri";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import musicData from "../../data/musicData";

const MusicTable = () => {
  return (
    <>
      <div
        className="text-sm text-left  px-10 pb-20 hidden lg:block"
        style={{ background: "#121212" }}
      >
        <table className="text-white/50  capitalize w-full rtl:text-right relative ">
          <thead className="border-b border-gray-500 sticky top-32  z-50 h-11">
            <tr>
              <th scope="" className="px-3 py-1 w-3">
                #
              </th>
              <th className="px-6 py-1">title</th>
              <th className="px-6 py-1">album</th>
              <th className="px-6 py-1 ">Date added</th>
              <th className="w-6"></th>
              <th className="px-6 py-1 w-28">
                <FaRegClock />
              </th>
            </tr>
          </thead>

          <tbody className="mt-10">
            <tr className="spacer-row ">
              <td className="py-3"></td>
            </tr>
            {musicData?.map((music, index) => (
              <tr
                className=" hover:bg-white/5 transition duration-300 ease-in-out group "
                key={index + music?.title}
              >
                <td className="px-3 py-2  rounded-s-lg">
                  <div className="flex items-center">
                    <span className="group-hover:hidden text-lg font-medium">
                      {index + 1}
                    </span>
                    <span className="hidden group-hover:inline-block">
                      <IoIosPlay className="text-lg text-white" />
                    </span>
                  </div>
                </td>
                <td className="px-6 py-2 ">
                  <div className="flex gap-4 items-center">
                    <img
                      src={music?.imgUrl}
                      className="h-12 rounded-md"
                      alt=""
                    />
                    <div>
                      <h3 className="font-semibold  text-white hover:underline cursor-pointer">
                        {music?.title}
                      </h3>
                      <h3 className="font-semibold  hover:underline cursor-pointer group-hover:text-white transition duration-300 ease-in-out">
                        {music?.artist}
                      </h3>
                    </div>
                  </div>
                </td>
                <td className="px-6 py- 2">
                  <h3 className=" hover:underline cursor-pointer group-hover:text-white transition duration-300 ease-in-out">
                    {music?.album}
                  </h3>
                </td>
                <td className="px-6 py-2 ">{music.dateAdded}</td>
                <td>
                  <RiHeartLine className="text-xl hover:text-white cursor-pointer transition duration-300 ease-in-out hidden group-hover:block" />
                </td>
                <td className="px-6 py-2  rounded-e-lg">
                  <div className="flex items-center gap-2">
                    <span>{music?.duration}</span>
                    <HiOutlineDotsHorizontal className="text-xl text-white cursor-pointer hidden group-hover:block " />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div
        style={{ background: "#121212" }}
        className="text-white/50  capitalize w-full rtl:text-right lg:hidden px-4 py-4 grid grid-cols-1 gap-1"
      >
        {musicData?.map((music, index) => (
          <div
            className={`rounded-lg px-4 py-4  flex flex-col sm:flex-row sm:justify-between transition duration-300 ease-in-out hover:bg-white/5`}
            key={index + music?.title}
          >
            <div className="flex gap-4 items-center">
              <h1>{index + 1}</h1>

              <img src={music?.imgUrl} className="h-16 rounded-md" alt="img" />
              <div>
                <h3 className="font-semibold  text-white">{music?.title}</h3>
                <h3 className="font-semibold text-sm">{music?.artist}</h3>
                <h3 className="font-semibold text-sm ">{music?.artist}</h3>
              </div>
            </div>
            <div className=" flex sm:flex-col gap-4 sm:gap-1 items-center text-xs justify-end">
              <h4>{music?.dateAdded}</h4>
              <h4>{music?.duration}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default MusicTable;
