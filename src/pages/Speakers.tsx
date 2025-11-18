import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import Agenda from '../components/Agenda';

const Speakers = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="speakers-hero">
        <img className="speakers-hero-bg" src="/assets/speakers-hero-bg.png" alt="" />
        
        {/* Navigation */}
        <Navigation logoVariant="horizontal" />
        
        {/* Title */}
        <div className="speakers-hero-title">
          <h1>ubcon2026 speakers</h1>
        </div>

        {/* Color Bar */}
        <div className="speakers-color-bar">
          <img src="/assets/color-bar.svg" alt="" />
        </div>
      </section>

      {/* Speakers Section */}
      <section className="speakers-section">
        <div className="speakers-container">
          
          {/* Scott Greenberg */}
          <div className="speaker-block speaker-scott">
            <div className="speaker-image-wrapper">
              <img src="/assets/scott-greenberg.png" alt="Scott Greenberg" />
            </div>
            <a href="https://scottgreenberg.com/" target="_blank" rel="noopener noreferrer" className="speaker-name-link">
              Scott Greenberg
            </a>
            <p className="speaker-session">pre-conference workshop: Sunday, April 19 General Session: tuesday, april 21</p>
            <div className="speaker-bio">
              <p>Scott Greenberg is a keynote speaker, author, and business consultant, specializing in leadership, team dynamics, and operational efficiency. A former multi-unit, award-winning franchise owner for best customer service and management, his unique perspective on leading teams makes him an invaluable asset to organizations aiming for competitive excellence.  </p>
              <p>&nbsp;</p>
              <p>Scott is author of The Wealthy Franchisee: Game-Changing Steps to Becoming a Thriving Franchise Superstar and Stop the Shift Show: Turn Your Struggling Hourly Employees into a Top-Performing Team, published by Entrepreneur Press. He's a Leadership Network VIP for Entrepreneur and a frequent contributor to Nation's Restaurant News, Global Franchise Magazine, and QSR Magazine. </p>
            </div>
            <a href="https://scottgreenberg.com/" target="_blank" rel="noopener noreferrer" className="speaker-learn-btn">
              <button className="btn btn-primary">learn more about scott</button>
            </a>
          </div>

          {/* Dr. Rozen */}
          <div className="speaker-block speaker-rozen">
            <div className="speaker-image-wrapper">
              <img src="/assets/dr-rozen.png" alt="Dr. Rozen" />
            </div>
            <a href="https://www.drmichellerozen.com/" target="_blank" rel="noopener noreferrer" className="speaker-name-link">
              Dr. Rozen
            </a>
            <p className="speaker-session">general session: monday, april 20</p>
            <div className="speaker-bio">
              <p>Dr. Michelle Rozen is a leading global authority on navigating change, trusted by Fortune 100 and Fortune 500 companies including Pfizer, Coca-Cola, and the American Banking Association.</p>
              <p>&nbsp;</p>
              <p>A behavioral scientist and bestselling author of <a href="https://www.drmichellerozen.com/speaking-topics/the-6-percent-club/" target="_blank" rel="noopener noreferrer">The 6% Club</a>, her groundbreaking research on goal execution and one of the largest national studies on AI adaptation has redefined how organizations thrive in uncertain times.</p>
              <p>&nbsp;</p>
              <p>Known for her energy and relatability, she blends science with humanity, connecting as a human at heart while giving leaders and teams the clarity, momentum, and tools to drive real results in a world that won't stop changing.</p>
              <p>&nbsp;</p>
            </div>
            <a href="https://www.drmichellerozen.com/" target="_blank" rel="noopener noreferrer" className="speaker-learn-btn">
              <button className="btn btn-primary">learn more about dr. Rozen</button>
            </a>
          </div>

          {/* Mike Abrashoff */}
          <div className="speaker-block speaker-mike">
            <div className="speaker-image-wrapper">
              <img src="/assets/mike-abrashoff.png" alt="Mike Abrashoff" />
            </div>
            <a href="https://www.mikeabrashoff.com/" target="_blank" rel="noopener noreferrer" className="speaker-name-link">
              Mike Abrashoff 
            </a>
            <p className="speaker-session">general session: wednesday, april 22</p>
            <div className="speaker-bio">
              <p>Mike Abrashoff was the most-junior officer in the Pacific Fleet when he took command of the near-worst performing ship. Twelve months later, the USS Benfold was the best ship in the entire Navy – using the same crew. The story of that stunning transformation has lessons for every organization: leadership matters – and culture is everything. Mike's written four books – his first, It's Your Ship, has sold over 1.5 million copies. His Leadership Roadmap offers clear, battle-tested, and actionable steps. Mike shows people at every level of the organization how to engage and take incremental steps toward change that can make a dramatic difference at work. Mike is clear, "I didn't turn the ship around – my crew did that. What I did was to create an environment where they felt safe, empowered and supported. When you do that, anything is possible."</p>
            </div>
            <a href="https://www.mikeabrashoff.com/" target="_blank" rel="noopener noreferrer" className="speaker-learn-btn">
              <button className="btn btn-primary">learn more about mike</button>
            </a>
          </div>

        </div>
      </section>

      {/* Agenda Section */}
      <Agenda />

      {/* Mobile App Section */}
      <section className="mobile-app-section">
        <div className="mobile-app-container">
          <div className="mobile-app-content">
            <h2 className="mobile-app-title">
              your guide to ubcon2026.<br />
              all in one app.
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

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Speakers;
