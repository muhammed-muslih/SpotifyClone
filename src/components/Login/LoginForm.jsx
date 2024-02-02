import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const handleRememberMe = (e) => {
    e.preventDefault();
    setRememberMe((prev) => !prev);
  };

  return (
    <div>
      <form action="" className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="emailoruserName"
            className="text-white font-semibold text-sm "
          >
            Email or username
          </label>
          <input
            type="text"
            className="border border-gray-500 p-3 rounded-md bg-transparent text-white focus:ring-2 ring-white placeholder:font-normal hover:border-white outline-none"
            placeholder="Email or username"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="emailoruserName"
            className="text-white font-semibold text-sm"
          >
            Password
          </label>
          <div
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            className={`flex  w-full rounded-md  text-white focus:ring-2 ring-white border 
         border-gray-500 hover:border-white justify-between items-center ${
           isFocus ? "ring-2" : "ring-0"
         }`}
          >
            <input
              type={isVisible ? "text" : "password"}
              className="border-none p-3 focus:border-none outline-none placeholder:font-normal bg-transparent"
              placeholder="Password"
            />
            <div className="px-4" onClick={() => setIsVisible((prev) => !prev)}>
              {isVisible ? (
                <FaEyeSlash className=" " size={20} />
              ) : (
                <FaEye className=" " size={20} />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 cursor-default px-2 sm:px-0">
          <button className="focus:ring-4 ring-white rounded-full p-0.5 cursor-default">
            <div
              className={`w-8 rounded-full h-4 relative  ${
                rememberMe
                  ? "bg-green-500"
                  : "bg-gray-500 transition-all duration-300 "
              }`}
              onClick={(e) => handleRememberMe(e)}
            >
              <div
                className={`w-3 h-3 bg-[#121212] rounded-full absolute top-0.5  ${
                  rememberMe ? "right-0.5" : "left-0.5"
                }`}
              ></div>
            </div>
          </button>
          <h3 className="text-white text-sm font-medium">Remember me</h3>
        </div>
        <div className="py-3 flex flex-col items-center gap-5">
          <button className="capitalize bg-[#70d864] w-full text-sm sm:text-base rounded-full font-medium py-1.5 sm:py-3 cursor-default hover:scale-105 transition duration-150 hover:font-semibold">
            log in
          </button>
          <h2 className="text-white underline text-sm sm:text-base font-medium cursor-pointer hover:text-green-500">Forgot your password?</h2>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
