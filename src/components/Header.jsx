import { useState } from 'react'

function Header() {
  const [showMenu, setShowMenu] = useState(false)
  
  const handleToggleMenu = () => {
    setShowMenu(!showMenu); 
  };

  return (
    <header className="p-6 mx-auto">
      <nav className="flex flex-row justify-between items-center">
        <div className="basis-2/6 text-center text-xl font-bold cursor-pointer">
          CoffeeStyle.
        </div>

        {showMenu && (
          <ul className="basic-3/6 hidden lg:flex lg:justify-end lg:items-center lg:gap-8 uppercase text-sm text-gray-500 font-medium">
            <li className="nhv-header-menu-item"><a href="#">Home</a></li>
            <li className="nhv-header-menu-item"><a href="#">Products</a></li>
            <li className="nhv-header-menu-item"><a href="#">Blog</a></li>
            <li className="nhv-header-menu-item"><a href="#">About</a></li>
            <li className="nhv-header-menu-item"><a href="#">Contact</a></li>
            <li className="nhv-header-menu-item"><a href="#">Styleguide</a></li>
          </ul>
        )}

        <ul className="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
          <li className="nhv-header-menu-item">
            <a href="#" className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="nhv-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="mx-2">Cart</span>
              <span className="nhv-badge bg-orange-400 text-white">8</span>
            </a>
          </li>
        </ul>

        <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px-4 sm:px-6">
          <svg onClick={handleToggleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="nhv-icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Header