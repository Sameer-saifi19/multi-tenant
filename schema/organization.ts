import { z } from "zod";

export const organizationSchema = z.object({
    name: z.string().min(2, "Organization name is too short"),
    slug: z.string().min(2, "Slug is required"),
})

export type OrganizationInput = z.infer<typeof organizationSchema>