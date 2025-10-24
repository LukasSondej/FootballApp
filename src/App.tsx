

import styled, { ThemeProvider } from 'styled-components'
import './App.css'
import { ListPlayers } from './playerFolder/ListPlayers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient;

const Page = styled.div`
min-height: 100vh;
min-width: 100%;
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

function App() {
  return (
   <QueryClientProvider client={queryClient}>
<ThemeProvider theme = {light}>
<Page>
  <ListPlayers/>
</Page>
</ThemeProvider>
   </QueryClientProvider>
  )
}

export default App
