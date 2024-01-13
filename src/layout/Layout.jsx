import SideBar from "../components/sidebar/SideBar";
import BottomBar from "../components/botttomBar/BottomBar";
import TopBar from "../components/topBar/TopBar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar"));
  }, []);

  return (
    <>
      <div className="flex flex-row gap-2">
        <SideBar />
        <div className="flex flex-col w-full bg-[rgb(9,9,9)]  ">
          <TopBar />
          <div
            className="rounded-b-lg flex-grow  h-80"
            id="my-scrollbar"
          >
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
      <div className="">
        <BottomBar />
      </div>
    </>
  );
};
export default Layout;
