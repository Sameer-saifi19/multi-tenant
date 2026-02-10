import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllOrganizationMembers } from "@/server/organization";

export default async function MemberTable() {
  return (
    <>
      <div className="p-30 flex flex-col gap-4 h-screen">
        <h1 className="text-2xl font-semibold text-center">ALL ORGANIZATION</h1>
        <Table>
          <TableCaption>A list of all members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">invoice</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
