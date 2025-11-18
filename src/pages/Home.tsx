import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        {/* Background Video */}
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        <div className="hero-overlay"></div>
        
        {/* Navigation */}
        <Navigation logoVariant="white" />
        
        {/* Hero Content */}
        <div className="hero-content">
          <p className="hero-date">
            April 18-22, 2026<br />
            Rosen Shingle Creek | Orlando, Florida
          </p>
          <button className="btn btn-primary">Register for UBCON</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-overlay">
          <div className="about-content">
            <h2>About UBCON</h2>
            <p>
              UBCON is the annual conference for the Unleashed Brands franchise community, dedicated to helping franchisees learn, play, and grow. Over four days, attendees will engage in educational workshops, hear from inspiring speakers, and build lasting relationships, all while gaining the tools needed to elevate their businesses and impact children's lives.
            </p>
            <button className="btn btn-primary">Learn More About UBCON</button>
          </div>
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <section className="speakers-section">
        <h2>Keynote Speakers</h2>
        
        <div className="speakers-grid">
          {/* Scott Greenberg */}
          <div className="speaker-card">
            <div className="speaker-image">
              <img src="/assets/scott-greenberg.png" alt="Scott Greenberg" />
            </div>
            <a href="https://scottgreenberg.com/" target="_blank" rel="noopener noreferrer" className="speaker-name">Scott Greenberg</a>
            <p className="speaker-title">Author and Franchise Expert</p>
          </div>

          {/* Mike Abrashoff */}
          <div className="speaker-card">
            <div className="speaker-image">
              <img src="/assets/mike-abrashoff.png" alt="Mike Abrashoff" />
            </div>
            <a href="https://www.mikeabrashoff.com/" target="_blank" rel="noopener noreferrer" className="speaker-name">Mike Abrashoff</a>
            <p className="speaker-title">Naval Commander</p>
          </div>

          {/* Dr. Rozen */}
          <div className="speaker-card">
            <div className="speaker-image">
              <img src="/assets/dr-rozen.png" alt="Dr. Rozen" />
            </div>
            <a href="https://www.drmichellerozen.com/" target="_blank" rel="noopener noreferrer" className="speaker-name">Dr. Rozen</a>
            <p className="speaker-title">Behavioral Scientist</p>
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary">Learn More About Our Speakers</button>
        </div>
      </section>

      {/* Pre-Conference Events */}
      {/* Pre-Conference Events Section */}
      <section className="preconference-section">
        <div className="preconference-container">
          {/* Left Column: Title and Button */}
          <div className="preconference-left">
            <h2 className="preconference-title">Pre-Conference<br />Events</h2>
            <button className="btn btn-primary">Register for UBCON2026</button>
          </div>

          {/* Golf Tournament */}
          <div className="preconference-card">
            <div className="preconference-image">
              <img src="/assets/golf-tournament.png" alt="Golf Tournament" />
            </div>
            <h3 className="preconference-card-title">Golf Tournament</h3>
            <div className="preconference-card-details">
              Saturday, April 18<br />
              2:00 PM - 6:00 PM<br />
              Rosen Shingle Creek Golf Course
            </div>
          </div>

          {/* Workshop */}
          <div className="preconference-card">
            <div className="preconference-image">
              <img src="/assets/scott-greenberg.png" alt="Scott Greenberg Workshop" />
            </div>
            <h3 className="preconference-card-title">Stop the Shift Workshop with Scott Greenberg</h3>
            <div className="preconference-card-details">
              Sunday, April 19<br />
              2:30 PM - 4:30 PM
            </div>
          </div>
        </div>
      </section>

      {/* Social Events Section */}
      <section className="social-events-section">
        <div className="social-events-container">
          {/* Left Column: Title and Button */}
          <div className="social-events-left">
            <h2 className="social-events-title">Social Events</h2>
            <button className="btn btn-primary">Learn More About Our Events</button>
          </div>

          {/* Universal CityWalk */}
          <div className="social-events-card">
            <div className="social-events-image">
              <img src="/assets/citywalk.png" alt="Universal CityWalk" />
            </div>
            <h3 className="social-events-card-title">Universal CityWalk</h3>
          </div>

          {/* Hard Rock Live */}
          <div className="social-events-card">
            <div className="social-events-image">
              <img src="/assets/hardrock.png" alt="Hard Rock Live" />
            </div>
            <h3 className="social-events-card-title">Hard Rock Live</h3>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="mobile-app-section">
        <div className="mobile-app-container">
          <div className="mobile-app-content">
            <h2 className="mobile-app-title">
              Your guide to UBCON2026.<br />
              All in one app.
            </h2>
            <p className="mobile-app-text">
              You'll have the opportunity to join sessions tailored specifically to your brand, where your leadership team will share updates, insights, and strategies to help you grow your business. These sessions are designed to give you actionable takeaways and a clear vision for the year ahead.
            </p>
          </div>
          <div className="mobile-app-phone">
            <img src="/assets/iphone-mockup.png" alt="UBCON Mobile App" />
          </div>
        </div>
      </section>

      {/* Past UBCONs Gallery */}
      <Gallery />

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
