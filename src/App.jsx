import './App.css'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import {React,lazy , useEffect,useState} from 'react'

const LoadingPage = lazy(()=>import('./components/LoadingPage'));
const NavBar = lazy(()=>import('./components/NavBar'));
const ProfileBanner = lazy(()=>import('./components/ProfileBanner'));
const DevelopersDetails = lazy(()=>import('./components/DevelopersDetails'));
const Certificates = lazy(()=>import('./components/Certificates'));
const Skills=lazy(()=>import('./components/Skills'));


function App() {

  const [isLoading, setIsLoading] = useState(true);

  const handleLoaded = () => {
    setIsLoading(false); // Hide the loading screen
  };
 
 return <div>

    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/'
          element={<div className='container'> 
            {isLoading ? <LoadingPage onLoaded={handleLoaded} /> : <DashBoard />}
          </div> } />
        <Route path='/certifications' element={<Certificates />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </BrowserRouter>
  </div>
}


function DashBoard() {
  return <div>
    <ProfileBanner/>
    <DevelopersDetails/>
  </div>
}

export default App
