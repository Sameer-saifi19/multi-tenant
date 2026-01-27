import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { SignOutButton } from "../auth/_components/signout-btn";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <>
      <div className="flex flex-col gap-10 justify-center items-center h-screen">
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <SignOutButton />
      </div>
    </>
  );
}
