import Image from "next/image";
import Link from "next/link";
import ModermisLogo from "@/public/assets/icons/modermis.jpg";

const NavbarLogo = () => {
  return (
    <Link href="/" className="flex flex-row items-center gap-4">
      <Image
        src={ModermisLogo}
        alt="logo"
        className="h-10 w-auto rounded-md"
      ></Image>
      <h1 className="text-xl font-bold">Modermis</h1>
    </Link>
  );
};

export default NavbarLogo;
