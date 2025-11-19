import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  logoVariant?: 'white' | 'colored' | 'horizontal';
}

const Navigation = ({ logoVariant = 'colored' }: NavigationProps) => {
  const location = useLocation();
  const activeLink = location.pathname;

  const isActive = (path: string) => {
    if (path === '/' && activeLink === '/') return true;
    if (path !== '/' && activeLink.startsWith(path)) return true;
    return false;
  };

  const getLogoSrc = () => {
    if (logoVariant === 'white') return '/assets/ub-logo-white.png';
    return '/assets/ubcon-logo.png';
  };

  const logoSrc = getLogoSrc();
  const showHorizontalLogo = logoVariant === 'horizontal';

  return (
    <nav className="navigation">
      <Link to="/">
        <img src={logoSrc} alt="UBCON Logo" className="logo" />
      </Link>
      
      <ul className="nav-links">
        {showHorizontalLogo && (
          <li className="nav-horizontal-logo">
            <Link to="/">
              <img src="/assets/ubcon-logo-horizontal.svg" alt="UBCON 2026" className="logo-horizontal" />
            </Link>
          </li>
        )}
        <li>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>
            About UBCON
          </Link>
        </li>
        <li>
          <Link to="/agenda" className={isActive('/agenda') ? 'active' : ''}>
            Agenda
          </Link>
        </li>
        <li>
          <Link to="/speakers" className={isActive('/speakers') ? 'active' : ''}>
            Speakers
          </Link>
        </li>
        <li>
          <Link to="/pricing" className={isActive('/pricing') ? 'active' : ''}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/travel-hotel" className={isActive('/travel-hotel') ? 'active' : ''}>
            Travel & Hotel
          </Link>
        </li>
        <li>
          <a href="https://unleashedbrands.app.box.com/s/7ki894e60g3mzczskz0bmms9oz8l4ov3" target="_blank" rel="noopener noreferrer">
            Become a Sponsor
          </a>
        </li>
        <li>
          <button className="btn btn-primary">Register</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

