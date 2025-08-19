# .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

```

# eslint.config.js

```js
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

```

# index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>

```

# package.json

```json
{
  "name": "copy",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.539.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.8.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^4.7.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.3.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "vite": "^7.1.0"
  }
}

```

# postcss.config.js

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

```

# public\vite.svg

This is a file of the type: SVG Image

# README.md

```md
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

```

# src\App.css

```css
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}

```

# src\App.jsx

```jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DiscountBar from "./components/DiscountBar"
import HomePage from "./pages/HomePage"
import ActivitiesPage from "./pages/ActivitiesPage"
import ArtMakingActivityPage from "./pages/ArtMakingActivityPage"
import SlimePlayPage from "./pages/SlimePlayPage"
import TuftingActivityPage from "./pages/TuftingActivityPage"
import OurStoryPage from "./pages/OurStoryPage"
import ContactUsPage from "./pages/ContactUsPage"
import ShopPage from "./pages/ShopPage"
import EventsPage from "./pages/EventsPage"
import BookSessionPage from "./pages/BookSessionPage"

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <BrowserRouter>
        <DiscountBar />
        <Navbar />
        <main className="pt-[100px]">
          <Routes>
            {/* Support both root and index.html */}
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />

            <Route path="/activities.html" element={<ActivitiesPage />} />
            <Route path="/art-making-activity.html" element={<ArtMakingActivityPage />} />
            <Route path="/slime-play.html" element={<SlimePlayPage />} />
            <Route path="/tufting-activity.html" element={<TuftingActivityPage />} />
            <Route path="/ourstory.html" element={<OurStoryPage />} />
            <Route path="/contactus.html" element={<ContactUsPage />} />
            <Route path="/shop.html" element={<ShopPage />} />
            <Route path="/events.html" element={<EventsPage />} />
            <Route path="/book-session.html" element={<BookSessionPage />} />

            {/* Fallback to home */}
            <Route path="*" element={<Navigate to="/index.html" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

```

# src\assets\react.svg

This is a file of the type: SVG Image

# src\components\DiscountBar.jsx

```jsx
import React from "react";

const DiscountBar = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-red-600 text-white py-2 px-3 z-[1031]">
      <p className="text-center text-sm sm:text-base md:text-lg font-medium leading-snug">
        🎉 Special Offer Alert! 🎉{" "}
        <span className="hidden sm:inline">
          Get 10% OFF on all activities – Use code:{" "}
          <strong>SUMMER20</strong> at checkout
        </span>
        <span className="sm:hidden">
          10% OFF this week! Code: <strong>SUMMER20</strong>
        </span>
      </p>
    </div>
  );
};

export default DiscountBar;

```

# src\components\Footer.jsx

```jsx
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:underline">
                  Shop DIY Kits
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Company</h6>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="hover:underline">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/artgram_yourhobbylobby"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaFacebookF size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ArtGram. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

# src\components\Navbar.jsx

```jsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

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

  const linkBase =
    "text-slate-900 hover:text-rose-600 transition-colors px-3 py-2 rounded-md text-sm font-medium";
  const activeLink = "text-rose-600 font-semibold";

  const isActive = (paths) => paths.includes(location.pathname);

  return (
    <nav
      id="universalNavbar"
      className="fixed top-8 inset-x-0 z-[1030] bg-white shadow-sm"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-[76px]">
          <div className="flex items-center gap-4">
            <Link
              to="/index.html"
              className="text-2xl font-bold text-rose-600 no-underline"
            >
              🎨 ArtGram
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
                      <h6 className="font-semibold text-sm">Slime</h6>
                      <p className="text-xs opacity-80">
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
                      <h6 className="font-semibold text-sm">Art Making</h6>
                      <p className="text-xs opacity-80">
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
                      <h6 className="font-semibold text-sm">
                        Tufting Experience
                      </h6>
                      <p className="text-xs opacity-80">
                        Create rugs & wall hangings
                      </p>
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
                      <h6 className="font-semibold text-sm">
                        View All Activities
                      </h6>
                      <p className="text-xs opacity-80">
                        See our complete range
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
                  <Link
                    to="/activities.html"
                    className="block px-3 py-2 rounded-md hover:bg-gray-50 no-underline"
                  >
                    📋 View All Activities
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

```

