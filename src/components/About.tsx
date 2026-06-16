import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { User, Rocket, GraduationCap } from 'lucide-react';
import Section from './Section';
import { aboutSection, education } from '../data/portfolioData';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <Section id="about" className="bg-slate-50/70 dark:bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-indigo-500/10">
            <User className="w-8 h-8 text-indigo-500" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
              About Me
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Background, skills, and what drives me
            </p>
          </div>
        </div>

        {/* Profile Visual */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col items-center mb-12"
        >
          {/* Rotating Gradient Ring */}
          <div className="relative w-40 h-40 mb-6">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #6366f1, #10b981, #a855f7, #6366f1)',
                padding: '3px',
              }}
            >
              <div className="w-full h-full rounded-full bg-slate-50 dark:bg-slate-900" />
            </motion.div>
            {/* Inner static ring */}
            <div className="absolute inset-[14px] rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
              <span className="text-3xl font-bold text-accent-500">RS</span>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 dark:border-slate-700/60 shadow-sm mb-12">
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {aboutSection.professionalSummary}
          </p>
        </div>

        {/* Skills Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-indigo-500/10">
            <Rocket className="w-6 h-6 text-indigo-500" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Tech Stack & Skills
          </h3>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-3 mb-16">
          {aboutSection.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Education Section */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-xl bg-emerald-500/10">
            <GraduationCap className="w-6 h-6 text-emerald-500" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-100">
            Education
          </h3>
        </div>

        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree}
              className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/60 shadow-sm"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    {edu.degree}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {edu.location}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {edu.duration}
                  </p>
                  {edu.details && (
                    <p className="text-sm text-indigo-500 mt-1 font-medium">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}