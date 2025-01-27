// import React from 'react'
// import './NavBar.css'
// import { useState, useEffect } from 'react'
// import {isLoadingAtom} from '../atoms/IsLoading';
// import { useSetRecoilState } from 'recoil';

// export default function NavBar() {
//     const [isScrolled, setIsScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll=()=> {
//             if (window.scrollY > 50) {
//                 setIsScrolled(true);
//             } else {
//                 setIsScrolled(false);
//             }
//         }
//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     },[]);

//     const setIsLoading=useSetRecoilState(isLoadingAtom);

//     return <div>
//         <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
//             <div className='nav-title' onClick={()=>{
//                 setIsLoading(true);
//             }}>
//                 <a href='/'>
//                 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
//                 <i className="fas fa-code"></i>
//                     Ashwin Khowala
//                 </a>
//             </div>
//             <div className='nav-links'>
//                 <ul>
//                     <li>
//                     <a href='/' onClick={setIsLoading(false)}>Home</a>
//                     </li>
//                     <li>
//                     <a href='/about'>About</a>
//                     </li>
//                     <li>
//                     <a href='/projects'>Projects</a>
//                     </li>
//                     <li>
//                     <a href='/contact'>Contact</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// }


import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { isLoadingAtom } from '../atoms/IsLoading';
import { useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom'; // Use Link component from react-router-dom

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const setIsLoading = useSetRecoilState(isLoadingAtom);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
        {/* Trigger loading screen only when title is clicked */}
        <div
          className="nav-title"
          onClick={() => {
            setIsLoading(true); // Set loading to true when title is clicked
          }}
        >
          <a href="/">
            <i className="fas fa-code"></i>
            Ashwin Khowala
          </a>
        </div>
        <div className="nav-links">
          <ul>
            {/* Use react-router Link for navigation */}
            <li>
              <Link to="/" onClick={(e) => { 
                // e.preventDefault(); s // Prevent default link behavior
                setIsLoading(false);  // Trigger loading screen
              }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}



