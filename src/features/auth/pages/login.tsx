"use client";

import { AuthComponent } from "../components/AuthComponent";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

type LoginFormValues = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormValues) {
    console.log(values);
  }

  return (
    <AuthComponent>
      <div className="w-full">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-6">Log in</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Username */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Forgot */}
            <div className="text-sm text-right">
              <a href="#" className="text-green-800 hover:underline">
                Forgot your password?
              </a>
            </div>

            {/* Button */}
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
        </Form>

        {/* Footer */}
        <p className="mt-10 text-center text-xs text-muted-foreground">
          Cookies must be enabled in your browser. <br />
          <span className="text-primary cursor-pointer hover:underline">
            Cookies notice
          </span>
        </p>
      </div>
    </AuthComponent>
  );
}
