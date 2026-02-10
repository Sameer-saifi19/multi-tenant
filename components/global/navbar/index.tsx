import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import WorkspaceSwitcher from "../workspace-switcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, Settings, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function WorkspaceNavbar() {
  return (
    <>
      <nav className="p-4 flex items-center justify-between sticky top-0 bg-sidebar-accent z-10 ">
        <SidebarTrigger/>
        <div className="flex items-center gap-4">
          <WorkspaceSwitcher />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/1486366" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={10} align="end" >
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="h-[1.2rem] w-[1.2rem] mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="h-[1.2rem] w-[1.2rem] mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
}
