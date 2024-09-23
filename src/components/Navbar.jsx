import { useState } from 'react';
import logoName from '../assets/logoNameOfficial.png';

const Navbar = ({ refs }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  };

  const handleButtonClick = () => {
    window.location.href = 'https://www.thefork.it/ristorante/kusinela-r800047';
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return ( 
    <nav className="bg-black fixed w-full z-50 top-0 start-0"> {/* bg-[#090833] */}
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://kusinela.netlify.app"
          onClick={() => scrollHandler(refs.home)}
          className="flex items-center cursor-pointer space-x-3 rtl:space-x-reverse"
        >
          <img src={logoName} className="h-12" alt="Kusinela Logo" />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse text-white">
          <button
            onClick={handleButtonClick}
            className="pt-2 pb-2 px-4 bg-[#FE1242] rounded-lg hover:bg-[#fe1241c0] w-full"
          >
            Book a Table
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 text-white ${
            isMenuOpen ? '' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-10 p-4 md:p-0 justify-center items-center">
            <li
              onClick={() => scrollHandler(refs.home)}
              className="hover:text-[#FE1242] cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => scrollHandler(refs.aboutUs)}
              className="hover:text-[#FE1242] cursor-pointer"
            >
              About us
            </li>
            <li
              onClick={() => scrollHandler(refs.menu)}
              className="hover:text-[#FE1242] cursor-pointer"
            >
              Menù
            </li>
            <li
              onClick={() => scrollHandler(refs.visitUs)}
              className="hover:text-[#FE1242] cursor-pointer"
            >
              Visit us
            </li>
            <li
              onClick={() => scrollHandler(refs.order)}
              className="hover:text-[#FE1242] cursor-pointer"
            >
              Order
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
