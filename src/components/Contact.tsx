import { Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';
import Section from './Section';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/-/g, '')}`,
      external: false,
    },
    {
      icon: Linkedin,
      label: personalInfo.linkedInLabel,
      value: 'Connect on LinkedIn',
      href: personalInfo.linkedInUrl,
      external: true,
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Send a message',
      href: `https://wa.me/${personalInfo.phone.replace(/-/g, '').replace('+', '')}`,
      external: true,
    },
  ];

  return (
    <Section id="contact" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-2xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Feel free to reach out for collaborations, opportunities, or just a friendly conversation.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent-500 dark:hover:border-accent-500 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="p-3 rounded-lg bg-accent-500/10 group-hover:bg-accent-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent-500" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-base font-medium text-slate-900 dark:text-slate-100">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}