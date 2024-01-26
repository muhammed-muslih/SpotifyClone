import LibrarySection from "./LibrarySection";
import MenuSection from "./MenuSection";
const SideBar = () => {
  return (
    <div className="flex flex-col gap-2 ">
      <MenuSection />
      <LibrarySection />
    </div>
  );
};
export default SideBar;
