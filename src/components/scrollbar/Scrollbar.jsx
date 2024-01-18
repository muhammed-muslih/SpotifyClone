import { useEffect, useState } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import useScroll from "../../contexts/scroll";
import { useLocation } from "react-router-dom";

const Scroll = () => {
  var overScrollOptions = {
    enable: true,
    effect: "glow",
    damping: 0.2,
    maxOverscroll: 150,
  };
  var options = {
    damping: 0.05,
    plugins: {
      overscroll: { ...overScrollOptions },
    },
  };
  const {updateScrollHeightReached} =useScroll();
  const [scrollbar, setScrollbar] = useState({});
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollElement = document.querySelector("#scrollbar");
    if (scrollElement) {
      Scrollbar.use(OverscrollPlugin);
      const scrollbar = Scrollbar.init(scrollElement, options);
      setScrollbar(scrollbar);
      scrollbar.addListener(({ offset }) => {
       if(offset.y >= 320){
        updateScrollHeightReached(true);
       }else{
        updateScrollHeightReached(false)
       }
      });
      return () => scrollbar.destroy();
    }
  }, []);
  useEffect(() => {
    scrollbar.scrollTop = 0;
  }, [pathname]);

  return null;
};
export default Scroll;
