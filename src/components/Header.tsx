import { Link } from 'react-router-dom';

interface HeaderProps {
  activeLink?: string;
}

const Header = ({ activeLink = '' }: HeaderProps) => {
  const linkClass = (link: string) => 
    `flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[16px] text-center text-nowrap top-[63px] tracking-[-0.08px] translate-x-[-50%] translate-y-[-50%] uppercase ${
      activeLink === link ? 'text-ubcon-pink' : 'text-white'
    }`;

  return (
    <div className="absolute contents left-[108px] top-[26px]">
      <Link to="/about" className={`absolute ${linkClass('about')} left-[352px]`}>
        <p className="leading-[1.4] whitespace-pre">about ubcon</p>
      </Link>
      <Link to="/agenda" className={`absolute ${linkClass('agenda')} left-[453.5px]`}>
        <p className="leading-[1.4] whitespace-pre">agenda</p>
      </Link>
      <Link to="/speakers" className={`absolute ${linkClass('speakers')} left-[542px]`}>
        <p className="leading-[1.4] whitespace-pre">speakers</p>
      </Link>
      <Link to="/pricing" className={`absolute ${linkClass('pricing')} left-[632px]`}>
        <p className="leading-[1.4] whitespace-pre">pricing</p>
      </Link>
      <Link to="/travel-hotel" className={`absolute ${linkClass('travel')} left-[740.5px]`}>
        <p className="leading-[1.4] whitespace-pre">{`travel & hotel`}</p>
      </Link>
      <a 
        className="[white-space-collapse:collapse] absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[887px] text-[16px] text-center text-nowrap text-white top-[63px] tracking-[-0.08px] translate-x-[-50%] translate-y-[-50%] uppercase" 
        href="https://unleashedbrands.app.box.com/s/7ki894e60g3mzczskz0bmms9oz8l4ov3"
      >
        <p className="cursor-pointer leading-[1.4] whitespace-pre">Become a sponsor</p>
      </a>
      <div className="absolute content-center flex flex-wrap gap-[16px] items-center left-[calc(50%+448.5px)] top-[35px] translate-x-[-50%] w-[169px]">
        <div className="bg-ubcon-pink box-border content-stretch flex gap-[8px] items-center justify-center px-[30px] py-[15px] relative rounded-[100px] shrink-0 w-[169px]">
          <div className="flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px] uppercase">
            <p className="leading-[1.45] whitespace-pre">register</p>
          </div>
        </div>
      </div>
      <Link to="/" className="absolute h-[75px] left-[108px] top-[26px] w-[77px]">
        <img 
          alt="UBCON Logo" 
          className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" 
          src="http://localhost:3845/assets/d2deaf64ab1de0e761d7a35f697142d09802c338.png" 
        />
      </Link>
    </div>
  );
};

export default Header;

