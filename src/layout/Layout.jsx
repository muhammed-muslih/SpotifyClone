import { SideBar, Footer, TopBar, BottomBar } from "../components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ColorProvider } from "../contexts/color";
import { Scroll as ScrollBar } from "../components";

const Layout = () => {
  const [color, setColor] = useState("rgb(16,16,16)");
  const [topBarColor, setTopBarColor] = useState("rgb(16,16,16)");
  const updateColor = (newColor) => {
    setColor(newColor);
  };
  const updateTopBarColor = (newTopBarColor) => {
    setTopBarColor(newTopBarColor);
  };

  return (
    <>
      <ColorProvider
        value={{ color, updateColor, topBarColor, updateTopBarColor }}
      >
        <div className="flex flex-row gap-2">
          <SideBar />
          <div className="flex flex-col w-full  bg-transparent  rounded-t-lg">
            <TopBar />
            <div id="scrollbar" className=" h-80 flex-grow rounded-b-lg">
              <ScrollBar />
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
