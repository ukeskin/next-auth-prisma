import * as React from "react";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export function UserAuthForm({ className, ...props }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = async (provider) => {
    setIsLoading(true);

    await signIn(provider, { redirect: false });

    setIsLoading(false);
  };

  // get error from url error
  const error = router.query.error;

  const parseError = (error) => {
    switch (error) {
      case "OAuthAccountNotLinked":
        return "This account is already linked to another user.";
      case "OAuthCallbackError":
        return "An error occurred while authenticating with the provider.";
      case "OAuthCreateAccountError":
        return "An error occurred while creating your account.";

      default:
        return "An error occurred while authenticating with the provider.";
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <span className="block sm:inline">{parseError(error)}</span>
        </div>
      )}
      <Button
        onClick={() => handleLogin("github")}
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}
        Github
      </Button>
      <Button
        onClick={() => handleLogin("google")}
        variant="outline"
        type="button"
        disabled={isLoading}
      >
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}
        Google
      </Button>
    </div>
  );
}
