import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Link } from "@tanstack/react-router"
import { Trophy, Shield, Users, Medal, Crown } from "lucide-react"
 
export const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">

           
          <h1 className="text-xl font-black text-gray-800 tracking-tight">
            Football App
          </h1>
            <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-xl shadow-inner text-gray-900">
            <Crown className="w-6 h-6" /> 
          </div>
        </div>
   
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
         <SidebarMenu className="gap-2 mt-4 px-2">

         <SidebarMenuItem>
           <SidebarMenuButton asChild className="h-auto p-0 cursor-pointer">
                  <Link 
                    to="/" 
                    activeProps={{ className: "bg-white border border-gray-200 text-gray-900 font-bold shadow-sm" }}
                    inactiveProps={{ className: "text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-transparent" }}
                    className="flex items-center gap-3 py-3 px-4 w-full rounded-md transition-all"
                  >
                     <Trophy className="w-5 h-5" />
                     <span className="text-base font-medium">Matches</span>
                  </Link>
           </SidebarMenuButton>
        </SidebarMenuItem>

         <SidebarMenuItem>
           <SidebarMenuButton asChild className="h-auto p-0 cursor-pointer">
                  <Link 
                    to="/teams" 
                    activeProps={{ className: "bg-white border border-gray-200 text-gray-900 font-bold shadow-sm" }}
                    inactiveProps={{ className: "text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-transparent" }}
                    className="flex items-center gap-3 py-3 px-4 w-full rounded-md transition-all"
                  >
                     <Shield className="w-5 h-5" />
                     <span className="text-base font-medium">Teams</span>
                  </Link>
           </SidebarMenuButton>
        </SidebarMenuItem>

         <SidebarMenuItem>
           <SidebarMenuButton asChild className="h-auto p-0 cursor-pointer">
                  <Link 
                    to="/players" 
                    activeProps={{ className: "bg-white border border-gray-200 text-gray-900 font-bold shadow-sm" }}
                    inactiveProps={{ className: "text-gray-600 hover:bg-gray-200 hover:text-gray-900 border border-transparent" }}
                    className="flex items-center gap-3 py-3 px-4 w-full rounded-md transition-all"
                  >
                     <Users className="w-5 h-5" />
                     <span className="text-base font-medium">Players</span>
                  </Link>
           </SidebarMenuButton>
        </SidebarMenuItem>

         </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}