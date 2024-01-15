import SideBar from "../components/sidebar/SideBar";
import BottomBar from "../components/botttomBar/BottomBar";
import TopBar from "../components/topBar/TopBar";
import Footer from "../components/footer/footer";
import { Outlet } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef, useState } from "react";
import { ColorProvider } from "../contexts/color";

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
  const [color,setColor] = useState('rgb(16,16,16)')
  const [topBarColor,setTopBarColor] = useState('rgb(16,16,16)')
  const updateColor = (newColor) => {
    setColor(newColor)
  }
  const updateTopBarColor = (newTopBarColor) => {
    setTopBarColor(newTopBarColor)
  }
  

  return (
    <>
    <ColorProvider value={{color,updateColor,topBarColor,updateTopBarColor}}>
      <div className="flex flex-row gap-2">
        <SideBar />
        <div className="flex flex-col w-full  bg-transparent rounded-t-lg">
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
      </ColorProvider>
    </>
  );
};
export default Layout;
