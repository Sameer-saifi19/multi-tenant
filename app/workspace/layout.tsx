import WorkspaceNavbar from "@/components/global/navbar";
import DashboardSidebar from "@/components/global/sidebar/index";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div>
      <SidebarProvider >
        <DashboardSidebar />
        <main className="w-full">
          <WorkspaceNavbar />
          <div className="px-10">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
