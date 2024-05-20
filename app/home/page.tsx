import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import { logout } from "../auth/actions";

export default async function HomePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return (
    <>
      <header></header>
      <main>
        <p>hola {data.user.email}</p>
        <form action={logout}>
          <Button variant="destructive" type="submit">
            Cerrar Sesión
          </Button>
        </form>
      </main>
    </>
  );
}