# src\index.css

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap");
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom animations */
@keyframes slideInFromTop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInFromBottom {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Custom utility classes */
.animate-slideInFromTop {
  animation: slideInFromTop 1s ease-out;
}

.animate-slideInFromBottom {
  animation: slideInFromBottom 1s ease-out 300ms both;
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.animate-pulse {
  animation: pulse 2s infinite;
}

```

# src\main.jsx

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

# src\pages\ActivitiesPage.jsx

```jsx
const ActivitiesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-rose-700 text-white text-center py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Creative Activities</h1>
          <p className="text-lg mb-4">Discover hands-on experiences that spark imagination and creativity</p>
          <p className="text-base">
            From slime making to art creation - we have something special for every creative soul
          </p>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12 text-slate-900">Our Featured Activities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon="🌈"
              title="Slime Play"
              desc="Create colorful, stretchy, and sparkly slime in various textures."
              cta="Book Now"
              href="slime-play.html"
            />
            <FeatureCard
              icon="🎨"
              title="Art Making"
              desc="Express creativity through painting, drawing, and mixed media art."
              cta="Learn More →"
              href="art-making-activity.html"
              accent
            />
            <FeatureCard
              icon="🧶"
              title="Tufting Experience"
              desc="Create beautiful rugs and wall hangings using tufting guns."
              cta="Learn More →"
              href="tufting-activity.html"
              accent
            />
          </div>
        </div>
      </section>

      {/* All Activities */}
      <section className="py-20 bg-slate-100">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12 text-slate-900">All Our Activities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ActivityCard
              icon="🌈"
              age="Ages 4-12"
              title="Slime Play"
              price="₹299"
              desc="Create colorful, stretchy, and sparkly slime in various textures. Kids learn about polymers while having endless fun mixing and creating their perfect slime recipe."
            />
            <ActivityCard
              icon="🎨"
              age="Ages 3-15"
              title="Art Making"
              price="₹399"
              desc="Express creativity through painting, drawing, and mixed media art. Professional guidance helps children explore different techniques and discover their artistic style."
            />
            <ActivityCard
              icon="🧶"
              age="Ages 8+"
              title="Tufting Experience"
              price="₹799"
              desc="Create beautiful rugs and wall hangings using tufting guns. Learn this trending craft technique and take home your unique textile masterpiece."
            />
            <ActivityCard
              icon="💡"
              age="Ages 10+"
              title="Neon Art Creation"
              price="₹599"
              desc="Design and create stunning neon-style artwork using LED strips and acrylic. Perfect for room decoration and learning about color theory and design."
            />
            <ActivityCard
              icon="🏺"
              age="Ages 5-14"
              title="Clay Modeling Workshop"
              price="₹449"
              desc="Shape imagination into reality with clay modeling. Create pottery, sculptures, and decorative items while developing fine motor skills and spatial awareness."
            />
            <ActivityCard
              icon="💻"
              age="Ages 8+"
              title="Digital Art & Design"
              price="₹549"
              desc="Explore digital creativity using tablets and design software. Learn illustration, animation basics, and create digital masterpieces in a tech-savvy environment."
            />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12 text-slate-900">Why Choose Our Activities?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <WhyCard
              icon="👨‍🏫"
              title="Expert Instructors"
              desc="Professional artists and educators guide every session with patience and expertise."
            />
            <WhyCard
              icon="🎯"
              title="Age-Appropriate"
              desc="Activities designed specifically for different age groups to ensure optimal learning experience."
            />
            <WhyCard
              icon="🏆"
              title="Take Home Creations"
              desc="Every participant leaves with their unique creation and newfound skills."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

const FeatureCard = ({ icon, title, desc, cta, href, accent }) => {
  return (
    <a
      href={href}
      className="block bg-white rounded-2xl p-10 text-center shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-all relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(225,29,72,0.3)] no-underline"
    >
      <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
        {icon}
      </div>
      <h4 className="text-slate-900 font-bold text-xl mb-3">{title}</h4>
      <p className="text-slate-500 mb-6">{desc}</p>
      <div
        className={`${accent ? "text-rose-600" : "bg-rose-600 text-white px-5 py-2 rounded-full inline-block"} font-semibold`}
      >
        {cta}
      </div>
    </a>
  )
}

const ActivityCard = ({ icon, age, title, price, desc }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-[0_5px_15px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all">
      <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
        {icon}
      </div>
      <span className="bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-4">{age}</span>
      <h4 className="text-xl font-bold mb-3 text-slate-900">{title}</h4>
      <p className="text-slate-600 mb-4">{desc}</p>
      <div className="text-rose-600 font-bold text-xl mb-4">{price}</div>
      <button className="w-full rounded-lg bg-slate-900 hover:bg-slate-800 text-white py-3 font-semibold transition-colors">
        Book Now
      </button>
    </div>
  )
}

const WhyCard = ({ icon, title, desc }) => {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
        {icon}
      </div>
      <h5 className="text-slate-900 font-semibold mb-2">{title}</h5>
      <p className="text-slate-600">{desc}</p>
    </div>
  )
}

export default ActivitiesPage

```

# src\pages\ArtMakingActivityPage.jsx

```jsx
"use client";

import { useState, useEffect } from "react";

export default function ArtMakingActivityPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const artFormsKids = [
    "Mosaic art",
    "Piggy banks",
    "Welcome boards",
    "Glass painting",
    "Rangoli stencils",
    "Letter arts",
    "Spin art",
    "Key holders",
    "Name boards",
    "Acrylic pour"
  ];

  const artFormsAdults = [
    "Block printing",
    "Clutch painting",
    "Glass painting",
    "Mandalas",
    "Couple boards",
    "Pichwai arts",
    "Madhubani",
    "Tissue art",
    "Home decor crafts",
    "Gods painting"
  ];

  const features = [
    {
      icon: "🎨",
      title: "30+ Art Varieties",
      description:
        "Discover endless creative possibilities with our diverse collection of art forms.",
      color: "from-rose-400 to-pink-400",
    },
    {
      icon: "👥",
      title: "Collaborative Creation",
      description:
        "Share the magical journey of creation with loved ones on a single masterpiece.",
      color: "from-violet-400 to-purple-400",
    },
    {
      icon: "🏠",
      title: "Cherish Forever",
      description:
        "Take home your unique creation as a beautiful memory of your artistic journey.",
      color: "from-blue-400 to-indigo-400",
    },
    {
      icon: "⏰",
      title: "Timeless Experience",
      description:
        "Create at your own pace without any time constraints or pressure.",
      color: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50 pt-[10px] pb-[10px]">
      {/* Artistic Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden pb-6">
        {/* Background Video */}
        <video
          src="https://res.cloudinary.com/df2mieky2/video/upload/v1754831677/vecteezy_mixing-paint-in-palette_21422891_xS2W3sA_G_vcrrvy.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div
          className={`relative z-10 text-center max-w-5xl mx-auto px-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1
            className="text-5xl md:text-7xl font-extrabold pt-2 pb-5
                bg-gradient-to-r from-purple-300 via-pink-200 to-rose-300 
                bg-clip-text text-transparent"
          >
            Art Making Studio
          </h1>
          <div className="w-36 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto rounded-full mb-6" />

          <p className="text-lg md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Where imagination meets creation. Design your own masterpieces with
            premium materials and bring your artistic vision to life in our
            serene creative sanctuary.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            
            <button className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Experience Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-indigo-600 to-rose-600 bg-clip-text text-transparent mb-4">
                Your Artistic Journey
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Immerse yourself in a world of creativity where every stroke
                tells a story
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group relative bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100
                    ${activeCard === index ? "scale-105" : "hover:scale-102"}`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section with Artistic Design */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-white via-purple-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100">
              <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
                {/* Pricing Info */}
                
                <div className="lg:col-span-2 space-y-4 md:space-y-2">
  <h3 className="text-5xl p-8 font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-4 md:mb-6">
    Art Making Experience
  </h3>

  <div className="pt-1">
    <div className="pt-1 flex items-baseline gap-2 md:gap-4 mb-4 md:mb-6">
      <span className="text-4xl md:text-6xl font-bold text-gray-800">
        ₹350
      </span>
      <span className="text-xl md:text-2xl text-gray-500">to</span>
      <span className="text-4xl md:text-6xl font-bold text-gray-800">
        ₹2000
      </span>
    </div>
    <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
      Choose your art form and pay accordingly - no hidden costs!
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
    {[
      "Choose your preferred art form",
      "All premium materials included",
      "Expert guidance available",
      "No booking required",
      "Walk-in anytime",
      "Take your creation home",
    ].map((item, i) => (
      <div key={i} className="flex items-center gap-3 group">
        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
        <span className="text-sm md:text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
          {item}
        </span>
      </div>
    ))}
  </div>

                </div>

                {/* Special Offer */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-3xl p-6 md:p-8 text-white text-center shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="absolute -top-3 -right-3 w-12 h-12 md:-top-4 md:-right-4 md:w-16 md:h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm shadow-lg">
                      HOT!
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Special Combo</h4>
                    <div className="text-3xl md:text-4xl font-bold mb-2">10% OFF</div>
                    <p className="text-purple-100 text-sm md:text-base mb-4 md:mb-6">
                      Art + Slime making on the same day
                    </p>
                    <button className="bg-white text-purple-600 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 text-sm md:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Art Forms Gallery - Kids Section */}
          <div className="mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                Art Forms for Kids 🧑‍🎨
              </h3>
              <p className="text-lg md:text-xl text-gray-600">
                Fun and creative projects for our young artists
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {artFormsKids.map((art, index) => (
                <div
                  key={art}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-base md:text-lg">🎨</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-sm md:text-base">
                      {art}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Art Forms Gallery - Adults Section */}
          <div className="mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
                Art Forms for Adults 🧑‍🎨
              </h3>
              <p className="text-lg md:text-xl text-gray-600">
                Explore a range of sophisticated and intricate art techniques
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {artFormsAdults.map((art, index) => (
                <div
                  key={art}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-purple-200"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full mx-auto mb-2 md:mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-base md:text-lg">🎨</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 text-sm md:text-base">
                      {art}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Stats Section */}
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-rose-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { value: "30+", label: "Art Varieties", icon: "🎨" },
                { value: "2+", label: "Years Min Age", icon: "👶" },
                { value: "₹350-₹2000", label: "Price Range", icon: "💰" },
                { value: "11AM-7PM", label: "Open Hours", icon: "🕐" },
              ].map((stat, i) => (
                <div key={i} className="group p-2 md:p-0">
                  <div className="text-3xl md:text-4xl mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">{stat.value}</div>
                  <div className="text-purple-100 font-medium text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brochure Section */}
          <div className="mt-16 md:mt-20 text-center">
  <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Brochures</h3>
  <p className="text-base md:text-xl text-gray-600 mb-10">
    Get detailed information about all our art forms and pricing across different branches
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
    {/* Branch 1 */}
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">Bangalore Branch</h4>
      <div style={{ position: 'relative', width: '100%', paddingTop: '141.4286%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(63,69,81,0.16)' }}>
        <iframe
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }}
          src="https://www.canva.com/design/DAGkzJWHL44/aCM0VggQIbL4QbK96MEopw/view?embed"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="https://www.canva.com/design/DAGkzJWHL44/aCM0VggQIbL4QbK96MEopw/view"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        📋 View / Download
      </a>
    </div>

    {/* Branch 2 */}
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">Hyderabad Branch</h4>
      <div style={{ position: 'relative', width: '100%', paddingTop: '141.4286%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(63,69,81,0.16)' }}>
        <iframe
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }}
          src="CANVA_EMBED_LINK_HERE"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="CANVA_SHARE_LINK_HERE"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        📋 View / Download
      </a>
    </div>

    {/* Branch 3 */}
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border border-gray-100">
      <h4 className="text-xl font-semibold text-gray-700 mb-4">Vijayawada Branch</h4>
      <div style={{ position: 'relative', width: '100%', paddingTop: '141.4286%', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(63,69,81,0.16)' }}>
        <iframe
          loading="lazy"
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none' }}
          src="CANVA_EMBED_LINK_HERE"
          allowFullScreen
        ></iframe>
      </div>
      <a
        href="CANVA_SHARE_LINK_HERE"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
      >
        📋 View / Download
      </a>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
}
```

# src\pages\BookSessionPage.jsx

```jsx
"use client";

import { useEffect, useRef, useState } from "react";

const BookSessionPage = () => {
  // Booking ticket availability
  const [availability, setAvailability] = useState({
    painting: 12,
    clay: 8,
    sketching: 15,
    resin: 5,
  });
  const [activity, setActivity] = useState("");
  const ticketsLeft =
    activity && availability[activity] !== undefined
      ? availability[activity]
      : undefined;
  const bookingSectionRef = useRef(null);
  const [highlight, setHighlight] = useState(false);

  function submitContact(e) {
    e.preventDefault();
    alert(
      "Thank you for contacting us! We'll get back to you within 24 hours."
    );
    e.currentTarget.reset();
  }

  function submitBooking(e) {
    e.preventDefault();
    if (!activity) {
      alert("Please select an activity to proceed with booking.");
      return;
    }
    if (availability[activity] > 0) {
      alert(
        "Thank you for your booking request! We'll confirm your session within 24 hours."
      );
      setAvailability((prev) => ({ ...prev, [activity]: prev[activity] - 1 }));
      e.currentTarget.reset();
      setActivity("");
    } else {
      alert(
        "Sorry, this activity is currently sold out. Please choose another activity or contact us for alternatives."
      );
    }
  }

  function scrollToBooking() {
    if (!bookingSectionRef.current) return;
    setHighlight(true);
    bookingSectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => setHighlight(false), 2000);
    setTimeout(() => {
      const input = document.getElementById("bookingName");
      input?.focus();
    }, 800);
  }

  // Used by "Book Now" button in header if added
  useEffect(() => {
    const btn = document.getElementById("bookSessionBtn");
    if (btn) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToBooking();
      });
    }
    return () => {
      if (btn) btn.removeEventListener("click", (e) => e);
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <header className="relative h-[70vh] text-white flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="relative z-[1] px-6 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-black text-yellow-400 mb-3">
            Get in Touch
          </h1>
          <p className="text-lg">
            We'd love to hear from you! Whether it's a question, feedback, or
            collaboration idea—drop us a message.
          </p>
        </div>
      </header>

      {/* Quick Contact Cards */}
      <section className="py-10 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
          <ContactCard
            icon="📞"
            title="Call Us"
            text={
              <span>
                <strong>+91 9686846100</strong>
                <br />
                Mon-Sat 10AM-8PM
                <br />
                Sun 11AM-6PM
              </span>
            }
          />
          <div className="bg-white rounded-2xl p-8 text-center shadow hover:-translate-y-1 transition-all">
            <div className="text-5xl mb-4 text-rose-600">💬</div>
            <h5 className="text-rose-600 font-bold mb-2">WhatsApp</h5>
            <p>
              <a
                href="https://wa.me/9686846100?text=Hi, I have a question about ArtGram!"
                target="_blank"
                className="inline-block rounded-full bg-rose-600 text-white px-4 py-2 font-semibold hover:bg-rose-700 transition-colors no-underline"
                rel="noreferrer"
              >
                Chat Now
              </a>
            </p>
          </div>
          <ContactCard
            icon="✉️"
            title="Email Us"
            text={
              <span>
                <strong>artgram.yourhobbylobby@gmail.com</strong>
                <br />
                We reply within 24 hours
              </span>
            }
          />
        </div>
      </section>

      {/* Quick Session Booking */}
      <section
        id="booking"
        ref={bookingSectionRef}
        className={`py-20 ${highlight ? "animate-pulse" : ""} bg-slate-100`}
      >
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-rose-600 mb-10">
            Quick Session Booking
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow hover:-translate-y-1 transition-all">
            <h3 className="text-2xl font-bold mb-4">
              🎨 Book Your Art Session
            </h3>
            <form
              id="bookingForm"
              onSubmit={submitBooking}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="bookingName"
                    className="font-semibold mb-1 block"
                  >
                    Full Name *
                  </label>
                  <input
                    id="bookingName"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookingPhone"
                    className="font-semibold mb-1 block"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="bookingPhone"
                    type="tel"
                    required
                    placeholder="+91 12345 67890"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="bookingDate"
                    className="font-semibold mb-1 block"
                  >
                    Preferred Date *
                  </label>
                  <input
                    id="bookingDate"
                    type="date"
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="bookingTime"
                    className="font-semibold mb-1 block"
                  >
                    Preferred Time *
                  </label>
                  <input
                    id="bookingTime"
                    type="time"
                    required
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="bookingActivity"
                    className="font-semibold mb-1 block"
                  >
                    Choose Activity *
                  </label>
                  <select
                    id="bookingActivity"
                    required
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  >
                    <option value="">Select an activity</option>
                    <option value="painting">🎨 Art Making - ₹399</option>
                    <option value="clay">🏺 Clay Modeling - ₹449</option>
                    <option value="sketching">✏️ Sketching - ₹299</option>
                    <option value="resin">💎 Resin Art - ₹599</option>
                  </select>
                  <div
                    className="mt-2 font-semibold text-rose-600 text-sm"
                    id="ticketsLeftDisplay"
                  >
                    {ticketsLeft !== undefined
                      ? ticketsLeft > 0
                        ? `${ticketsLeft} tickets available`
                        : "No tickets available"
                      : ""}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="participants"
                    className="font-semibold mb-1 block"
                  >
                    Number of Participants
                  </label>
                  <select
                    id="participants"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People (Group Booking)</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="bookingNotes"
                  className="font-semibold mb-1 block"
                >
                  Additional Notes
                </label>
                <textarea
                  id="bookingNotes"
                  rows={3}
                  placeholder="Any special requests or questions..."
                  className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="rounded-full bg-rose-600 text-white px-6 py-2 font-semibold hover:bg-rose-700 transition-colors"
                >
                  🎨 Book Now
                </button>
                <p className="mt-3 text-slate-500 text-sm">
                  * We'll confirm your booking within 24 hours via call or
                  WhatsApp
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold mb-4">Send Us a Message</h3>
            <form
              id="contactForm"
              onSubmit={submitContact}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="font-semibold mb-1 block">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="font-semibold mb-1 block">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="artgram.yourhobbylobby@gmail.com"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="font-semibold mb-1 block">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+91 12345 67890"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="font-semibold mb-1 block">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="corporate">Corporate Events</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="font-semibold mb-1 block">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full border-2 border-slate-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-600/30 focus:border-rose-600"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-rose-600 text-white px-6 py-2 font-semibold hover:bg-rose-700 transition-colors"
              >
                📧 Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Studios and Map */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-rose-600 mb-10">
            Visit Our Studios
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <StudioCard
              title="🏛️ Hyderabad"
              img="https://wallpapercave.com/wp/wp6539521.jpg"
              address={[
                "2nd Floor, HITEC City Hub",
                "Cyber Towers, Madhapur",
                "Hyderabad - 500081, Telangana",
              ]}
            />
            <StudioCard
              title="🌟 Bangalore"
              img="https://images.unsplash.com/photo-1512034400317-42096a6901fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              address={[
                "3rd Floor, Brigade Gateway",
                "Malleshwaram West",
                "Bangalore - 560055, Karnataka",
              ]}
            />
            <StudioCard
              title="🏞️ Vijayawada"
              img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              address={[
                "1st Floor, PVP Square Mall",
                "Governorpet, Near Benz Circle",
                "Vijayawada - 520002, Andhra Pradesh",
              ]}
            />
          </div>

          <div className="text-center mt-10">
            <div className="inline-block bg-white rounded-xl p-6 shadow">
              <h5 className="text-rose-600 font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.instagram.com/artgram_yourhobbylobby/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border-2 border-rose-600 text-rose-600 font-semibold hover:bg-rose-600 hover:text-white transition-colors no-underline"
                >
                  📷 Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h4 className="text-xl font-semibold mb-4">
            Find Our Hyderabad Studio
          </h4>
          <div className="w-full aspect-video rounded-xl shadow overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=HITEC+City+Hyderabad&z=15&output=embed"
              title="ArtGram Hyderabad Location"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              style={{ borderRadius: 12 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow hover:-translate-y-1 transition-all">
      <div className="text-5xl mb-4 text-rose-600">{icon}</div>
      <h5 className="text-rose-600 font-bold mb-2">{title}</h5>
      <p className="text-slate-600 leading-relaxed m-0">{text}</p>
    </div>
  );
};

const StudioCard = ({ title, img, address }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow hover:-translate-y-2 hover:shadow-2xl transition-all flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={img || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end p-6">
          <h3 className="text-white text-2xl font-extrabold m-0">{title}</h3>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="text-slate-600 leading-relaxed mb-4">
          📍 {address[0]}
          <br />
          {address[1]}
          <br />
          {address[2]}
        </div>
        <div className="flex gap-3">
          <a
            href="tel:+919686846100"
            className="flex-1 min-w-[120px] text-center bg-rose-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-rose-700 transition-colors no-underline"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/919686846100?text=Hi,%20I'm%20interested%20in%20ArtGram%20activities!"
            target="_blank"
            className="flex-1 min-w-[120px] text-center bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors no-underline"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookSessionPage;

```

# src\pages\ContactUsPage.jsx

```jsx
"use client";
import React, { useState, useEffect } from 'react';


const ContactUsPage = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        setIsVisible(true)
      }, [])
  // Helper functions to open email and WhatsApp
  function openGmail(email) {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  }

  function openWhatsApp(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const url = isMobile 
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.namedItem("name")?.value || "there";
    alert(`Thank you for contacting us, ${name}! We'll get back to you shortly.`);
    form.reset();
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden">
      <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <div className="mb-6">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-rose-200 bg-clip-text text-transparent mb-4">Get in Touch</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto rounded-full mb-6" />
            </div>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">We'd love to hear from you! Whether it's a question, feedback, or collaboration idea—drop us a message.</p>
        </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-5 gap-12">
          {/* Form on the left */}
          <div className="md:col-span-3">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-gray-100">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form id="contactForm" onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-semibold text-slate-900 mb-2">Full Name *</label>
                <input id="name" name="name" type="text" placeholder="Your name" required className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"/>
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold text-slate-900 mb-2">Email Address *</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"/>
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold text-slate-900 mb-2">Message *</label>
                <textarea id="message" name="message" rows={5} placeholder="Type your message here..." required className="w-full border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"/>
              </div>
              <button type="submit" className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Submit Message
              </button>
            </form>
            </div>
          </div>

          {/* Contact info on the right */}
          <div className="md:col-span-2">
          <div className="bg-white p-8 rounded-3xl shadow-xl border-gray-100 sticky top-32">
            <h3 className="text-2xl font-semibold mb-6">Reach Us Directly</h3>
            <div className="space-y-4 text-slate-900">
              <div className="flex items-start gap-3">
                <strong className="mt-1">📧</strong>
                <div>
                  <strong>Email:</strong><br />
                  <button onClick={() => openGmail("artgram.yourhobbylobby@gmail.com")} className="text-purple-600 hover:underline">
                    artgram.yourhobbylobby@gmail.com
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <strong className="mt-1">📞</strong>
                <div>
                  <strong>Phone:</strong><br />
                  <a href="tel:+919686846100" className="hover:text-purple-600">+91 9686846100</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                 <strong className="mt-1">📸</strong>
                 <div>
                    <strong>Instagram:</strong><br />
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/artgram_yourhobbylobby/?hl=en" className="text-purple-600 hover:underline">
                    @artgram_yourhobbylobby
                    </a>
                 </div>
              </div>
              <div className="flex items-start gap-3">
                 <strong className="mt-1">🕒</strong>
                 <div>
                    <strong>Business Hours:</strong>
                    <ul className="list-disc list-inside mt-1 text-gray-700">
                        <li>Mon - Sat: 10:00 AM - 8:00 PM</li>
                        <li>Sun: 10:00 AM - 6:00 PM</li>
                    </ul>
                 </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Branches Section (Updated with compact cards) */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold mb-12 text-gray-800">Our Branches</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BranchCard
              img="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              name="Hyderabad"
              address="123 Art Street, Old City, Hyderabad, Telangana 500002"
              phone="+919686846100"
              onWhatsApp={() => openWhatsApp("919686846100", "Hi, I am interested in ArtGram activities in Hyderabad!")}
            />
            <BranchCard
              img="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              name="Bangalore"
              address="456 Creative Hub, Palace Road, Bangalore, Karnataka 560052"
              phone="+919686846100"
              onWhatsApp={() => openWhatsApp("919686846100", "Hi, I am interested in ArtGram activities in Bangalore!")}
            />
            <BranchCard
              img="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              name="Vijayawada"
              address="789 River View Complex, Vijayawada, Andhra Pradesh 520001"
              phone="+919686846100"
              onWhatsApp={() => openWhatsApp("919686846100", "Hi, I am interested in ArtGram activities in Vijayawada!")}
            />
          </div>
        </div>
      </section>

      {/* "Our Studios" Section has been REMOVED as per request */}

      {/* Map Section */}
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h4 className="text-2xl font-semibold mb-6 text-gray-800">Find Our Hyderabad Studio</h4>
          <div className="w-full aspect-video rounded-2xl shadow-lg overflow-hidden border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.339232296122!2d78.47329271539249!3d17.39992398807083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daea360b37%3A0x36f29e4438f72a6b!2sCharminar!5e0!3m2!1sen!2sin!4v1678886 Charminar"
              title="Hyderabad Location"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};


/**
 * Branch Card Component
 * Updated to be more compact and use icons for buttons
 */
const BranchCard = ({ img, name, address, phone, onWhatsApp }) => {
    return (
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer transform hover:scale-105">
        <div className="relative h-52 overflow-hidden">
        <img src={img || "/placeholder.svg"} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-purple-600">{name}</h4>
          <p className="text-slate-600 text-sm mb-4 flex-grow">{address}</p>
          <div className="flex gap-3 mt-auto">
            <a href={`tel:${phone}`} className="flex-1 flex items-center justify-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-200 transition-colors no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>Call</span>
            </a>
            <button onClick={onWhatsApp} className="flex-1 flex items-center justify-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg font-semibold hover:bg-green-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.891.001 2.23.855 4.34 2.379 5.965l-1.546 5.578 5.762-1.511z"></path></svg>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    );
  };


export default ContactUsPage;
```

# src\pages\EventsPage.jsx

```jsx
import { useState } from "react";
import {
  Play,
  Star,
  Calendar,
  Users,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const events = [
    {
      id: 1,
      icon: "🎂",
      title: "Birthday Parties",
      shortDesc:
        "Make birthdays unforgettable with themed art parties, slime making, and creative activities for all ages.",
      description:
        "Transform your child's special day into an artistic adventure! Our birthday party packages include personalized themes, age-appropriate art activities, and memorable takeaways. From canvas painting to pottery wheels, we ensure every guest leaves with a masterpiece and beautiful memories.",
      features: [
        "Customized themes",
        "All materials included",
        "Professional guidance",
        "Party favors",
        "Clean-up service",
      ],
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      ],
      feedbacks: [
        {
          name: "Priya Sharma",
          rating: 5,
          comment:
            "Amazing party! The kids were engaged for hours. Highly recommend!",
        },
        {
          name: "Rajesh Kumar",
          rating: 5,
          comment:
            "Professional team, creative activities. Best birthday party ever!",
        },
        {
          name: "Meera Patel",
          rating: 4,
          comment:
            "Great experience, kids loved the art activities. Will book again!",
        },
      ],
      videos: [
        {
          title: "Birthday Party Highlights",
          thumbnail:
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=200&fit=crop",
        },
        {
          title: "Kids Art Session",
          thumbnail:
            "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=300&h=200&fit=crop",
        },
      ],
    },
    {
      id: 2,
      icon: "🏢",
      title: "Corporate Events",
      shortDesc:
        "Team building activities with art workshops, collaborative projects, and stress-relief creative sessions.",
      description:
        "Boost team morale and creativity with our corporate art workshops. Perfect for team building, stress relief, and fostering innovation. Our facilitators guide groups through collaborative projects that enhance communication and build stronger workplace relationships.",
      features: [
        "Team building focus",
        "Flexible scheduling",
        "Corporate packages",
        "Professional facilitation",
        "Certificates",
      ],
      images: [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=300&fit=crop",
      ],
      feedbacks: [
        {
          name: "Tech Solutions Ltd",
          rating: 5,
          comment:
            "Excellent team building activity. Our team loved the creative challenge!",
        },
        {
          name: "Marketing Pro Inc",
          rating: 5,
          comment:
            "Perfect for stress relief. Everyone was so relaxed and happy afterwards.",
        },
        {
          name: "Design Studio",
          rating: 4,
          comment:
            "Great way to break the routine. Highly professional service.",
        },
      ],
      videos: [
        {
          title: "Corporate Team Building",
          thumbnail:
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
        },
        {
          title: "Office Art Workshop",
          thumbnail:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=200&fit=crop",
        },
      ],
    },
    {
      id: 3,
      icon: "🎨",
      title: "Art Workshops",
      shortDesc:
        "Community workshops featuring guest artists, new techniques, and collaborative art projects.",
      description:
        "Join our regular community workshops to learn new techniques, meet fellow art enthusiasts, and create beautiful pieces. From watercolor basics to advanced sculpting, our expert instructors provide personalized guidance for all skill levels.",
      features: [
        "Expert instructors",
        "All skill levels",
        "Materials provided",
        "Small groups",
        "Monthly themes",
      ],
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&h=300&fit=crop",
      ],
      feedbacks: [
        {
          name: "Anita Desai",
          rating: 5,
          comment:
            "Learning so much in each session. The instructors are amazing!",
        },
        {
          name: "Vikram Singh",
          rating: 5,
          comment: "Great community, love the monthly themes. Very inspiring!",
        },
        {
          name: "Pooja Malhotra",
          rating: 4,
          comment:
            "Perfect for beginners like me. Very encouraging environment.",
        },
      ],
      videos: [
        {
          title: "Watercolor Workshop",
          thumbnail:
            "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
        },
        {
          title: "Pottery Class",
          thumbnail:
            "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=300&h=200&fit=crop",
        },
      ],
    },
    {
      id: 4,
      icon: "👫",
      title: "Kitty Parties",
      shortDesc:
        "Private group bookings for friends, families, or special occasions with customized activities.",
      description:
        "Make your kitty party memorable with creative activities that bring friends together. Our customized sessions include art activities, refreshments, and plenty of laughter. Perfect for ladies' groups, friend circles, and special get-togethers.",
      features: [
        "Private bookings",
        "Customized activities",
        "Refreshments included",
        "Group discounts",
        "Photo sessions",
      ],
      images: [
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=300&fit=crop",
      ],
      feedbacks: [
        {
          name: "Sunita Group",
          rating: 5,
          comment: "Best kitty party ever! Everyone loved the art activities.",
        },
        {
          name: "Friends Forever Club",
          rating: 5,
          comment: "So much fun! The perfect way to bond with friends.",
        },
        {
          name: "Ladies Circle",
          rating: 4,
          comment: "Creative and enjoyable. Will definitely book again!",
        },
      ],
      videos: [
        {
          title: "Kitty Party Fun",
          thumbnail:
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=200&fit=crop",
        },
        {
          title: "Group Art Session",
          thumbnail:
            "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=300&h=200&fit=crop",
        },
      ],
    },
    {
      id: 5,
      icon: "🎪",
      title: "Baby Shower Parties",
      shortDesc:
        "Celebrate new beginnings with gentle art activities and memorable keepsakes for expecting mothers.",
      description:
        "Celebrate the upcoming arrival with our special baby shower art parties. Create personalized keepsakes, decorate onesies, and make beautiful memories with art activities designed for expecting mothers and their loved ones.",
      features: [
        "Gentle activities",
        "Keepsake creation",
        "Maternity-friendly",
        "Custom decorations",
        "Memory book",
      ],
      images: [
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1576219313824-e2d0d7f72056?w=500&h=300&fit=crop",
      ],
      feedbacks: [
        {
          name: "Kavita Agarwal",
          rating: 5,
          comment:
            "Perfect for my baby shower. Everyone loved creating keepsakes!",
        },
        {
          name: "Rina Chopra",
          rating: 5,
          comment:
            "So thoughtful and creative. Made my special day even more memorable.",
        },
        {
          name: "Deepa Jain",
          rating: 4,
          comment:
            "Beautiful activities, perfect for expecting mothers. Highly recommend!",
        },
      ],
      videos: [
        {
          title: "Baby Shower Celebration",
          thumbnail:
            "https://images.unsplash.com/photo-1616047006789-b7af710a8089?w=300&h=200&fit=crop",
        },
        {
          title: "Keepsake Creation",
          thumbnail:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
        },
      ],
    },
  ];

  const nextImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) =>
        prev === selectedEvent.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedEvent) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedEvent.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 text-center">
          <div className="mb-6 inline-block rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-white">
              ✨ Creating Magical Moments
            </span>
          </div>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Special{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="mb-4 text-xl text-white/90 md:text-2xl">
            Celebrate life's special moments with creative experiences
          </p>
          <p className="text-lg text-white/80">
            Birthday parties, corporate events, and community workshops
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              Our Events
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our variety of creative experiences
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => {
                  setSelectedEvent(event);
                  setActiveTab("description");
                  setCurrentImageIndex(0);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute right-6 top-6 z-10 rounded-full bg-white/10 p-2 text-gray-600 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="overflow-y-auto max-h-[60vh]">
              {/* Header */}
              <div className="bg-gradient-to-r from-rose-500 to-purple-600 px-8 py-12 text-white">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur-sm">
                    {selectedEvent.icon}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">
                      {selectedEvent.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="border-b bg-gray-50 px-8">
                <nav className="flex space-x-8">
                  {[
                    { id: "description", label: "Description", icon: "📝" },
                    { id: "images", label: "Gallery", icon: "🖼️" },
                    { id: "feedback", label: "Reviews", icon: "⭐" },
                    { id: "videos", label: "Videos", icon: "🎥" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 border-b-2 px-4 py-4 text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "border-rose-500 text-rose-600"
                          : "border-transparent text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <span>{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Content Sections */}
              <div className="p-8">
                {activeTab === "description" && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-800">
                        About This Event
                      </h4>
                      <p className="leading-relaxed text-gray-600">
                        {selectedEvent.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-800">
                        What's Included
                      </h4>
                      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                        {selectedEvent.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-rose-500"></div>
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 py-4 text-white font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105">
                      Book This Event
                    </button>
                  </div>
                )}

                {activeTab === "images" && (
                  <div className="space-y-6">
                    <div className="relative">
                      <img
                        src={selectedEvent.images[currentImageIndex]}
                        alt={`${selectedEvent.title} ${currentImageIndex + 1}`}
                        className="h-96 w-full rounded-2xl object-cover shadow-lg"
                      />

                      {selectedEvent.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm hover:bg-white"
                          >
                            <ChevronLeft className="h-6 w-6" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-sm hover:bg-white"
                          >
                            <ChevronRight className="h-6 w-6" />
                          </button>
                        </>
                      )}
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {selectedEvent.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 rounded-xl overflow-hidden ${
                            currentImageIndex === index
                              ? "ring-4 ring-rose-500"
                              : ""
                          }`}
                        >
                          <img
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className="h-20 w-32 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "feedback" && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="mb-2 flex items-center justify-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-6 w-6 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-gray-800">
                          4.9
                        </span>
                      </div>
                      <p className="text-gray-600">
                        Based on {selectedEvent.feedbacks.length} reviews
                      </p>
                    </div>

                    <div className="space-y-4">
                      {selectedEvent.feedbacks.map((feedback, index) => (
                        <div key={index} className="rounded-2xl bg-gray-50 p-6">
                          <div className="mb-3 flex items-center justify-between">
                            <div>
                              <h5 className="font-semibold text-gray-800">
                                {feedback.name}
                              </h5>
                              <div className="flex">
                                {[...Array(feedback.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600">{feedback.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "videos" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {selectedEvent.videos.map((video, index) => (
                        <div
                          key={index}
                          className="group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-lg hover:shadow-xl transition-all"
                        >
                          <div className="relative">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity group-hover:opacity-100">
                              <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                                <Play className="h-8 w-8 text-white" />
                              </div>
                            </div>
                          </div>
                          <div className="p-4">
                            <h5 className="font-semibold text-gray-800">
                              {video.title}
                            </h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EventCard = ({ event, onClick }) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-2">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-rose-400 to-purple-500 p-8">
          <div className="flex h-full flex-col justify-between">
            <div className="text-right">
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                Popular
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-3xl backdrop-blur-sm">
                {event.icon}
              </div>
              <div className="text-right"></div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h4 className="mb-3 text-2xl font-bold text-gray-800">
            {event.title}
          </h4>
          <p className="mb-6 leading-relaxed text-gray-600">
            {event.shortDesc}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Flexible</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>Groups</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-medium text-gray-700">4.9</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t bg-gray-50 p-6">
        <button
          onClick={onClick}
          className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 py-3 font-semibold text-white transition-all hover:shadow-lg transform hover:scale-105"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventsPage;
```

# src\pages\HomePage.jsx

```jsx
"use client";

import { useEffect, useState } from "react";

// Carousel images for hero section
const carouselImages = [
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651195/DSC07659_zj2pcc.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1755025999/IMG-20250807-WA0003_u999yh.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1755026061/HAR05826_hv05wz.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651197/HAR05826_iefkzg.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754831665/HAR05956_cwxrxr.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754831662/IMG_4561_axaohh.jpg",
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Hero Section with Carousel */}
      <header className="relative h-[80vh] text-white flex items-center justify-center text-center overflow-hidden">
        {/* Carousel Container */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${image}')` }}
            />
          ))}
        </div>

        {/* Carousel Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50 z-[1]" />

        {/* Text Content */}
        <div className="relative z-[2] mt-auto mb-16 px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-amber-300 tracking-wide drop-shadow-2xl">
            Creative Art Experiences
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-6 font-medium drop-shadow-lg">
            Unleash your creativity through our guided sessions and fun events!
          </p>
          <a
            href="#activities"
            className="inline-block rounded-full text-white px-8 py-4 text-lg font-bold no-underline bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all hover:scale-105 shadow-xl"
          >
            Start Your Journey
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <video
              className="w-full h-72 rounded-2xl object-cover shadow-2xl border-4 border-white"
              src="https://res.cloudinary.com/df2mieky2/video/upload/v1754938196/EVENTS_AT_ARTGRAM_v9yeol.mp4"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="font-black text-4xl mb-4 text-slate-800">
              ABOUT ARTGRAM
            </h2>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              From Inspiration to Impact
            </h3>
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              ArtGram began with a dream — to make art accessible, joyful, and
              part of everyday life. What started as a small initiative has
              grown into a vibrant community, nurturing creativity across all
              ages.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              We believe that art is not just a hobby but a way to communicate,
              heal, and evolve. Through our programs and events, we've touched
              hundreds of lives, empowering individuals to create fearlessly.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section
        id="activities"
        className="py-20 text-center bg-gradient-to-b from-purple-50 via-pink-50 to-orange-50"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Explore activities at Artgram
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <ActivityCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754632272/COUROSEL_IMAGE_hkof14.png"
              title="🎨 Art Making"
              text="Enjoy 30+ hands on activities for all age groups"
              bgColor="bg-gradient-to-br from-pink-100 to-purple-100"
            />
            <ActivityCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754630801/HAR05956_c7944n.jpg"
              title="🌈 Slime Play"
              text="Get messy and creative with colorful, stretchy slime! Perfect for kids and adults who love sensory fun."
              bgColor="bg-gradient-to-br from-blue-100 to-cyan-100"
            />
            <ActivityCard
              img="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651197/HAR05826_iefkzg.jpg"
              title="🧶 Tufting"
              text="Explore a new art form: make your own rugs and coasters to decorate your home."
              bgColor="bg-gradient-to-br from-green-100 to-emerald-100"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
  <a
    href="https://youtube.com/shorts/3Ho2S0v2PF0?si=jqswBjCvh31Vbd4u"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full max-w-lg h-72 rounded-2xl shadow-2xl border-4 border-gradient-to-r from-pink-200 to-purple-200 overflow-hidden relative"
  >
    <img
      src="https://img.youtube.com/vi/3Ho2S0v2PF0/maxresdefault.jpg"
      alt="YouTube Video Thumbnail"
      className="w-full h-full object-cover"
    />
    {/* Play button overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-white drop-shadow-lg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </div>
  </a>
</div>

            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                Events at Artgram
              </h2>
              <p className="mb-4 text-lg leading-relaxed text-gray-700">
                Artgram is the ultimate destination for birthdays,
                get-togethers, and corporate events. Whether you're planning a
                cozy gathering or a grand celebration, we offer tailored
                packages to suit every occasion.
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Whatever your vision, Artgram ensures a seamless, joyful
                experience for you and your guests!
              </p>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <EventCard
              icon="🎂"
              title="Birthday Parties"
              bgColor="bg-gradient-to-br from-pink-100 to-rose-100"
            />
            <EventCard
              icon="🎪"
              title="Bridal Showers"
              bgColor="bg-gradient-to-br from-purple-100 to-pink-100"
            />
            <EventCard
              icon="🏢"
              title="Corporate Events"
              bgColor="bg-gradient-to-br from-blue-100 to-indigo-100"
            />
          </div>
        </div>
      </section>


      {/* Instagram Feed Placeholder */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
      From Our Instagram
    </h2>
    <p className="text-gray-600 mb-8">
      Follow us{" "}
      <a
        href="https://www.instagram.com/artgram_yourhobbylobby/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-pink-600 hover:text-purple-600 hover:underline transition-colors"
      >
        @artgram_yourhobbylobby
      </a>
    </p>

    <div class="flex justify-center gap-6 flex-wrap">
  
    <iframe 
        src="https://www.instagram.com/reel/DGS5MUppMc4/embed" 
        width="400" 
        height="480" 
        frameborder="0" 
        scrolling="no" 
        allowtransparency="true">
    </iframe>

  
    <iframe src="https://www.instagram.com/reel/DNC-sJuR0A4/embed?utm_source=ig_embed&hidecaption=true" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>


  
    <iframe src="https://www.instagram.com/reel/DM91tFgvQrS/embed?utm_source=ig_embed&hidecaption=false" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>

</div>

  </div>
</section>


      {/* Testimonials Section */}
       <section className="py-24 bg-white ">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-16 text-center">
            In their own words: Artgram experiences
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-white">
  <TestimonialCard
    stars="⭐⭐⭐⭐⭐"
    text="Had a wonderful time doing the slime activity! Everything was well-organized, and the staff were so kind, patient, and engaging. It was a lot of fun for both kids and adults!"
    name="Tejaswi Kalisetty"
    bgColor="bg-gradient-to-br from-gray-600 to-blue-900 text-white"
  />
  <TestimonialCard
    stars="⭐⭐⭐⭐⭐"
    text="We hosted a onesie-themed baby shower at Artgram, and it was the best decision! Their team was attentive and turned a simple idea into a beautiful, memorable event."
    name="Mohana Swetha Nune"
    bgColor="bg-gradient-to-br from-gray-600 to-blue-900 text-white"
  />
  <TestimonialCard
    stars="⭐⭐⭐⭐⭐"
    text="I celebrated my daughter's birthday party here and everyone had a fantastic time! The venue was spacious, bright, and easy to reach, and the team was very responsive."
    name="Bhaswati Bhar"
    bgColor="bg-gradient-to-br from-gray-600 to-blue-900 text-white"
  />
</div>

        </div>
      </section>
      {/* Enhanced Branches Section */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-7xl mx-auto">
        <EnhancedBranchCard
          name="Hyderabad"
          address="#NO.8-2-686/K/1 AND 8-2686/K/2, 5TH FLOOR, KIMTEE SQUARE, ROAD NO-12, BANJARA HILLS, CIRCLE 37, HYDERABAD 500034"
          phone="+917766012299"
          bgColor="from-orange-400 via-red-400 to-pink-400"
          textColor="text-white"
          imageUrl="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754637272/wp6539521_vvafqv.jpg"
          cityTag="Pearl City"
        />
        <EnhancedBranchCard
          name="Bangalore"
          address="#418, 4TH FLOOR, JB ARCADE, 27TH MAIN ROAD, HSR LAYOUT, SECTOR 1, BENGALURU 560102"
          phone="+919216345672"
          bgColor="from-purple-500 via-indigo-500 to-blue-500"
          textColor="text-white"
          imageUrl="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754637352/jayanth-muppaneni-y96JVdGu7XU-unsplash_1_kooajm.jpg"
          cityTag="Garden City"
        />
        <EnhancedBranchCard
          name="Vijayawada"
          address="#40-6-11, 2ND FLOOR, MEENAKSHI TOWERS HOTEL, MURALI FORTUNE ROAD, MOGALRAJPURAM, OPP. SUBWAY 520010"
          phone="+919686846100"
          bgColor="from-pink-500 via-rose-500 to-red-500"
          textColor="text-white"
          imageUrl="https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754637135/durgamma_temple_vj_6472215382_l3h6wj.jpg"
          cityTag="Business Capital"
        />
      </div>
    </div>
  );
};

// Enhanced Activity Card Component
const ActivityCard = ({ img, title, text, bgColor }) => {
  return (
    <div
      className={`${bgColor} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 flex flex-col border border-white/50`}
    >
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-xl mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-700 text-base leading-relaxed flex-grow">
          {text}
        </p>
      </div>
    </div>
  );
};

// Enhanced Testimonial Card Component
const TestimonialCard = ({ stars, text, name, bgColor }) => {
  return (
    <div
      className={`${bgColor} p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-white/50`}
    >
      <div className="flex flex-col h-full text-white">
        <div className="text-2xl mb-4 text-amber-500">{stars}</div>
        <p className="leading-relaxed mb-6 flex-grow italic opacity-90">"{text}"</p>
        <div className="flex items-center mt-auto">
          <p className="font-bold text-lg opacity-95">{name}</p>
        </div>
      </div>
    </div>
  );
};

// Enhanced Event Card Component
const EventCard = ({ icon, title, bgColor }) => {
  return (
    <div
      className={`text-center p-8 ${bgColor} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50`}
    >
      <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
    </div>
  );
};

// Enhanced Branch Card Component
const EnhancedBranchCard = ({
  name,
  address,
  phone,
  bgColor,
  textColor,
  imageUrl,
  cityTag,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1">
      {/* Background Gradient Overlay - more transparent */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgColor} opacity-60 z-10`}
      ></div>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={`${name} branch`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-96 flex flex-col justify-between p-8">
        {/* Top Section - City Tag */}
        <div className="flex justify-between items-start">
          <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/30">
            {cityTag}
          </span>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
        </div>

        {/* Middle Section - City Name */}
        <div className="text-center py-4">
          <h3
            className={`text-4xl font-black ${textColor} tracking-tight leading-none`}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {name}
          </h3>
          <div className="w-20 h-1 bg-white/50 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Bottom Section - Address & Actions */}
        <div className="space-y-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <p
              className={`text-sm ${textColor} leading-relaxed opacity-90`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {address}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a
              href={`tel:${phone}`}
              className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Call
            </a>
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500/80 hover:bg-green-500 backdrop-blur-sm border border-green-400/50 rounded-xl px-4 py-3 flex items-center justify-center gap-2 text-white font-semibold transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.456l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.433-9.89-9.889-9.89-5.452 0-9.887 4.434-9.889 9.891.001 2.23.855 4.34 2.379 5.965l-1.546 5.578 5.762-1.511z" />
              </svg>
              Chat
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-6 right-6 z-30">
        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full mt-2 ml-1"></div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-15"></div>
    </div>
  );
};

export default HomePage;

```

# src\pages\OurStoryPage.jsx

```jsx
import React, { useState, useEffect } from "react";

const OurStoryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timelineEvents = [
    {
      year: "May 2023",
      title: "Artgram's Inception",
      description: "Launched our first creative studio in Vijayawada.",
      icon: "🌱",
      color: "from-green-400 to-emerald-500",
    },
    {
      year: "Oct 2023",
      title: "Hyderabad Branch",
      description:
        "Opened our first franchise branch in Gachibowli, Hyderabad.",
      icon: "🏢",
      color: "from-blue-400 to-cyan-500",
    },
    {
      year: "Mar 2024",
      title: "Hyderabad Relocation",
      description:
        "Shifted from Gachibowli to a new, larger space in Banjara Hills.",
      icon: "📍",
      color: "from-purple-400 to-violet-500",
    },
    {
      year: "May 2024",
      title: "Summer Expansion",
      description:
        "Temporary summer branches opened in Mysore, Nellore, & Vizag.",
      icon: "☀️",
      color: "from-orange-400 to-red-500",
    },
    {
      year: "2024",
      title: "Bengaluru Calling",
      description:
        "Expanded to Bengaluru with a new, vibrant branch in HSR Layout.",
      icon: "🚀",
      color: "from-indigo-400 to-purple-500",
    },
    {
      year: "Oct 2024",
      title: "New Activities",
      description: "Introduced our highly popular Slime and Tufting workshops.",
      icon: "🎨",
      color: "from-pink-400 to-rose-500",
    },
    {
      year: "2025",
      title: "Future Vision",
      description:
        "Planning to launch franchise branches in multiple cities across India.",
      icon: "✨",
      color: "from-yellow-400 to-amber-500",
    },
  ];

  const collaborationLogos = [
    {
      name: "Lala Land",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1755031868/IMG_5618-removebg-preview_o4fgpz.png",
    },
    {
      name: "Cocobakes",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1755031868/IMG_5620-removebg-preview_d2lovs.png",
    },
    {
      name: "The Culture Garage",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1755031868/IMG_5625-removebg-preview_ezcn4i.png",
    },
    {
      name: "Pop up",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1755031868/IMG_5619-removebg-preview_yt7wbq.png",
    },
    {
      name: "Lim",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1755031868/IMG_5624-removebg-preview_e86uyl.png",
    },
    {
      name: "Kali",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1755031868/IMG_5621-removebg-preview_qsz3d0.png",
    },
  ];

  const featuredLogos = [
    {
      name: "The Hindu",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1754843595/Screenshot_2025-08-10_220245_kh5xpy.png",
    },
    {
      name: "The New Indian Express",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1754843718/Screenshot_2025-08-10_220452_v58xwq.png",
    },
    {
      name: "Eenadu",
      url: "https://res.cloudinary.com/df2mieky2/image/upload/v1754843509/Screenshot_2025-08-10_220123_dstox5.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50 ">
      {/* Hero Story Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${10 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-rose-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
                <img
                  src="https://res.cloudinary.com/df2mieky2/image/upload/q_auto,f_auto,w_800/v1754830108/Screenshot_2025-08-10_181702_urntu7.png"
                  alt="A vibrant Artgram studio space with people creating art"
                  className="relative max-w-[400px] w-full mx-auto rounded-3xl shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div>
                <h1 className="text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-rose-200 bg-clip-text text-transparent mb-6 leading-tight md:leading-snug pb-2 overflow-visible">
  Our Story
</h1>

                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-rose-400 rounded-full mb-6" />
                <h2 className="text-3xl font-semibold text-white/90 leading-relaxed">
                  From a Spark of Passion to a Creative Community
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  Artgram is the ultimate destination for birthdays, get-togethers, and corporate events. Whether you're planning a cozy gathering or a grand celebration, we offer tailored packages to suit every occasion. Enjoy a private room with captivating activities, exquisite food with a buffet setup, and stunning décor. With capacity to accommodate 60 people, Artgram perfectly suits your venue destination needs. From thoughtful return gifts to extra attractions like face painting, tattoos, or hair braiding, we have you covered. Whatever your vision, Artgram ensures a seamless, joyful experience for you and your guests! 
                </p>
                
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-2xl">🎨</span>
                  <span className="text-white font-semibold">500+ Happy Artists</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-2xl">🏢</span>
                  <span className="text-white font-semibold">5+ Branches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-6 leading-tight md:leading-snug pb-2">
  Our Journey Through the Years
</h2>


            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Every milestone tells a story of passion, growth, and the
              beautiful community we've built together
            </p>
          </div>

          {/* Desktop Timeline - Horizontal */}
          <div className="hidden lg:block relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-200 via-indigo-200 to-rose-200 rounded-full transform -translate-y-1/2" />

            {/* Timeline Events */}
            <div className="relative flex justify-between items-center">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-40 group cursor-pointer"
                  onMouseEnter={() => setActiveEvent(index)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`w-6 h-6 rounded-full bg-white border-4 border-purple-400 z-10 mb-4 transition-all duration-300
                    ${
                      activeEvent === index
                        ? "scale-125 border-rose-500"
                        : "group-hover:scale-110"
                    }`}
                  />

                  {/* Content Card */}
                  <div
                    className={`bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 text-center
                    ${
                      activeEvent === index
                        ? "scale-105 shadow-xl"
                        : "hover:scale-102"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${event.color} text-white text-lg mb-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {event.icon}
                    </div>

                    {/* Date */}
                    <div className="text-sm font-bold text-purple-600 mb-2">
                      {event.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical */}
          <div className="lg:hidden relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-purple-200 via-indigo-200 to-rose-200 rounded-full" />

            {/* Timeline Events */}
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6"
                  onMouseEnter={() => setActiveEvent(index)}
                  onMouseLeave={() => setActiveEvent(null)}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`w-6 h-6 rounded-full bg-white border-4 border-purple-400 z-10 transition-all duration-300 flex-shrink-0
                    ${
                      activeEvent === index ? "scale-125 border-rose-500" : ""
                    }`}
                  />

                  {/* Content Card */}
                  <div
                    className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex-1
                    ${activeEvent === index ? "scale-105 shadow-xl" : ""}`}
                  >
                    {/* Icon */}
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${event.color} text-white text-xl mb-4 transition-transform duration-300`}
                    >
                      {event.icon}
                    </div>

                    {/* Date */}
                    <div className="text-base font-bold text-purple-600 mb-2">
                      {event.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-purple-600 transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Partnerships Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured In */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  {featuredLogos.map((logo, index) => (
    <div
      key={logo.name}
      className="group transition-all duration-300 hover:scale-110 flex items-center justify-center"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <img
        src={logo.url}
        alt={logo.name}
        className="w-auto h-auto max-h-72 max-w-lg object-contain transition-all duration-300 drop-shadow-lg"
        style={{
          background: "transparent",
          borderRadius: "0",
          padding: "0",
        }}
      />
    </div>
  ))}
</div>


          {/* Collaborations */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Collaborations
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Working together to spread creativity
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {collaborationLogos.map((logo, index) => (
                <div
                  key={logo.name}
                  className="group text-center transition-all duration-300 hover:scale-110 flex flex-col items-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-44 h-44 mx-auto flex items-center justify-center mb-3 group-hover:shadow-2xl transition-all duration-300 p-0 bg-transparent">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      className="max-h-full max-w-full object-contain drop-shadow-lg"
                      style={{
                        borderRadius: "50%",
                        background: "transparent",
                        border: "none",
                        padding: 0,
                      }}
                    />
                  </div>
                  <p className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors duration-300 text-lg">
                    {logo.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Franchise CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-purple-600 via-indigo-600 to-rose-600 rounded-3xl p-12 text-white text-center overflow-hidden shadow-2xl">
              {/* Background Elements */}
              <div className="absolute inset-0 opacity-10">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-32 rounded-full bg-white animate-pulse"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${20 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <div className="text-6xl mb-6">🤝</div>
                <h2 className="text-4xl font-bold mb-6">
                  Become a Part of Our Story
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
                  Interested in bringing Artgram to your city? We are expanding
                  and looking for passionate partners to join our franchise
                  family.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-white text-purple-600 font-bold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                    <span className="flex items-center justify-center gap-3">
                      📞 Enquire About Franchise
                      <div className="w-0 group-hover:w-4 h-0.5 bg-purple-600 rounded transition-all duration-300" />
                    </span>
                  </button>
                  <button className="bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;

```

# src\pages\ShopPage.jsx

```jsx
import React, { useState, useEffect } from 'react';

const ShopPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState(3000)
  const [hoveredProduct, setHoveredProduct] = useState(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const products = [
    {
      id: 1,
      title: "DIY Slime Kit",
      desc: "Create colorful, glittery slime at home! Includes glue, activator, glitter & tools.",
      price: 499,
      originalPrice: 699,
      category: "slime",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller",
      bg: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831666/IMG_3413_iqs2bq.jpg",
      href: "/shop/diy-slime-kit",
      features: ["Easy to follow guide", "Safe ingredients", "Multiple colors"]
    },
    {
      id: 2,
      title: "Beginner Art Set",
      desc: "Includes sketchbook, paints, brushes & pencils for young aspiring artists.",
      price: 799,
      originalPrice: 999,
      category: "art",
      rating: 4.9,
      reviews: 89,
      badge: "New",
      bg: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831666/IMG_3400_oazvl5.jpg",
      href: "/shop/beginner-art-set",
      features: ["Professional quality", "Complete starter set", "Instruction booklet"]
    },
    {
      id: 3,
      title: "Mini Tufting Gun Kit",
      desc: "Perfect for beginners wanting to try rug tufting at home.",
      price: 2499,
      originalPrice: 2999,
      category: "tufting",
      rating: 4.7,
      reviews: 45,
      badge: "Premium",
      bg: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831660/IMG_3352_nsdiar.jpg",
      href: "/shop/mini-tufting-kit",
      features: ["Professional tool", "Beginner friendly", "Video tutorials included"]
    },
    {
      id: 4,
      title: "Advanced Slime Kit",
      desc: "Glow-in-the-dark and color-changing slime ingredients for the slime expert.",
      price: 899,
      originalPrice: 1199,
      category: "slime",
      rating: 4.8,
      reviews: 67,
      badge: "Popular",
      bg: "https://res.cloudinary.com/df2mieky2/image/upload/v1754831818/Screenshot_2025-08-10_184600_dugdpm.png",
      href: "/shop/advanced-slime-kit",
      features: ["Glow-in-the-dark", "Color changing", "Advanced techniques"]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Products', icon: '🎨', count: products.length },
    { id: 'slime', name: 'Slime Kits', icon: '🌈', count: products.filter(p => p.category === 'slime').length },
    { id: 'art', name: 'Art Kits', icon: '🎨', count: products.filter(p => p.category === 'art').length },
    { id: 'tufting', name: 'Tufting Kits', icon: '🧶', count: products.filter(p => p.category === 'tufting').length }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products.filter(p => p.price <= priceRange)
    : products.filter(p => p.category === selectedCategory && p.price <= priceRange)

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Best Seller': return 'bg-gradient-to-r from-orange-400 to-red-500'
      case 'New': return 'bg-gradient-to-r from-green-400 to-emerald-500'
      case 'Premium': return 'bg-gradient-to-r from-purple-400 to-indigo-500'
      case 'Popular': return 'bg-gradient-to-r from-blue-400 to-cyan-500'
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500'
    }
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-rose-50 ">
      
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-rose-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm animate-pulse"
              style={{
                left: `${15 + (i * 15)}%`,
                top: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="mb-6">
              <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-rose-200 bg-clip-text text-transparent mb-4">
                Art & Slime Kits
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto rounded-full mb-6" />
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Curated premium kits and materials to bring your creativity to life at home!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-2xl">🚚</span>
                <span className="text-white font-semibold">Free Shipping</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-2xl">✨</span>
                <span className="text-white font-semibold">Premium Quality</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-2xl">🎁</span>
                <span className="text-white font-semibold">Perfect Gifts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-2xl">🔍</span>
                  Filters
                </h2>
                
                <div className="space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left
                            ${selectedCategory === category.id 
                              ? 'bg-gradient-to-r from-purple-600 to-rose-600 text-white shadow-lg' 
                              : 'bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-600'
                            }`}
                        >
                          <span className="text-xl">{category.icon}</span>
                          <div className="flex-1">
                            <div className="font-semibold">{category.name}</div>
                            <div className={`text-sm ${selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                              {category.count} items
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-gray-800">Price Range</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>₹0</span>
                        <span className="font-semibold text-purple-600">₹{priceRange}</span>
                        <span>₹3000</span>
                      </div>
                      <input 
                        type="range" 
                        min="0" 
                        max="3000" 
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600" 
                      />
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gradient-to-br from-purple-50 to-rose-50 p-6 rounded-2xl">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-lg font-bold text-purple-600">{filteredProducts.length} Products</div>
                      <div className="text-sm text-gray-600">Match your filters</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <main className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} of {products.length} products
                </p>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    isHovered={hoveredProduct === product.id}
                    onHover={() => setHoveredProduct(product.id)}
                    onLeave={() => setHoveredProduct(null)}
                    getBadgeColor={getBadgeColor}
                  />
                ))}
              </div>

              {/* No Products Found */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">😔</div>
                  <h3 className="text-2xl font-bold text-gray-600 mb-2">No products found</h3>
                  <p className="text-gray-500 mb-6">Try adjusting your filters to see more products</p>
                  <button 
                    onClick={() => {
                      setSelectedCategory('all')
                      setPriceRange(3000)
                    }}
                    className="bg-gradient-to-r from-purple-600 to-rose-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Bulk Orders Section */}
              <div className="bg-gradient-to-br from-white via-purple-50 to-rose-50 p-12 rounded-3xl shadow-xl border border-purple-100">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="text-6xl mb-6">📦</div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent mb-4">
                    Looking for Bulk Orders?
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    We offer special discounts on bulk purchases for parties, corporate events, and gifting. 
                    Get in touch with us for a custom quote and exclusive deals!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group bg-gradient-to-r from-purple-600 to-rose-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center justify-center gap-3">
                        📞 Get Custom Quote
                        <div className="w-0 group-hover:w-4 h-0.5 bg-white rounded transition-all duration-300" />
                      </span>
                    </button>
                    <button className="bg-white text-purple-600 border-2 border-purple-600 font-semibold px-8 py-4 rounded-full hover:bg-purple-50 transition-all duration-300">
                      Learn More
                    </button>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">10%+</div>
                      <div className="text-sm text-gray-600">Bulk Discounts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">24h</div>
                      <div className="text-sm text-gray-600">Quick Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">🎁</div>
                      <div className="text-sm text-gray-600">Custom Packaging</div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  )
}

const ProductCard = ({ product, index, isHovered, onHover, onLeave, getBadgeColor }) => {
  return (
    <div 
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 cursor-pointer transform hover:scale-105"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden">
        <div 
          className="h-full w-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
          style={{ backgroundImage: `url('${product.bg}')` }}
        />
        
        {/* Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold ${getBadgeColor(product.badge)} shadow-lg`}>
          {product.badge}
        </div>

        {/* Discount Badge */}
        {product.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300 mb-2">
            {product.title}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            {product.desc}
          </p>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-4">
            {product.features.slice(0, 2).map((feature, i) => (
              <span key={i} className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                {feature}
              </span>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-yellow-400 text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>⭐</span>
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 group-hover:from-purple-600 group-hover:to-rose-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform group-hover:shadow-lg">
          <span className="flex items-center justify-center gap-2">
            View Details
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default ShopPage;
```

# src\pages\SlimePlayPage.jsx

```jsx
"use client";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SlimePlayPage() {
  const location = useLocation();

  useEffect(() => {
    // Check if a hash exists in the URL
    if (location.hash) {
      // Use a timeout to ensure the DOM has fully updated before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(location.hash.replace("#", ""));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 200); // Increased delay to ensure DOM is fully rendered

      // Clean up the timer to prevent memory leaks
      return () => clearTimeout(timer);
    }
  }, [location.hash, location.pathname]); // Also trigger on pathname change to handle direct navigation

  // Reordering booking flow. Step 1 is now Location.
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    location: null,
    date: null,
    session: "complete", // Default to premium
    price: 850,
    time: null,
    quantity: 1, // Added quantity state
  });

  // State for available slots data - could be fetched from an API
  // Added total and available slots
  const [timeSlots, setTimeSlots] = useState([
    {
      time: "10:00",
      label: "10:00 AM",
      status: "available",
      type: "Slime Play & Demo",
      age: "3+ years",
      available: 12,
      total: 15,
    },
    {
      time: "11:30",
      label: "11:30 AM",
      status: "available",
      type: "Slime Play & Making",
      age: "8+ years",
      available: 8,
      total: 15,
    },
    {
      time: "1:00",
      label: "1:00 PM",
      status: "filling-fast",
      type: "Slime Play & Demo",
      age: "3+ years",
      available: 4,
      total: 15,
    },
    {
      time: "2:30",
      label: "2:30 PM",
      status: "available",
      type: "Slime Play & Demo",
      age: "3+ years",
      available: 15,
      total: 15,
    },
    {
      time: "4:00",
      label: "4:00 PM",
      status: "filling-fast",
      type: "Slime Play & Making",
      age: "8+ years",
      available: 3,
      total: 15,
    },
    {
      time: "5:30",
      label: "5:30 PM",
      status: "sold-out",
      type: "Slime Play & Demo",
      age: "3+ years",
      available: 0,
      total: 15,
    },
  ]);

  const nextStep = (step) => {
    setCurrentStep(step);
  };
  const prevStep = (step) => {
    setCurrentStep(step);
  };

  const selectLocation = (location) => {
    setBookingData((prev) => ({ ...prev, location }));
  };
  const selectDate = (date) => {
    setBookingData((prev) => ({ ...prev, date }));
  };
  const selectSession = (session, price) => {
    setBookingData((prev) => ({ ...prev, session, price: parseInt(price) }));
  };
  const selectTime = (time) => {
    setBookingData((prev) => ({ ...prev, time }));
  };
  const setQuantity = (qty) => {
    setBookingData((prev) => ({ ...prev, quantity: parseInt(qty) }));
  };

  const confirmBooking = () => {
    alert(
      `Booking confirmed for ${bookingData.quantity} ticket(s)! You will receive a confirmation call within 2 hours.`
    );
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "Not selected";
    return new Date(dateStr).toDateString();
  };

  const getLocationName = (location) => {
    const locationNames = {
      downtown: "Vijayawada",
      mall: "Hyderabad",
      park: "Bangalore",
    };
    return locationNames[location] || "Not selected";
  };

  const getTotalPrice = () => bookingData.price * bookingData.quantity;
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-purple-100">
      {/* Hero Section - Video Updated */}
      <section className="relative h-[70vh] bg-black flex items-center justify-center text-center text-white overflow-hidden">
        {/* Video background updated */}
        <video
          src="https://res.cloudinary.com/df2mieky2/video/upload/v1755029444/HYDERABAD_Slime_xa1l3x.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-50"
        ></video>
        <div className="relative z-20 max-w-4xl px-5">
          <h1 className="text-6xl font-black mb-5 text-white drop-shadow-lg animate-bounce">
            EXPERIENCE SLIME!!
          </h1>
          <p className="text-2xl mb-8 drop-shadow-md">
            1 Hr & 1 Hr 15 min sessions
          </p>
          <a
            href="#booking"
            className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse"
          >
            Book Your Slime Experience
          </a>
        </div>
      </section>

      {/* Package Overview Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            Choose Your Slime Adventure
          </h2>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Base Package */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-2xl border-4 border-green-400">
              <h3 className="text-3xl font-black text-center text-red-600 mb-4">
                Rs 750/- Base Package
              </h3>
              <div className="space-y-4 mb-6">
                {/* Slime Play */}
                <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
                  <img
                    src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831671/HAR05994_de7kjp.jpg"
                    alt="Slime Play"
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-red-600">
                      Slime Play{" "}
                      <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        45 min
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 leading-tight mt-1">
                      Touch different colours and textures, slime throwing,
                      jumping, magnetic slime and much more!
                    </p>
                  </div>
                </div>

                {/* Slime Demo */}
                <div className="bg-white rounded-2xl p-5 flex items-start gap-4">
                  <img
                    src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831672/DSC07792_xxy5w1.jpg"
                    alt="Slime Demo"
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-red-600">
                      Slime Demo{" "}
                      <span className="bg-yellow-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        15 min
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 leading-tight mt-1">
                      Watch live slime making by our staff. 200ml fresh slime to
                      take home with choice of scent & charms.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center border-t-2 border-gray-100 pt-5">
                <div className="text-lg font-semibold text-green-400 mb-4">
                  ⏱️ Total: 1 Hour
                </div>
                <a
                  href="#booking"
                  onClick={() => selectSession("basic", "750")}
                  className="bg-green-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-500 transition-colors"
                >
                  Choose Base Package
                </a>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-white rounded-3xl p-8 shadow-2xl border-4 border-purple-500">
              <h3 className="text-3xl font-black text-center text-red-600 mb-2">
                Rs 850/- Premium Experience
              </h3>
              <p className="text-gray-600 text-lg font-medium text-center mb-4">
                Ultimate Slime Adventure
              </p>
              <div className="mb-6">
                <div className="text-center font-semibold text-gray-600 mb-4 p-3 bg-purple-100 rounded-lg">
                  Everything in Base Package +
                </div>
                <div className="bg-white rounded-2xl p-6 border-2 border-pink-400 flex items-start gap-4">
                  <img
                    src="https://res.cloudinary.com/df2mieky2/image/upload/v1754831818/Screenshot_2025-08-10_184600_dugdpm.png"
                    alt="Glow in Dark"
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-red-600">
                      ✨ Glow in Dark Experience{" "}
                      <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        +15 min
                      </span>
                    </h4>
                    <p className="text-sm text-gray-600 leading-tight mt-1">
                      15 minutes of magical glowing slime in our special dark
                      room. Watch your slime transform!
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center border-t-2 border-purple-100 pt-5">
                <div className="text-lg font-semibold text-purple-600 mb-4">
                  ⏱️ Total: 1 Hour 15 Minutes
                </div>
                <a
                  href="#booking"
                  onClick={() => selectSession("complete", "850")}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-500 hover:to-purple-500 transition-all"
                >
                  Choose Premium Pack
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section -*/}
      <section className="py-20 bg-gradient-to-br from-green-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-5">
          {/* Title Changed */}
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            Additional Information
          </h2>
          {/* Order changed and content updated */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Booking Required
              </h4>
              <p className="text-gray-700">
                By booking only, Limited slots. Advance booking essential to
                secure your spot for this popular experience.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Parent Supervision
              </h4>
              <p className="text-gray-700">
                One parent allowed with 1 kid (below 12yrs). We ensure a safe
                and supervised environment for all activities.
              </p>
            </div>
            {/* Age Requirement section updated and "For Kids 8+" removed */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Age Requirement
              </h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  For <strong>Slime Play & Demo</strong> sessions: anyone above{" "}
                  <strong>3+ years</strong> is welcome.
                </li>
                <li>
                  For <strong>Slime Play & Making</strong> sessions: anyone
                  above <strong>8+ years</strong> is welcome.
                </li>
              </ul>
            </div>
            {/* Group Session point added */}
            <div className="bg-white rounded-2xl p-8 border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-red-600 mb-3">
                Group & Private Sessions
              </h4>
              <p className="text-gray-700">
                All our Slime sessions are group sessions. Private sessions are
                available for an additional cost. Please contact us for details.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
            Slime Experience Gallery
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831671/HAR05994_de7kjp.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831665/HAR05956_cwxrxr.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831664/IMG_5291.JPEG_fjpdme.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831662/IMG_4561_axaohh.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831660/IMG_3352_nsdiar.jpg",
              "https://res.cloudinary.com/df2mieky2/image/upload/v1754831672/DSC07792_xxy5w1.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-purple-500 to-pink-500"></div>
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Slime activity ${index + 1}`}
                  className="w-full h-48 object-cover rounded-2xl hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
     <section id="booking" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h2 className="text-4xl font-bold text-center text-red-600 mb-8">Book Your Slime Experience</h2>
            
            {/* Step 1: Select Location */}
            {currentStep === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 1: Choose Location</h3>
                <div className="flex gap-5 flex-wrap justify-center mb-5">
                  {['downtown', 'mall', 'park'].map(id => (
                    <div key={id} onClick={() => selectLocation(id)} className={`border-2 rounded-xl p-6 text-center cursor-pointer transition-all min-w-48 ${bookingData.location === id ? 'border-green-400 bg-green-100 -translate-y-1 shadow-lg' : 'border-gray-200 hover:border-green-400 hover:bg-green-50'}`}>
                      <div className="font-bold text-lg mb-1">{getLocationName(id)}</div>
                      {id === 'mall' && <div className="text-xs text-red-500">Closed on Mondays</div>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <button disabled={!bookingData.location} onClick={() => nextStep(2)} className="bg-green-400 text-black px-8 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-colors disabled:bg-gray-300">Next</button>
                </div>
              </div>
            )}

            {/* Step 2: Select Date */}
            {currentStep === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 2: Select Your Date</h3>
                <div className="flex gap-4 flex-wrap justify-center mb-5">
                  {[...Array(7)].map((_, i) => {
                    const date = new Date();
                    date.setDate(date.getDate() + i);
                    const value = date.toISOString().split('T')[0];
                    const isMonday = date.getDay() === 1; // 1 is Monday
                    const isHyderabad = bookingData.location === 'mall';
                    const isDisabled = isMonday && isHyderabad;
                    
                    return (
                      <div 
                        key={value} 
                        onClick={() => !isDisabled && selectDate(value)} 
                        className={`border-2 rounded-lg p-4 text-center cursor-pointer transition-all min-w-24 ${
                          isDisabled ? 'bg-gray-100 cursor-not-allowed opacity-50' :
                          bookingData.date === value ? 'border-green-400 bg-green-100 -translate-y-1 shadow-lg' : 
                          'border-gray-200 hover:border-green-400 hover:bg-green-50'
                        }`}
                      >
                        <div className="text-sm font-semibold">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
                        <div className="text-xl font-bold my-1">{date.getDate()}</div>
                        <div className="text-xs">{date.toLocaleDateString('en-US', { month: 'short' })}</div>
                        {isDisabled && <div className="text-xs text-red-500 mt-1">No Sessions</div>}
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between mt-6">
                  <button onClick={() => prevStep(1)} className="border-2 border-gray-500 text-gray-500 px-8 py-2 rounded-full font-semibold">Back</button>
                  <button disabled={!bookingData.date} onClick={() => nextStep(3)} className="bg-green-400 text-black px-8 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white disabled:bg-gray-300">Next</button>
                </div>
              </div>
            )}
            
            {/* Step 3: Select Quantity */}
            {currentStep === 3 && (
                <div>
                    <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 3: How many tickets?</h3>
                    <div className="flex justify-center items-center gap-4 mb-5">
                        <button onClick={() => setQuantity(Math.max(1, bookingData.quantity - 1))} className="w-12 h-12 rounded-full bg-gray-200 text-2xl font-bold">-</button>
                        <span className="text-4xl font-bold w-20 text-center">{bookingData.quantity}</span>
                        <button onClick={() => setQuantity(bookingData.quantity + 1)} className="w-12 h-12 rounded-full bg-gray-200 text-2xl font-bold">+</button>
                    </div>
                     <div className="flex justify-between mt-6">
                        <button onClick={() => prevStep(2)} className="border-2 border-gray-500 text-gray-500 px-8 py-2 rounded-full font-semibold">Back</button>
                        <button onClick={() => nextStep(4)} className="bg-green-400 text-black px-8 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white">Next</button>
                    </div>
                </div>
            )}


            {/* Step 4: Select Session & Time */}
            {currentStep === 4 && (
              <div>
                {/* Session Selection Updated */}
                 <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 4: Choose Session</h3>
                 <div className="flex gap-5 flex-wrap justify-center mb-10">
                    <div onClick={() => selectSession('complete', '850')} className={`border-2 rounded-2xl p-6 text-center cursor-pointer min-w-48 ${bookingData.session === 'complete' ? 'border-purple-400 bg-purple-100' : 'hover:border-purple-400'}`}>
                        <div className="font-bold text-lg mb-1">Premium Experience</div>
                        <div className="text-sm opacity-80 mb-2">Play + Demo + Glow (1 Hr 15 min)</div>
                        <div className="text-2xl font-bold text-red-500">Rs 850/-</div>
                    </div>
                    <div onClick={() => selectSession('basic', '750')} className={`border-2 rounded-2xl p-6 text-center cursor-pointer min-w-48 ${bookingData.session === 'basic' ? 'border-green-400 bg-green-100' : 'hover:border-green-400'}`}>
                        <div className="font-bold text-lg mb-1">Base Package</div>
                        <div className="text-sm opacity-80 mb-2">Play + Demo (1 Hour)</div>
                        <div className="text-2xl font-bold text-red-500">Rs 750/-</div>
                    </div>
                 </div>

                <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 5: Select Time Slot</h3>
                {/* Time Slot selection updated */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                  {timeSlots.map((slot) => (
                    <div key={slot.time} onClick={() => slot.status !== 'sold-out' && selectTime(slot.time)} 
                    className={`border-2 rounded-xl p-4 text-center cursor-pointer transition-all ${ slot.status === 'sold-out' ? 'bg-gray-100 cursor-not-allowed opacity-60' : bookingData.time === slot.time ? 'border-green-400 bg-green-100 -translate-y-1 shadow-lg' : 'hover:border-green-400'}`}>
                      <div className="font-bold mb-1 text-lg">{slot.label}</div>
                      <div className="text-xs font-semibold text-blue-600">{slot.type}</div>
                       <div className="text-xs font-semibold text-purple-600 mb-2">({slot.age})</div>
                      <div className={`text-xs font-bold ${slot.status === 'sold-out' ? 'text-red-500' : slot.status === 'filling-fast' ? 'text-orange-500' : 'text-green-600'}`}>
                        {slot.status === 'sold-out' ? 'Sold Out' : `${slot.available}/${slot.total} available`}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <button onClick={() => prevStep(3)} className="border-2 border-gray-500 text-gray-500 px-8 py-2 rounded-full font-semibold">Back</button>
                  <button disabled={!bookingData.time} onClick={() => nextStep(5)} className="bg-green-400 text-black px-8 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white disabled:bg-gray-300">Next</button>
                </div>
              </div>
            )}

            {/* Step 6: Contact Details & Summary */}
            {currentStep === 5 && (
              <div>
                <h3 className="text-2xl font-bold text-red-600 text-center mb-6">Step 6: Contact & Summary</h3>
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Contact Form fields updated */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Contact Information</h4>
                    <div className="space-y-4">
                       <div>
                        <label className="block font-semibold text-gray-700 mb-1">Parent/Guardian Name *</label>
                        <input type="text" className="w-full border-2 border-gray-200 rounded-lg p-3" placeholder="Enter your name" />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1">Phone Number *</label>
                        <input type="tel" className="w-full border-2 border-gray-200 rounded-lg p-3" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div>
                        <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
                        <input type="email" className="w-full border-2 border-gray-200 rounded-lg p-3" placeholder="your.email@example.com" />
                      </div>
                    </div>
                  </div>

                  {/* Booking Summary */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Booking Summary</h4>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="space-y-2 text-sm">
                        <div><strong>Location:</strong> <span>{getLocationName(bookingData.location)}</span></div>
                        <div><strong>Date:</strong> <span>{formatDate(bookingData.date)}</span></div>
                        <div><strong>Time:</strong> <span>{bookingData.time || 'Not selected'}</span></div>
                        <div><strong>Tickets:</strong> <span>{bookingData.quantity}</span></div>
                        {/* "Glow in Dark" logic corrected in summary */}
                        <div><strong>Session:</strong> <span>{bookingData.session === 'complete' ? 'Premium Experience' : 'Base Package'}</span></div>
                        <ul className="list-disc list-inside ml-4 pt-1">
                          <li>Slime Play (45 min)</li>
                          <li>Slime Demo/Making (15 min)</li>
                          {bookingData.session === 'complete' && <li>Glow in Dark Experience (15 min)</li>}
                        </ul>
                      </div>
                      <div className="text-3xl font-bold text-green-500 mt-4 pt-4 border-t border-gray-200">
                        Total: Rs {getTotalPrice()}/-
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-8">
                  <button onClick={() => prevStep(4)} className="border-2 border-gray-500 text-gray-500 px-8 py-2 rounded-full font-semibold">Back</button>
                  <button onClick={confirmBooking} className="w-full max-w-xs bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 rounded-xl font-bold text-lg">
                      Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
```

# src\pages\TuftingActivityPage.jsx

```jsx
"use client";

import { useEffect, useMemo, useState } from "react";

// Define gallery images to be used in the carousel and the gallery section
const galleryImages = [
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651196/DSC07703_y0ykmy.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651200/HAR05892_zs7cre.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651194/IMG_0168_kqn6hv.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651192/HAR05922_vmmr5p.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651195/DSC07659_zj2pcc.jpg",
  "https://res.cloudinary.com/df2mieky2/image/upload/q_70/v1754651197/HAR05826_iefkzg.jpg",
];

const TuftingActivityPage = () => {
  // The booking process now starts with the location step.
  const [step, setStep] = useState("location");
  // State for storing available dates
  const [dates, setDates] = useState([]);
  // State for storing all booking details
  const [booking, setBooking] = useState({
    date: "",
    location: "",
    session: null,
    time: "",
    quantity: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
  });
  // State for the image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to generate the next 7 days for date selection
  useEffect(() => {
    const today = new Date();
    const arr = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      arr.push(d);
    }
    setDates(arr);
  }, []);

  // Effect for the auto-playing image carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  // Available tufting session options
  const sessions = [
    { id: "beginner", price: 2000, label: "Small - 8x8 (Inches)" },
    { id: "advanced", price: 3500, label: "Medium - 12x12 (Inches)" },
    { id: "master", price: 4500, label: "Big - 14x14 (Inches)" },
  ];

  // Memoized calculation for the total booking cost
  const total = useMemo(
    () =>
      booking.session && booking.quantity
        ? booking.session.price * Number(booking.quantity)
        : 0,
    [booking.session, booking.quantity]
  );

  // Handler for input changes to keep state updated
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBooking((prev) => ({ ...prev, [id]: value }));
  };

  // Check if all required fields for the final step are filled
  const canProceedToBook =
    booking.customerName && booking.customerPhone && booking.customerEmail && booking.quantity;

  return (
    <div>
      {/* Hero Section with Video Background */}
      <header className="relative text-white text-center py-28 overflow-hidden h-screen flex items-center justify-center">
        <video
          src="https://res.cloudinary.com/df2mieky2/video/upload/v1754651184/IMG_0327_djuhsr.mov"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">
            🎨 India's Premiere Art Studio 🎨
          </h1>
          <a
            href="#tufting-booking"
            className="inline-block rounded-full bg-gradient-to-tr from-yellow-400 to-orange-400 text-slate-800 font-bold px-6 py-3 shadow-lg hover:-translate-y-0.5 transition-all no-underline"
          >
            🎯 BOOK YOUR TUFTING ADVENTURE NOW!
          </a>
        </div>
      </header>

      {/* What is Tufting Section with Mini Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-rose-600 mb-2">
              🤔 What is Tufting?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A modern take on the traditional craft of rug making. Using a special tufting gun,
              you'll punch yarn into a stretched fabric canvas to create your own vibrant,
              textured masterpiece.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mini Carousel Component */}
            <div className="relative w-full h-auto aspect-[4/3] bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
              <img
                key={currentImageIndex} // Key helps React trigger the animation
                src={galleryImages[currentImageIndex]}
                alt="A student's tufting creation"
                className="w-full h-full object-cover animate-fade-in"
              />
               <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Feature Cards */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-3">🎨</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Tufting Fun & Creativity
                </h3>
                <p className="text-gray-600">
                  Tufting is an exciting and creative process where you can craft beautiful wall hangings,
                  rugs, coasters, or even charms for your bags and jackets using woolen yarn and a tufting gun.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-3">🧵</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Guided by Experts
                </h3>
                <p className="text-gray-600">
                  With a wide range of vibrant color options and step-by-step guidance from our expert
                  instructors, you'll enjoy a unique, hands-on experience tailored for adults exploring new skills.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-3">🏠</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Take Your Art Home
                </h3>
                <p className="text-gray-600">
                  Whether it's a bold rug, a cozy coaster, or a charming wall piece, you'll leave with a
                  functional work of art that reflects your personality and creativity.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-rose-600">25,000+</p>
              <p className="text-gray-600 font-medium">Happy Tufters</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-rose-600">500+</p>
              <p className="text-gray-600 font-medium">Unique Designs</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-rose-600">100%</p>
              <p className="text-gray-600 font-medium">Premium Materials</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-lg">
              <p className="text-4xl font-bold text-rose-600">3</p>
              <p className="text-gray-600 font-medium">Studio Locations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-pink-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-rose-600">
            🖼️ Tufting Gallery - Student Creations
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={src}
                  alt="Tufting creation by a student"
                  className="w-full h-[250px] object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/f9699c/white?text=Art' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
     <section
        id="tufting-booking"
        className="py-16"
        style={{ backgroundImage: "linear-gradient(135deg, #f9699c, #3f51b5)" }}
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="backdrop-blur bg-white/95 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl font-extrabold text-center mb-8 text-purple-600">
              🎯 BOOK YOUR TUFTING EXPERIENCE NOW!
            </h2>

            {/* Step 1: Date Selection */}
            <TuftStep
              title="📅 Select Date"
              color="#9b59b6"
              isVisible={step === "date"}
              onNext={() => setStep("location")}
              canNext={Boolean(booking.date)}
            >
              <div className="flex flex-wrap gap-2">
                {dates.map((d, i) => {
                  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
                  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
                  const label = i === 0 ? "TODAY" : i === 1 ? "TOM" : dayNames[d.getDay()];
                  const iso = d.toISOString().split("T")[0];
                  const selected = booking.date === iso;
                  return (
                    <button
                      key={iso}
                      onClick={() => setBooking((b) => ({ ...b, date: iso }))}
                      className={`min-w-[100px] text-center rounded-lg border-2 px-4 py-3 transition-all ${
                        selected
                          ? "border-purple-600 bg-purple-600 text-white -translate-y-0.5"
                          : "border-gray-300 bg-white hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="text-xs font-semibold">{label}</div>
                      <div className="text-xl font-extrabold">{d.getDate()}</div>
                      <div className="text-xs">{monthNames[d.getMonth()]}</div>
                    </button>
                  );
                })}
              </div>
            </TuftStep>

            {/* Step 2: Location Selection */}
            <TuftStep
              title="📍 Select Location"
              color="#9b59b6"
              isVisible={step === "location"}
              onBack={() => setStep("date")}
              onNext={() => setStep("session")}
              canNext={Boolean(booking.location)}
            >
              <div className="flex flex-wrap gap-3">
                {[
                  { id: "hyderabad", name: "🏛️ Hyderabad", detail: "HITEC City Studio" },
                  { id: "bangalore", name: "🌟 Bangalore", detail: "Brigade Gateway" },
                 
                ].map((l) => {
                  const selected = booking.location === l.id;
                  return (
                    <button
                      key={l.id}
                      onClick={() => setBooking((b) => ({ ...b, location: l.id }))}
                      className={`min-w-[200px] text-center rounded-xl border-2 px-6 py-5 transition-all ${
                        selected
                          ? "border-purple-600 bg-purple-600 text-white -translate-y-0.5 shadow"
                          : "border-gray-300 bg-white hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="font-bold">{l.name}</div>
                      <div className="text-sm opacity-80">{l.detail}</div>
                    </button>
                  );
                })}
              </div>
            </TuftStep>

            {/* Step 3: Session Selection */}
            <TuftStep
              title="🧶 Select Tufting Session (Per 2 Persons) ONLY 15+ YEARS"
              color="#9b59b6"
              isVisible={step === "session"}
              onBack={() => setStep("location")}
              onNext={() => setStep("time")}
              canNext={Boolean(booking.session)}
            >
              <div className="flex flex-wrap gap-3">
                {sessions.map((s) => {
                  const selected = booking.session?.id === s.id;
                  return (
                    <div
                      key={s.id}
                      onClick={() => setBooking((b) => ({ ...b, session: s }))}
                      className={`min-w-[200px] cursor-pointer rounded-xl border-2 px-6 py-6 text-center transition-all ${
                        selected
                          ? "border-purple-600 bg-purple-600 text-white -translate-y-1 shadow-xl"
                          : "border-gray-300 bg-white hover:-translate-y-1"
                      }`}
                    >
                      <div className="text-2xl mb-1">
                        {s.id === "beginner" ? "🌟" : s.id === "advanced" ? "🎨" : "👑"}
                      </div>
                      <div className="font-bold">{s.label}</div>
                      <div className="text-sm opacity-80">
                        02 - 04 Hr (Depending on Size)
                      </div>
                      <div className={`mt-2 font-bold ${selected ? "text-white" : "text-red-600"}`}>
                        ₹ {s.price}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TuftStep>

            {/* Step 4: Time Slot Selection */}
            <TuftStep
              title="⏰ Select Time Slot"
              color="#9b59b6"
              isVisible={step === "time"}
              onBack={() => setStep("session")}
              onNext={() => setStep("details")}
              canNext={Boolean(booking.time)}
            >
              <div className="flex flex-wrap gap-2">
                {[
                  { t: "09:00", label: "9:00 AM", cls: "available" },
                  { t: "11:30", label: "11:30 AM", cls: "available" },
                  { t: "14:00", label: "2:00 PM", cls: "available" },
                  { t: "16:30", label: "4:30 PM", cls: "available" },
                  { t: "19:00", label: "7:00 PM", cls: "filling-fast" },
                ].map((slot) => {
                  const selected = booking.time === slot.t;
                  return (
                    <div
                      key={slot.t}
                      onClick={() => setBooking((b) => ({ ...b, time: slot.t }))}
                      className={`min-w-[120px] text-center rounded-lg border-2 px-4 py-3 transition-all cursor-pointer ${
                        selected
                          ? "border-purple-600 bg-purple-600 text-white -translate-y-0.5"
                          : slot.cls === "filling-fast"
                          ? "border-orange-400"
                          : "border-gray-300 bg-white hover:-translate-y-0.5"
                      }`}
                    >
                      <div className="font-bold">{slot.label}</div>
                      <div className="text-xs opacity-80">
                        {slot.cls === "filling-fast" ? "Filling Fast" : "Available"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </TuftStep>

            {/* Step 5: Your Details */}
            <TuftStep
              title="👤 Your Details"
              color="#9b59b6"
              isVisible={step === "details"}
              onBack={() => setStep("time")}
              canNext={false}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold mb-1">Full Name *</label>
                  <input
                    id="customerName"
                    type="text"
                    value={booking.customerName}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Phone Number *</label>
                  <input
                    id="customerPhone"
                    type="tel"
                    value={booking.customerPhone}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"
                    placeholder="+91 12345 67890"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Email Address *</label>
                  <input
                    id="customerEmail"
                    type="email"
                    value={booking.customerEmail}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Number of Participants *</label>
                  <select
                    id="quantity"
                    value={booking.quantity}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600/30 focus:border-purple-600"
                    required
                  >
                    <option value="" disabled>Select quantity</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6+ People (Group Booking)</option>
                  </select>
                </div>
              </div>

              {booking.quantity && booking.session && (
                <div
                  className="mt-6 rounded-2xl p-6 text-white"
                  style={{ background: "linear-gradient(135deg, #9b59b6, #e91e63)" }}
                >
                  <h5 className="font-bold mb-2">📋 Tufting Booking Summary</h5>
                  <div className="text-sm space-y-1">
                    <div><strong>Date:</strong> {booking.date ? new Date(booking.date).toLocaleDateString('en-GB') : ""}</div>
                    <div><strong>Location:</strong> <span className="capitalize">{booking.location}</span></div>
                    <div><strong>Session:</strong> {booking.session.label}</div>
                    <div><strong>Time:</strong> {booking.time}</div>
                    <div><strong>Participants:</strong> {booking.quantity}</div>
                  </div>
                  <div className="mt-3 text-center font-extrabold text-xl">
                    Total Amount: ₹{total.toLocaleString()}
                  </div>
                  <button
                    className={`mt-3 w-full rounded-full font-bold py-3 transition-all ${
                        canProceedToBook
                        ? 'bg-yellow-400 text-slate-800 hover:-translate-y-0.5'
                        : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    }`}
                    onClick={() => {
                      if (canProceedToBook) {
                        alert("🧶 Tufting session booked successfully! We will contact you within 2 hours to confirm your creative adventure.");
                      } else {
                        alert("Please fill in all required fields.");
                      }
                    }}
                    disabled={!canProceedToBook}
                  >
                    🧶 PROCEED TO BOOK TUFTING SESSION
                  </button>
                </div>
              )}
            </TuftStep>
          </div>
        </div>
      </section>
    </div>
  );
};

const TuftStep = ({ title, color, isVisible, onBack, onNext, canNext, children }) => {
  if (!isVisible) return null;
  return (
    <div className="mb-6 bg-white rounded-2xl p-5 shadow">
      <div className="flex items-center justify-between gap-3 border-b pb-3 mb-4">
        <h4 className="text-lg font-bold" style={{ color }}>
          {title}
        </h4>
        <div className="flex gap-2">
          {onBack && (
            <button
              onClick={onBack}
              className="px-4 py-1.5 rounded-full bg-gray-600 text-white font-semibold hover:bg-gray-500 transition-colors"
            >
              ← Back
            </button>
          )}
          {onNext && (
            <button
              onClick={onNext}
              disabled={!canNext}
              className={`px-4 py-1.5 rounded-full font-semibold transition-all ${canNext
                ? "text-white hover:-translate-y-px"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              style={{ backgroundColor: canNext ? color : undefined }}
            >
              Next →
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default TuftingActivityPage;

```

# tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      // Add custom colors, fonts, etc., as needed (e.g., from your ArtGram CSS)
      colors: {
        primary: '#0f172a',
        secondary: '#e11d48',
        light: '#f1f5f9',
        highlight: '#facc15',
        tuftingPurple: '#9b59b6',
        tuftingPink: '#ec407a',
        warning: '#facc15',
        accent: '#e11d48',
        dark: '#0f172a',
      },
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

# vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

