import './App.css'
import NavBar from './components/NavBar'
import ProfileBanner from './components/ProfileBanner'
import DevelopersDetails from './components/DevelopersDetails'
import Certificates from './components/Certificates'
import {BrowserRouter as  Routes, Route} from 'react-router-dom'

function App() {

  return <div>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/'
          element={<div className='container'> 
            <ProfileBanner />
            <DevelopersDetails />
          </div> } />
        <Route path='/certifications' element={<Certificates />} />
      </Routes>
    </BrowserRouter>
  </div>
}

export default App
