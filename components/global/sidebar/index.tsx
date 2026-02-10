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

import { User2 } from "lucide-react";
import Image from "next/image";
import WorkspaceSwitcher from "../workspace-switcher";

export default async function DashboardSidebar() {
  const session = await checkSession();

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

          {/* add workspace switcher */}
          <WorkspaceSwitcher />
        </SidebarHeader>
        <SidebarContent></SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem className="flex items-center justify-between">
              <SidebarMenuButton>
                <User2 />{" "}
                {session?.user.name.replace(/\b\w/g, (c) =>
                  c.toUpperCase(),
                )}{" "}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
