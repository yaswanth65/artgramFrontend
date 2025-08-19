"use client";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// localStorage cart key
const CART_KEY = 'cart_items';

const Navbar = () => {
  // State for the main mobile menu
  const [open, setOpen] = useState(false);
  // SEPARATED STATE: State for desktop and mobile dropdowns are now independent
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const location = useLocation();
  const desktopDropdownRef = useRef(null);

  // Effect to close all menus on route change
  useEffect(() => {
    setOpen(false);
    setDesktopDropdownOpen(false);
    setMobileDropdownOpen(false);
  // refresh cart count on navigation
  updateCartCount();
  }, [location.pathname]);

  // Effect to close the desktop dropdown when clicking outside of it
  useEffect(() => {
    const handler = (e) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(e.target)
      ) {
        setDesktopDropdownOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // IMPROVEMENT: Close mobile dropdown if main mobile menu is closed
  useEffect(() => {
    if (!open) {
      setMobileDropdownOpen(false);
    }
  }, [open]);

  // Cart count state
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    try {
      const raw = localStorage.getItem(CART_KEY);
      const items = raw ? JSON.parse(raw) : [];
      const count = items.reduce((s, i) => s + (i.qty || 1), 0);
      setCartCount(count);
    } catch {
      setCartCount(0);
    }
  };

  // keep count in sync across tabs
  useEffect(() => {
    updateCartCount();
    const handler = (e) => {
      if (e.key === CART_KEY) updateCartCount();
    };
    const custom = () => updateCartCount();
    window.addEventListener('storage', handler);
    window.addEventListener('cart_updated', custom);
    return () => {
      window.removeEventListener('storage', handler);
      window.removeEventListener('cart_updated', custom);
    };
  }, []);

  const linkBase =
   "text-slate-900 hover:text-rose-600 transition-colors px-3 py-2 rounded-md text-lg font-medium";
  const activeLink = "text-rose-600 font-semibold";

  const isActive = (paths) => paths.includes(location.pathname);

  return (
    <nav
      id="universalNavbar"
      className="fixed top-8 inset-x-0 z-[1030] bg-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-[86px]">
          <div className="flex items-center gap-4">
  <Link to="/index.html" className="flex items-center no-underline">
    <img
      src="https://res.cloudinary.com/dwb3vztcv/image/upload/v1755159745/ARTGRAM_LOGO_zdhftc.png"
      alt="ArtGram Logo"
      className="h-20 w-auto pt-3"
    /><span className="text-4xl font-bold text-rose-600 pt-2 pl-3">ArtGram</span>
  </Link>
</div>


          <div className="flex md:hidden">
            <button
              aria-label="Toggle navigation"
              aria-controls="mobile-menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
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

          {/* =================================== */}
          {/* =========== DESKTOP NAV =========== */}
          {/* =================================== */}
          <div className="hidden md:flex md:items-center md:gap-2">
            <Link
              to="/index.html"
              className={`${linkBase} ${
                isActive(["/", "/index.html"]) ? activeLink : ""
              }`}
            >
              Home
            </Link>

            <div className="relative" ref={desktopDropdownRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={desktopDropdownOpen}
                onClick={() => setDesktopDropdownOpen((v) => !v)}
                className={`${linkBase} inline-flex items-center`}
              >
                Activities
                <svg
                  className="ml-1 h-4 w-4 transition-transform"
                  style={{
                    transform: desktopDropdownOpen ? "rotate(180deg)" : "none",
                  }}
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
              {desktopDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-72 rounded-lg bg-white shadow-xl ring-1 ring-black/5 p-2">
  {/* Dropdown Links... */}
  <Link
    to="/slime-play.html"
    className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-rose-600 hover:text-white transition-colors no-underline"
  >
    <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center text-lg">
      🌈
    </div>
    <div className="min-w-0">
      <h5 className="font-semibold text-lg">Slime</h5>
      <p className="text-sm opacity-80">
        Create colorful, stretchy slime
      </p>
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
      <h6 className="font-semibold text-lg">Art Making</h6>
      <p className="text-sm opacity-80">
        Express creativity through painting
      </p>
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
      <h6 className="font-semibold text-lg">
        Tufting Experience
      </h6>
      <p className="text-sm opacity-80">
        Create rugs & wall hangings
      </p>
    </div>
  </Link>

</div>

              )}
            </div>

            <Link
              to="/events.html"
              className={`${linkBase} ${
                isActive(["/events.html"]) ? activeLink : ""
              }`}
            >
              Events
            </Link>
            <Link
              to="/shop.html"
              className={`${linkBase} ${
                isActive(["/shop.html"]) ? activeLink : ""
              }`}
            >
              Shop
            </Link>
            <Link
              to="/ourstory.html"
              className={`${linkBase} ${
                isActive(["/ourstory.html"]) ? activeLink : ""
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/contactus.html"
              className={`${linkBase} ${
                isActive(["/contactus.html"]) ? activeLink : ""
              }`}
            >
              Contact
            </Link>

            {/* Cart link */}
            <Link to="/cart" className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-900 hover:text-rose-600 no-underline">
             <svg height="20px" version="1.1" viewBox="0 0 20 20" width="20px" xmlns="http://www.w3.org/2000/svg" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:xlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-212.000000, -422.000000)"><g id="shopping-cart" transform="translate(212.000000, 422.000000)"><path d="M6,16 C4.9,16 4,16.9 4,18 C4,19.1 4.9,20 6,20 C7.1,20 8,19.1 8,18 C8,16.9 7.1,16 6,16 L6,16 Z M0,0 L0,2 L2,2 L5.6,9.6 L4.2,12 C4.1,12.3 4,12.7 4,13 C4,14.1 4.9,15 6,15 L18,15 L18,13 L6.4,13 C6.3,13 6.2,12.9 6.2,12.8 L6.2,12.7 L7.1,11 L14.5,11 C15.3,11 15.9,10.6 16.2,10 L19.8,3.5 C20,3.3 20,3.2 20,3 C20,2.4 19.6,2 19,2 L4.2,2 L3.3,0 L0,0 L0,0 Z M16,16 C14.9,16 14,16.9 14,18 C14,19.1 14.9,20 16,20 C17.1,20 18,19.1 18,18 C18,16.9 17.1,16 16,16 L16,16 Z" id="Shape"/></g></g></g></svg>
              <span className="text-sm">Cart</span>
              {cartCount > 0 && <span className="ml-2 inline-flex items-center justify-center bg-rose-600 text-white text-xs px-2 py-1 rounded-full">{cartCount}</span>}
            </Link>

            <Link
              to="/slime-play.html#booking"
              className="ml-2 inline-block rounded-full bg-rose-600 text-white px-5 py-2 font-semibold hover:bg-rose-700 hover:-translate-y-0.5 hover:shadow-lg transition-all no-underline"
            >
              Book a Slime Session
            </Link>
            
          </div>
        </div>
      </div>

      {/* ================================== */}
      {/* =========== MOBILE NAV =========== */}
      {/* ================================== */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/index.html"
              className={`${linkBase} block ${
                isActive(["/", "/index.html"]) ? activeLink : ""
              }`}
            >
              Home
            </Link>

            <div className="pt-2">
              <button
                // ACCESSIBILITY & STATE FIX
                aria-haspopup="true"
                aria-expanded={mobileDropdownOpen}
                aria-controls="mobile-activities-submenu"
                onClick={() => setMobileDropdownOpen((v) => !v)}
                className={`${linkBase} inline-flex items-center w-full justify-between`}
              >
                Activities
                <svg
                  className="ml-1 h-4 w-4 transition-transform"
                  style={{
                    transform: mobileDropdownOpen ? "rotate(180deg)" : "none",
                  }}
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
              {mobileDropdownOpen && (
                <div
                  id="mobile-activities-submenu"
                  className="mt-2 space-y-1 rounded-md border border-gray-200 p-2"
                >
                  <Link
                    to="/slime-play.html"
                    className="block px-3 py-2 rounded-md hover:bg-gray-50 no-underline"
                  >
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
                  
                </div>
              )}
            </div>

            <Link
              to="/events.html"
              className={`${linkBase} block ${
                isActive(["/events.html"]) ? activeLink : ""
              }`}
            >
              Events
            </Link>
            <Link
              to="/shop.html"
              className={`${linkBase} block ${
                isActive(["/shop.html"]) ? activeLink : ""
              }`}
            >
              Shop
            </Link>
            <Link
              to="/ourstory.html"
              className={`${linkBase} block ${
                isActive(["/ourstory.html"]) ? activeLink : ""
              }`}
            >
              Our Story
            </Link>
            <Link
              to="/contactus.html"
              className={`${linkBase} block ${
                isActive(["/contactus.html"]) ? activeLink : ""
              }`}
            >
              Contact
            </Link>

            <Link
              to="/slime-play.html#booking"
              className="block mt-2 rounded-full bg-rose-600 text-white px-5 py-2 font-semibold text-center hover:bg-rose-700 transition-colors no-underline"
            >
              Book a Slime Session
            </Link>
            <div className="mt-3">
              <Link to="/cart" className="flex items-center justify-center gap-2 px-3 py-2 rounded-md text-slate-900 hover:text-rose-600 no-underline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21a1 1 0 100-2 1 1 0 000 2zm-8 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
                <span className="text-sm">Cart</span>
                {cartCount > 0 && <span className="ml-2 inline-flex items-center justify-center bg-rose-600 text-white text-xs px-2 py-1 rounded-full">{cartCount}</span>}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
