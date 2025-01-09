import React from 'react'
import './NavBar.css'
import { useState, useEffect } from 'react'

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll=()=> {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);


  return <div>
        <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
            <div className='nav-title'>
                <a href='#'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <i className="fas fa-code"></i>
                    Ashwin Khowala
                </a>
            </div>
            <div className='nav-links'>
                <ul>
                    <li>
                    <a href='#'>Home</a>
                    </li>
                    <li>
                    <a href='#'>About</a>
                    </li>
                    <li>
                    <a href='#'>Projects</a>
                    </li>
                    <li>
                    <a href='#'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}




