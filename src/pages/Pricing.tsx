import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const Pricing = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pricing-hero">
        <img className="pricing-hero-bg" src="/assets/cta-bg.png" alt="" />
        
        {/* Navigation */}
        <Navigation logoVariant="horizontal" />
        
        {/* Title */}
        <div className="pricing-hero-title">
          <h1>ubcon2026 pricing</h1>
        </div>

        {/* Color Bar */}
        <div className="pricing-color-bar">
          <img src="/assets/color-bar.svg" alt="" />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-container">
          {/* Pricing Cards */}
          <div className="pricing-cards">
            {/* Owners Card */}
            <div className="pricing-card pricing-card-owners">
              <span className="pricing-star-bottom"></span>
              <h2 className="pricing-card-title">
                owners/<br />
                operators/<br />
                spouses
              </h2>
              <div className="pricing-card-price">
                <p className="price-amount">$950</p>
                <p className="price-note">(Early Bird ends<br />January 4, 2026)</p>
              </div>
              <div className="pricing-card-price">
                <p className="price-amount">$1,150</p>
                <p className="price-note">(Standard Registration<br />ends March 27, 2026)</p>
              </div>
            </div>

            {/* Non-Owners Card */}
            <div className="pricing-card pricing-card-non-owners">
              <span className="pricing-star-bottom"></span>
              <h2 className="pricing-card-title">non-owners</h2>
              <div className="pricing-card-price">
                <p className="price-amount">$850</p>
                <p className="price-note">(Early Bird ends<br />January 4, 2026)</p>
              </div>
              <div className="pricing-card-price">
                <p className="price-amount">$1,050</p>
                <p className="price-note">(Standard Registration<br />ends March 27, 2026)</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="pricing-included">
            <h2 className="pricing-included-title">what's included</h2>
            
            <div className="pricing-included-section">
              <h3>conference access</h3>
              <ul>
                <li>Welcome Gift</li>
                <li>Hands-on training workshops</li>
                <li>Access to vendors and exhibits</li>
                <li>All Keynotes</li>
                <li>Brand Sessions</li>
                <li>Unleashed Brands Sessions</li>
                <li>Vendor networking</li>
                <li>Peer-to-peer networking</li>
              </ul>
            </div>

            <div className="pricing-included-section">
              <h3>food & beverage</h3>
              <ul>
                <li>Daily breakfast, lunch, dinner</li>
                <li>Daily snack & beverage breaks</li>
                <li>Drink tickets for evening social events</li>
              </ul>
            </div>

            <div className="pricing-included-section">
              <h3>evening socials</h3>
            </div>
          </div>

          {/* Additional Info */}
          <div className="pricing-additional-note">
            <p>Registration is required per person, and each individual must complete a registration. Late/On-Site Registration (after March 27, 2026): $1,350/person</p>
          </div>

          {/* Register Button */}
          <div className="pricing-register-btn">
            <button className="btn btn-primary">register for ubcon2026</button>
          </div>

          {/* Policy Text */}
          <div className="pricing-policy">
            <p>
              <strong>Attendee Age Requirement:</strong> Attendees must be 21 years of age or older. For more details, please reference the FAQs.
            </p>
            <p>
              <strong>Cancellation & Refund Policy:</strong> All registrations for conference attendance and accommodations are non-refundable and only transferable to another approved attendee defined as a franchisee or general manager in good standing from an Unleashed Brands company. We will accommodate transfers up to 2 business days prior to the event. transfers will not be allowed on site. Please email <a href="mailto:unleashedevents@etherio.com">unleashedevents@etherio.com</a> and provide the name, company, and email address of the registration you would like to transfer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pricing;

