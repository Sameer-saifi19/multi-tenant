import MemberTable from "@/components/global/member-table";
import { getOrganizationMembers } from "@/server/organization";
import { checkSession } from "@/server/user";

export default async function Page() {
  const session = await checkSession()
  const data = await getOrganizationMembers(session?.session.activeOrganizationId as string)

  return (
    <>
      <div className="mt-4 flex flex-col gap-8">
        <h1 className="text-3xl font-semibold">Members</h1>
        <MemberTable avatarUrl={"https://avatars.githubusercontent.com/u/1486366"} name={} email={""} role={""} />
      </div>
    </>
  );
}
