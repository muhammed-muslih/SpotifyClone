import { SideBar, Footer, TopBar, BottomBar, MusicBar } from "../components";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Scroll as Scrollbar } from "../components";
import useUser from "../contexts/user";

import {
  ColorProvider,
  ScrollProvider,
  PlaylistProvider,
  SongProvider,
} from "../contexts/providers";

const MobileLayout = () => {
  const [color, setColor] = useState("rgb(16,16,16)");
  const [topBarColor, setTopBarColor] = useState("rgb(16,16,16)");
  const [playlistTitle, setPlaylistTitle] = useState("");
  const [currentSong, setCurrentSong] = useState(null);
  const [isScrollHeightReached, setIsScrollHeightReached] = useState(false);
  const [scrollbar, setScrollbar] = useState(null);
  const {isUserLiggedIn} = useUser()


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
  const updateCurrentSong = (currentSong) => {
    setCurrentSong(currentSong);
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
            <SongProvider value={{ currentSong, updateCurrentSong }}>
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
                        <Scrollbar id={"scrollbar"} findHeight={true} />
                        <Outlet />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 md:bottom-0 xl:bottom-4 w-full z-50">
                  {isUserLiggedIn ? <MusicBar /> : <BottomBar />}
                </div>
              </div>
            </SongProvider>
          </PlaylistProvider>
        </ScrollProvider>
      </ColorProvider>
    </>
  );
};
export default MobileLayout;
