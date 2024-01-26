import { SideBar, Footer, TopBar, BottomBar } from "../components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Scroll as Scrollbar } from "../components";
import {
  ColorProvider,
  ScrollProvider,
  PlaylistProvider,
} from "../contexts/providers";

const MobileLayout = () => {
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
  };

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
            updateScrollHeightReached,
          }}
        >
          <PlaylistProvider value={{ playlistTitle, updatePlaylistTitle }}>
           <div className="h-screen relative">
              <div className="flex flex-row gap-2">
                <div className="max-w-20  md:max-w-96 h-auto">
                  <SideBar />
                </div>
                <div className="flex flex-col w-full  bg-transparent  rounded-t-lg h-screen ">
                  <div className="">
                    <TopBar />
                  </div>
                  <div id="scrollbar" className="flex-grow rounded-b-lg">
                    <div className="flex-grow  ">
                      <Scrollbar id={"scrollbar"} findHeight={true}/>
                      <Outlet />
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-3 md:bottom-0 xl:bottom-4 w-full z-50">
                <BottomBar />
              </div>
            </div>
          </PlaylistProvider>
        </ScrollProvider>
      </ColorProvider>
    </>
  );
};
export default MobileLayout;
