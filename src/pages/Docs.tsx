import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { StarryBackground } from '@/components/StarryBackground';
import { ChevronRight, Workflow } from 'lucide-react';

const docsSections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `
      <p class="text-xl text-muted-foreground italic mb-8 leading-relaxed">Tasks grow. Complexity shouldn't.</p>
      
      <p class="mb-6 leading-relaxed">
        <strong class="text-foreground">Flowgen AI</strong> is an intelligent task planning and execution assistant designed to transform how you work. It analyzes your tasks, understands context, and breaks complex objectives into actionable steps.
      </p>
      
      <p class="mb-10 leading-relaxed">
        Whether you're managing development workflows, business operations, or research projects, Flowgen adapts to your needs and executes with precision.
      </p>
      
      <div class="glass-card p-5 inline-flex items-center gap-4">
        <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <span class="text-primary text-lg">✦</span>
        </div>
        <div>
          <div class="text-xs text-muted-foreground uppercase tracking-widest mb-1">Latest Release</div>
          <div class="font-mono text-foreground text-lg">v1.0.0</div>
        </div>
        <div class="w-2.5 h-2.5 rounded-full bg-accent animate-pulse ml-3" />
      </div>
    `,
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: `
      <p class="mb-8 text-lg leading-relaxed">Get up and running with Flowgen AI in minutes.</p>
      
      <h3 class="font-serif text-2xl mb-6 text-foreground">Quick Start</h3>
      
      <div class="space-y-4 mb-8">
        <p class="flex items-start gap-3"><span class="text-primary font-mono">01.</span> Sign up for a Flowgen account</p>
        <p class="flex items-start gap-3"><span class="text-primary font-mono">02.</span> Connect your workspace or project</p>
        <p class="flex items-start gap-3"><span class="text-primary font-mono">03.</span> Give Flowgen your first task</p>
      </div>
      
      <div class="code-block mb-8">
        <code class="text-primary">flowgen</code> <code class="text-muted-foreground">"Plan and execute the user onboarding redesign"</code>
      </div>
      
      <p class="text-muted-foreground leading-relaxed">
        Flowgen will analyze your task, create a structured plan, and begin execution automatically.
      </p>
    `,
  },
  {
    id: 'usage',
    title: 'Usage',
    content: `
      <p class="mb-8 text-lg leading-relaxed">Learn how to effectively use Flowgen for different types of tasks.</p>
      
      <h3 class="font-serif text-2xl mb-6 text-foreground">Task Types</h3>
      
      <div class="space-y-5 mb-10">
        <p><strong class="text-foreground">Development Tasks</strong> <span class="text-muted-foreground">— Code reviews, feature planning, debugging workflows</span></p>
        <p><strong class="text-foreground">Business Tasks</strong> <span class="text-muted-foreground">— Strategy planning, market analysis, competitor research</span></p>
        <p><strong class="text-foreground">Operations</strong> <span class="text-muted-foreground">— Process optimization, resource allocation, scheduling</span></p>
        <p><strong class="text-foreground">Research</strong> <span class="text-muted-foreground">— Data gathering, synthesis, report generation</span></p>
      </div>
      
      <h3 class="font-serif text-2xl mb-6 text-foreground">Best Practices</h3>
      
      <ul class="space-y-3 text-muted-foreground">
        <li class="flex items-start gap-3"><span class="text-primary">•</span> Be specific about your desired outcomes</li>
        <li class="flex items-start gap-3"><span class="text-primary">•</span> Provide context when available</li>
        <li class="flex items-start gap-3"><span class="text-primary">•</span> Review and refine generated plans</li>
        <li class="flex items-start gap-3"><span class="text-primary">•</span> Use feedback to improve future executions</li>
      </ul>
    `,
  },
  {
    id: 'capabilities',
    title: 'Capabilities',
    content: `
      <p class="mb-10 text-lg leading-relaxed">Explore what Flowgen AI can do for you.</p>
      
      <div class="grid gap-5">
        <div class="glass-card p-6">
          <h4 class="font-semibold text-foreground mb-3 text-lg">Intent Recognition</h4>
          <p class="text-muted-foreground leading-relaxed">Understands natural language and extracts actionable objectives.</p>
        </div>
        
        <div class="glass-card p-6">
          <h4 class="font-semibold text-foreground mb-3 text-lg">Smart Planning</h4>
          <p class="text-muted-foreground leading-relaxed">Creates logical, dependency-aware execution plans.</p>
        </div>
        
        <div class="glass-card p-6">
          <h4 class="font-semibold text-foreground mb-3 text-lg">Adaptive Execution</h4>
          <p class="text-muted-foreground leading-relaxed">Adjusts strategies based on real-time feedback and constraints.</p>
        </div>
        
        <div class="glass-card p-6">
          <h4 class="font-semibold text-foreground mb-3 text-lg">Context Memory</h4>
          <p class="text-muted-foreground leading-relaxed">Remembers past interactions to improve future performance.</p>
        </div>
      </div>
    `,
  },
  {
    id: 'faq',
    title: 'FAQ',
    content: `
      <div class="space-y-10">
        <div>
          <h3 class="font-medium text-foreground text-xl mb-4 flex items-start gap-3">
            <span class="text-primary">•</span> How does Flowgen handle complex tasks?
          </h3>
          <p class="text-muted-foreground leading-relaxed pl-6">Flowgen uses hierarchical decomposition to break complex tasks into manageable sub-tasks, each with clear dependencies and success criteria.</p>
        </div>
        
        <div>
          <h3 class="font-medium text-foreground text-xl mb-4 flex items-start gap-3">
            <span class="text-primary">•</span> Can I customize the execution workflow?
          </h3>
          <p class="text-muted-foreground leading-relaxed pl-6">Yes. Use the <code class="code-inline">--workflow</code> flag to specify custom templates, or define your own execution patterns in the configuration.</p>
        </div>
        
        <div>
          <h3 class="font-medium text-foreground text-xl mb-4 flex items-start gap-3">
            <span class="text-primary">•</span> What integrations are available?
          </h3>
          <p class="text-muted-foreground leading-relaxed pl-6">Flowgen integrates with popular tools including GitHub, Jira, Notion, Slack, and more. Check our integrations page for the full list.</p>
        </div>
        
        <div>
          <h3 class="font-medium text-foreground text-xl mb-4 flex items-start gap-3">
            <span class="text-primary">•</span> Is my data secure?
          </h3>
          <p class="text-muted-foreground leading-relaxed pl-6">Absolutely. All data is encrypted in transit and at rest. We follow SOC 2 Type II compliance and never share your data with third parties.</p>
        </div>
      </div>
    `,
  },
];

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const currentSection = docsSections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Full page starry background */}
      <div className="fixed inset-0 z-0">
        <StarryBackground />
      </div>

      <Navigation />

      <div className="pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-6">
          {/* Header with breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 font-sans">
              <Workflow className="w-4 h-4 text-primary" />
              <span className="uppercase tracking-widest font-medium">Documentation</span>
              <ChevronRight className="w-4 h-4" />
              <span className="uppercase tracking-widest text-foreground font-medium">
                {currentSection?.title}
              </span>
            </div>
          </motion.div>

          <div className="flex gap-16 lg:gap-24">
            {/* Sidebar */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-32">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-6 font-sans font-semibold">
                  Contents
                </h3>
                <nav className="space-y-2">
                  {docsSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`
                        w-full text-left px-5 py-3.5 rounded-xl text-sm font-sans font-medium transition-all
                        ${
                          activeSection === section.id
                            ? 'bg-secondary/80 text-foreground border border-border/50'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/40'
                        }
                      `}
                    >
                      <span className="flex items-center justify-between">
                        {section.title}
                        {activeSection === section.id && (
                          <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                        )}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 max-w-3xl">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="font-serif text-5xl md:text-7xl font-medium mb-12 text-foreground leading-tight">
                  {currentSection?.title}
                </h1>
                
                <div
                  className="prose prose-invert max-w-none text-muted-foreground font-sans leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: currentSection?.content || '' }}
                />
              </motion.div>

              {/* Mobile Navigation */}
              <div className="lg:hidden mt-16 pt-10 border-t border-border">
                <h3 className="text-sm font-semibold text-foreground mb-6 font-sans">
                  Jump to section
                </h3>
                <div className="flex flex-wrap gap-3">
                  {docsSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`
                        px-4 py-2 rounded-full text-sm font-sans font-medium transition-colors
                        ${
                          activeSection === section.id
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                        }
                      `}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocsPage;