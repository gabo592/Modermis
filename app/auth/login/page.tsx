"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { createClient } from "@/utils/supabase/client";
import ModermisLogo from "@/public/assets/icons/modermis.jpg";
import Image from "next/image";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  const router = useRouter();

  const supabase = createClient();

  supabase.auth
    .getUser()
    .then((response) => {
      const { data, error } = response;

      if (!error || data?.user) {
        router.push("/home");
      }
    })
    .catch((error) => console.log(error));

  return (
    <>
      <header className="flex flex-row items-center justify-between gap-4 p-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeftIcon />
        </Button>
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
