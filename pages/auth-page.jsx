import Link from "next/link";

import { UserAuthForm } from "@/components/user-auth-form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AuthPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) router.push("/");

  return (
    <div className="container relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          WorkBadi
        </div>
        <div className="relative z-20 mt-auto mb-12">
          <blockquote className="space-y-2">
            <p className="text-xl">
              Remote work is sometimes boring. But we believe it doesn’t have
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Let's dive in
            </h1>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
