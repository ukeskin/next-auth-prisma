import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <>
      home page
      {status === "authenticated" && (
        <>
          <p>signed in as {data.user.email}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
