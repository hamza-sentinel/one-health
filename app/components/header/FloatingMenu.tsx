import Menu from "./Menu";
import SearchBox from "./SearchBox";

const FloatingMenu = ({ isVisible, className }: { isVisible: boolean; className?: string }) => {
  return (
    <nav
      className={`fixed w-screen h-screen bg-cyan-400 top-0 flex flex-col items-center transition-all duration-500 p-4 mx-auto ${className} ${
        isVisible ? "left-0" : "left-full"
      }`}
    >
      <SearchBox className="mt-12" />
      <Menu direction="column" className="mt-8 gap-3" linkClasses="text-white" />
    </nav>
  );
};

export default FloatingMenu;
