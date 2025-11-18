import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import AgendaComponent from '../components/Agenda';

const AgendaPage = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="agenda-page-hero">
        <img className="agenda-page-hero-bg" src="/assets/agenda-hero-bg.png" alt="" />
        
        {/* Navigation */}
        <Navigation logoVariant="horizontal" />
        
        {/* Sub-Navigation */}
        <div className="agenda-subnav">
          <button className="agenda-subnav-btn" onClick={() => scrollToSection('pre-conference')}>pre-conference</button>
          <button className="agenda-subnav-btn agenda-subnav-btn-active" onClick={() => scrollToSection('agenda')}>agenda</button>
          <button className="agenda-subnav-btn" onClick={() => scrollToSection('brand-sessions')}>brand session highlights</button>
          <button className="agenda-subnav-btn" onClick={() => scrollToSection('social-events')}>social events</button>
        </div>
        
        {/* Title */}
        <div className="agenda-page-hero-title">
          <h1>ubcon2026 agenda</h1>
        </div>
      </section>

      {/* Golf Tournament Section */}
      <section id="pre-conference" className="golf-tournament-section">
        <img className="golf-tournament-bg" src="/assets/golf-tournament-bg.png" alt="" />
        <div className="golf-tournament-overlay"></div>
        <div className="golf-tournament-content">
          <h2 className="golf-tournament-title">pre-conference golf tournament</h2>
          <p className="golf-tournament-text">
            Kick off UBCON2026 with a round of friendly competition at the Unleashed Brands Golf Tournament on Saturday, April 18. Gather your team of four for a best-ball format with a shotgun start, where drinks and UB swag are included for a fun and relaxed day on the course. Club rentals (including balls) are available for $70, and registration is just $150 per golfer. Space is limited, so be sure to secure your spot when completing your UBCON registration. All participants must be registered UBCON attendees—come tee off alongside fellow franchisees, partners, and members of the Unleashed Brands Executive Leadership Team!
          </p>
          <button className="btn btn-primary">register for golf tournament</button>
        </div>
      </section>

      {/* Workshop Section */}
      <section id="workshop" className="workshop-section">
        <h2 className="workshop-title">Pre-conference workshop</h2>
        <div className="workshop-image-wrapper">
          <img src="/assets/scott-greenberg.png" alt="Scott Greenberg" />
        </div>
        <div className="workshop-content">
          <h3 className="workshop-session-title">stop the shift workshop with scott greenberg</h3>
          <p className="workshop-datetime">Sunday, April 19<br />2:30 PM - 4:30 PM</p>
          <div className="workshop-description">
            <p><strong>Limited to 300 people</strong></p>
            <p>&nbsp;</p>
            <p>Great businesses need great teams. But navigating the complexities of hiring, retaining, and managing employees can be daunting. Imagine what would be possible if you could turn this challenge into your competitive advantage?</p>
            <p>&nbsp;</p>
            <p>In this presentation, management expert Scott Greenberg will unveil the blueprint for transforming your workforce into a high-performing team—without breaking the bank. Drawing from real-world case studies, cutting-edge hiring metrics, and actionable workforce strategies, this dynamic presentation will equip you with the tools to attract, retain, and lead top talent.</p>
            <p>&nbsp;</p>
            <p>Scott will also share his "30 Second Leadership" methodology, which will show you how to diagnose your employees for specific tasks and determine the best approach to boost their skill set, mindset, and overall performance.</p>
            <p>&nbsp;</p>
            <p><strong>This dynamic session will help you:</strong></p>
            <ul>
              <li>Better understand your employees and what drives them</li>
              <li>Recruit, onboard, and retain more effectively</li>
              <li>Improve job interviews and screen for top talent</li>
              <li>Build a united, loyal team culture</li>
              <li>Motivate employees and engage them in their work</li>
            </ul>
          </div>
          <button className="btn btn-primary">register for workshop</button>
        </div>
      </section>

      {/* Agenda Section */}
      <div id="agenda">
        <AgendaComponent />
      </div>

      {/* Mobile App Section */}
      <section className="mobile-app-section">
        <div className="mobile-app-container">
          <div className="mobile-app-content">
            <h2 className="mobile-app-title">your guide to ubcon2026.<br />all in one app.</h2>
            <p className="mobile-app-text">You'll have the opportunity to join sessions tailored specifically to your brand, where your leadership team will share updates, insights, and strategies to help you grow your business. These sessions are designed to give you actionable takeaways and a clear vision for the year ahead.</p>
          </div>
          <div className="mobile-app-phone">
            <img src="/assets/iphone-mockup.png" alt="Mobile App Mockup" />
          </div>
        </div>
      </section>

      {/* Brand Session Highlights */}
      <section id="brand-sessions" className="brand-session-section">
        <h2 className="brand-session-title">brand session highlights</h2>
        <p className="brand-session-intro">You'll have the opportunity to join sessions tailored specifically to your brand, where your leadership team will share updates, insights, and strategies to help you grow your business. These sessions are designed to give you actionable takeaways and a clear vision for the year ahead.</p>
        
        {/* Session Cards Grid */}
        <div className="brand-session-grid">
          {/* Brand Level Opening */}
          <div className="brand-session-card brand-session-card-featured">
            <button className="brand-session-close">×</button>
            <h3 className="brand-session-card-title">Brand Level Opening General Session: Our Vision, Our Wins, Our Future</h3>
            <p className="brand-session-card-description">The Brand Sessions kick off with a celebration of success and a vision casting of what lies ahead our brand. We'll honor outstanding achievement with well-deserved awards for the rock stars who made this year shine. We'll also share the roadmap for the coming year, and reignite the sense of purpose and pride that drives us all.</p>
          </div>

          {/* The Future Is Here */}
          <div className="brand-session-card">
            <h3 className="brand-session-card-title">The Future Is Here: Evolving Together for What's Next</h3>
            <div className="brand-session-arrow">→</div>
          </div>

          {/* Deep Dive */}
          <div className="brand-session-card">
            <h3 className="brand-session-card-title">deep dive: putting innovation into action</h3>
            <div className="brand-session-arrow">→</div>
          </div>

          {/* Grow Local */}
          <div className="brand-session-card">
            <h3 className="brand-session-card-title">grow local, win big: grassroots marketing across the ub family</h3>
            <div className="brand-session-arrow">→</div>
          </div>

          {/* Budget to Bottom Line */}
          <div className="brand-session-card">
            <h3 className="brand-session-card-title">from budget to bottom line: building a profitable center</h3>
            <div className="brand-session-arrow">→</div>
          </div>

          {/* What's Working Now */}
          <div className="brand-session-card">
            <h3 className="brand-session-card-title">what's working now: insights from the best</h3>
            <div className="brand-session-arrow">→</div>
          </div>

          {/* Command Center */}
          <div className="brand-session-card">
            <h3 className="brand-session-card-title">command center in action: powering performance across ub brands</h3>
            <div className="brand-session-arrow">→</div>
          </div>

          {/* Town Hall */}
          <div className="brand-session-card">
            <h3 className="brand-session-card-title">town hall: ask. share. learn.</h3>
            <div className="brand-session-arrow">→</div>
          </div>
        </div>
      </section>

      {/* Social Events Section */}
      <section id="social-events" className="social-events-section">
        <h2 className="social-events-title">Social events</h2>

        {/* Universal CityWalk Event */}
        <div className="social-event-block">
          <div className="social-event-image-wrapper">
            <img src="/assets/citywalk-event.png" alt="Universal CityWalk" />
          </div>
          <div className="social-event-content">
            <h3 className="social-event-name">Universal CityWALK</h3>
            <p className="social-event-datetime">monday, April 20<br />7:00 PM - 10:30 PM</p>
            <p className="social-event-description">
              Get ready to celebrate at the Universal CityWalk Block Party, an unforgettable night of food, music, and fun across some of Universal CityWalk's most iconic venues. Enjoy tropical vibes at Jimmy Buffett's Margaritaville, live music at Pat O'Brien's, karaoke at Rising Star, and delicious bites at Antojitos. One event gives you access to it all, creating an evening of connection, entertainment, and lasting memories with your fellow UBCON attendees.
            </p>
            <p className="social-event-transport">Transportation will be provided from the hotel.</p>
          </div>
        </div>

        {/* Hard Rock Event */}
        <div className="social-event-block">
          <div className="social-event-image-wrapper">
            <img src="/assets/hard-rock-event.png" alt="Hard Rock Live" />
          </div>
          <div className="social-event-content">
            <h3 className="social-event-name">Hard Rock Live</h3>
            <p className="social-event-datetime">wednesday, April 22<br />7:00 PM - 11:30 PM</p>
            <p className="social-event-description">
              Get ready to rock the night at Hard Rock Live. Enjoy dinner, drinks, and a live band in a legendary venue built for unforgettable performances. Embrace your inner rockstar with attire inspired by your favorite rock era—whether it's the edgy glam of the 80s, the laid-back grunge of the 90s, or the psychedelic flair of the 60s. It's your night to turn up the energy, express your style, and celebrate the spirit of rock in true Hard Rock fashion.
            </p>
            <p className="social-event-transport">Transportation will be provided from the hotel.</p>
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

export default AgendaPage;
