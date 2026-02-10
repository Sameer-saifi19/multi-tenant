import { checkSession } from "@/server/user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  ListCheck,
  Settings,
  User2,
  Users,
  Users2Icon,
} from "lucide-react";
import Image from "next/image";
import WorkspaceSwitcher from "../workspace-switcher";
import Link from "next/link";

const SidebarMenuItems = [
  {
    title: "Dashboard",
    url: "/workspace",
    icon: LayoutDashboard,
  },
  {
    title: "Workspaces",
    url: "/workspace",
    icon: Users,
  },
  {
    title: "My Tasks",
    url: "/workspace",
    icon: ListCheck,
  },
  {
    title: "Members",
    url: "/workspace",
    icon: Users2Icon,
  },
  {
    title: "Settings",
    url: "/workspace",
    icon: Settings,
  },
];

export default async function DashboardSidebar() {
  const session = await checkSession();

  return (
    <>
      <Sidebar>
        <SidebarHeader>
          <div className="flex items-center gap-4 mb-2">
            <Image src={"/file.svg"} width={30} height={30} alt="logo" />
            <h2 className="font-semibold text-3xl uppercase">Opal</h2>
          </div>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          {SidebarMenuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarContent>
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
