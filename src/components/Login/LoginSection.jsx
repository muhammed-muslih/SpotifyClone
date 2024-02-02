import LoginWith from "./LoginWith";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const LoginSection = () => {
  const continueWithObj = [
    {
      icon: FcGoogle,
      text: "Continue with Google",
      action: "/",
      color: "",
    },
    {
      icon: FaFacebook,
      text: "Continue with Facebook",
      action: "/",
      color: "blue",
    },
    {
      icon: FaApple,
      text: "Continue with Apple",
      action: "/",
      color: "white",
    },
    {
      icon: "",
      text: "Continue with phone number",
      action: "/",
      color: "",
    },
  ];
  return (
    <div className="login-section  overflow-x-hidden w-full lg:max-w-screen-md rounded-b-lg lg:rounded-lg px-2 md:px-28 p-2 md:p-10 flex flex-col items-center justify-center divide-y divide-white/15 ">
      <div className="pb-10 flex flex-col items-center">
        <h1 className="text-xl sm:text-3xl md:text-5xl mt-0 lg:mt-8 text-white font-semibold">
          Log in to Spotify
        </h1>
        <div className="flex flex-col w-fit pt-14 gap-2 px-4 md:px-28 ">
          {continueWithObj?.map((elem, i) => (
            <LoginWith
              key={i + elem.text}
              icon={elem.icon}
              text={elem.text}
              action={elem.action}
              color={elem.color}
            />
          ))}
        </div>
      </div>
      <div className="pt-8  w-full lg:w-full pb-4 px-4 md:px-28">
        <LoginForm />
      </div>
      <div className="w-full px-4 md:px-28">
        <div className="text-white text-sm sm:text-sm  font-medium py-2 flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-10">
          <h1 className="text-white/70">Don&#39;t have an account?</h1>
          <h1 className="underline hover:text-green-500">
            Sign up for Spotify
          </h1>
        </div>
      </div>
    </div>
  );
};
export default LoginSection;
