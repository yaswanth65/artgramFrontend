"use client"

import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()
  const dropdownRef = useRef(null)

  useEffect(() => {
    // Close mobile menu on route change
    setOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("click", handler)
    return () => document.removeEventListener("click", handler)
  }, [])

  const linkBase = "text-slate-900 hover:text-rose-600 transition-colors px-3 py-2 rounded-md text-sm font-medium"
  const activeLink = "text-rose-600 font-semibold"

  const isActive = (paths) => paths.includes(location.pathname)

  return (
    <nav id="universalNavbar" className="fixed top-0 inset-x-0 z-[1030] bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-[76px]">
          <div className="flex items-center gap-4">
            <Link to="/index.html" className="text-2xl font-bold text-rose-600 no-underline">
              🎨 ArtGram
            </Link>
          </div>

          <div className="flex md:hidden">
            <button
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="h-6 w-6" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="rgba(15,23,42,0.75)"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M4 7h22M4 15h22M4 23h22"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:gap-2">
            <Link
              to="/index.html"
              className={`${linkBase} ${isActive(["/", "/index.html"]) ? activeLink : ""}`}
              data-page="home"
            >
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              ref={dropdownRef}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen((v) => !v)}
                className={`${linkBase} inline-flex items-center`}
              >
                Activities
                <svg
                  className="ml-1 h-4 w-4 transition-transform"
                  style={{ transform: dropdownOpen ? "rotate(180deg)" : "none" }}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 0 1-.707-.293l-4-4A1 1 0 1 1 6.707 6.293L10 9.586l3.293-3.293A1 1 0 1 1 14.707 7.707l-4 4A1 1 0 0 1 10 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 rounded-lg bg-white shadow-xl ring-1 ring-black/5 p-2">
                  <Link
                    to="/slime-play.html"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-rose-600 hover:text-white transition-colors no-underline"
                  >
                    <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-lg">
                      🌈
                    </div>
                    <div className="min-w-0">
                      <h6 className="font-semibold text-sm">Slime</h6>
                      <p className="text-xs opacity-80">Create colorful, stretchy slime</p>
                    </div>
                  </Link>
                  <Link
                    to="/art-making-activity.html"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-rose-600 hover:text-white transition-colors no-underline"
                  >
                    <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-lg">
                      🎨
                    </div>
                    <div className="min-w-0">
                      <h6 className="font-semibold text-sm">Art Making</h6>
                      <p className="text-xs opacity-80">Express creativity through painting</p>
                    </div>
                  </Link>
                  <Link
                    to="/tufting-activity.html"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-rose-600 hover:text-white transition-colors no-underline"
                  >
                    <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-lg">
                      🧶
                    </div>
                    <div className="min-w-0">
                      <h6 className="font-semibold text-sm">Tufting Experience</h6>
                      <p className="text-xs opacity-80">Create beautiful rugs & wall hangings</p>
                    </div>
                  </Link>
                  <div className="my-2 h-px bg-gray-200" />
                  <Link
                    to="/activities.html"
                    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-rose-600 hover:text-white transition-colors no-underline"
                  >
                    <div className="w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center text-lg">
                      📋
                    </div>
                    <div className="min-w-0">
                      <h6 className="font-semibold text-sm">View All Activities</h6>
                      <p className="text-xs opacity-80">See our complete range</p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/events.html"
              className={`${linkBase} ${isActive(["/events.html"]) ? activeLink : ""}`}
              data-page="events"
            >
              Events
            </Link>
            <Link
              to="/shop.html"
              className={`${linkBase} ${isActive(["/shop.html"]) ? activeLink : ""}`}
              data-page="shop"
            >
              Shop
            </Link>
            <Link
              to="/ourstory.html"
              className={`${linkBase} ${isActive(["/ourstory.html"]) ? activeLink : ""}`}
              data-page="ourstory"
            >
              Our Story
            </Link>
            <Link
              to="/contactus.html"
              className={`${linkBase} ${isActive(["/contactus.html"]) ? activeLink : ""}`}
              data-page="contact"
            >
              Contact
            </Link>

            <Link
              to="/book-session.html"
              className="ml-2 inline-block rounded-full bg-rose-600 text-white px-5 py-2 font-semibold hover:bg-rose-700 hover:-translate-y-0.5 hover:shadow-lg transition-all no-underline"
            >
              Book a Slime Session
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link to="/index.html" className={`${linkBase} block ${isActive(["/", "/index.html"]) ? activeLink : ""}`}>
              Home
            </Link>

            <div className="pt-2">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className={`${linkBase} inline-flex items-center w-full justify-between`}
              >
                Activities
                <svg
                  className="ml-1 h-4 w-4 transition-transform"
                  style={{ transform: dropdownOpen ? "rotate(180deg)" : "none" }}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 0 1-.707-.293l-4-4A1 1 0 1 1 6.707 6.293L10 9.586l3.293-3.293A1 1 0 1 1 14.707 7.707l-4 4A1 1 0 0 1 10 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="mt-2 space-y-1 rounded-md border border-gray-200 p-2">
                  <Link to="/slime-play.html" className="block px-3 py-2 rounded-md hover:bg-gray-50 no-underline">
                    🌈 Slime
                  </Link>
                  <Link
                    to="/art-making-activity.html"
                    className="block px-3 py-2 rounded-md hover:bg-gray-50 no-underline"
                  >
                    🎨 Art Making
                  </Link>
                  <Link
                    to="/tufting-activity.html"
                    className="block px-3 py-2 rounded-md hover:bg-gray-50 no-underline"
                  >
                    🧶 Tufting Experience
                  </Link>
                  <Link to="/activities.html" className="block px-3 py-2 rounded-md hover:bg-gray-50 no-underline">
                    📋 View All Activities
                  </Link>
                </div>
              )}
            </div>

            <Link to="/events.html" className={`${linkBase} block ${isActive(["/events.html"]) ? activeLink : ""}`}>
              Events
            </Link>
            <Link to="/shop.html" className={`${linkBase} block ${isActive(["/shop.html"]) ? activeLink : ""}`}>
              Shop
            </Link>
            <Link to="/ourstory.html" className={`${linkBase} block ${isActive(["/ourstory.html"]) ? activeLink : ""}`}>
              Our Story
            </Link>
            <Link
              to="/contactus.html"
              className={`${linkBase} block ${isActive(["/contactus.html"]) ? activeLink : ""}`}
            >
              Contact
            </Link>

            <Link
              to="/book-session.html"
              className="block mt-2 rounded-full bg-rose-600 text-white px-5 py-2 font-semibold text-center hover:bg-rose-700 transition-colors no-underline"
            >
              Book a Slime Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
