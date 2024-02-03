import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaRegCopyright,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-4 sm:px-9 py-4 min-w-full bg-[rgb(18,18,18)] pt-20">
      <div className=" flex justify-between pb-10">
        <div className="grid md:grid-cols-3 md:space-x-14 gap-4 md:gap-0">
          <div>
            <h1 className="text-white font-bold pb-2">Company</h1>
            <ul className="text-white/50 flex flex-col gap-2">
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                About
              </li>
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                Jobs
              </li>
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                For the Record
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-bold pb-2">Communities</h1>
            <ul className="text-white/50 flex flex-col gap-2">
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                For Artists
              </li>
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                Developers
              </li>
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                Advertising
              </li>
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                Investors
              </li>
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                Vendors
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-white font-bold pb-2">Useful links</h1>
            <ul className="text-white/50 flex flex-col gap-2">
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                Support
              </li>
              <li className="hover:underline hover:text-white/75 cursor-pointer">
                Free Mobile App
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white flex gap-4 flex-col xl:flex-row">
          <a
            href=""
            className="bg-[rgb(41,41,41)] rounded-full p-3 w-fit h-fit hover:bg-gray-500"
          >
            <FaInstagram />
          </a>
          <a
            href=""
            className="bg-[rgb(41,41,41)] rounded-full p-3 w-fit h-fit hover:bg-gray-500"
          >
            <FaTwitter />
          </a>
          <a
            href=""
            className="bg-[rgb(41,41,41)] rounded-full p-3 w-fit h-fit hover:bg-gray-500"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="py-[5rem] xl:py-14 border-t border-white/10 text-white/50 font-medium text-sm flex items-center gap-1">
        <FaRegCopyright />
        <h1>2024 Spotify AB</h1>
      </div>
    </div>
  );
};
export default Footer;
