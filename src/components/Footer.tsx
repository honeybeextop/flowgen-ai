import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  resources: [
    { label: 'Documentation', href: '/docs' },
    { label: 'API Reference', href: '/docs' },
  ],
  project: [
    { label: 'GitHub', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  connect: [
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
};

export function Footer() {
  return (
    <footer className="relative py-20 border-t border-border bg-background/80 backdrop-blur-sm">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">
              Ready to <span className="italic text-gradient-primary">flow?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-md font-sans">
              Transform your workflow with intelligent task planning and execution.
            </p>
            <Button variant="hero" size="lg" className="group font-medium">
              Get Started Free
              <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-8"
          >
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider font-sans">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider font-sans">
                Project
              </h3>
              <ul className="space-y-3">
                {footerLinks.project.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider font-sans">
                Connect
              </h3>
              <ul className="space-y-3">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm font-sans"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
              <Workflow className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-sm text-muted-foreground font-sans">
              © 2025 Flowgen AI. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground font-sans">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
