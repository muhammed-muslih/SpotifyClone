import { useState, useRef, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import { MdErrorOutline } from "react-icons/md";
import useUser from "../../contexts/user";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuAlertTriangle } from "react-icons/lu";

const LoginForm = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const inputRef = useRef(null);
  const { handleUserId, handleUserLoggedIn, isUserLiggedIn } = useUser();
  const [isToast, setIsToast] = useState(false);
  const navigate = useNavigate();

  const handleKeyPrss = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      inputRef.current.focus();
    }
  };
  const handleRememberMe = (e) => {
    e.preventDefault();
    setRememberMe((prev) => !prev);
  };

  const initialValues = {
    emailorusername: "",
    password: "",
  };
  const validationSchema = yup.object().shape({
    emailorusername: yup
      .string()
      .required("Please enter your email or username")
      .test(
        "no-whitespace",
        "Please enter a valid email or username without whitespace",
        (value) => {
          return /^\S+$/.test(value);
        }
      )
      .test(
        "email-or-username",
        "Please enter a valid email or username",
        (value) => {
          const trimmedValue = value.trim();
          const isEmail = value.match(/.+@.+\..+/);
          const isUsername = trimmedValue !== "";
          const isValidLength =
            trimmedValue.length >= 3 && trimmedValue.length <= 20;
          return isEmail || (isUsername && isValidLength);
        }
      ),
    password: yup
      .string()
      .required("Please enter your password")
      .min(6, "Password must be atleast 6 characters")
      .max(12, "Password must be less than 12 characters")
      .test(
        "no-whitespace",
        "Password should not contain any whitespace",
        (value) => /\s/.test(value) === false
      ),
  });
  const onSubmit = (values, actions) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ isLoggedIn: true, userId: values.emailorusername })
    );
    handleUserLoggedIn(true);
    handleUserId(values.emailorusername);
    actions.resetForm();
  };

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues,
      onSubmit,
      validationSchema,
    });
  useEffect(() => {
    if (isUserLiggedIn) {
      navigate("/");
    }
  }, [isUserLiggedIn]);

  useEffect(() => {
    if (isToast) {
      notify();
    }
  }, [isToast]);
  useEffect(() => {
    setIsToast(true);
  }, []);

  const notify = () => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } bg-black rounded-lg border-2 border-white p-2 lg:p-4 lg:px-8 text-white flex flex-row gap-2 lg:gap-8 items-center`}
        >
          <div className="text-xl lg:text-4xl">
            <LuAlertTriangle />
          </div>
          <div className="text-white font-semibold lg:font-bold">
            <h1 className="text-sm lg:text-base">Login is only available with email or username</h1>
            <p className="text-xs lg:text-sm">
              Please make sure to use your email or username to log in.
            </p>
          </div>
          <div
            className="text-xl lg:text-4xl cursor-pointer"
            onClick={() => toast.dismiss(t.id)}
          >
            <IoMdCloseCircleOutline />
          </div>
        </div>
      ),
      {
        duration: 5000,
        transitionDuration: 300,
      }
    );
  };
  return (
    <div>
      <Toaster position="top-right" />
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-2 bg-transparent">
          <label
            htmlFor="emailoruserName"
            className="text-white font-semibold text-sm "
          >
            Email or username
          </label>
          <input
            type="text"
            className={`border ${
              errors.emailorusername && touched.emailorusername
                ? "border-red-500"
                : "border-gray-500"
            }  p-3 rounded-md bg-transparent  text-white focus:ring-2 ring-white placeholder:font-normal hover:border-white outline-none`}
            placeholder="Email or username"
            name="emailorusername"
            value={values.emailorusername}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyUp={handleKeyPrss}
            autoComplete="off"
          />
          {errors.emailorusername && touched.emailorusername && (
            <div className="flex gap-1 text-red-500">
              <MdErrorOutline />
              <span className=" text-xs flex ">{errors.emailorusername}</span>
            </div>
          )}
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
           hover:border-white justify-between items-center relative ${
             (isFocus ? "ring-2" : "ring-0",
             errors.password && touched.password
               ? "border-red-500"
               : "border-gray-500")
           }`}
          >
            <input
              type={isVisible ? "text" : "password"}
              className="border-none p-3 focus:border-none outline-none placeholder:font-normal bg-transparent"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              ref={inputRef}
            />
            <div
              className="px-4 absolute right-0 z-50"
              onClick={() => setIsVisible((prev) => !prev)}
            >
              {isVisible ? (
                <FaEyeSlash className=" " size={20} />
              ) : (
                <FaEye className=" " size={20} />
              )}
            </div>
          </div>
          {errors.password && touched.password && (
            <div className="flex gap-1 text-red-500">
              <MdErrorOutline />
              <span className=" text-xs flex "> {errors.password}</span>
            </div>
          )}
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
          <button
            type="submit"
            className="capitalize bg-[#70d864] w-full text-sm sm:text-base rounded-full font-medium py-1.5 sm:py-3 cursor-default hover:scale-105 transition duration-150 hover:font-semibold"
          >
            log in
          </button>
          <h2 className="text-white underline text-sm sm:text-base font-medium cursor-pointer hover:text-green-500">
            Forgot your password?
          </h2>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
