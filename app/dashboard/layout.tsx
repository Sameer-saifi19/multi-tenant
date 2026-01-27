import DashboardSidebar from "@/components/global/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-cols-[250px]">
      <SidebarProvider>
        <div>
          <DashboardSidebar />
        </div>
        <div>{children}</div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
