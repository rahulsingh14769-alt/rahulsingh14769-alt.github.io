import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  type: 'Work' | 'Personal';
  techStack: string[];
  link?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  type,
  techStack,
  link,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`
        group relative rounded-2xl backdrop-blur-sm
        bg-white/80 dark:bg-slate-800/50
        border border-slate-200/60 dark:border-slate-700/60
        ${featured ? 'ring-1 ring-indigo-500/20 dark:ring-indigo-500/20 shadow-lg shadow-indigo-500/5' : 'shadow-sm'}
        p-6 flex flex-col h-full
        hover:shadow-md hover:border-indigo-500/30 dark:hover:border-indigo-500/30
        transition-all duration-300
      `}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-indigo-500 to-emerald-500 text-white text-xs font-medium rounded-full shadow-sm">
          <Star className="w-3 h-3" />
          Featured
        </div>
      )}

      {/* Type Badge */}
      <span
        className={`
          inline-flex self-start px-3 py-1 text-xs font-medium rounded-full mb-4
          ${type === 'Work' 
            ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' 
            : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
          }
        `}
      >
        {type}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-200">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-5 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-5">
        {techStack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs bg-slate-100/80 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-md border border-slate-200/60 dark:border-slate-600/30"
          >
            {tech}
          </span>
        ))}
        {techStack.length > 6 && (
          <span className="px-2.5 py-1 text-xs bg-slate-100/80 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 rounded-md border border-slate-200/60 dark:border-slate-600/30">
            +{techStack.length - 6} more
          </span>
        )}
      </div>

      {/* Links */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center justify-center gap-2 px-4 py-2.5
            text-sm font-medium rounded-xl transition-all duration-200
            mt-auto
            ${featured
              ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-sm hover:shadow-md'
              : 'bg-slate-100/80 dark:bg-slate-700/50 hover:bg-slate-200/80 dark:hover:bg-slate-600/50 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-600/30'
            }
          `}
        >
          <Github className="w-4 h-4" />
          View on GitHub
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      )}
    </motion.div>
  );
}