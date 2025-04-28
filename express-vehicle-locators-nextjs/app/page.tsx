'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Express Vehicle Locators found me exactly the car I wanted at a price $3,000 below what I could find on my own. Their expertise saved me both time and money!",
      client: "Michael R., Dallas"
    },
    {
      text: "After searching for weeks, I couldn't find the specific trim level I wanted. Express Vehicle Locators found it within days. Incredible service!",
      client: "Sarah T., Plano"
    },
    {
      text: "The trade-in value I received through Express Vehicle Locators was significantly higher than what the dealership initially offered. Highly recommend!",
      client: "James L., Fort Worth"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <main>
      <Header />
      
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2>Find Your Perfect Vehicle</h2>
            <p>With over 25 years of experience in the automotive industry, we'll locate the exact vehicle you want at the best possible price.</p>
            <Link href="/customer-info" className="btn">Start Your Search</Link>
          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <h2>25+ Years of Automotive Experience</h2>
          <p>Our expertise spans across multiple premium manufacturers:</p>
          <div className="brands">
            {['Toyota', 'Mercedes-Benz', 'Honda', 'GMC', 'Chevrolet', 'Chrysler', 'Jeep', 'Dodge', 'Ram'].map((brand) => (
              <div className="brand" key={brand}>
                <div className="brand-placeholder"></div>
                <h3>{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Vehicle Locator Services</h2>
          <div className="service-cards">
            <div className="card">
              <i className="fas fa-search"></i>
              <h3>Vehicle Search</h3>
              <p>Tell us exactly what you're looking for, and we'll find it for you at the best possible price.</p>
            </div>
            <div className="card">
              <i className="fas fa-dollar-sign"></i>
              <h3>Price Negotiation</h3>
              <p>Leverage our industry expertise to get the best deal on your next vehicle purchase.</p>
            </div>
            <div className="card">
              <i className="fas fa-exchange-alt"></i>
              <h3>Trade-In Evaluation</h3>
              <p>Get a fair market value for your current vehicle with our trade-in evaluation service.</p>
            </div>
            <div className="card">
              <i className="fas fa-file-contract"></i>
              <h3>Financing Options</h3>
              <p>Access manufacturer specials and financing options to make your purchase affordable.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="container">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Tell Us What You Want</h3>
              <p>Fill out our detailed vehicle requirements form with your preferences.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>We Search For You</h3>
              <p>Our experts search nationwide inventory to find your perfect match.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Review Options</h3>
              <p>We present you with the best options that match your criteria.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Complete Your Purchase</h3>
              <p>Once you select a vehicle, we handle the details to complete your purchase.</p>
            </div>
          </div>
          <Link href="/customer-info" className="btn">Start Your Search Now</Link>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonial-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial ${index === activeTestimonial ? 'active' : ''}`}>
                <p>"{testimonial.text}"</p>
                <div className="client">- {testimonial.client}</div>
              </div>
            ))}
            <button className="slider-prev" onClick={prevTestimonial}><i className="fas fa-chevron-left"></i></button>
            <button className="slider-next" onClick={nextTestimonial}><i className="fas fa-chevron-right"></i></button>
          </div>
          <div className="slider-controls">
            {testimonials.map((_, index) => (
              <span 
                key={index} 
                className={`control ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Find Your Perfect Vehicle?</h2>
          <p>Let our 25+ years of automotive experience work for you.</p>
          <Link href="/customer-info" className="btn">Get Started Now</Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
