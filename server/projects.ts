"use server";

import prisma from "@/lib/prisma";

export async function createPost(values: {
  title: string;
  description: string;
}) {
  try {
    const post = await prisma.project.create({
      data: {
        title: values.title,
        description: values.description,
        organization: { connect: { id: "66cf6c62-2a22-4ce5-9139-08e0519b5320" } },
        user: { connect: { id: "b809f01d-b21b-435c-a79e-18fca1c27a61" } },
      },
    });


    return { status: 201, data: post };
  } catch (error) {
    console.error(error);
    return { status: 500, message: "Failed to create post" };
  }
}
