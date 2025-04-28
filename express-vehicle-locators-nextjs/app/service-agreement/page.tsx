'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function ServiceAgreement() {
  return (
    <main>
      <Header />
      
      <section className="page-header">
        <div className="container">
          <h1>Service Agreement</h1>
          <p>Choose the service plan that best fits your vehicle finding needs.</p>
        </div>
      </section>

      <section className="service-plans">
        <div className="container">
          <h2>Our Vehicle Locator Service Plans</h2>
          <p>At Express Vehicle Locators, we offer several service plans to meet your specific needs. Each plan includes our expert vehicle finding service backed by 25+ years of automotive industry experience.</p>
          
          <div className="plans-container">
            <div className="plan-card">
              <div className="plan-header">
                <h3>Basic Search</h3>
                <div className="plan-price">$299</div>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> Local market search (within 100 miles)</li>
                  <li><i className="fas fa-check"></i> Up to 3 vehicle options presented</li>
                  <li><i className="fas fa-check"></i> Basic price negotiation assistance</li>
                  <li><i className="fas fa-check"></i> 14-day search period</li>
                  <li><i className="fas fa-check"></i> Email support</li>
                  <li><i className="fas fa-times"></i> Extended market search</li>
                  <li><i className="fas fa-times"></i> Trade-in value maximization</li>
                  <li><i className="fas fa-times"></i> Financing assistance</li>
                </ul>
              </div>
              <div className="plan-footer">
                <Link href="/contact" className="btn">Select Plan</Link>
              </div>
            </div>
            
            <div className="plan-card featured">
              <div className="plan-badge">Most Popular</div>
              <div className="plan-header">
                <h3>Premium Search</h3>
                <div className="plan-price">$499</div>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> Nationwide vehicle search</li>
                  <li><i className="fas fa-check"></i> Up to 5 vehicle options presented</li>
                  <li><i className="fas fa-check"></i> Advanced price negotiation</li>
                  <li><i className="fas fa-check"></i> 30-day search period</li>
                  <li><i className="fas fa-check"></i> Priority email and phone support</li>
                  <li><i className="fas fa-check"></i> Trade-in value maximization</li>
                  <li><i className="fas fa-check"></i> Basic financing assistance</li>
                  <li><i className="fas fa-check"></i> Vehicle history report included</li>
                </ul>
              </div>
              <div className="plan-footer">
                <Link href="/contact" className="btn">Select Plan</Link>
              </div>
            </div>
            
            <div className="plan-card">
              <div className="plan-header">
                <h3>Executive Search</h3>
                <div className="plan-price">$799</div>
              </div>
              <div className="plan-features">
                <ul>
                  <li><i className="fas fa-check"></i> International vehicle search capability</li>
                  <li><i className="fas fa-check"></i> Unlimited vehicle options presented</li>
                  <li><i className="fas fa-check"></i> Expert price negotiation</li>
                  <li><i className="fas fa-check"></i> 60-day search period</li>
                  <li><i className="fas fa-check"></i> 24/7 dedicated support</li>
                  <li><i className="fas fa-check"></i> Trade-in value maximization</li>
                  <li><i className="fas fa-check"></i> Comprehensive financing assistance</li>
                  <li><i className="fas fa-check"></i> Vehicle inspection coordination</li>
                  <li><i className="fas fa-check"></i> Delivery coordination assistance</li>
                </ul>
              </div>
              <div className="plan-footer">
                <Link href="/contact" className="btn">Select Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-process">
        <div className="container">
          <h2>Our Service Process</h2>
          <div className="timeline">
            {[
              {
                title: 'Initial Consultation',
                description: 'We begin with a detailed consultation to understand your exact vehicle requirements, preferences, and budget constraints.',
                timeframe: '1-2 days'
              },
              {
                title: 'Market Research',
                description: 'Our team conducts comprehensive market research to identify vehicles matching your criteria at the best possible prices.',
                timeframe: '3-7 days'
              },
              {
                title: 'Options Presentation',
                description: 'We present you with a curated selection of vehicles that match your requirements, complete with detailed information and pricing.',
                timeframe: '7-14 days'
              },
              {
                title: 'Negotiation & Verification',
                description: 'Once you select your preferred vehicle, we negotiate the best price and verify the vehicle\'s condition and history.',
                timeframe: '2-5 days'
              },
              {
                title: 'Purchase Facilitation',
                description: 'We assist with paperwork, financing arrangements, and coordinate the final purchase process.',
                timeframe: '1-3 days'
              },
              {
                title: 'Delivery & Follow-up',
                description: 'We coordinate vehicle delivery or pickup and follow up to ensure your complete satisfaction with your new vehicle.',
                timeframe: '1-7 days'
              }
            ].map((step, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <p><strong>Timeframe:</strong> {step.timeframe}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="terms">
        <div className="container">
          <h2>Service Agreement Terms</h2>
          <div className="terms-container">
            <h3>Payment Terms</h3>
            <p>Our service operates on a deposit model. A 50% deposit is required to initiate the vehicle search process, with the remaining balance due upon successful location of your desired vehicle and before final purchase arrangements.</p>
            
            <h3>Refund Policy</h3>
            <p>If we are unable to locate a vehicle meeting your specified criteria within the search period, we offer a partial refund of 50% of your deposit. If you decide to cancel the search after we've begun but before we present options, a 25% cancellation fee applies.</p>
            
            <h3>Service Guarantee</h3>
            <p>We guarantee to present you with vehicle options that match your specified criteria within the search period outlined in your selected plan. We also guarantee that all vehicles presented will have clean titles and pass basic quality standards.</p>
            
            <h3>Client Responsibilities</h3>
            <p>Clients are responsible for providing accurate and complete information regarding their vehicle requirements and preferences. Changes to requirements during the search process may extend the search period or require additional fees.</p>
            
            <h3>Vehicle Condition Disclaimer</h3>
            <p><strong>Express Vehicle Locators is not responsible for any vehicle damage, mechanical issues, or repairs.</strong> Our service is limited to locating vehicles that match your criteria and facilitating the purchase process. All repairs, damage, and vehicle condition issues are the sole responsibility of the selling dealer. We recommend that clients arrange for independent vehicle inspections prior to purchase and carefully review all dealer warranties and guarantees.</p>
            
            <h3>Confidentiality</h3>
            <p>All client information is kept strictly confidential and will not be shared with third parties except as necessary to complete the vehicle search and purchase process.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Find Your Perfect Vehicle?</h2>
          <p>Contact us today to discuss which service plan is right for you and start your vehicle search.</p>
          <Link href="/contact" className="btn">Contact Us Now</Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
