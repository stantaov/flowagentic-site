import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  ChevronRight,
  Clock3,
  DatabaseZap,
  FileSearch,
  Handshake,
  Layers3,
  LineChart,
  LockKeyhole,
  Mail,
  Network,
  Rocket,
  Route,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';
import { WebGLShader } from '@/components/ui/web-gl-shader';

const calendlyUrl = 'https://calendly.com/flowagentic/intro-call';

const services = [
  {
    icon: Bot,
    visual: '/service-agent-workflows-bg.jpg',
    title: 'Agentic workflow automation',
    copy: 'Turn rule-heavy, repetitive processes into AI-assisted workflows that can reason, route, draft, update systems, and escalate exceptions.',
    result: 'Best for ops, support, sales, and admin workflows',
  },
  {
    icon: Network,
    visual: '/service-integrations-bg.jpg',
    title: 'Systems and API integration',
    copy: 'Connect CRMs, inboxes, spreadsheets, internal apps, databases, and third-party APIs so automation works inside your actual stack.',
    result: 'Built around the tools your team already uses',
  },
  {
    icon: DatabaseZap,
    visual: '/service-rag-bg.jpg',
    title: 'RAG assistants and knowledge systems',
    copy: 'Create assistants grounded in your SOPs, docs, tickets, product data, and policies with retrieval flows your team can trust.',
    result: 'Accurate answers from company-specific context',
  },
  {
    icon: ShieldCheck,
    visual: '/service-production-bg.jpg',
    title: 'Production AI engineering',
    copy: 'Ship AI systems with observability, review paths, evaluation loops, prompt/version control, and documentation for long-term ownership.',
    result: 'Designed for daily operations, not just demos',
  },
];

const useCases = [
  {
    visual: '/usecase-lead-operations.jpg',
    title: 'Lead operations',
    copy: 'Qualify inbound leads, enrich records, draft follow-ups, and keep CRM stages current.',
  },
  {
    visual: '/usecase-customer-support.jpg',
    title: 'Customer support',
    copy: 'Route tickets, retrieve context, prepare response drafts, and flag edge cases for humans.',
  },
  {
    visual: '/usecase-document-processing.jpg',
    title: 'Document processing',
    copy: 'Extract structured data, summarize files, validate against rules, and prepare review queues.',
  },
  {
    visual: '/usecase-internal-knowledge.jpg',
    title: 'Internal knowledge',
    copy: 'Give teams a grounded assistant across SOPs, docs, tickets, and company systems.',
  },
  {
    visual: '/usecase-reporting-workflows.jpg',
    title: 'Reporting workflows',
    copy: 'Create daily briefs, exception reports, account summaries, and operational updates.',
  },
  {
    visual: '/usecase-back-office-automation.jpg',
    title: 'Back-office automation',
    copy: 'Coordinate tasks across email, forms, spreadsheets, databases, and approval tools.',
  },
];

const process = [
  {
    step: '01',
    visual: '/process-workflow-audit-bg.jpg',
    title: 'Workflow audit',
    copy: 'We map the manual process, handoffs, systems, decision rules, data quality issues, and measurable automation target.',
  },
  {
    step: '02',
    visual: '/process-prototype-bg.jpg',
    title: 'Prototype with real inputs',
    copy: 'We validate the agent or assistant against real examples so accuracy, escalation paths, and UX are proven early.',
  },
  {
    step: '03',
    visual: '/process-integrate-harden-bg.jpg',
    title: 'Integrate and harden',
    copy: 'We connect production tools, add guardrails, logging, monitoring, retry paths, and human review where needed.',
  },
  {
    step: '04',
    visual: '/process-launch-improve-bg.jpg',
    title: 'Launch and improve',
    copy: 'We deploy, document, train the team, review outputs, and expand once the first workflow is performing.',
  },
];

const stats = [
  ['4-6 weeks', 'Typical first workflow launch'],
  ['Human-in-loop', 'Review and approval paths included'],
  ['API-first', 'Built for existing business systems'],
  ['Production-ready', 'Monitoring, logging, and handoff docs'],
];

