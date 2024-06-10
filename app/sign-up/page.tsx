import React from "react";
import Link from "next/link";
import { Button } from "../_components/ui/button";
import { Field } from "../_components/ui/field";
import { Header } from "../_components/ui/header";

export default function SignUp() {
  return (
    <div className="flex flex-col gap-4">
      <Header href="/" title="Criar conta" iconClassName="w-4 h-4" />
      <div className="py-5">
        <h1 className="font-bold text-xl">Crie sua conta</h1>
        <p>
          Pro favor, informe seu nome, telefone e uma senha para criar sua
          conta.
        </p>
      </div>
      <Field
        labelProps={{
          children: "Seu nome:",
        }}
        inputProps={{
          type: "text",
          id: "nome",
          placeholder: "Informe o seu nome",
          defaultValue: "",
          autoFocus: true,
        }}
      />
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
      <Button className="my-4">Criar a conta</Button>
      <div className="flex flex-col justify-center items-center">
        <p className="">
          Já está cadastrado?{" "}
          <Link
            href="/sign-in"
            className="text-green-600 font-semibold underline hover:opacity-30"
          >
            Acesse sua conta
          </Link>
        </p>
      </div>
    </div>
  );
}
