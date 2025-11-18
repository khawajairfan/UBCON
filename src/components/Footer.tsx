const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* UB Logo */}
        <div className="footer-logo">
          <img src="/assets/ub-logo-circle.png" alt="UB Logo" />
        </div>
        
        {/* Footer Content */}
        <div className="footer-content">
          {/* Brand Logos */}
          <div className="footer-brands">
            <img src="/assets/urban-air-black.svg" alt="Urban Air" />
            <img src="/assets/sylvan-black.svg" alt="Sylvan Learning" />
            <img src="/assets/tlg-black.svg" alt="The Little Gym" />
            <img src="/assets/ww-black.svg" alt="WW" />
            <img src="/assets/pma-black.svg" alt="Premier Martial Arts" />
            <img src="/assets/snapology-black.svg" alt="Snapology" />
            <img src="/assets/class101-black.svg" alt="Class 101" />
            <img src="/assets/xp-black.svg" alt="XP League" />
          </div>
          
          {/* Hashtag */}
          <div className="footer-hashtag">#UBCON2026</div>
        </div>
        
        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 All rights reserved by Unleashed Brands Group.
          </div>
          
          <div className="footer-links">
            <a href="https://na-admin.eventscloud.com/docs/4315/Unleashedbrands-code-of-conduct">Code of Conduct</a>
            <a href="https://na-admin.eventscloud.com/docs/4315/UnleashedBrands-accessibility-notice">Accessibility Notice</a>
            <a href="https://na-admin.eventscloud.com/docs/4315/UnleashedBrands-terms-conditions">Terms + Conditions</a>
            <a href="https://na-admin.eventscloud.com/docs/4315/UnleashedBrands-terms-conditions">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
