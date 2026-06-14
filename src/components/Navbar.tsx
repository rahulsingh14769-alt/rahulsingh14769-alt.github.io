import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/#/about', label: 'About' },
  { path: '/#/work', label: 'Work' },
  { path: '/#/contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.hash === '' || location.hash === '#/';
    }
    return location.hash === path.replace('/#', '');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold text-indigo-500">Rahul Singh</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
              Senior Java Fullstack Developer
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-indigo-500 border-b-2 border-indigo-500'
                    : 'text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Resume.pdf"
              download
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-indigo-500'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/Resume.pdf"
                download
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors duration-200 text-center"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}