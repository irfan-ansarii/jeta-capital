import React, { useState } from 'react'
import Logo from '../../assets/images/logo/logo.png'
import LogoLight from '../../assets/images/logo/logo-light.png'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleMobileMenu = () => {
    showMobileMenu ? setShowMobileMenu(false) : setShowMobileMenu(true)
  }
  const menuItems = ['Home', 'About Us', 'Our Team', 'Contact Us']

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
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
