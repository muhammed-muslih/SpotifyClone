import SideBar from "../components/sidebar/SideBar";
import BottomBar from "../components/botttomBar/BottomBar";
import TopBar from "../components/topBar/TopBar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";

const Layout = () => {
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const scrollDiv = scrollbarRef?.current;
    if (scrollDiv) {
      scrollDiv.removeAttribute("id", "scrollbar");
      scrollDiv.setAttribute("id", "scrollbar");
      const scrollElement = document.getElementById("scrollbar");
      let scrollbar;

      if (scrollElement) {
        scrollbar = Scrollbar.init(scrollElement);
      }

      return () => {
        if (scrollbar) {
          scrollbar.destroy();
        }
      };
    }
  }, [scrollbarRef]);

  return (
    <>
      <div className="flex flex-row gap-2">
        <SideBar />
        <div className="flex flex-col w-full bg-[rgb(9,9,9)] rounded-t-lg">
          <TopBar />
          <div ref={scrollbarRef} className=" h-80 flex-grow rounded-b-lg">
            <div className="">
              <Outlet />
              <Footer />
            </div>
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
