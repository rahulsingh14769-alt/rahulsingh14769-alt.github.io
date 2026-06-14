import { Briefcase } from 'lucide-react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

export default function Work() {
  return (
    <Section id="work" className="bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-accent-500/10">
            <Briefcase className="w-6 h-6 text-accent-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Work & Projects
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
          A selection of projects showcasing my expertise in microservices architecture, 
          system modernization, and full-stack development.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              type={project.type}
              techStack={project.techStack}
              link={project.link || undefined}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}