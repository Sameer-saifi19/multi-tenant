import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getOrganizationMembers } from "@/server/members";
import { checkSession } from "@/server/user";
import Image from "next/image";
import MemberTableAction from "../member-table-action";

export default async function MemberTable() {
  const session = await checkSession();
  const data = await getOrganizationMembers(
    session?.session.activeOrganizationId as string,
  );

  return (
    <>
      <div className="flex flex-col gap-4 h-screen">
        <Table>
          <TableCaption>A list of all members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start pr-0">Avatar</TableHead>
              <TableHead className="px-4">Name</TableHead>
              <TableHead className="px-2">Email</TableHead>
              <TableHead className="px-2">Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Image
                    width={30}
                    height={30}
                    alt="member-avatar"
                    className="w-8 h-8 rounded-full"
                    src={item.user.image ?? "/person-placeholder.png"}
                  />
                </TableCell>
                <TableCell>{item.user.name}</TableCell>
                <TableCell>{item.user.email}</TableCell>
                <TableCell>{item.role}</TableCell>
                <TableCell>
                  <MemberTableAction memberId={item.id}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
