import React, { useState } from "react";
import Logo from "../../assets/images/logo/logo.png";
import LogoLight from "../../assets/images/logo/logo-light.png";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true);
  };
  const menuItems = ["Home", "About Us", "Our Team", "Contact Us"];

  return (
    <div className="bg-white sticky top-0 z-50 mt-4">
      <header className="">
        <div className="container mx-auto">
          <nav className="flex justify-between lg:justify-center items-center p-3 relative">
            {/** logo starts here */}
            <a
              className="flex items-center justify-center w-1/5 md:w-24 lg:w-28  lg:absolute lg:top-3 lg:left-3"
              href="#"
            >
              <img src={Logo} alt="" className="w-full h-full object-cover" />
            </a>
            {/** logo starts here */}

            {/** desktop nav items starts here */}
            <ul className="hidden md:flex md:items-center md:w-auto md:space-x-12 w-100">
              {menuItems.map((item, index) => (
                <li
                  className="pt-4 pb-4 hover:text-accentYellow transition-colors duration-500"
                  key={index}
                >
                  <a
                    className="text-md font-semibold"
                    href={`#${item
                      .replace(" ", "-")
                      .toLowerCase()
                      .replace("home", "")}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            {/** desktop nav items ends here */}

            <div className="md:hidden relative">
              {/** hamburger menu starts here */}
              <button
                className="navbar-burger flex items-center py-2 px-3 z-20 relative"
                onClick={handleMobileMenu}
              >
                <svg viewBox="0 0 100 80" width="40" height="40" fill="#FBBD25">
                  <rect width="100" height="14"></rect>
                  <rect y="30" width="100" height="14"></rect>
                  <rect y="60" width="100" height="14"></rect>
                </svg>
              </button>
              {/** hamburger menu ends here */}

              {/** Mobile panel starts here*/}
              <div
                className={`bg-primaryBlack w-3/4 max-w-xs h-full px-4 py-4 fixed z-20 transition-transform duration-300 top-0 left-0 ${
                  showMobileMenu ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <a
                  className="flex items-center justify-center w-24 mx-auto mb-10"
                  href="/"
                >
                  <img
                    src={LogoLight}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </a>
                <ul className="block relative">
                  {menuItems.map((item, index) => (
                    <li
                      className="relative block"
                      key={index}
                      onClick={handleMobileMenu}
                    >
                      <a
                        className="flex items-center py-4 px-6 h-12 text-ellipsis whitespace-nowrap text-white hover:text-accentYellow transition duration-300 ease-in-out"
                        href={`#${item
                          .replace(" ", "-")
                          .toLowerCase()
                          .replace("home", "")}`}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/** Mobile panel ends here*/}

              {/** Clearfix starts here*/}
              <div
                className={`bg-white fixed w-full h-full z-10 transition duration-300 left-0 top-0 opacity-50 ${
                  showMobileMenu ? "block" : "hidden"
                }`}
                onClick={handleMobileMenu}
              ></div>
              {/** Clearfix ends here*/}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
