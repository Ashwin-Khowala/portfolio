import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { isLoadingAtom } from '../atoms/IsLoading';
import { useSetRecoilState } from 'recoil';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const setIsLoading = useSetRecoilState(isLoadingAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-title" onClick={() => setIsLoading(true)}>
        <a href="/">Ashwin Khowala</a>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsLoading(false)}>Home</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact-me">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}