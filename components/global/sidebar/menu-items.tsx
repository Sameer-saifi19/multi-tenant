import {
  LayoutDashboard,
  ListCheck,
  Settings,
  Users,
  Users2Icon,
} from "lucide-react";

export const SidebarMenuItems = (
  workspaceId: string,
): { title: string; url: string; icon: React.ReactNode }[] => [
  {
    title: "Dashboard",
    url: "/workspace",
    icon: <LayoutDashboard />,
  },
  {
    title: "Workspaces",
    url: `/workspace/${workspaceId}/all-workspaces`,
    icon: <Users />,
  },
  {
    title: "My Tasks",
    url: `/workspace/${workspaceId}/my-tasks`,
    icon: <ListCheck />,
  },
  {
    title: "Members",
    url: `/workspace/${workspaceId}/members`,
    icon: <Users2Icon />,
  },
  {
    title: "Settings",
    url: `/workspace/${workspaceId}/settings`,
    icon: <Settings />,
  },
];
