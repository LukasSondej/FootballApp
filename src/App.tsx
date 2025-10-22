

import styled, { ThemeProvider } from 'styled-components'
import './App.css'
import { ListPlayers } from './ListPlayers'
import { ListTeams } from './ListTeams'

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
<ThemeProvider theme = {light}>
<Page>
  <ListTeams/>
</Page>
  
</ThemeProvider>

  )
}

export default App
