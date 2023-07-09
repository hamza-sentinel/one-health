import Image from "next/image";

function Logo() {
  return <div>
    <Image src="/logo-200.jpg" width={100} height={44} alt={"Logo"} priority />
  </div>;
}

export default Logo;
