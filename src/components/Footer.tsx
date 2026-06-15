import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/work', label: 'Work' },
    { path: '/contact', label: 'Contact' },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedInUrl,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/rahulsingh14769-alt',
    },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
    },
  ];

  return (
    <footer className="py-12 border-t border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-all duration-200"
                aria-label={link.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-slate-500 dark:text-slate-500">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}