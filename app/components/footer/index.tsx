import Image from "next/image";
import Menu from "../header/Menu";

function Footer() {
  return (
    <div className="bg-white">
      <footer className="py-6 px-4 container mt-8">
        <Image
          src="/logo-200.jpg"
          alt="Logo"
          width={200}
          height={88}
          className="w-28 aspect-auto"
        />
        <Menu
          direction="row"
          className="w-48 text-sm"
          linkClasses="text-sm text-gray-600"
        />
        <hr className="my-4 border-0 bg-gray-100 h-1 rounded-full" />

        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm">© 2023 All Rights Reserved</p>
          <div className="flex flex-row gap-4">
            <a href="#" className="text-gray-500 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 text-sm">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