const stack = ['OpenAI', 'LangChain', 'Zapier', 'Airtable', 'Salesforce', 'HubSpot', 'Postgres', 'AWS'];
const capabilities = ['AI-Driven Solutions', 'Serverless Computing', 'Cloud Integration', 'Data Insight', 'Analytics', 'API Security', 'Real-Time', 'Workflow Automation'];

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, copy, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'mx-0 text-left' : 'mx-auto text-center';
  const titleColor = light ? 'text-mint' : 'text-ink';
  const copyColor = light ? 'text-mint/75' : 'text-graphite/80';

  return (
    <div className={`${alignment} max-w-3xl`}>
      <p className="text-base font-semibold uppercase tracking-[0.18em] text-teal sm:text-lg">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight sm:text-5xl ${titleColor}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${copyColor}`}>{copy}</p>
    </div>
  );
}

function CapabilityMarquee() {
  const row = [...capabilities, ...capabilities];

  return (
    <div className="hidden overflow-hidden border-y border-mint/[0.12] bg-graphite py-5" aria-hidden="true">
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        className="flex w-max gap-4"
      >
        {row.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-3 rounded-full border border-mint/[0.14] bg-mint/[0.08] px-5 py-3 text-sm font-semibold text-mint">
            <Sparkles size={16} className="text-teal" />
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-mint">
      <header className="sticky top-0 z-50 border-b border-mint/10 bg-ink/[0.92] backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="FlowAgentic home">
            <img src="/flow-logo.png" alt="" className="h-10 w-10 rounded-full object-cover" />
            <span className="text-lg font-semibold tracking-tight text-white">FlowAgentic</span>
          </a>
          <div className="hidden items-center gap-7 rounded-full border border-mint/10 bg-white/[0.05] px-6 py-3 text-sm font-medium text-mint/70 md:flex">
            <a href="#services" className="hover:text-white">Why Us</a>
            <a href="#mission" className="hover:text-white">Mission</a>
            <a href="#use-cases" className="hover:text-white">Works</a>
            <a href="#process" className="hover:text-white">Services</a>
          </div>
          <a
            href={calendlyUrl}
            className="btn-gradient inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-teal/[0.35]"
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-ink px-5 pb-16 pt-12 sm:px-6 lg:px-8">
          <WebGLShader className="top-[-96px] h-[calc(100%+96px)] opacity-100" />
          <div className="absolute inset-0 bg-hero-grid opacity-[0.08]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(255,255,255,0.07),transparent_30%),radial-gradient(circle_at_50%_54%,rgba(255,25,4,0.08),transparent_36%),linear-gradient(180deg,rgba(4,5,6,0.04),rgba(4,5,6,0.72)_96%)]" />
          <div className="relative mx-auto flex max-w-7xl justify-center py-8 lg:min-h-[680px] lg:items-center">
            <FadeIn className="w-full text-center">
              <div className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
              <h1 className="mx-auto max-w-6xl text-5xl font-semibold leading-[0.98] tracking-normal text-mint sm:text-7xl lg:text-8xl">
                Turn manual workflows into production AI systems.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-mint/75 sm:text-xl">
                FlowAgentic helps Canadian businesses design, build, and deploy AI agents, RAG assistants, and custom integrations that automate real operational work.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={calendlyUrl}
                  className="btn-gradient inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition focus:outline-none focus:ring-4 focus:ring-teal/[0.35]"
                >
                  Book an automation audit
                  <ArrowRight size={18} />
                </a>
                <a
                  href="#services"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-mint/[0.18] bg-white/[0.07] px-6 text-base font-semibold text-mint transition hover:bg-white/[0.12]"
                >
                  Learn More
                  <ChevronRight size={18} />
                </a>
              </div>
              </div>
            </FadeIn>

          </div>

          <FadeIn delay={0.16} className="relative mx-auto mt-8 max-w-7xl">
            <p className="text-center text-sm font-medium text-mint/60">Built for teams that need AI inside daily operations</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {stack.map((item) => (
                <div key={item} className="rounded-2xl border border-mint/10 bg-white/[0.06] px-4 py-3 text-center text-sm font-semibold text-mint/75">
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </section>

        <CapabilityMarquee />

        <section id="services" className="bg-cloud px-5 py-20 text-ink sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <SectionHeader
                eyebrow="Why Us"
                title="AI automation that connects strategy, engineering, and execution"
                copy="The goal is not another chatbot. It is a dependable workflow system that understands context, uses your tools, and gives your team control where judgment matters."
              />
            </FadeIn>
            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {services.map(({ icon: Icon, visual, title, copy, result }, index) => (
                <FadeIn key={title} delay={index * 0.05}>
                  <div className="group flex h-full flex-col rounded-[28px] border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1">
                    <div className="relative min-h-44 overflow-hidden rounded-2xl border border-white/[0.08] bg-ink p-5 text-mint">
                      <img src={visual} alt="" className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-105" />
                      <div className="relative">
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-teal shadow-[0_16px_36px_rgba(0,0,0,0.22)]">
                          <Icon size={22} />
                        </span>
                        <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-7 text-graphite/80">{copy}</p>
                    <div className="mt-auto flex items-start gap-2 pt-6 text-sm font-semibold text-teal">
                      <Check className="mt-0.5 shrink-0" size={16} />
                      <span>{result}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="mission" className="bg-ink px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <FadeIn>
              <SectionHeader
                align="left"
                light
                eyebrow="Our Mission"
                title="Start with the process. Then choose the right AI architecture."
                copy="Some workflows need an autonomous agent. Others need retrieval, deterministic automation, or a human approval queue. We scope the system around the operational job instead of forcing every problem into the same AI pattern."
              />
              <a
                href={calendlyUrl}
                className="btn-gradient mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition"
              >
                Book A Call
                <ArrowRight size={18} />
              </a>
            </FadeIn>

            <FadeIn delay={0.08}>
              <div className="rounded-[32px] border border-mint/[0.12] bg-graphite p-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    [FileSearch, 'SOP and data review'],
                    [Route, 'Exception routing'],
                    [LockKeyhole, 'Access and approval controls'],
                    [Clock3, 'Monitoring after launch'],
                  ].map(([Icon, label]) => (
                    <div key={label} className="rounded-2xl border border-mint/[0.12] bg-white/[0.06] p-5">
                      <Icon className="text-teal" size={22} />
                      <p className="mt-5 font-semibold text-mint">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="use-cases" className="bg-cloud px-5 py-20 text-ink sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <SectionHeader
                eyebrow="Workflows"
                title="High-leverage workflows to automate first"
                copy="The first project should be narrow enough to launch quickly and important enough to prove measurable value."
              />
            </FadeIn>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map(({ visual, title, copy }, index) => (
                <FadeIn key={title} delay={index * 0.04}>
                  <div className="group relative min-h-72 overflow-hidden rounded-[28px] border border-line bg-ink p-6 shadow-[0_1px_0_rgba(5,17,78,0.06)] transition hover:-translate-y-1 hover:shadow-soft">
                    <img src={visual} alt="" className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-ink/[0.14] via-ink/[0.34] to-ink/[0.84]" />
                    <div className="relative flex min-h-60 flex-col text-white">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-teal text-white shadow-[0_14px_30px_rgba(0,0,0,0.24)]">
                        <Check size={17} />
                      </span>
                      <div className="mt-auto">
                        <h3 className="text-2xl font-semibold leading-tight text-white">{title}</h3>
                        <p className="mt-4 text-sm leading-7 text-white/80">{copy}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-ink px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <FadeIn>
              <SectionHeader
                light
                eyebrow="Our Services"
                title="From first call to launch, with clear scope and production discipline"
                copy="You get a structured build process, weekly progress, and a working automation system rather than a strategy deck that never reaches daily use."
              />
            </FadeIn>
            <div className="mt-12 grid gap-5 lg:grid-cols-4">
              {process.map(({ step, visual, title, copy }, index) => (
                <FadeIn key={step} delay={index * 0.05}>
                  <div className="relative h-full overflow-hidden rounded-[28px] border border-mint/[0.12] bg-graphite p-6">
                    <img src={visual} alt="" className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-b from-ink/[0.42] via-ink/[0.36] to-ink/[0.78]" />
                    <div className="relative flex min-h-64 flex-col">
                      <h3 className="mt-auto text-xl font-semibold text-mint">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-mint/70">{copy}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cloud px-5 py-20 text-ink sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <FadeIn>
              <SectionHeader
                align="left"
                eyebrow="Built for production"
                title="Reliable AI systems need more than prompts."
                copy="We design the non-glamorous parts from the start: data boundaries, fallbacks, evaluation criteria, logging, and human review."
              />
            </FadeIn>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                [Layers3, 'Clean integration boundaries'],
                [BrainCircuit, 'Grounded reasoning and retrieval'],
                [Handshake, 'Human approval where needed'],
                [Rocket, 'Launch support and iteration'],
              ].map(([Icon, label], index) => (
                <FadeIn key={label} delay={index * 0.04}>
                  <div className="rounded-[28px] border border-line bg-white p-6">
                    <Icon className="text-teal" size={24} />
                    <p className="mt-8 text-lg font-semibold text-ink">{label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-ink px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-mint/[0.12] bg-graphite p-8 text-center shadow-2xl sm:p-12">
            <FadeIn>
              <p className="text-base font-semibold uppercase tracking-[0.18em] text-teal sm:text-lg">Let&apos;s Talk</p>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight text-mint sm:text-6xl">
                Bring one workflow. Leave with a practical automation path.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-mint/75 sm:text-lg">
                We will look at the workflow, systems involved, data available, and business value. If AI is the right fit, we will outline the first build.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={calendlyUrl}
                  className="btn-gradient inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition"
                >
                  Open Calendly
                  <ArrowRight size={18} />
                </a>
                <a
                  href="mailto:hello@flowagentic.com"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-mint/[0.16] px-6 text-base font-semibold text-mint transition hover:bg-white/[0.08]"
                >
                  <Mail size={18} />
                  hello@flowagentic.com
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t border-mint/10 bg-ink px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-mint/[0.65] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-white">
            <img src="/flow-logo.png" alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-semibold">FlowAgentic</span>
          </div>
          <p>AI agents, automation, integrations, and RAG systems for businesses across Canada.</p>
          <p>&copy; {new Date().getFullYear()} FlowAgentic. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
