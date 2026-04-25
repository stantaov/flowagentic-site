import { motion } from 'framer-motion';
import {
  ArrowRight,
  Blocks,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  DatabaseZap,
  GitBranch,
  LineChart,
  Mail,
  MessagesSquare,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';

const calendlyUrl = 'https://calendly.com/flowagentic/intro-call';

const services = [
  {
    icon: Bot,
    title: 'AI agent workflows',
    copy: 'Design and deploy agents that triage requests, enrich data, route work, and complete repeatable business tasks.',
  },
  {
    icon: Blocks,
    title: 'Custom integrations',
    copy: 'Connect CRMs, inboxes, data warehouses, internal tools, and third-party APIs into reliable automated flows.',
  },
  {
    icon: DatabaseZap,
    title: 'RAG assistants',
    copy: 'Build assistants grounded in your documents, knowledge bases, tickets, SOPs, and operational data.',
  },
  {
    icon: ShieldCheck,
    title: 'Production AI engineering',
    copy: 'Ship observable, maintainable AI systems with guardrails, evaluation loops, and clean handoff documentation.',
  },
];

const useCases = [
  'Lead qualification and CRM updates',
  'Support ticket routing and response drafts',
  'Document intake, extraction, and review',
  'Internal knowledge assistants for teams',
  'Operations reporting and daily briefs',
  'Back-office task automation across tools',
];

const process = [
  {
    step: '01',
    title: 'Map the workflow',
    copy: 'We identify the manual steps, business rules, data sources, and risk points before writing code.',
  },
  {
    step: '02',
    title: 'Prototype with real data',
    copy: 'We validate the automation against representative inputs so the result fits the way your team actually works.',
  },
  {
    step: '03',
    title: 'Build for production',
    copy: 'We integrate APIs, add monitoring, document failure paths, and prepare the system for daily use.',
  },
  {
    step: '04',
    title: 'Improve continuously',
    copy: 'We review outputs, tune prompts and retrieval, and expand coverage once the first workflow proves value.',
  },
];

const metrics = [
  ['4-6 weeks', 'Typical first automation launch'],
  ['API-first', 'Integrations built for existing systems'],
  ['Human-in-loop', 'Controls for review and approval'],
];

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-graphite sm:text-lg">{copy}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBFCFD] text-ink">
      <header className="sticky top-0 z-50 border-b border-line/70 bg-white/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="FlowAgentic home">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-white">
              <Workflow size={19} />
            </span>
            <span className="text-lg font-semibold tracking-tight">FlowAgentic</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-graphite md:flex">
            <a href="#services" className="hover:text-ink">Services</a>
            <a href="#use-cases" className="hover:text-ink">Use cases</a>
            <a href="#process" className="hover:text-ink">Process</a>
          </div>
          <a
            href={calendlyUrl}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-ink px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-teal focus:outline-none focus:ring-4 focus:ring-mint"
          >
            Book a call
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-line bg-white">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(15,118,110,0.08),transparent_42%,rgba(29,78,216,0.08))]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-28">
            <FadeIn className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal/20 bg-teal/8 px-3 py-1 text-sm font-medium text-teal">
                <Sparkles size={15} />
                AI automation for operational teams
              </div>
              <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl lg:text-6xl">
                Build AI agents that remove manual work from your business.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite">
                FlowAgentic designs and ships agentic workflows, custom integrations, RAG assistants, and production-ready AI systems for teams that need automation to work beyond the demo.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={calendlyUrl}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-6 text-base font-semibold text-white shadow-soft transition hover:bg-teal focus:outline-none focus:ring-4 focus:ring-mint"
                >
                  Book an intro call
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-line bg-white px-6 text-base font-semibold text-ink transition hover:border-teal/50 hover:text-teal"
                >
                  Explore services
                  <ChevronRight size={18} />
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:pl-6">
              <div className="rounded-2xl border border-line bg-white p-4 shadow-soft">
                <div className="rounded-xl border border-line bg-cloud p-4">
                  <div className="flex items-center justify-between border-b border-line pb-4">
                    <div>
                      <p className="text-sm font-semibold text-ink">Workflow console</p>
                      <p className="text-xs text-graphite">Live automation blueprint</p>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Ready</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      ['Capture request', MessagesSquare, 'Intake from inbox, form, or chat'],
                      ['Retrieve context', BrainCircuit, 'Search policies, CRM, docs, and prior tickets'],
                      ['Execute action', GitBranch, 'Update tools and route approvals'],
                      ['Report outcome', LineChart, 'Log results with reviewable audit trail'],
                    ].map(([label, Icon, description], index) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                        className="flex items-center gap-4 rounded-xl border border-line bg-white p-4"
                      >
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-mint text-teal">
                          <Icon size={20} />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold text-ink">{label}</p>
                          <p className="mt-1 text-sm leading-6 text-graphite">{description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="border-b border-line bg-cloud py-10">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
            {metrics.map(([value, label]) => (
              <div key={value} className="rounded-xl border border-line bg-white px-5 py-5">
                <p className="text-2xl font-semibold text-ink">{value}</p>
                <p className="mt-2 text-sm leading-6 text-graphite">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Services"
              title="Automation systems built around your operations"
              copy="We focus on practical AI engineering: agent workflows, connected systems, grounded assistants, and the operational details needed to keep them reliable."
            />
          </FadeIn>
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, copy }, index) => (
              <FadeIn key={title} delay={index * 0.05}>
                <div className="h-full rounded-xl border border-line bg-white p-6 shadow-[0_1px_0_rgba(16,24,40,0.04)] transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-white">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="use-cases" className="border-y border-line bg-[#F7FAFC] px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cobalt">Use cases</p>
              <h2 className="mt-4 text-3xl font-semibold text-ink sm:text-4xl">
                Start with one high-friction workflow, then expand.
              </h2>
              <p className="mt-5 text-base leading-8 text-graphite sm:text-lg">
                The best AI automation projects begin where teams already lose time: switching between tools, reading long histories, copying data, and waiting for approvals.
              </p>
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-line bg-white p-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-cobalt">
                  <Network size={20} />
                </span>
                <p className="text-sm leading-6 text-graphite">
                  We design for your existing stack first, so automation supports the workflows your team already depends on.
                </p>
              </div>
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((item, index) => (
                <FadeIn key={item} delay={index * 0.04}>
                  <div className="flex min-h-24 items-start gap-3 rounded-xl border border-line bg-white p-5">
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mint text-teal">
                      <Check size={16} />
                    </span>
                    <p className="text-base font-medium leading-7 text-ink">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-white px-5 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeader
              eyebrow="Process"
              title="A practical path from workflow audit to live automation"
              copy="Each engagement is structured to reduce uncertainty early, prove value with real inputs, and hand over systems your team can trust."
            />
          </FadeIn>
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 lg:grid-cols-4">
            {process.map(({ step, title, copy }, index) => (
              <FadeIn key={step} delay={index * 0.05}>
                <div className="relative h-full rounded-xl border border-line bg-[#FBFCFD] p-6">
                  <p className="text-sm font-semibold text-teal">{step}</p>
                  <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-graphite">{copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-ink px-5 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">Book a call</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl">
                Have a workflow that should not be manual anymore?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Share the workflow, systems involved, and what success should look like. We will help identify whether an AI agent, RAG assistant, integration, or simpler automation is the right fit.
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/7 p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white text-ink">
                    <Zap size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">Intro automation call</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      A focused conversation about the highest-leverage workflow to automate first.
                    </p>
                  </div>
                </div>
                <a
                  href={calendlyUrl}
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-5 text-base font-semibold text-ink transition hover:bg-mint focus:outline-none focus:ring-4 focus:ring-teal/40"
                >
                  Open Calendly
                  <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:hello@flowagentic.com"
                  className="mt-3 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/14 px-5 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  <Mail size={18} />
                  hello@flowagentic.com
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-graphite sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-white">
              <Workflow size={17} />
            </span>
            <span className="font-semibold">FlowAgentic</span>
          </div>
          <p>AI agents, automation, integrations, and RAG systems.</p>
          <p>&copy; {new Date().getFullYear()} FlowAgentic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
