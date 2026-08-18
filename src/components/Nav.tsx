"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 1. Full Top Navigation Bar (Scrolls naturally with top of page) */}
      <header className="nav-header">
        <nav className="nav" id="main-nav" aria-label="Main Navigation">
          <Link href="/" className="nav__name">
            Garv Danwani
          </Link>

          <ul className="nav__links">
            <li>
              <Link href="/#work" className="nav__link">
                Work
              </Link>
            </li>
            <li>
              <Link href="/#detour" className="nav__link">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav__right-mobile">
            <button
              className="nav__hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              id="nav-toggle"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          <div className={`nav__mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
            <Link href="/#work" onClick={() => setMobileMenuOpen(false)}>
              Work
            </Link>
            <Link href="/#detour" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* 2. Top-Left Floating Sticky Capsule on Scroll */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            className="nav-capsule-wrapper"
            initial={{ opacity: 0, y: -16, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -14, scale: 0.92 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            ref={dropdownRef}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`nav-capsule ${dropdownOpen ? "nav-capsule--active" : ""}`}
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={dropdownOpen}
            >
              <span className="nav-capsule__dot" aria-hidden="true" />
              <span className="nav-capsule__name">Garv Danwani</span>
              <svg
                className={`nav-capsule__chevron ${dropdownOpen ? "rotate" : ""}`}
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown Options */}
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  className="nav-capsule__dropdown"
                  initial={{ opacity: 0, y: 6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.96 }}
                  transition={{ duration: 0.16, ease: "easeOut" }}
                >
                  <Link
                    href="/#work"
                    className="nav-capsule__item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>Work</span>
                    <span className="nav-capsule__item-arrow">&rarr;</span>
                  </Link>
                  <Link
                    href="/#detour"
                    className="nav-capsule__item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>About</span>
                    <span className="nav-capsule__item-arrow">&rarr;</span>
                  </Link>
                  <Link
                    href="/#contact"
                    className="nav-capsule__item"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>Contact</span>
                    <span className="nav-capsule__item-arrow">&rarr;</span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
