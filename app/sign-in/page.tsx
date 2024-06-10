import React from "react";
import { Field } from "../_components/ui/field";
import { Button } from "../_components/ui/button";
import { Header } from "../_components/ui/header";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col gap-4">
      <Header href="/" title="Login" iconClassName="w-4 h-4" />
      <div className="py-5">
        <h1 className="font-bold text-xl">Acesse sua conta</h1>
        <p>Olá, informe seus dados para acessar.</p>
      </div>
      <Field
        labelProps={{
          children: "Telefone:",
        }}
        inputProps={{
          type: "text",
          id: "login",
          placeholder: "Informe o número de telefone",
          defaultValue: "",
          autoFocus: true,
        }}
      />
      <Field
        labelProps={{
          children: "Senha:",
        }}
        inputProps={{
          type: "password",
          id: "senha",
          placeholder: "Informe sua senha",
          defaultValue: "",
          autoFocus: true,
        }}
      />
      <Button>Login</Button>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="flex h-6 relative w-full items-center justify-center m-5">
          <span className="absolute z-10 m-auto bg-white px-2">Ou</span>
          <div className="border-b border-b-gray-100 w-full absolute text-sm"></div>
        </div>
        <p className="">
          Não está cadastrado?{" "}
          <Link
            href="/sign-up"
            className="text-green-600 font-semibold underline"
          >
            Crie sua conta
          </Link>
        </p>
      </div>
    </div>
  );
}
