"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { checkSession } from "./user";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export const createOrganization = async (values: FormData) => {
  const name = values.get("name") as string;
  const slug = values.get("slug") as string;

  const formattedSlug = slug.toLowerCase().trim().replace(/\s+/g, "-");

  const session = await checkSession();

  try {
    const data = await auth.api.createOrganization({
      body: {
        name: name,
        slug: formattedSlug,
        logo: "hello.com",
        userId: session?.session.userId,
        keepCurrentActiveOrganization: true,
      },
      headers: await headers(),
    });

    revalidatePath("/organization");

    if (data) {
      return { status: 201, message: "success" };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server error" };
  }
};

export const getAllOrganization = async () => {
  try {
    const data = await auth.api.listOrganizations({
      headers: await headers(),
    });

    if (data) {
      return { status: 200, message: "Success", data: data };
    }
    return { status: 400 };
  } catch (error) {
    return { status: 500, message: "Internal server error" };
  }
};

export const getAllOrganizationMembers = async () => {
  const session = await checkSession();

  const data = await auth.api.listMembers({
    query: {
      organizationId: session?.session.activeOrganizationId as string,
      limit: 20,
      offset: 0,
      sortBy: "createdAt",
      sortDirection: "desc",
      filterField: "createdAt",
      filterOperator: "eq",
      filterValue: "value",
    },
    headers: await headers(),
  });

  return data
};

export const getActiveOrganization = async (userId: string) => {
  const member = await prisma.member.findFirst({
    where:{
      userId
    }
  })

  if(!member){
    return null 
  }

  const activeOrganization = await prisma.organization.findFirst({
    where:{
      id: member.organizationId
    }
  })

  return activeOrganization
}
