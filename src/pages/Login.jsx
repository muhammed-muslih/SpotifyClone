import { LoginTop, LoginSection, Scroll as Scrollbar } from "../components";
const Login = () => {
  return (
    <div className="w-full h-screen login flex flex-col">
      <div id="loginId">
        <Scrollbar id={"loginId"} findHeight={false} />
        <LoginTop />
        <div className="flex justify-center  items-center pt-8">
          <LoginSection />
        </div>
      </div>
    </div>
  );
};
export default Login;
