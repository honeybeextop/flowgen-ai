import { motion } from 'framer-motion';
import { Zap, Brain, Cog, Layers } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Zero-Friction Tasks',
    description: 'Give any task. Flowgen understands intent instantly without complex prompts or configurations.',
  },
  {
    icon: Brain,
    title: 'Intelligent Planning',
    description: 'Breaks complex tasks into logical, executable steps with smart dependency resolution.',
  },
  {
    icon: Cog,
    title: 'Execution Engine',
    description: 'Automatically completes or assists with execution, adapting to context and constraints.',
  },
  {
    icon: Layers,
    title: 'Workflow-Aware',
    description: 'Works seamlessly across development, business, research, and operations tasks.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function FeaturesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Engineered for <span className="italic text-gradient-primary">velocity.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Built to reduce thinking overhead, not add it.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group glass-card p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/10">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-2xl font-medium mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
