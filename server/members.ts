"use server";

import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { checkSession } from "./user";

export const getOrganizationMembers = async (activeOrgId: string) => {
  try {
    const members = await prisma.member.findMany({
      where: {
        organizationId: activeOrgId,
      },
      include: {
        user: true,
      },
    });

    return members;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addMember = async (userId: string) => {
    
  try {
    const data = await auth.api.addMember({
      body: {
        userId: userId,
        role: ["owner", "member", "admin"],
      },
    });

    return data
  } catch (error) {
    console.error(error)
    return null
  }
};
