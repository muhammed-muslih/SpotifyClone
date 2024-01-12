import LibrarySection from "./LibrarySection";
import MenuSection from "./MenuSection";
const SideBar = () => {
  return (
    <div className="flex flex-col gap-2 max-w-20  md:max-w-96  h-auto ">
      <MenuSection />
      <LibrarySection />
    </div>
  );
};
export default SideBar;
