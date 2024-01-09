import SideBar from "../components/sidebar/SideBar";
import BottomBar from "../components/botttomBar/BottomBar";
import TopBar from "../components/topBar/TopBar";
import Footer from "../components/footer/footer";
const Layout = () => {
  return (
    <>
      <div className="hidden lg:flex flex-row gap-2">
        <SideBar />
        <div className="bg-[rgb(9,9,9)] rounded-lg w-full overflow-y-scroll">
          <TopBar />

          <Footer />
        </div>
      </div>
      <BottomBar />
    </>
  );
};
export default Layout;
