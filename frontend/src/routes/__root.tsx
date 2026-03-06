
import { Link, Outlet, createRootRoute, createRootRouteWithContext } from '@tanstack/react-router'
import styled, { ThemeProvider } from 'styled-components'
import type { QueryClient } from '@tanstack/react-query'
import { Suspense } from 'react'

type MyRouterContext = {
    queryClient: QueryClient
}
const Page = styled.div`
min-height: 100vh;
min-width: 100vh;
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
    <ThemeProvider theme={light}>
      <Page>
        
       <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Link to="/">Mecze</Link>
          <Link to="/teams">Drużyny</Link>
          <Link to="/players">Zawodnicy</Link>
        </nav>
        <Suspense fallback={<h2>Loading</h2>}>
         <Outlet />
            
        </Suspense>
       
      </Page>
    </ThemeProvider>
  )
}
