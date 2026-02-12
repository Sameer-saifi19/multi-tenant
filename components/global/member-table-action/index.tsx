"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Trash2Icon } from "lucide-react";
import { toast } from "sonner";

interface Props {
    memberId: string
}

export default function MemberTableAction({memberId}: Props) {
  const { data: activeOrganization } = authClient.useActiveOrganization();

  const handleDelete = async () => {
    const { data, error } = await authClient.organization.removeMember({
      memberIdOrEmail: memberId,
      organizationId: activeOrganization?.id
    });

    if(error){
        toast.error(error.message)
    }else{
        toast.success("member deleted success")
    }
  };

  return (
    <>
      <div className="flex items-center justify-end gap-2">
        {}

        <Button onClick={() => handleDelete()} variant={"destructive"} size={"sm"}>
          <Trash2Icon /> Delete 
        </Button>
      </div>
    </>
  );
}
