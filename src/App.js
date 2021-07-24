import { ThemeProvider , createMuiTheme } from '@material-ui/core/styles'
import { useState } from 'react'
import { Weather } from './components'

export const App = () =>{
  const [darkMode,setDarkMode] = useState(false)
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light'
    }
  })
  return( 
  <>
    <ThemeProvider theme={theme}>
      <Weather setDarkMode={ setDarkMode } themeState={ darkMode }/>
    </ThemeProvider>
  </>
  )
}