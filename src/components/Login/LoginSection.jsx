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
    <div className="login-section h-screen  max-w-screen-md rounded-lg px-28 py-14 flex flex-col items-center justify-center divide-y divide-gray-500 ">
      <div className="pb-10 flex flex-col items-center">
        <h1 className="text-5xl text-white font-semibold">Log in to Spotify</h1>
        <div className="flex flex-col w-fit pt-14 gap-2 px-24 ">
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
      <div className="pt-8 w-full  px-24">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginSection;
