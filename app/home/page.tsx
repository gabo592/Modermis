import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import AppBar from "@/components/common/appbar/AppBar";

export default async function HomePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    console.log(error);
    redirect("/auth/login");
  }

  const user = data.user;
  const metadata = user.user_metadata;
  const username = `${metadata.first_name} ${metadata.last_name}`;

  return (
    <>
      <AppBar user={data.user} />
      <main className="flex flex-col items-center p-4 gap-8">
        <h2 className="text-2xl font-bold">
          ¡Bienenido de vuelta, {username}!
        </h2>
      </main>
    </>
  );
}
