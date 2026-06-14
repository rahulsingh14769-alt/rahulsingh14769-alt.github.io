import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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
      transition={{ duration: 0.2 }}
      className={`
        relative backdrop-blur-lg rounded-2xl shadow-xl
        bg-white/10 dark:bg-slate-900/40
        border border-white/20 dark:border-slate-700/50
        ${featured ? 'border-l-4 border-l-accent-500 dark:border-l-accent-500 shadow-2xl' : ''}
        p-6 flex flex-col h-full
      `}
    >
      {/* Type Badge */}
      <span
        className={`
          inline-flex self-start px-3 py-1 text-xs font-medium rounded-full mb-3
          ${type === 'Work' 
            ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' 
            : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
          }
        `}
      >
        {type}
      </span>

      {/* Title */}
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-grow">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs bg-accent-500/10 text-accent-600 dark:text-accent-400 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub Link Button */}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            inline-flex items-center justify-center gap-2 px-4 py-2
            text-sm font-medium rounded-lg transition-colors duration-200
            ${featured
              ? 'bg-accent-500 hover:bg-accent-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
            }
          `}
        >
          <Github className="w-4 h-4" />
          View on GitHub
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </motion.div>
  );
}