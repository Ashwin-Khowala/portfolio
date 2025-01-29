import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, useEffect, Suspense, useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { isLoadingAtom } from './atoms/IsLoading';
import LoadingPage from './components/LoadingPage';
import NavBar from './components/NavBar';
import ProfileBanner from './components/ProfileBanner';
import DevelopersDetails from './components/DevelopersDetails';
import './App.css';

const Certificates = lazy(() => import('./components/Certificates'));
const Skills = lazy(() => import('./components/Skills'));
const ContactMe =lazy(()=>import('./components/ContactMe'));

function App() {
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const isLoading = useRecoilValue(isLoadingAtom);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      setIsLoading(true); // Show loading on initial load
      const timer = setTimeout(() => {
        setIsLoading(false); // Hide loading screen after initial load
        setFirstLoad(false); // Update state to prevent further loading
      }, 2000); // Simulate initial loading

      return () => clearTimeout(timer);
    }
  }, [firstLoad, setIsLoading]);

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="container">
                  {isLoading ? <LoadingPage /> : <DashBoard />}
                </div>
              }
            />
            <Route path="/certifications" element={<Certificates />} />
            <Route path="/skills" element={<Skills />} />
            <Route path='/contact-me' element={<ContactMe/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function DashBoard() {
  return (
    <div>
      <ProfileBanner />
      <DevelopersDetails />
    </div>
  );
}

export default App;
