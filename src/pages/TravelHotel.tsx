import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const TravelHotel = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="travel-hero">
        <video className="travel-hero-video" autoPlay loop muted playsInline>
          <source src="/videos/Great-Approach-5Mbps-LOOP.mp4" type="video/mp4" />
        </video>
        
        {/* Navigation */}
        <Navigation logoVariant="horizontal" />
        
        {/* Title */}
        <div className="travel-hero-title">
          <h1>travel & hotel</h1>
        </div>

        {/* Color Bar */}
        <div className="travel-color-bar">
          <img src="/assets/color-bar.svg" alt="" />
        </div>
      </section>

      {/* Hotel Section */}
      <section className="travel-hotel-section">
        <div className="travel-hotel-container">
          {/* Rosen Shingle Creek Logo */}
          <div className="rosen-logo">
            <img src="/assets/rosen-logo.png" alt="Rosen Shingle Creek" />
          </div>

          {/* Hotel Address */}
          <div className="hotel-address">
            <p>9939 Universal Boulevard</p>
            <p>Orlando, Florida 32819</p>
          </div>

          {/* Room Pricing */}
          <div className="hotel-pricing">
            <p>Single/Double occupancy: $259 + taxes*</p>
            <p>Triple/Quadruple occupancy: $279 + taxes*</p>
          </div>

          {/* Hotel Description */}
          <div className="hotel-description">
            <p>The Rosen Shingle Creek is conveniently located about 10 miles from Orlando International Airport (MCO), making travel to and from the conference simple and stress free. The drive typically takes 15 to 20 minutes depending on traffic. We recommend using Uber or another rideshare service for easy and direct transportation to the hotel, with pickups available right outside the terminal for a smooth start to your UBCON experience.</p>
          </div>

          {/* Last Date Note */}
          <div className="hotel-last-date">
            <p>Last date to register for hotels is March 27, 2026.</p>
          </div>

          {/* Book Hotel Button */}
          <div className="hotel-book-btn">
            <a 
              href="https://be.synxis.com/?chain=10237&hotel=69867&level=hotel&config=ORLRS&theme=ORLRS&group=GRP-UNLEASHED2026&arrive=2026-04-16&depart=2026-04-24"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              book hotel
            </a>
          </div>

          {/* Airport Logo */}
          <div className="airport-logo">
            <img src="/assets/orlando-airport-logo.png" alt="Orlando International Airport" />
          </div>

          {/* Airport Info */}
          <div className="airport-info">
            <h3>Orlando International Airport (MCO)</h3>
            <div className="airport-text">
              <p>The closest airport is the Orlando International Airport; located approximately 15-20 minutes from the resort.</p>
              <p>&nbsp;</p>
              <p>Rideshares are recommended for travel between the airport and hotel. </p>
              <p>&nbsp;</p>
              <p>Attendees are encouraged to arrive the morning of Sunday, April 19 to check in. Departures should take place Thursday, April 23.</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="travel-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8523156789!2d-81.46896!3d28.45392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77ec0e0c289b3%3A0x5c5c5c5c5c5c5c5c!2s9939%20Universal%20Blvd%2C%20Orlando%2C%20FL%2032819!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Rosen Shingle Creek"
            ></iframe>
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

export default TravelHotel;
