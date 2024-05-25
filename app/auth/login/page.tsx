import { ModeToggle } from "@/components/mode-toggle";
import ModermisLogo from "@/public/assets/icons/modermis.jpg";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";
import NavigationBackButton from "@/components/common/NavigationBackButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const supabase = createClient();

  const { error, data } = await supabase.auth.getUser();

  if (!error || data?.user) {
    redirect("/home");
  }

  return (
    <>
      <header className="flex flex-row items-center justify-between gap-4 p-4">
        <NavigationBackButton />
        <h1 className="text-xl font-bold">Iniciar Sesión</h1>
        <ModeToggle />
      </header>
      <main className="flex flex-col lg:flex-row items-center lg:justify-center p-4 gap-8 lg:gap-16 min-h-screen">
        <Image
          src={ModermisLogo}
          alt="logo"
          className="w-40 lg:w-80 h-auto rounded-full"
        />
        <LoginForm />
      </main>
    </>
  );
}
