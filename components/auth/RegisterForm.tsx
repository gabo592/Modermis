"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { signup } from "@/app/auth/actions";
import { ChangeEvent, useState } from "react";

const formSchema = z.object({
  image: z.any(),
  first_name: z.string().min(3, {
    message: "El primer nombre debe tener al menos 3 caracteres.",
  }),
  last_name: z.string().min(3, {
    message: "EL primer apellido debe tener al menos 3 caracteres.",
  }),
  email: z.string().email({
    message: "Debe ingresar un correo electrónico válido.",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres.",
  }),
});

const RegisterForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
  });

  const submit = async (values: z.infer<typeof formSchema>) => {
    if (!image || image == null) {
      alert("La imagen es requerida.");
      return;
    }

    const { first_name, last_name, email, password } = values;

    const data = new FormData();

    data.append("image", image);
    data.append("first_name", first_name);
    data.append("last_name", last_name);
    data.append("email", email);
    data.append("password", password);

    setLoading(!loading);
    await signup(data);
    setLoading(!loading);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || files == null) {
      return;
    }

    const file = files[0];

    setImage(file);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-8">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagen</FormLabel>
              <FormControl>
                <Input
                  accept="image/*"
                  type="file"
                  {...field}
                  onChange={(e) => handleImageChange(e)}
                />
              </FormControl>
              <FormDescription>
                Opcionalmente puede cambiar la imagen de perfil en los ajustes.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primer Nombre</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Digite su primer nombre"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Primer Apellido</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Digite su primer apellido"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                Ingrese el correo electrónico con el que creará su cuenta en
                Modermis.
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
                Ingrese la contraseña de su nueva cuenta de Modermis.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={loading}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Crear Cuenta
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
