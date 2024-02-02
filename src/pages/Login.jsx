import { LoginTop, LoginSection, Scroll as Scrollbar,LoginBottom } from "../components";
const Login = () => {
  return (
    <div className="w-full h-screen login flex flex-col">
      <div id="loginId">
        <Scrollbar id={"loginId"} findHeight={false} />
        <LoginTop />
        <div className="flex justify-center  items-center p-0 lg:p-8">
          <LoginSection />
        </div>
        <LoginBottom/>
      </div>
    </div>
  );
};
export default Login;
