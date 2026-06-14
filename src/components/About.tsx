import { User, Rocket } from 'lucide-react';
import Section from './Section';
import { aboutSection } from '../data/portfolioData';

export default function About() {
  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-accent-500/10">
            <User className="w-6 h-6 text-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            About Me
          </h2>
        </div>

        {/* Professional Summary */}
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
          {aboutSection.professionalSummary}
        </p>

        {/* Skills Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-accent-500/10">
            <Rocket className="w-6 h-6 text-accent-500" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
            Tech Stack & Skills
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-3">
          {aboutSection.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-accent-500/10 text-accent-600 dark:text-accent-400 rounded-full text-sm font-medium border border-accent-500/20 dark:border-accent-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}