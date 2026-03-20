import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Link, Outlet,createRootRouteWithContext } from '@tanstack/react-router'

import type { QueryClient } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Notification } from '../components/Notification'
import { AppSidebar } from "@/components/AppSidebar"

type MyRouterContext = {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext< MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
return (
  <SidebarProvider>
    <AppSidebar/>
    
  
     <main className="flex-1 w-full p-4 md:p-8">

     
         <div className="mb-6">
            <SidebarTrigger className="p-4 border shadow-lg rounded-sm bg-gray-100 hover:bg-gray-200" />
          </div>
        <Suspense fallback={<h2>Loading</h2>}>
        <div className="mt-4">
            <Outlet />
        
        </div>
       
        </Suspense>
        <Notification/>
         <Toaster position='top-right'/>
            
       
     
   </main>
      
    </SidebarProvider>
  )
}
