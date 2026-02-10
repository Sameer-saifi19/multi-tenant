"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "../ui/label";
import { OrganizationInput, organizationSchema } from "@/schema/organization";
import { createOrganization, getAllOrganization } from "@/server/organization";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CreateWorkspaceForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrganizationInput>({
    resolver: zodResolver(organizationSchema),
  });

  const onSubmit = async (data: OrganizationInput) => {
    const formdata = new FormData();
    formdata.append("name", data.name);
    formdata.append("slug", data.slug);

    const submit = await createOrganization(formdata);
    if (submit?.status === 201) {
      toast.success("workspace created")
      router.push("/workspace");
    } else {
      toast.error("error creating organization");
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <Card>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardHeader>
                <h2 className="text-xl text-center font-semibold mb-1">
                  Create Workspace
                </h2>
                <p className="text-sm  text-center text-muted-foreground mb-6">
                  Set up your team's workspace
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label>Name</Label>
                    <Input {...register("name")} type="text" name="name" />
                  </div>

                  <div className="grid gap-2">
                    <Label>Slug</Label>
                    <Input {...register("slug")} type="text" name="slug" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-8">
                <Button type="submit" className="w-full">
                  create new organization
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
