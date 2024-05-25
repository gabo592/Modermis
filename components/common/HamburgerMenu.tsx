"use client";

import { FC } from "react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Users, UsersRound, Calendar, Home } from "lucide-react";
import { Separator } from "../ui/separator";
import { Route } from "@/models/route";
import Link from "next/link";

interface HamburgerMenuProps {
  title: string;
}

const routes: Route[] = [
  {
    path: "/home",
    title: "Inicio",
    icon: Home,
  },
  {
    path: "/home/calendar",
    title: "Calendario",
    icon: Calendar,
  },
  {
    path: "/home/employees",
    title: "Empleados",
    icon: Users,
  },
  {
    path: "/home/patients",
    title: "Pacientes",
    icon: UsersRound,
  },
];

const HamburgerMenu: FC<HamburgerMenuProps> = ({ title }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline" size="icon">
          <HamburgerMenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <Separator />
        <div className="flex flex-col items-start mt-2">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className="flex flex-row items-center p-3 rounded-md w-full hover:bg-accent hover:text-accent-foreground"
            >
              {route.icon && <route.icon className="mr-2 h-4 w-4"></route.icon>}
              {route.title}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;
