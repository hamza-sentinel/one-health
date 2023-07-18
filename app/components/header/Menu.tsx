import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

function Menu({
  direction,
  className,
  linkClasses,
  setMenuOpen,
}: {
  direction: "row" | "column";
  className?: string;
  linkClasses?: string;
  setMenuOpen?: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul
      className={`flex justify-between items-center p-2 text-xl ${
        direction == "row" ? "flex-row" : "flex-col"
      } ${className}`}
    >
      <li className={`${linkClasses} hover:underline`}>
        {setMenuOpen ? (
          <Link href="/" scroll={false} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        ) : (
          <Link href="/" scroll={false}>
            Home
          </Link>
        )}
      </li>
      <li className={`${linkClasses} hover:underline`}>
        {setMenuOpen ? (
          <Link
            href="/#about"
            scroll={false}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        ) : (
          <Link href="/#about" scroll={false}>
            About
          </Link>
        )}
      </li>
      <li className={`${linkClasses} hover:underline`}>
        {setMenuOpen ? (
          <Link
            href="/#links"
            scroll={false}
            onClick={() => setMenuOpen(false)}
          >
            Links
          </Link>
        ) : (
          <Link href="/#links" scroll={false}>
            Links
          </Link>
        )}
      </li>
    </ul>
  );
}

export default Menu;
