import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ChevronRight, Sparkles } from 'lucide-react';

const docsSections = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `
      <p class="text-xl text-muted-foreground italic mb-6">Tasks grow. Complexity shouldn't.</p>
      
      <p class="mb-4">
        <strong class="text-foreground">Flowgen AI</strong> is an intelligent task planning and execution assistant designed to transform how you work. It analyzes your tasks, understands context, and breaks complex objectives into actionable steps.
      </p>
      
      <p class="mb-8">
        Whether you're managing development workflows, business operations, or research projects, Flowgen adapts to your needs and executes with precision.
      </p>
      
      <div class="glass-card p-4 inline-flex items-center gap-3 mb-8">
        <div class="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
          <span class="text-primary">✦</span>
        </div>
        <div>
          <div class="text-xs text-muted-foreground uppercase tracking-wider">Latest Release</div>
          <div class="font-mono text-foreground">v1.0.0</div>
        </div>
        <div class="w-2 h-2 rounded-full bg-accent animate-pulse ml-2" />
      </div>
    `,
  },
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: `
      <p class="mb-6">Get up and running with Flowgen AI in minutes.</p>
      
      <h3 class="font-serif text-2xl mb-4">Quick Start</h3>
      
      <p class="mb-4">1. Sign up for a Flowgen account</p>
      <p class="mb-4">2. Connect your workspace or project</p>
      <p class="mb-4">3. Give Flowgen your first task</p>
      
      <div class="code-block mb-6">
        <code class="text-primary">flowgen</code> <code class="text-muted-foreground">"Plan and execute the user onboarding redesign"</code>
      </div>
      
      <p class="text-muted-foreground">
        Flowgen will analyze your task, create a structured plan, and begin execution automatically.
      </p>
    `,
  },
  {
    id: 'usage',
    title: 'Usage',
    content: `
      <p class="mb-6">Learn how to effectively use Flowgen for different types of tasks.</p>
      
      <h3 class="font-serif text-2xl mb-4">Task Types</h3>
      
      <p class="mb-4"><strong class="text-foreground">Development Tasks</strong> - Code reviews, feature planning, debugging workflows</p>
      <p class="mb-4"><strong class="text-foreground">Business Tasks</strong> - Strategy planning, market analysis, competitor research</p>
      <p class="mb-4"><strong class="text-foreground">Operations</strong> - Process optimization, resource allocation, scheduling</p>
      <p class="mb-4"><strong class="text-foreground">Research</strong> - Data gathering, synthesis, report generation</p>
      
      <h3 class="font-serif text-2xl mb-4 mt-8">Best Practices</h3>
      
      <ul class="space-y-2 text-muted-foreground">
        <li>• Be specific about your desired outcomes</li>
        <li>• Provide context when available</li>
        <li>• Review and refine generated plans</li>
        <li>• Use feedback to improve future executions</li>
      </ul>
    `,
  },
  {
    id: 'capabilities',
    title: 'Capabilities',
    content: `
      <p class="mb-6">Explore what Flowgen AI can do for you.</p>
      
      <div class="grid gap-4">
        <div class="glass-card p-4">
          <h4 class="font-medium text-foreground mb-2">Intent Recognition</h4>
          <p class="text-sm text-muted-foreground">Understands natural language and extracts actionable objectives.</p>
        </div>
        
        <div class="glass-card p-4">
          <h4 class="font-medium text-foreground mb-2">Smart Planning</h4>
          <p class="text-sm text-muted-foreground">Creates logical, dependency-aware execution plans.</p>
        </div>
        
        <div class="glass-card p-4">
          <h4 class="font-medium text-foreground mb-2">Adaptive Execution</h4>
          <p class="text-sm text-muted-foreground">Adjusts strategies based on real-time feedback and constraints.</p>
        </div>
        
        <div class="glass-card p-4">
          <h4 class="font-medium text-foreground mb-2">Context Memory</h4>
          <p class="text-sm text-muted-foreground">Remembers past interactions to improve future performance.</p>
        </div>
      </div>
    `,
  },
  {
    id: 'faq',
    title: 'Troubleshooting & FAQ',
    content: `
      <div class="space-y-8">
        <div>
          <h3 class="font-medium text-foreground text-lg mb-2">• How does Flowgen handle complex tasks?</h3>
          <p class="text-muted-foreground">Flowgen uses hierarchical decomposition to break complex tasks into manageable sub-tasks, each with clear dependencies and success criteria.</p>
        </div>
        
        <div>
          <h3 class="font-medium text-foreground text-lg mb-2">• Can I customize the execution workflow?</h3>
          <p class="text-muted-foreground">Yes. Use the <code class="code-inline">--workflow</code> flag to specify custom templates, or define your own execution patterns in the configuration.</p>
        </div>
        
        <div>
          <h3 class="font-medium text-foreground text-lg mb-2">• What integrations are available?</h3>
          <p class="text-muted-foreground">Flowgen integrates with popular tools including GitHub, Jira, Notion, Slack, and more. Check our integrations page for the full list.</p>
        </div>
        
        <div>
          <h3 class="font-medium text-foreground text-lg mb-2">• Is my data secure?</h3>
          <p class="text-muted-foreground">Absolutely. All data is encrypted in transit and at rest. We follow SOC 2 Type II compliance and never share your data with third parties.</p>
        </div>
      </div>
    `,
  },
];

const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const currentSection = docsSections.find((s) => s.id === activeSection);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <span className="uppercase tracking-wider">Docs</span>
            <ChevronRight className="w-4 h-4" />
            <span className="uppercase tracking-wider text-primary">
              {currentSection?.title}
            </span>
          </div>

          <div className="flex gap-12">
            {/* Sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-28">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  Contents
                </h3>
                <nav className="space-y-1">
                  {docsSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`
                        w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all
                        ${
                          activeSection === section.id
                            ? 'bg-secondary text-foreground'
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        }
                      `}
                    >
                      <span className="flex items-center justify-between">
                        {section.title}
                        {activeSection === section.id && (
                          <span className="w-2 h-2 rounded-full bg-primary" />
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="font-serif text-5xl md:text-6xl font-medium mb-8 text-foreground">
                  {currentSection?.title}
                </h1>
                
                <div
                  className="prose prose-invert max-w-none text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: currentSection?.content || '' }}
                />
              </motion.div>

              {/* Mobile Navigation */}
              <div className="lg:hidden mt-12 pt-8 border-t border-border">
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Jump to section
                </h3>
                <div className="flex flex-wrap gap-2">
                  {docsSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`
                        px-3 py-1.5 rounded-full text-sm transition-colors
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
