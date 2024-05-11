"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <>
      <header className="flex flex-row items-center justify-between gap-4 p-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeftIcon />
        </Button>
        <h1 className="text-xl font-bold">Crear Cuenta</h1>
        <ModeToggle />
      </header>
    </>
  );
}
