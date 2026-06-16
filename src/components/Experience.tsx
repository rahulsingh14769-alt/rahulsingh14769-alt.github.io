import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import Section from './Section';
import { workExperiences, education } from '../data/portfolioData';

const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};

const achievementContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const achievementItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-200px' });

  return (
    <Section id="experience" className="bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="p-3 rounded-2xl bg-indigo-500/10">
            <Briefcase className="w-8 h-8 text-indigo-500" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
              Experience
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              My professional journey in software development
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div
            ref={lineRef}
            variants={lineVariants}
            initial="hidden"
            animate={lineInView ? 'visible' : 'hidden'}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-emerald-500/30 origin-top"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {workExperiences.map((job, index) => {
              const itemRef = useRef<HTMLDivElement>(null);
              const inView = useInView(itemRef, { once: true, margin: '-100px' });

              return (
                <motion.div
                  key={job.id}
                  ref={itemRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
                >
                  <div className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Timeline Dot */}
                    <motion.div
                      whileHover={{ scale: 1.3 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white dark:border-slate-900 transform -translate-x-1/2 z-10 shadow-lg shadow-indigo-500/30 cursor-pointer"
                    />

                    {/* Content Card */}
                    <div className={`flex-1 ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}>
                      <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-l-indigo-500">
                        {/* Company */}
                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-1">
                          {job.company}
                        </h3>

                        {/* Title */}
                        <p className="text-indigo-500 font-medium mb-2">
                          {job.title}
                        </p>

                        {/* Duration */}
                        <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                          {job.duration}
                          {job.location && ` • ${job.location}`}
                        </p>

                        {/* Staggered Achievements */}
                        <motion.ul
                          variants={achievementContainerVariants}
                          initial="hidden"
                          animate={inView ? 'visible' : 'hidden'}
                          className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}
                        >
                          {job.achievements.map((achievement, i) => (
                            <motion.li
                              key={i}
                              variants={achievementItemVariants}
                              className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                            >
                              {index % 2 === 0 ? (
                                <>
                                  {achievement}
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500/60 ml-2 mb-0.5" />
                                </>
                              ) : (
                                <>
                                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500/60 mr-2 mb-0.5" />
                                  {achievement}
                                </>
                              )}
                            </motion.li>
                          ))}
                        </motion.ul>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20 pt-12 border-t border-slate-200/60 dark:border-slate-800/60">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="p-3 rounded-2xl bg-emerald-500/10">
              <GraduationCap className="w-8 h-8 text-emerald-500" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
                Education
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Academic background and qualifications
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 dark:border-slate-700/60 shadow-sm"
          >
            {education.map((edu) => (
              <div key={edu.degree}>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {edu.degree}
                </h4>
                <p className="text-slate-700 dark:text-slate-300 mt-1">
                  {edu.institution}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {edu.location} • {edu.duration}
                </p>
                {edu.details && (
                  <p className="text-sm text-indigo-500 mt-2 font-medium">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}