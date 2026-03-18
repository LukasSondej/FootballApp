import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"
 
export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
         <SidebarMenu>

         <SidebarMenuItem>
           <SidebarMenuButton asChild>
                  <Link to="/">Matches</Link>
           </SidebarMenuButton>
        </SidebarMenuItem>

         <SidebarMenuItem>
           <SidebarMenuButton asChild>
                  <Link to="/teams">Teams</Link>
           </SidebarMenuButton>
        </SidebarMenuItem>

         <SidebarMenuItem>
           <SidebarMenuButton asChild>
                  <Link to="/players">Players</Link>
           </SidebarMenuButton>
        </SidebarMenuItem>

         </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}