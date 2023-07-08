import Link from "next/link";

function Menu(
  { direction, className, linkClasses }: 
  { direction: "row" | "column"; className?: string; linkClasses?: string }
) {
  return (
    <ul
      className={`flex justify-between items-center p-2 text-xl ${
        direction == "row" ? "flex-row" : "flex-col"
      } ${className}`}
    >
      <li className={`${linkClasses} hover:underline`}>
        <Link href="/">Home</Link>
      </li>
      <li className={`${linkClasses} hover:underline`}>
        <Link href="/about">About</Link>
      </li>
      <li className={`${linkClasses} hover:underline`}>
        <Link href="/links">Links</Link>
      </li>
    </ul>
  );
}

export default Menu;
