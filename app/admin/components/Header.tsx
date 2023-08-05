"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function Header() {
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  return (
    <div className="container">
      <header className="flex justify-between items-center">
        <div>OneHealth</div>

        <div className="relative">
          <button
            className="flex items-center space-x-2 p-2 text-sm font-medium text-gray-700 bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
            onClick={() => setIsDropDownVisible(!isDropDownVisible)}
          >
            <span className="inline-flex items-center">
              Admin <FaCaretDown />
            </span>
          </button>
          <ul
            className={`absolute ${
              !isDropDownVisible && "hidden"
            } right-0 w-32 py-2 mt-2 bg-white rounded-md shadow-xl`}
          >
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100">
              <Link href="/admin">Dashboard</Link>
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100">
              <Link href="/admin/changePassword">Change Password</Link>
            </li>
            <li className="px-4 py-2 text-gray-800 hover:bg-gray-100">
              <Link href="/api/auth/signout">Sign out</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
