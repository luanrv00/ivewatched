"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Input,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/shadcn/ui";

const formSchema = z.object({
  item: z.string(),
});

export function SearchForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      item: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("--------------- values", values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="item"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search for an Anime, TV Serie or Movie</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Type anything..." />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
