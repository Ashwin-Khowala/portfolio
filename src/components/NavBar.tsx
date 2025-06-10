"use client";
import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { useRouter } from 'next/navigation';

import { isLoadingAtom, shouldShowLoadingAtom } from '@/atoms/IsLoading';
import { useSetAtom } from 'jotai';
import Link from 'next/link';

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter()
  const setIsLoading = useSetAtom(isLoadingAtom)
  const setShouldShowLoading = useSetAtom(shouldShowLoadingAtom)

  const handleNameClick = () => {
    // setIsLoading(true)
    // setShouldShowLoading(true)
    sessionStorage.removeItem("hasVisitedSite")
    router.push('/?fromNavbar=true');
  }


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`nav-bar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-title" onClick={
        handleNameClick
      }>
        <Link href="/">Ashwin Khowala </Link>
      </div>

      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}