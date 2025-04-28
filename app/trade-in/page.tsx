'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function TradeIn() {
  const [tradeInValue, setTradeInValue] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    mileage: '',
    condition: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTradeInValue = () => {
    const { year, make, model, mileage, condition } = formData;
    
    if (!year || !make || !model || !mileage || !condition) {
      alert('Please fill in all fields to calculate trade-in value.');
      return;
    }
    
    // Simple calculation for demonstration purposes
    // In a real application, this would connect to a valuation API
    let baseValue = 0;
    
    // Base value based on year
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseInt(year);
    
    if (age <= 3) {
      baseValue = 20000;
    } else if (age <= 6) {
      baseValue = 15000;
    } else if (age <= 10) {
      baseValue = 10000;
    } else {
      baseValue = 5000;
    }
    
    // Adjust for mileage
    const mileageInt = parseInt(mileage);
    if (mileageInt <= 30000) {
      baseValue *= 1.1;
    } else if (mileageInt <= 60000) {
      baseValue *= 1;
    } else if (mileageInt <= 100000) {
      baseValue *= 0.8;
    } else {
      baseValue *= 0.6;
    }
    
    // Adjust for condition
    switch (condition) {
      case 'excellent':
        baseValue *= 1.2;
        break;
      case 'good':
        baseValue *= 1;
        break;
      case 'fair':
        baseValue *= 0.8;
        break;
      case 'poor':
        baseValue *= 0.6;
        break;
    }
    
    setTradeInValue(Math.round(baseValue));
  };

  return (
    <main>
      <Header />
      
      <section className="page-header">
        <div className="container">
          <h1>Trade-In Value Calculator</h1>
          <p>Get an estimate of your vehicle's trade-in value in seconds.</p>
        </div>
      </section>

      <section className="trade-in">
        <div className="container">
          <div className="calculator">
            <h2>Calculate Your Vehicle's Value</h2>
            <p>Fill out the form below to get an instant estimate of your vehicle's trade-in value. For a more accurate appraisal, please contact us directly.</p>
            
            <form id="trade-in-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="year">Vehicle Year</label>
                  <select 
                    id="year" 
                    name="year" 
                    value={formData.year}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Year</option>
                    {Array.from({ length: 21 }, (_, i) => 2025 - i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                    <option value="older">2004 or older</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="make">Make</label>
                  <select 
                    id="make" 
                    name="make" 
                    value={formData.make}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Make</option>
                    {['Toyota', 'Mercedes-Benz', 'Honda', 'GMC', 'Chevrolet', 'Chrysler', 'Jeep', 'Dodge', 'Ram', 'Ford', 'Nissan', 'BMW', 'Audi', 'Lexus', 'Other'].map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="model">Model</label>
                <input 
                  type="text" 
                  id="model" 
                  name="model" 
                  placeholder="e.g., Camry, C-Class, Civic" 
                  value={formData.model}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="mileage">Current Mileage</label>
                <input 
                  type="number" 
                  id="mileage" 
                  name="mileage" 
                  placeholder="e.g., 45000" 
                  value={formData.mileage}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="condition">Vehicle Condition</label>
                <select 
                  id="condition" 
                  name="condition" 
                  value={formData.condition}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Condition</option>
                  <option value="excellent">Excellent - Like new, no visible problems</option>
                  <option value="good">Good - Minor wear and tear, fully functional</option>
                  <option value="fair">Fair - Some mechanical or cosmetic issues</option>
                  <option value="poor">Poor - Significant mechanical or cosmetic issues</option>
                </select>
              </div>
              
              <div className="form-group">
                <button type="button" onClick={calculateTradeInValue} className="btn">Calculate Value</button>
              </div>
            </form>
            
            {tradeInValue !== null && (
              <div className="calculator-result">
                <h3>Estimated Trade-In Value</h3>
                <div className="result-value">${tradeInValue.toLocaleString()}</div>
                <p>This is an estimated value based on current market conditions. For a more accurate appraisal, please contact us directly.</p>
                <div className="form-group">
                  <Link href="/contact" className="btn">Get Official Appraisal</Link>
                </div>
              </div>
            )}
          </div>
          
          <div className="trade-in-info">
            <h3>Factors That Affect Your Vehicle's Value</h3>
            <ul>
              <li><strong>Age:</strong> Newer vehicles typically have higher trade-in values.</li>
              <li><strong>Mileage:</strong> Lower mileage generally means higher value.</li>
              <li><strong>Condition:</strong> Vehicles in better condition command higher prices.</li>
              <li><strong>Market Demand:</strong> Popular models may have higher trade-in values.</li>
              <li><strong>Service History:</strong> Well-maintained vehicles with documented service history are worth more.</li>
              <li><strong>Features:</strong> Premium features and options can increase value.</li>
            </ul>
            
            <h3>Maximize Your Trade-In Value</h3>
            <ol>
              <li>Clean your vehicle thoroughly inside and out.</li>
              <li>Fix minor issues like burned-out bulbs or cracked glass.</li>
              <li>Gather maintenance records to prove good care.</li>
              <li>Remove personal items and keep it showroom-ready.</li>
              <li>Consider timing - some vehicles sell better in certain seasons.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Find Your Next Vehicle?</h2>
          <p>Let us help you find your perfect vehicle while maximizing your trade-in value.</p>
          <Link href="/customer-info" className="btn">Start Your Search</Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
