'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function Finance() {
  const calculateMonthlyPayment = () => {
    const loanAmount = parseFloat((document.getElementById('loan-amount') as HTMLInputElement).value) || 0;
    const interestRate = parseFloat((document.getElementById('interest-rate') as HTMLInputElement).value) || 0;
    const loanTerm = parseInt((document.getElementById('loan-term') as HTMLSelectElement).value) || 60;
    const downPayment = parseFloat((document.getElementById('down-payment') as HTMLInputElement).value) || 0;
    
    if (loanAmount <= 0) {
      alert('Please enter a valid loan amount.');
      return;
    }
    
    // Calculate loan amount after down payment
    const principal = loanAmount - downPayment;
    
    // Convert annual rate to monthly rate and convert percentage to decimal
    const monthlyRate = (interestRate / 100) / 12;
    
    // Calculate monthly payment
    let monthlyPayment = 0;
    
    if (interestRate === 0) {
      // If interest rate is 0, simple division
      monthlyPayment = principal / loanTerm;
    } else {
      // Standard formula for calculating monthly payment
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
    }
    
    // Display result
    const resultElement = document.getElementById('payment-value');
    const resultContainer = document.getElementById('payment-result');
    
    if (resultElement && resultContainer) {
      resultElement.textContent = '$' + monthlyPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      resultContainer.style.display = 'block';
      
      // Scroll to result
      resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <Header />
      
      <section className="page-header">
        <div className="container">
          <h1>Financing Options</h1>
          <p>Explore current manufacturer specials and financing options to make your purchase affordable.</p>
        </div>
      </section>

      <section className="finance-info">
        <div className="container">
          <h2>Current Manufacturer Specials</h2>
          <p>Take advantage of these limited-time offers from top manufacturers. Our team can help you navigate these options to find the best deal for your situation.</p>
          
          <div className="manufacturer-specials">
            {[
              {
                brand: 'Toyota',
                title: 'Toyota Special Offers',
                date: 'Valid through April 30, 2025',
                details: [
                  '<strong>0% APR</strong> for 60 months on select new Toyota models',
                  '<strong>$1,500 Cash Back</strong> on select 2024 Toyota Camry models',
                  '<strong>Lease Special:</strong> 2024 RAV4 for $299/month for 36 months with $2,999 due at signing'
                ]
              },
              {
                brand: 'Honda',
                title: 'Honda Special Offers',
                date: 'Valid through May 3, 2025',
                details: [
                  '<strong>0.9% APR</strong> for 48 months on select new Honda models',
                  '<strong>$2,000 Cash Back</strong> on select 2024 Honda Accord models',
                  '<strong>Lease Special:</strong> 2024 CR-V for $319/month for 36 months with $3,299 due at signing'
                ]
              },
              {
                brand: 'Chevrolet',
                title: 'Chevrolet Special Offers',
                date: 'Valid through May 31, 2025',
                details: [
                  '<strong>0% APR</strong> for 72 months on select new Chevrolet models',
                  '<strong>$3,000 Cash Back</strong> on select 2024 Silverado models',
                  '<strong>Lease Special:</strong> 2024 Equinox for $279/month for 36 months with $2,799 due at signing'
                ]
              },
              {
                brand: 'Mercedes-Benz',
                title: 'Mercedes-Benz Special Offers',
                date: 'Valid through April 30, 2025',
                details: [
                  '<strong>1.99% APR</strong> for 36 months on select new Mercedes-Benz models',
                  '<strong>Lease Special:</strong> 2024 GLC 300 for $599/month for 36 months with $4,999 due at signing',
                  '<strong>Complimentary Maintenance</strong> for 3 years on select models'
                ]
              },
              {
                brand: 'Jeep',
                title: 'Jeep Special Offers',
                date: 'Valid through May 31, 2025',
                details: [
                  '<strong>0% APR</strong> for 60 months on select new Jeep models',
                  '<strong>$3,500 Cash Back</strong> on select 2024 Grand Cherokee models',
                  '<strong>Lease Special:</strong> 2024 Wrangler for $349/month for 36 months with $3,499 due at signing'
                ]
              },
              {
                brand: 'BMW',
                title: 'BMW Special Offers',
                date: 'Valid through April 30, 2025',
                details: [
                  '<strong>1.9% APR</strong> for 60 months on select new BMW models',
                  '<strong>Lease Special:</strong> 2024 X3 for $499/month for 36 months with $4,499 due at signing',
                  '<strong>Complimentary Maintenance</strong> for 3 years/36,000 miles on all new vehicles'
                ]
              }
            ].map((special, index) => (
              <div className="special-card" key={index}>
                <div className="special-img">
                  <div className="brand-placeholder">{special.brand}</div>
                </div>
                <div className="special-content">
                  <h3 className="special-title">{special.title}</h3>
                  <p className="special-date">{special.date}</p>
                  <div className="special-details">
                    {special.details.map((detail, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: detail }}></p>
                    ))}
                  </div>
                  <Link href="#" className="btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="financing-options">
        <div className="container">
          <h2>Understanding Your Financing Options</h2>
          <div className="finance-grid">
            {[
              {
                icon: 'university',
                title: 'Dealership Financing',
                description: 'Dealerships offer convenient financing options through their partnerships with banks and credit unions. We can help you navigate these offers to find competitive rates.'
              },
              {
                icon: 'landmark',
                title: 'Bank Loans',
                description: 'Traditional bank auto loans often provide competitive interest rates, especially for customers with established relationships. We can help you compare these options.'
              },
              {
                icon: 'handshake',
                title: 'Credit Union Financing',
                description: 'Credit unions typically offer lower interest rates and more flexible terms than traditional banks. Membership may be required but is often worth the savings.'
              },
              {
                icon: 'percentage',
                title: 'Manufacturer Financing',
                description: 'Manufacturers frequently offer special financing rates, cash back incentives, and lease deals that can significantly reduce your costs.'
              }
            ].map((option, index) => (
              <div className="finance-option" key={index}>
                <h3><i className={`fas fa-${option.icon}`}></i> {option.title}</h3>
                <p>{option.description}</p>
              </div>
            ))}
          </div>
          
          <div className="finance-calculator">
            <h3>Monthly Payment Calculator</h3>
            <form id="payment-calculator">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="loan-amount">Loan Amount ($)</label>
                  <input type="number" id="loan-amount" name="loan-amount" placeholder="e.g., 25000" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest-rate">Interest Rate (%)</label>
                  <input type="number" id="interest-rate" name="interest-rate" step="0.1" placeholder="e.g., 3.5" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="loan-term">Loan Term (months)</label>
                  <select id="loan-term" name="loan-term" required>
                    <option value="36">36 months (3 years)</option>
                    <option value="48">48 months (4 years)</option>
                    <option value="60" selected>60 months (5 years)</option>
                    <option value="72">72 months (6 years)</option>
                    <option value="84">84 months (7 years)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="down-payment">Down Payment ($)</label>
                  <input type="number" id="down-payment" name="down-payment" placeholder="e.g., 5000" defaultValue="0" />
                </div>
              </div>
              
              <div className="form-group">
                <button type="button" onClick={calculateMonthlyPayment} className="btn">Calculate Payment</button>
              </div>
            </form>
            
            <div id="payment-result" className="calculator-result" style={{display: 'none'}}>
              <h3>Estimated Monthly Payment</h3>
              <div id="payment-value" className="result-value">$0</div>
              <p>This is an estimated payment based on the information provided. Actual payment may vary based on credit approval and other factors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Explore Your Financing Options?</h2>
          <p>Let our experts help you navigate the financing process and find the best rates for your new vehicle.</p>
          <Link href="/contact" className="btn">Contact Us Today</Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
