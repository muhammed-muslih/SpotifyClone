import SideBar from "../components/sidebar/SideBar";
import BottomBar from "../components/botttomBar/BottomBar";
const Layout = () => {
  return (
    <>
    <div className="hidden lg:block">
      <SideBar />
      <BottomBar/>
    </div>
    </>
  );
};
export default Layout;
