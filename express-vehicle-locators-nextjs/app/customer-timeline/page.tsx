'use client'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function CustomerTimeline() {
  return (
    <main>
      <Header />
      
      <section className="page-header">
        <div className="container">
          <h1>Your Vehicle Search Timeline</h1>
          <p>Track the progress of your vehicle search in real-time.</p>
        </div>
      </section>

      <section className="customer-timeline">
        <div className="container">
          <h2>Current Search Status</h2>
          <p>Your vehicle search is currently in progress. Follow along with each step of the process below.</p>
          
          <div className="timeline-progress">
            {[
              { step: 'Initial Consultation', icon: 'check', status: 'completed' },
              { step: 'Market Research', icon: 'search', status: 'active' },
              { step: 'Options Presentation', icon: 'car', status: '' },
              { step: 'Negotiation', icon: 'handshake', status: '' },
              { step: 'Purchase Facilitation', icon: 'file-contract', status: '' },
              { step: 'Delivery', icon: 'truck', status: '' }
            ].map((item, index) => (
              <div className={`progress-step ${item.status}`} key={index}>
                <div className="step-icon"><i className={`fas fa-${item.icon}`}></i></div>
                <div className="step-label">{item.step}</div>
              </div>
            ))}
          </div>
          
          <div className="timeline-details">
            <h3>Search Updates</h3>
            
            {[
              {
                date: 'April 25, 2025 - 10:30 AM',
                title: 'Initial Consultation Completed',
                description: 'Thank you for your detailed vehicle requirements. We\'ve recorded your preferences for a 2023-2024 Toyota Highlander Limited with less than 30,000 miles in either Pearl White or Silver. Your budget range of $38,000-$42,000 has been noted.'
              },
              {
                date: 'April 26, 2025 - 2:15 PM',
                title: 'Market Research Initiated',
                description: 'We\'ve begun searching our dealer network for vehicles matching your criteria. Initial searches show approximately 12 potential matches within a 300-mile radius. We\'re now evaluating each option for condition, history, and price competitiveness.'
              },
              {
                date: 'April 28, 2025 - 9:45 AM',
                title: 'Promising Options Identified',
                description: 'We\'ve identified 3 promising vehicles that match your criteria. We\'re currently gathering detailed information and photos for each option. We expect to present these options to you within the next 2-3 business days.'
              }
            ].map((update, index) => (
              <div className="timeline-update" key={index}>
                <div className="update-date">{update.date}</div>
                <div className="update-title">{update.title}</div>
                <p>{update.description}</p>
              </div>
            ))}
          </div>
          
          <div className="estimated-completion">
            <h3>Estimated Timeline</h3>
            <ul>
              <li><strong>Market Research:</strong> April 26 - May 2, 2025</li>
              <li><strong>Options Presentation:</strong> Expected by May 3, 2025</li>
              <li><strong>Negotiation & Verification:</strong> 2-5 days after option selection</li>
              <li><strong>Purchase Facilitation:</strong> 1-3 days after successful negotiation</li>
              <li><strong>Delivery:</strong> 1-7 days after purchase completion</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Questions About Your Search?</h2>
          <p>Contact your dedicated vehicle specialist for updates or to provide additional information.</p>
          <Link href="/contact" className="btn">Contact Your Specialist</Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
