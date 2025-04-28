'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState } from 'react'
import Link from 'next/link'

export default function CustomerInfo() {
  const [wordCount, setWordCount] = useState(0);
  
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const words = e.target.value.trim().split(/\s+/).filter(Boolean).length;
    setWordCount(words);
  };
  
  return (
    <main>
      <Header />
      
      <section className="page-header">
        <div className="container">
          <h1>Find Your Perfect Vehicle</h1>
          <p>Tell us what you're looking for, and we'll find it for you at the best possible price.</p>
        </div>
      </section>

      <section className="customer-info">
        <div className="container">
          <div className="form-container">
            <h2>Vehicle Requirements</h2>
            <p>Please provide as much detail as possible about the vehicle you're looking for. The more specific you are, the better we can match your needs.</p>
            
            <form id="vehicle-form" action="/api/submit-form" method="POST">
              <h3>Vehicle Details</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="vehicle-year">Preferred Year</label>
                  <select id="vehicle-year" name="vehicle-year" required>
                    <option value="">Select Year</option>
                    {[2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                    <option value="older">2014 or older</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="vehicle-make">Make</label>
                  <select id="vehicle-make" name="vehicle-make" required>
                    <option value="">Select Make</option>
                    {['Toyota', 'Mercedes-Benz', 'Honda', 'GMC', 'Chevrolet', 'Chrysler', 'Jeep', 'Dodge', 'Ram', 'Ford', 'Nissan', 'BMW', 'Audi', 'Lexus', 'Other'].map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="vehicle-model">Model</label>
                <input type="text" id="vehicle-model" name="vehicle-model" placeholder="e.g., Camry, C-Class, Civic" required />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="vehicle-type">Vehicle Type</label>
                  <select id="vehicle-type" name="vehicle-type">
                    <option value="">Select Type</option>
                    {['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible', 'Wagon', 'Van', 'Hatchback'].map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="vehicle-trim">Trim Level (if known)</label>
                  <input type="text" id="vehicle-trim" name="vehicle-trim" placeholder="e.g., LE, Sport, Limited" />
                </div>
              </div>
              
              <h3>Price Range</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="min-price">Minimum Price</label>
                  <select id="min-price" name="min-price">
                    <option value="">No Minimum</option>
                    {[10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000].map(price => (
                      <option key={price} value={price}>${price.toLocaleString()}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="max-price">Maximum Price</label>
                  <select id="max-price" name="max-price">
                    <option value="">No Maximum</option>
                    {[15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 60000, 70000, 80000, 90000, 100000, 150000, 200000].map(price => (
                      <option key={price} value={price}>${price.toLocaleString()}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <h3>Mileage Preferences</h3>
              
              <div className="form-group">
                <label htmlFor="max-mileage">Maximum Mileage</label>
                <select id="max-mileage" name="max-mileage">
                  <option value="">No Preference</option>
                  {[10000, 30000, 50000, 75000, 100000, 150000].map(mileage => (
                    <option key={mileage} value={mileage}>Under {mileage.toLocaleString()} miles</option>
                  ))}
                </select>
              </div>
              
              <h3>Features & Options</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Must-Have Features</label>
                  {['Leather Seats', 'Sunroof/Moonroof', 'Navigation System', 'Bluetooth', 'Backup Camera', 'Third Row Seating'].map(feature => (
                    <div className="checkbox-group" key={feature}>
                      <input 
                        type="checkbox" 
                        id={`feature-${feature.toLowerCase().replace(/\s+/g, '-').replace('/', '-')}`} 
                        name="features[]" 
                        value={feature} 
                      />
                      <label htmlFor={`feature-${feature.toLowerCase().replace(/\s+/g, '-').replace('/', '-')}`}>{feature}</label>
                    </div>
                  ))}
                </div>
                
                <div className="form-group">
                  <label>Drivetrain Preference</label>
                  {[
                    { id: 'drivetrain-any', value: 'Any', label: 'Any', checked: true },
                    { id: 'drivetrain-awd', value: 'AWD/4WD', label: 'AWD/4WD', checked: false },
                    { id: 'drivetrain-fwd', value: 'Front Wheel Drive', label: 'Front Wheel Drive', checked: false },
                    { id: 'drivetrain-rwd', value: 'Rear Wheel Drive', label: 'Rear Wheel Drive', checked: false }
                  ].map(option => (
                    <div className="checkbox-group" key={option.id}>
                      <input 
                        type="radio" 
                        id={option.id} 
                        name="drivetrain" 
                        value={option.value} 
                        defaultChecked={option.checked} 
                      />
                      <label htmlFor={option.id}>{option.label}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="additional-features">Additional Features or Requirements</label>
                <textarea 
                  id="additional-features" 
                  name="additional-features" 
                  rows={4} 
                  onChange={handleTextareaChange}
                ></textarea>
                <div className="form-note">{wordCount} word{wordCount !== 1 ? 's' : ''}</div>
              </div>
              
              <h3>Contact Information</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="customer-name">Full Name</label>
                  <input type="text" id="customer-name" name="customer-name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="customer-email">Email Address</label>
                  <input type="email" id="customer-email" name="customer-email" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="customer-phone">Phone Number</label>
                  <input type="tel" id="customer-phone" name="customer-phone" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="preferred-contact">Preferred Contact Method</label>
                  <select id="preferred-contact" name="preferred-contact">
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                    <option value="Text">Text Message</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="timeline">How soon are you looking to purchase?</label>
                <select id="timeline" name="timeline">
                  <option value="Immediately">Immediately</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="1 month">Within 1 month</option>
                  <option value="3 months">Within 3 months</option>
                  <option value="Just researching">Just researching</option>
                </select>
              </div>
              
              <div className="form-group">
                <div className="checkbox-group">
                  <input type="checkbox" id="terms" name="terms" required />
                  <label htmlFor="terms">I agree to be contacted by Express Vehicle Locators regarding my vehicle search.</label>
                </div>
              </div>
              
              <div className="form-group">
                <button type="submit" className="btn">Submit Vehicle Request</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Let Us Do The Work For You</h2>
          <p>With our extensive network and 25+ years of experience, we'll find your perfect vehicle at the best possible price.</p>
          <Link href="/contact" className="btn">Contact Us Directly</Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
