"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

export default function DeleteOrgBtn() {
  const { data: session } = authClient.useSession();

  const handleDelete = async () => {
    try {
      const { data, error } = await authClient.organization.delete({
        organizationId: session?.session.activeOrganizationId as string,
      });

      if (data) {
        toast.success("Workspace deleted successfully");
      }

      if (error) {
        toast.error(error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={handleDelete} size="lg" variant="destructive">
        Delete Organization
      </Button>
    </>
  );
}
