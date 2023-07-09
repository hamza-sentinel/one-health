"use client";

import Logo from "./Logo";
import SearchBox from "./SearchBox";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import { useState } from "react";
import FloatingMenu from "./FloatingMenu";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="bg-white">
      <header className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <Logo />
        <Hamburger
          onClick={() => setShowMenu(() => !showMenu)}
          menuState={showMenu}
          className="sm:hidden"
        />
        <FloatingMenu isVisible={showMenu} className="sm:hidden" />
        <SearchBox className="hidden sm:flex" inputClass="bg-gray-200" />
        <Menu direction="row" className="hidden sm:flex gap-3" linkClasses="text-gray-800" />
      </header>
    </div>
  );
}
