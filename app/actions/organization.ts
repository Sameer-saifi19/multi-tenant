"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { checkSession } from "./user";

export const createOrganization = async (values: FormData) => {
  const name = values.get("name") as string;
  const slug = values.get("slug") as string;

  const session = await checkSession();

  try {
    const data = await auth.api.createOrganization({
      body: {
        name: name,
        slug: slug,
        logo: "hello.com",
        userId: session?.session.userId,
        keepCurrentActiveOrganization: false,
      },
      headers: await headers(),
    });

    if (data) return { status: 201, message: "success" };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Internal Server error" };
  }
};

export const getAllOrganization = async () => {
  try {
    const data = await auth.api.listOrganizations({
      headers: await headers(),
    });

    if (data) return { status: 200, message: "Success" };
    return { status: 400 };
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};
