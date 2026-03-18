import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Link, Outlet, createRootRoute, createRootRouteWithContext } from '@tanstack/react-router'
import styled, { ThemeProvider } from 'styled-components'
import type { QueryClient } from '@tanstack/react-query'
import { Suspense } from 'react'
import { Toaster } from 'react-hot-toast'
import { Notification } from '../components/Notification'
import { AppSidebar } from "@/components/AppSidebar"

type MyRouterContext = {
    queryClient: QueryClient
}
const Page = styled.div`
min-height: 100vh;
min-width: 100vw;
background: ${props => props.theme.colors.background};
color: ${props => props.theme.colors.textPrimary};
padding: 16px;

`
const light = {
  colors: {
    primary: "#2563EB",      
    background: "#F7F7FA",   
    textPrimary: "#0F172A",  
    textBackground: "#FFFFFF"
  }
}
export const Route = createRootRouteWithContext< MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
return (
  <SidebarProvider>
    <AppSidebar/>
    
    <ThemeProvider theme={light}>
      <Page >
      
         <div className="mb-6">
            <SidebarTrigger className="p-4 border shadow-lg rounded-sm bg-gray-100 hover:bg-gray-200" />
          </div>
        <Suspense fallback={<h2>Loading</h2>}>
         <Outlet />
        
        </Suspense>
        <Notification/>
         <Toaster position='top-right'/>
            
       
      </Page>
    </ThemeProvider>
    </SidebarProvider>
  )
}
