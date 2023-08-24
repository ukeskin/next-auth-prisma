import React from "react";
import { useSession } from "next-auth/react";
import MainLayout from "@/components/main-layout";
import { useRouter } from "next/router";

const PrivatePage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    const router = useRouter();
    router.push("/sign-in");
    return <div>Redirecting...</div>;
  }

  return <div>PrivatePage</div>;
};

export default PrivatePage;

PrivatePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
