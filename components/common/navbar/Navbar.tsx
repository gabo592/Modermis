"use client";

import { Route } from "@/models/route";
import NavbarLogo from "./NabarLogo";
import { ModeToggle } from "@/components/mode-toggle";
import NavbarMobileMenu from "./NavbarMobileMenu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { EnterIcon } from "@radix-ui/react-icons";
import NavbarMenu from "./NavbarMenu";

const routes: Route[] = [
  {
    path: "/about",
    title: "Acerca de",
  },
  {
    path: "/contact",
    title: "Contacto",
  },
  {
    path: "/pricing",
    title: "Precios",
  },
  {
    path: "/faq",
    title: "Preguntas Frecuentes",
  },
];

const Navbar = () => {
  return (
    <header className="flex flex-row items-center justify-between p-4">
      <div className="flex flex-row items-center gap-8">
        <NavbarLogo />

        <div className="hidden lg:flex flex-row items-center gap-4">
          <NavbarMenu routes={routes} />
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <ModeToggle />
        <div className="lg:hidden">
          <NavbarMobileMenu routes={routes} />
        </div>
        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/auth/login">
              <EnterIcon className="mr-2" /> Acceder
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
