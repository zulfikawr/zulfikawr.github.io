import { useState, useEffect } from 'react';
import { FiArrowLeft, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // if scroll down
          setShowNavbar(false);
        } else {
          // if scroll up
          setShowNavbar(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
    return undefined;
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
    >
      <div className="flex justify-between items-center p-4 bg-transparent">
        <Link
          href="/blog"
          className="px-4 py-2 ml-2 mt-2 md:mt-4 md:ml-4 rounded-lg custom-card"
        >
          <FiArrowLeft className="w-5 h-auto" />
        </Link>
        <button
          type="button"
          className="px-4 py-2 mr-2 mt-2 md:mt-4 md:mr-4 rounded-lg custom-card"
          onClick={toggleTheme}
        >
          <span>
            {theme === 'dark' ? (
              <FiSun className="w-5 h-auto" />
            ) : (
              <FiMoon className="w-5 h-auto" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
}
