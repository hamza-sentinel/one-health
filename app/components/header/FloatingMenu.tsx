import { Dispatch, SetStateAction } from "react";
import Menu from "./Menu";
// import SearchBox from "./SearchBox";

const FloatingMenu = ({
  isVisible,
  className,
  setMenuOpen,
}: {
  isVisible: boolean;
  className?: string;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <nav
      className={`fixed z-40 w-screen h-screen bg-accentDark top-0 flex flex-col items-center transition-all duration-500 p-4 mx-auto ${className} ${
        isVisible ? "left-0" : "left-full"
      }`}
    >
      {/* <SearchBox className="mt-12" /> */}
      <Menu
        direction="column"
        className="mt-8 gap-3"
        linkClasses="text-white"
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
};

export default FloatingMenu;
