"use client";

import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { Route } from "@/models/route";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

interface AvatarDropDownProps {
  avatarUrl: string;
  initials: string;
}

const routes: Route[] = [
  {
    path: "/home/account",
    title: "Cuenta",
    icon: PersonIcon,
  },
  {
    path: "/home/settings",
    title: "Ajustes",
    icon: GearIcon,
  },
];

const AvatarDropDown: FC<AvatarDropDownProps> = ({ avatarUrl, initials }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={avatarUrl} alt="user" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {routes.map((route) => (
            <DropdownMenuItem key={route.path}>
              <Link
                href={route.path}
                className="flex flex-row items-center w-full"
              >
                {route.icon && (
                  <route.icon className="mr-2 h-4 w-4"></route.icon>
                )}
                {route.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarDropDown;
