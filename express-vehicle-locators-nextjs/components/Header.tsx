'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header>
      <div className="container">
        <div className="logo">
          <h1>Express Vehicle Locators</h1>
          <p>Professional Vehicle Finding Service</p>
        </div>
        <nav>
          <ul className={mobileMenuOpen ? 'active' : ''}>
            <li><Link href="/" className={window.location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link href="/customer-info" className={window.location.pathname === '/customer-info' ? 'active' : ''}>Find Your Vehicle</Link></li>
            <li><Link href="/finance" className={window.location.pathname === '/finance' ? 'active' : ''}>Financing</Link></li>
            <li><Link href="/trade-in" className={window.location.pathname === '/trade-in' ? 'active' : ''}>Trade-In Value</Link></li>
            <li><Link href="/contact" className={window.location.pathname === '/contact' ? 'active' : ''}>Contact Us</Link></li>
          </ul>
          <div className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  )
}
