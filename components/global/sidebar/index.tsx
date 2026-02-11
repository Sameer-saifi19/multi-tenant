"use client"

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

import { User2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SidebarMenuItems } from "./menu-items";
import { authClient } from "@/lib/auth-client";

export default function DashboardSidebar() {
  const { data: session } = authClient.useSession();
  const { data: activeOrganization } = authClient.useActiveOrganization();
  const menuItems = SidebarMenuItems(activeOrganization?.slug as string)
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
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  {item.icon}
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
