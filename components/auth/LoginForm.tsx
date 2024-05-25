"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { login } from "@/app/auth/actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({
    message: "Digite un correo electrónico válido.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
});

const LoginForm = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values;

    const data = new FormData();

    data.append("email", email);
    data.append("password", password);

    setLoading(!loading);
    await login(data);
    setLoading(!loading);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Digite su correo" {...field} />
              </FormControl>
              <FormDescription>
                Ingrese el correo electrónico que proporcionó en el registro.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Digite su contraseña"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Ingrese la contraseña de su cuenta de Modermis.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col items-center gap-4">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Iniciar Sesión
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full"
            disabled={loading}
          >
            <Link href="/auth/register">Crear Cuenta</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
