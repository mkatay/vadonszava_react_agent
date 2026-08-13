import { useState } from 'react'
import { NavLink } from 'react-router'
import data from '../data.json'

const routeMap = {
  Kezdőlap: '/',
  Útvonalak: '/traillist',
  Felszerelés: '/equipment',
  Galéria: '/gallery',
  Rólam: '/about',
}

const navLinkClass = ({ isActive }) =>
  [
    'text-gray-600 font-medium dark:text-gray-100 hover:text-hover-text',
    isActive ? 'text-hover-text dark:text-tura-green-100' : '',
  ].join(' ')

const mobileNavLinkClass = ({ isActive }) =>
  [
    'block py-2 text-gray-600 dark:text-gray-100 hover:text-tura-green-600 dark:hover:text-tura-green-100 font-medium transition',
    isActive ? 'text-tura-green-600 dark:text-tura-green-100' : '',
  ].join(' ')

export const MyNavbar = ({ isDark, setIsDark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    ...data.navigation.map((item) => ({
      label: item.label,
      to: routeMap[item.label] ?? '/',
    })),
    { label: 'Rólam', to: '/about' },
  ]

  return (
    <>
      <nav className="bg-nav-bg shadow-md fixed w-full z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <NavLink to="/" end className="flex items-center gap-2 text-2xl font-bold text-tura-green-700 dark:text-tura-green-100">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21l-8-11.5a1 1 0 01.8-1.5H7l2-4 2 4h2l2-4 2 4h1.2a1 1 0 01.8 1.5L12 21z" />
                </svg>
                <span>Vadon<span className="text-tura-brown-800 dark:text-tura-brown-200">Szava</span></span>
              </NavLink>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.to === '/'}
                  className={item.label === 'Rólam' ? ({ isActive }) => [
                    'px-4 py-2 bg-tura-brown-800 text-white rounded-full dark:bg-green-600 hover:bg-tura-brown-900 dark:hover:bg-tura-green-700 transition',
                    isActive ? 'bg-tura-brown-900 dark:bg-tura-green-700' : '',
                  ].join(' ') : navLinkClass}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsDark(!isDark)}
                className="px-2 py-2 rounded-md bg-gray-200 dark:bg-black"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sun" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
                )}
              </button>
              <button type="button" onClick={() => setIsMenuOpen((prev) => !prev)} className="text-gray-600 hover:text-text focus:outline-none dark:text-gray-200 lg:hidden" aria-label="Open menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 pt-18 fixed w-full z-40 bg-white dark:bg-tura-green-900 border-b border-tura-brown-100 dark:text-gray-100">
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  )
}
