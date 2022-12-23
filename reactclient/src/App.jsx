import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { Navbar } from './components/Navbar'
import { grey } from '@mui/material/colors'
import { ThemeProvider } from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e8eaf6"
    }
  },
    MUIDataTable: {
      responsiveScroll: {
        maxHeight: 'none',
      },
    }
});

function App() {
  const routes = useRoutes()
  return (
    <ThemeProvider theme={themeLight}>
      <CssBaseline />
      <Router>
        <div sx={{ backgroundColor: '#7986cb' }}>
          <Navbar />
          {routes}
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
