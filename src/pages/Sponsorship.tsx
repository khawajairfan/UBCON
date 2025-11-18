import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const Sponsorship = () => {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full">
      {/* Hero Section */}
      <div className="h-[305px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="http://localhost:3845/assets/dfce759056377fabd33df02373572d9d8d30e734.png" />
        
        {/* Navigation */}
        <div className="absolute contents left-[96px] top-[26px]">
          <Link to="/about" className="absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[352px] text-[16px] text-center text-nowrap text-white top-[63px] tracking-[-0.08px] translate-x-[-50%] translate-y-[-50%] uppercase">
            <p className="leading-[1.4] whitespace-pre">about ubcon</p>
          </Link>
          <Link to="/agenda" className="absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[453.5px] text-[16px] text-center text-nowrap text-white top-[63px] tracking-[-0.08px] translate-x-[-50%] translate-y-[-50%] uppercase">
            <p className="leading-[1.4] whitespace-pre">agenda</p>
          </Link>
          <Link to="/speakers" className="absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[542px] text-[16px] text-center text-nowrap text-white top-[63px] tracking-[-0.08px] translate-x-[-50%] translate-y-[-50%] uppercase">
            <p className="leading-[1.4] whitespace-pre">speakers</p>
          </Link>
          <Link to="/pricing" className="absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[632px] text-[16px] text-center text-nowrap text-white top-[63px] tracking-[-0.08px] translate-x-[-50%] translate-y-[-50%] uppercase">
            <p className="leading-[1.4] whitespace-pre">pricing</p>
          </Link>
          <Link to="/travel-hotel" className="absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[740.5px] text-[16px] text-center text-nowrap text-white top-[63px] tracking-[-0.08px] translate-x-[-50%] translate-y-[-50%] uppercase">
            <p className="leading-[1.4] whitespace-pre">{`travel & hotel`}</p>
          </Link>
          <a className="[white-space-collapse:collapse] absolute flex flex-col font-['Oswald:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-[887px] text-[16px] text-center text-nowrap text-white top-[63px] tracking-[-0.08px] translate-x-[-50%] translate-y-[-50%] uppercase" href="https://unleashedbrands.app.box.com/s/7ki894e60g3mzczskz0bmms9oz8l4ov3">
            <p className="cursor-pointer leading-[1.4] whitespace-pre">become a sponsor</p>
          </a>
          <div className="absolute content-center flex flex-wrap gap-[16px] items-center left-[calc(50%+448.5px)] top-[35px] translate-x-[-50%] w-[169px]">
            <div className="bg-ubcon-pink box-border content-stretch flex gap-[8px] items-center justify-center px-[30px] py-[15px] relative rounded-[100px] shrink-0 w-[169px]">
              <div className="flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[18px] text-center text-nowrap text-white tracking-[-0.09px] uppercase">
                <p className="leading-[1.45] whitespace-pre">register</p>
              </div>
            </div>
          </div>
          <Link to="/" className="absolute h-[65px] left-[96px] top-[26px] w-[188px]">
            <img alt="UBCON Logo" className="block max-w-none size-full" src="http://localhost:3845/assets/d8d4405e3f6abd7df907b8c2219c016fd0610cb5.svg" />
          </Link>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="flex justify-between items-start mb-12">
          <h2 className="font-['Oswald:Medium',sans-serif] font-medium text-[48px] text-ubcon-yellow uppercase tracking-[-0.96px]">
            Thank You to Our Sponsors
          </h2>
          <button className="bg-ubcon-pink px-8 py-4 rounded-full font-['Oswald:Medium',sans-serif] font-medium text-[18px] text-white uppercase tracking-[-0.09px]">
            Become a Sponsor
          </button>
        </div>

        {/* Sponsor Tiers */}
        <div className="space-y-12">
          <div>
            <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black uppercase tracking-[-0.12px] mb-6">
              Nebular Sponsor/Title Sponsor
            </h3>
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
            </div>
          </div>

          <div>
            <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black uppercase tracking-[-0.12px] mb-6">
              Exploration Sponsors
            </h3>
            <div className="grid grid-cols-5 gap-6">
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
            </div>
          </div>

          <div>
            <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black uppercase tracking-[-0.12px] mb-6">
              Rocket Sponsors
            </h3>
            <div className="grid grid-cols-5 gap-6">
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
            </div>
          </div>

          <div>
            <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black uppercase tracking-[-0.12px] mb-6">
              Acceleration Sponsors
            </h3>
            <div className="grid grid-cols-5 gap-6">
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
              <div className="bg-gray-100 h-[100px] rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vendors Section */}
      <div className="bg-gray-50 w-full py-16">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-start mb-12">
            <h2 className="font-['Oswald:Medium',sans-serif] font-medium text-[48px] text-ubcon-yellow uppercase tracking-[-0.96px]">
              Vendors
            </h2>
            <button className="bg-ubcon-pink px-8 py-4 rounded-full font-['Oswald:Medium',sans-serif] font-medium text-[18px] text-white uppercase tracking-[-0.09px]">
              Become a Vendor
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black uppercase tracking-[-0.12px] mb-4">Category</h3>
              <div className="space-y-2 text-[20px]">
                <p>Vendor Name</p>
                <p>Vendor Name</p>
                <p>Vendor Name</p>
              </div>
            </div>
            <div>
              <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black uppercase tracking-[-0.12px] mb-4">Booth #</h3>
              <div className="space-y-2 text-[20px]">
                <p>Booth #</p>
                <p>Booth #</p>
                <p>Booth #</p>
              </div>
            </div>
            <div>
              <h3 className="font-['Work_Sans:SemiBold',sans-serif] font-semibold text-[24px] text-black uppercase tracking-[-0.12px] mb-4">Category</h3>
              <div className="space-y-2 text-[20px]">
                <p>Vendor Name</p>
                <p>Vendor Name</p>
                <p>Vendor Name</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sponsorship;

