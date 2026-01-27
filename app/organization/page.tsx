"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function Page() {
  const { data: organization } = authClient.useListOrganizations();
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-4 justify-center items-center">
          {organization?.length === 0 ? (
            <h1 className="text-3xl">No organization found</h1>
          ) : (
            organization?.map((org) => (
              <p key={org.id}>
                {org.name} - {org.slug}
              </p>
            ))
          )}
          <Link
            className="text-blue-600 underline-offset-2 underline"
            href={"/welcome"}
          >
            Create organization
          </Link>
        </div>
      </div>
    </>
  );
}
