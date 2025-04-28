'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Express Vehicle Locators</h3>
            <p>Professional Vehicle Finding Service</p>
            <p>25+ Years of Automotive Experience</p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> 6860 North Dallas Parkway Ste #200</p>
            <p>PLANO, Texas, 75024, United States</p>
            <p><i className="fas fa-phone"></i> 469-468-9712</p>
            <p><i className="fas fa-envelope"></i> info@expressvehiclelocators.com</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/customer-info">Find Your Vehicle</Link></li>
              <li><Link href="/finance">Financing</Link></li>
              <li><Link href="/trade-in">Trade-In Value</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Express Vehicle Locators. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
