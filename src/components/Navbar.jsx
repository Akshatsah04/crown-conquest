import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiBars3BottomRight, HiXMark } from 'react-icons/hi2'
import { GiCrownedHeart } from 'react-icons/gi'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  const rulesHref = ['/', '/home'].includes(location.pathname) ? '#rules' : '/home#rules'

  const linkClassName = ({ isActive }) =>
    [
      'transition-colors duration-200 hover:text-[#D4AF37]',
      isActive ? 'text-[#D4AF37]' : 'text-slate-200',
    ].join(' ')

  const staticLinkClassName = "text-slate-200 transition-colors duration-200 hover:text-[#D4AF37]"

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070d]/85 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 text-lg font-semibold tracking-[0.2em] text-[#F6F0D8] uppercase">
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 p-2 text-[#D4AF37]">
            <GiCrownedHeart className="text-xl crown-pulse" />
          </span>
          Crown Conquest
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/home" className={linkClassName}>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={linkClassName}>
            Dashboard
          </NavLink>
          <a href={rulesHref} className={staticLinkClassName}>
            Rule
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full border border-white/15 p-2 text-slate-100 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiXMark className="text-2xl" /> : <HiBars3BottomRight className="text-2xl" />}
        </button>
      </div>

      {isOpen && (
        <div className="section-shell pb-4 md:hidden">
          <div className="panel flex flex-col gap-4 p-4">
            <NavLink to="/home" className={linkClassName} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/dashboard" className={linkClassName} onClick={() => setIsOpen(false)}>
              Dashboard
            </NavLink>
            <a href={rulesHref} className={staticLinkClassName} onClick={() => setIsOpen(false)}>
              Rule
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar