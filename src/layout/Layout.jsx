import SideBar from "../components/sidebar/SideBar";
import BottomBar from "../components/botttomBar/BottomBar";
import TopBar from "../components/topBar/TopBar";
import Footer from "../components/footer/footer";
import Home from "../pages/Home";
const Layout = () => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <SideBar />
        <div className="flex flex-col w-full  ">
          <TopBar />
          <div className="bg-[rgb(9,9,9)] rounded-b-lg flex-grow overflow-y-scroll h-80">
            <Home />
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
