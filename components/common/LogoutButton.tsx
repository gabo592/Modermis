import { logout } from "@/app/auth/actions";
import { Button } from "../ui/button";
import { ExitIcon } from "@radix-ui/react-icons";

const LogoutButton = () => {
  return (
    <form action={logout} className="w-full">
      <Button variant="destructive" type="submit" className="w-full">
        <ExitIcon className="mr-2 h-4 w-4" /> Cerrar Sesión
      </Button>
    </form>
  );
};

export default LogoutButton;
