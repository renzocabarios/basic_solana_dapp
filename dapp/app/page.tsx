"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  IVaultSchema,
  VaultSchema,
  VaultSchemaDefaults,
} from "@/lib/schema/vault.schema";

export default function Home() {
  const form = useForm<IVaultSchema>({
    resolver: zodResolver(VaultSchema),
    defaultValues: VaultSchemaDefaults,
  });

  function onSubmit(values: IVaultSchema) {
    console.log(values);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col gap-4">
        <Input></Input>

        <div className="flex items-center justify-between gap-4 w-full">
          <Button>Deposit</Button>
          <Button>Withdraw</Button>
        </div>
      </div>
    </main>
  );
}
