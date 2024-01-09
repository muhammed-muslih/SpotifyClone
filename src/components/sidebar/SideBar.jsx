import LibrarySection from "./LibrarySection"
import MenuSection from "./MenuSection"
const SideBar = () => {
    return (
        <div className="flex flex-col gap-2 w-1/4 resize-x">
            <MenuSection/>
            <LibrarySection/>

        </div>
    )
}
export default SideBar