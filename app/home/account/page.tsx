import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Lock, Edit, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import NavigationBackButton from "@/components/common/NavigationBackButton";

export default async function ProfilePage() {
  const supabase = createClient();

  const { error, data } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth/login");
  }

  const user = data.user;
  const metadata = user.user_metadata;

  const firstName = metadata.first_name as string;
  const lastName = metadata.last_name as string;

  return (
    <>
      <header className="flex flex-row items-center gap-4 p-4">
        <NavigationBackButton />

        <h1 className="text-xl font-bold">Cuenta</h1>
      </header>
      <main className="flex flex-col items-center p-4 gap-8">
        <section className="flex flex-col items-center gap-4 w-full max-w-md">
          <img
            src={metadata.avatar_url}
            alt="user"
            loading="lazy"
            className="h-32 w-auto rounded-full"
          />

          <h2 className="text-3xl font-bold">
            {firstName} {lastName}
          </h2>

          <p className="text-lg font-semibold">{user.email}</p>
        </section>
        <section className="flex flex-col md:flex-row md:items-center md:justify-center gap-6 w-full max-w-md">
          <Button variant="outline">
            <Edit className="mr-2 w-4 h-4" />
            Editar Perfil
          </Button>
          <Button variant="outline">
            <Lock className="mr-2 w-4 h-4" />
            Cambiar Contraseña
          </Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="mr-2 w-4 h-4" />
                Eliminar Cuenta
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Desea eliminar su Cuenta?</AlertDialogTitle>
                <AlertDialogDescription>
                  Al eliminar su cuenta de Modermis, se eliminarán todos sus
                  datos y es posible que algunos registros también se vean
                  afectados.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Eliminar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </section>
      </main>
    </>
  );
}
