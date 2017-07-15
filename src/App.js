import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import MapPage from './pages/map-page'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={MapPage} />
      </div>
    </BrowserRouter>
  )
}

export default App
