import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { Navbar } from './components/Navbar'

function App() {
  const routes = useRoutes()

  return (
    <Router>
      <div>
        <Navbar />
        {routes}
      </div>
    </Router>
  )
}

export default App
