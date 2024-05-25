import { User } from "@supabase/supabase-js";
import { FC } from "react";
import HamburgerMenu from "../HamburgerMenu";
import AvatarDropDown from "../AvatarDropDown";

interface AppBarProps {
  user: User;
}

const AppBar: FC<AppBarProps> = ({ user }) => {
  const metadata = user.user_metadata;
  const firstName = metadata.first_name as string;
  const lastName = metadata.last_name as string;

  const initials = `${firstName.toLocaleUpperCase().split("")[0]}${
    lastName.toLocaleUpperCase().split("")[0]
  }`;

  return (
    <header className="flex flex-row items-center justify-between p-4">
      <HamburgerMenu title="Menú" />

      <h1 className="text-xl font-bold">Modermis</h1>

      <AvatarDropDown avatarUrl={metadata.avatar_url} initials={initials} />
    </header>
  );
};

export default AppBar;
