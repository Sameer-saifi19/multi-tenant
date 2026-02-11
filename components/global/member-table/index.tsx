import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

type Props = {
  avatarUrl: string;
  name: string;
  email: string;
  role: "admin" | "owner" | "user";
};

export default function MemberTable({ avatarUrl, name, email, role }: Props) {
  return (
    <>
      <div className="flex flex-col gap-4 h-screen">
        <Table>
          <TableCaption>A list of all members.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start pr-0" >Avatar</TableHead>
              <TableHead className="px-4" >Name</TableHead>
              <TableHead className="px-2" >Email</TableHead>
              <TableHead className="px-2" >Role</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Image
                  width={30}
                  height={30}
                  alt="member-avatar"
                  className="w-8 h-8 rounded-full"
                  src={avatarUrl}
                ></Image>
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{email}</TableCell>
              <TableCell>{role}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
