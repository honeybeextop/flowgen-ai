import { motion } from 'framer-motion';

export function PerformanceSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background element */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[400px] rounded-full bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8">
            Think less.
            <br />
            <span className="italic text-gradient-primary">Execute smarter.</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed"
          >
            Flowgen AI transforms your raw intentions into structured, 
            intelligent workflows—automatically.
          </motion.p>
        </motion.div>

        {/* Stats or metrics (optional visual element) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '10x', label: 'Faster planning' },
            { value: '90%', label: 'Less cognitive load' },
            { value: '∞', label: 'Possibilities' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-5xl md:text-6xl font-medium text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
