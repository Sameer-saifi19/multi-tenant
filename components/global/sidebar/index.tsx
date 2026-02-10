import { checkSession } from "@/server/user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllOrganization } from "@/server/organization";

import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function DashboardSidebar() {
  const session = await checkSession();
  const organization = await getAllOrganization();

  return (
    <>
      <Sidebar>
        <SidebarHeader className="mt-8">
          <div className="flex items-center gap-4 mb-2">
            <Image src={"/file.svg"} width={30} height={30} alt="logo" />
            <h2 className="font-semibold text-3xl uppercase text-[#707070]">
              Opal{" "}
            </h2>
          </div>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select workspace" />
            </SelectTrigger>
            <SelectContent alignOffset={10}>
              <SelectGroup>
                <SelectLabel>{session?.user.name}&apos;s Workspace</SelectLabel>
                {organization.data?.map((item) => (
                  <SelectItem key={item.id} value={item.name}>
                    <Link
                      href={`${process.env.BASE_URL}/dashboard/${item.slug}`}
                    >
                      {item.name}
                    </Link>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center justify-between">
              <SidebarMenuButton>
                <User2 /> {session?.user.name}{" "}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
