import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import MapPage from './pages/map-page'
import AppMockup from './mockups/app-mockup'
import ProfileMockup from './mockups/profile-mockup'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/map" component={MapPage} />
        <Route exact path="/mockups/app-mockup" component={AppMockup} />
        <Route exact path="/mockups/profile-mockup" component={ProfileMockup} />
      </div>
    </BrowserRouter>
  )
}

export default App
