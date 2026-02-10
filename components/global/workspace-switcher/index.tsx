"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function WorkspaceSwitcher() {
  const router = useRouter();

  const { data: organizations } = authClient.useListOrganizations();

  const handleValueChange = async (organizationId: string) => {
    const org = organizations?.find((o) => o.id === organizationId);

    try {
      const { data, error } = await authClient.organization.setActive({
        organizationId,
      });
      router.push(`/workspace/${org?.slug}`);

      if (data) {
        toast.success(`Switched to ${org?.name} workspace`);
      } else {
        toast.error(error.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select workspace" />
        </SelectTrigger>
        <SelectContent position="popper">
          {organizations &&
            organizations.map((org, idx) => (
              <SelectItem key={idx} value={org.id}>
                {org.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </>
  );
}
