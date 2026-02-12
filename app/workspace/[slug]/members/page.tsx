import { CreateMemberDialog } from "@/components/forms/create-member-dialog";
import MemberTable from "@/components/global/member-table";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <>
      <div className="mt-8 flex flex-col gap-8">
        <div className="flex items-center justify-between ">
          <h1 className="text-3xl font-semibold">Members</h1>
          <CreateMemberDialog/>
        </div>
        <MemberTable />
      </div>
    </>
  );
}
