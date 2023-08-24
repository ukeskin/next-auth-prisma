import BlankAvatar from "@/components/Avatar";
import { useSession, signOut, signIn } from "next-auth/react";
import { Inter } from "next/font/google";
import Link from "next/link";

import MainLayout from "@/components/main-layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, status } = useSession();
  console.log(data, status);
  return <>home page</>;
}

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
