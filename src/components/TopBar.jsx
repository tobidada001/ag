import { Link } from "react-router-dom";
import { useState } from "react";
import nicon from '/assets/icons/nicon.svg';
import carticon from '/assets/icons/cart.svg';

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='shadow-lg font-[sans-serif] tracking-wide relative z-50'>
      <section className='flex items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[70px] max-lg:min-h-[60px]'>
        <Link to={'/'} className="shrink-0 max-sm:hidden font-extrabold">
          Agripath ltd
        </Link>

        <div className='flex flex-wrap w-full items-center'>
          {/* Search Bar */}
          <input
            type='text'
            placeholder='Find crop...'
            className='xl:w-80 max-lg:hidden lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-4 rounded h-10 text-sm transition-all border-green-600 focus:!outline-none focus:!ring-0'
          />

          {/* Navigation Links */}
          <div className='ml-auto'>
            <ul
              className={`flex flex-col lg:flex-row items-center absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent transition-transform ${
                isMenuOpen ? 'translate-y-0' : '-translate-y-full lg:translate-y-0'
              } lg:transition-none`}
            >
              <li className='max-md:hidden lg:flex items-center text-[15px] px-4 font-medium text-gray-800 cursor-pointer'>
                <img src={nicon} className="h-5 w-5 mr-2" />
                <Link to={'/'}>Home</Link>
              </li>
              <li className='max-md:hidden lg:flex items-center text-[15px] px-4 font-medium text-gray-800 cursor-pointer'>
                <img src={nicon} className="h-5 w-5 mr-2" />
                <Link to={'/products'}>Products</Link>
              </li>
              <li className='max-md:hidden lg:flex items-center text-[15px] px-4 font-medium text-gray-800 cursor-pointer'>
                <img src={nicon} className="h-5 w-5 mr-2" />
                <Link to={'/contact'}>Contact</Link>
              </li>
              <li className='lg:flex items-center px-4 cursor-pointer'>
                <Link to={'/cart'}>
                  <span className="relative">
                    <img src={carticon} className="w-6 h-6 inline" />
                    <span className="absolute left-auto -ml-1 -top-2 rounded-full bg-red-500 px-1 py-0 text-xs text-white">3</span>
                  </span>
                </Link>
              </li>
              <li className='flex text-[15px] px-4 hover:text-[#007bff] hover:fill-[#007bff]'>
                <Link
                  to={'/login'}
                  className='px-4 py-2 text-sm font-semibold text-gray-800 border border-[#333] bg-transparent'
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className='lg:hidden ml-auto'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-7 h-7" fill="#333" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default TopBar;
