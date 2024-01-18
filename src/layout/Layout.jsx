import { SideBar, Footer, TopBar, BottomBar } from "../components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Scroll as ScrollBar } from "../components";
import {
  ColorProvider,
  ScrollProvider,
  PlaylistProvider,
} from "../contexts/providers";

const Layout = () => {
  const [color, setColor] = useState("rgb(16,16,16)");
  const [topBarColor, setTopBarColor] = useState("rgb(16,16,16)");
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [isScrollHeightReached, setIsScrollHeightReached] = useState(false);

  const updateColor = (newColor) => {
    setColor(newColor);
  };
  const updateTopBarColor = (newTopBarColor) => {
    setTopBarColor(newTopBarColor);
  };
 
  const updatePlaylistTitle = (playlistTitle) => {
    setPlaylistTitle(playlistTitle);
  };
  const updateScrollHeightReached = (bool) => {
    setIsScrollHeightReached(bool);
  }
  

  return (
    <>
      <ColorProvider
        value={{
          color,
          updateColor,
          topBarColor,
          updateTopBarColor,
        }}
      >
        <ScrollProvider
          value={{
            isScrollHeightReached,
            updateScrollHeightReached
          }}
        >
          <PlaylistProvider value={{ playlistTitle, updatePlaylistTitle }}>
            <div className="flex flex-row gap-2">
              <SideBar />
              <div className="flex flex-col w-full  bg-transparent  rounded-t-lg">
                <TopBar />
                <div id="scrollbar" className=" h-96 flex-grow rounded-b-lg">
                  <ScrollBar />
                  <div className="">
                    <Outlet />
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <BottomBar />
            </div>
          </PlaylistProvider>
        </ScrollProvider>
      </ColorProvider>
    </>
  );
};
export default Layout;
