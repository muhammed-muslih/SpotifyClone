import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
const Scroll = () => {
  useEffect(() => {
    const scrollElement = document.querySelector("#scrollbar");
    if (scrollElement) {
     const scrollbar = Scrollbar.init(scrollElement);
     return () => scrollbar.destroy();
    }
  }, []);
  return null;
};
export default Scroll;
