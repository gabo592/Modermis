import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import ModermisLogo from "@/public/assets/icons/modermis.jpg";
import RegisterForm from "@/components/auth/RegisterForm";
import NavigationBackButton from "@/components/common/NavigationBackButton";

export default function RegisterPage() {
  return (
    <>
      <header className="flex flex-row items-center justify-between gap-4 p-4">
        <NavigationBackButton />
        <h1 className="text-xl font-bold">Crear Cuenta</h1>
        <ModeToggle />
      </header>
      <main className="flex flex-col lg:flex-row items-center lg:justify-center p-4 gap-8 lg:gap-16 min-h-screen">
        <Image
          src={ModermisLogo}
          alt="logo"
          className="w-40 lg:w-80 h-auto rounded-full"
        />
        <RegisterForm />
      </main>
    </>
  );
}
