import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ProfileBanner from './components/ProfileBanner'
import DevelopersDetails from './components/DevelopersDetails'
import Certificates from './components/Certificates'
// import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return <div>
    <NavBar />
    <Router>
      <Routes>
        <Route path='/'
          element={<div className='container'> 
            <ProfileBanner />
            <DevelopersDetails />
          </div> } />
        <Route path='/certifications' element={<Certificates />} />
      </Routes>
    </Router>
  </div>
}

export default App
