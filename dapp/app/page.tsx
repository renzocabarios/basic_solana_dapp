"use client";

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
    <Form {...form}>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input placeholder="enter amount" {...field} />
                </FormControl>
                <FormDescription>Enter valid amount</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between gap-4 w-full">
            <Button onClick={form.handleSubmit(onSubmit)}>Deposit</Button>
            <Button onClick={form.handleSubmit(onSubmit)}>Withdraw</Button>
          </div>
        </div>
      </main>
    </Form>
  );
}
