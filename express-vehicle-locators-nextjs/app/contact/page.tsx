'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Contact() {
  return (
    <main>
      <Header />
      
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We're here to help you find your perfect vehicle. Reach out to us today!</p>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have questions about our vehicle locator service? Want to discuss your specific vehicle needs? We're here to help!</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <h3>Our Office</h3>
                    <p>6860 North Dallas Parkway Ste #200</p>
                    <p>PLANO, Texas, 75024</p>
                    <p>United States</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <h3>Phone</h3>
                    <p><a href="tel:4694689712">469-468-9712</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <h3>Email</h3>
                    <p><a href="mailto:info@expressvehiclelocators.com">info@expressvehiclelocators.com</a></p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <i className="fas fa-clock"></i>
                  <div>
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form id="contact-form" action="/api/submit-contact" method="POST">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" name="subject">
                      <option value="Vehicle Search">Vehicle Search</option>
                      <option value="Trade-In Inquiry">Trade-In Inquiry</option>
                      <option value="Financing Question">Financing Question</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                
                <div className="form-group">
                  <button type="submit" className="btn">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="map">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.7462913089396!2d-96.82650492392733!3d33.0085683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3c1a7b5635e3%3A0x5c7b73a7a6a1b1a8!2s6860%20N%20Dallas%20Pkwy%20%23200%2C%20Plano%2C%20TX%2075024!5e0!3m2!1sen!2sus!4v1682687654321!5m2!1sen!2sus" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
