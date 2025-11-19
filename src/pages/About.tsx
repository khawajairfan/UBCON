import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <img className="about-hero-bg" src="/assets/cta-bg.png" alt="" />
        
        {/* Navigation */}
        <Navigation logoVariant="horizontal" />
        
        {/* Hero Content */}
        <div className="about-hero-content">
          <h2 className="about-hero-title">About UBCON</h2>
          <p className="about-hero-description">
            UBCON is the annual conference for the Unleashed Brands franchise community, dedicated to helping franchisees learn, play, and grow. Over four days, attendees will engage in educational workshops, hear from inspiring speakers, and build lasting relationships, all while gaining the tools needed to elevate their businesses and impact children's lives.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="about-stats-grid">
          <div className="about-stat-card">
            <img src="/assets/stat-icon-1.svg" alt="" />
            <p>1,000+<br />ATTENDEES</p>
          </div>
          
          <div className="about-stat-card">
            <img src="/assets/stat-icon-2.svg" alt="" />
            <p>4 DAYS OF<br />CONTENT</p>
          </div>
          
          <div className="about-stat-card">
            <img src="/assets/stat-icon-3.svg" alt="" />
            <p>VENDOR<br />NETWORKING</p>
          </div>
          
          <div className="about-stat-card">
            <img src="/assets/stat-icon-3.svg" alt="" />
            <p>Franchisee-<br />led<br />Sessions</p>
          </div>
          
          <div className="about-stat-card">
            <img src="/assets/stat-icon-1.svg" alt="" />
            <p>8 individual<br />brand tracks</p>
          </div>
          
          <div className="about-stat-card">
            <img src="/assets/stat-icon-2.svg" alt="" />
            <p>Nightly<br />Social Events</p>
          </div>
        </div>
        
        {/* Bottom Wave Graphic */}
        <div className="about-hero-wave">
          <img src="/assets/wave-graphic.svg" alt="" />
        </div>
      </section>

      {/* Keynote Speakers Section */}
      <section className="about-speakers-section">
        <h2 className="about-speakers-title">Keynote Speakers</h2>
        
        <div className="about-speakers-grid">
          {/* Scott Greenberg */}
          <div className="about-speaker-card">
            <div className="about-speaker-image">
              <img src="/assets/scott-greenberg.png" alt="Scott Greenberg" />
            </div>
            <a href="https://scottgreenberg.com/" target="_blank" rel="noopener noreferrer" className="about-speaker-name">Scott Greenberg</a>
            <p className="about-speaker-title">Author and Franchise Expert</p>
          </div>

          {/* Mike Abrashoff */}
          <div className="about-speaker-card">
            <div className="about-speaker-image">
              <img src="/assets/mike-abrashoff.png" alt="Mike Abrashoff" />
            </div>
            <a href="https://www.mikeabrashoff.com/" target="_blank" rel="noopener noreferrer" className="about-speaker-name">Mike Abrashoff</a>
            <p className="about-speaker-title">Naval Commander</p>
          </div>

          {/* Dr. Rozen */}
          <div className="about-speaker-card">
            <div className="about-speaker-image">
              <img src="/assets/dr-rozen.png" alt="Dr. Rozen" />
            </div>
            <a href="https://www.drmichellerozen.com/" target="_blank" rel="noopener noreferrer" className="about-speaker-name">Dr. Rozen</a>
            <p className="about-speaker-title">Behavioral Scientist</p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/speakers" className="btn btn-primary">Learn More About Our Speakers</Link>
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

export default About;
