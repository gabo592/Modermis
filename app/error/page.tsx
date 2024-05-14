"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { ModeToggle } from "@/components/mode-toggle";
import WarningImage from "@/public/assets/svg/warning.svg";
import Image from "next/image";
import { TypographyP } from "@/components/Typography";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <>
      <header className="flex flex-row items-center justify-between p-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeftIcon />
        </Button>
        <h1 className="text-xl font-bold">Error</h1>
        <ModeToggle />
      </header>
      <main className="flex flex-col items-center p-4 gap-8 min-h-screen">
        <h2 className="text-2xl font-bold">Algo salió mal</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 lg:gap-16">
          <Image
            src={WarningImage}
            alt="warning"
            className="w-full md:w-80 h-auto"
          />
          <div className="flex flex-col items-start gap-4">
            <TypographyP>
              Parece que hubo un problema, puede regresar a la página anterior.
              Si el problema persiste, contactar a Modermis.
            </TypographyP>
            <Button variant="link" onClick={() => router.back()}>
              <ArrowLeftIcon className="mr-2" /> Regresar
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
