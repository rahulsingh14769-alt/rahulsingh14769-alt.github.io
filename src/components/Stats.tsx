import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Briefcase, Building2, FolderOpen, Wrench } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  { value: 5, suffix: '+', label: 'Years Experience', icon: Briefcase },
  { value: 3, suffix: '', label: 'Companies', icon: Building2 },
  { value: 3, suffix: '', label: 'Major Projects', icon: FolderOpen },
  { value: 18, suffix: '+', label: 'Tech Skills', icon: Wrench },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.floor(latest)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="p-2 rounded-xl bg-accent-500/10 mb-3">
                  <Icon className="w-5 h-5 text-accent-500" />
                </div>
                <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}