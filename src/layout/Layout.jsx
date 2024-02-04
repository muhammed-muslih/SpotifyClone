import { SideBar, Footer, TopBar, BottomBar, MusicBar } from "../components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Scroll } from "../components";
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
  const [scrollbar, setScrollbar] = useState(null);
  const [isLogged, setIsLogged] = useState(true);

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
  const updateScrollbar = (scrollbar) => {
    setScrollbar(scrollbar);
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
            scrollbar,
            updateScrollbar,
          }}
        >
          <PlaylistProvider value={{ playlistTitle, updatePlaylistTitle }}>
            <div className="h-screen relative m-2">
              <div className="flex flex-row gap-2">
                <div className="max-w-20  md:max-w-96 h-auto">
                  <SideBar />
                </div>
                <div className="flex flex-col w-full  bg-transparent  rounded-t-lg">
                  <div className="">
                    <TopBar />
                  </div>
                  <div id="scrollbar" className="h-96 flex-grow rounded-b-lg">
                    <div className="flex-grow  ">
                      <Scroll id={"scrollbar"} findHeight={true} />
                      <Outlet />
                      <Footer />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`absolute  w-full z-50 ${
                  isLogged ? "bottom-0" : "bottom-0 xl:bottom-2 2xl:bottom-4"
                }`}
              >
                {isLogged ? <MusicBar /> : <BottomBar />}
              </div>
            </div>
          </PlaylistProvider>
        </ScrollProvider>
      </ColorProvider>
    </>
  );
};
export default Layout;
