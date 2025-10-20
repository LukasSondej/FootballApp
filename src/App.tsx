

import { ThemeProvider } from 'styled-components'
import './App.css'
import { ListPlayers } from './ListPlayers'

const light = {
  colors: {
    primary: "red",
    background: "blue",
    textPrimary: "green",
    textBackground: "purple"

  }
}

function App() {
  return (
<ThemeProvider theme = {light}>

  <ListPlayers/>
</ThemeProvider>

  )
}

export default App
