import React from "react";
import { useSession } from "next-auth/react";
import MainLayout from "@/components/main-layout";
const PrivatePage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>Access Denied</div>;
  }

  return <div>PrivatePage</div>;
};

export default PrivatePage;

PrivatePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
