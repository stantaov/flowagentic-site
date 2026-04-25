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
  GitBranch,
  Handshake,
  Layers3,
  LineChart,
  LockKeyhole,
  Mail,
  MessagesSquare,
  Network,
  Rocket,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react';

const calendlyUrl = 'https://calendly.com/flowagentic/intro-call';

const services = [
  {
    icon: Bot,
    title: 'Agentic workflow automation',
    copy: 'Turn rule-heavy, repetitive processes into AI-assisted workflows that can reason, route, draft, update systems, and escalate exceptions.',
    result: 'Best for ops, support, sales, and admin workflows',
  },
  {
    icon: Network,
    title: 'Systems and API integration',
    copy: 'Connect CRMs, inboxes, spreadsheets, internal apps, databases, and third-party APIs so automation works inside your actual stack.',
    result: 'Built around the tools your team already uses',
  },
  {
    icon: DatabaseZap,
    title: 'RAG assistants and knowledge systems',
    copy: 'Create assistants grounded in your SOPs, docs, tickets, product data, and policies with retrieval flows your team can trust.',
    result: 'Accurate answers from company-specific context',
  },
  {
    icon: ShieldCheck,
    title: 'Production AI engineering',
    copy: 'Ship AI systems with observability, review paths, evaluation loops, prompt/version control, and documentation for long-term ownership.',
    result: 'Designed for daily operations, not just demos',
  },
];

const useCases = [
  ['Lead operations', 'Qualify inbound leads, enrich records, draft follow-ups, and keep CRM stages current.'],
  ['Customer support', 'Route tickets, retrieve context, prepare response drafts, and flag edge cases for humans.'],
  ['Document processing', 'Extract structured data, summarize files, validate against rules, and prepare review queues.'],
  ['Internal knowledge', 'Give teams a grounded assistant across SOPs, docs, tickets, and company systems.'],
  ['Reporting workflows', 'Create daily briefs, exception reports, account summaries, and operational updates.'],
  ['Back-office automation', 'Coordinate tasks across email, forms, spreadsheets, databases, and approval tools.'],
];

const process = [
  {
    step: '01',
    title: 'Workflow audit',
    copy: 'We map the manual process, handoffs, systems, decision rules, data quality issues, and measurable automation target.',
  },
  {
    step: '02',
    title: 'Prototype with real inputs',
    copy: 'We validate the agent or assistant against real examples so accuracy, escalation paths, and UX are proven early.',
  },
  {
    step: '03',
    title: 'Integrate and harden',
    copy: 'We connect production tools, add guardrails, logging, monitoring, retry paths, and human review where needed.',
  },
  {
    step: '04',
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
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
      <h2 className={`mt-4 text-3xl font-semibold leading-tight sm:text-5xl ${titleColor}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${copyColor}`}>{copy}</p>
    </div>
  );
}

function HeroWorkflowCard() {
  const steps = [
    ['Capture request', MessagesSquare, 'Intake from inbox, form, or chat'],
    ['Retrieve context', BrainCircuit, 'Search policies, CRM, docs, and prior tickets'],
    ['Execute action', GitBranch, 'Update tools and route approvals'],
    ['Report outcome', LineChart, 'Log results with reviewable audit trail'],
  ];

  return (
    <div className="relative rounded-[28px] border border-mint/[0.15] bg-mint p-3 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
      <div className="rounded-[22px] bg-ink p-4 text-mint">
        <div className="flex items-center justify-between border-b border-mint/10 pb-4">
          <div>
            <p className="text-sm font-semibold">Workflow console</p>
            <p className="mt-1 text-xs text-mint/60">Live automation blueprint</p>
          </div>
          <span className="rounded-full bg-teal px-3 py-1 text-xs font-semibold text-white">Ready</span>
        </div>
        <div className="mt-5 space-y-3">
          {steps.map(([label, Icon, description], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.08, duration: 0.45 }}
              className="rounded-2xl border border-mint/10 bg-graphite p-4"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-mint text-teal">
                  <Icon size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="mt-1 text-xs leading-5 text-mint/[0.65]">{description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CapabilityMarquee() {
  const row = [...capabilities, ...capabilities];

  return (
    <div className="overflow-hidden border-y border-mint/[0.12] bg-graphite py-5">
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
            <span className="grid h-10 w-10 place-items-center rounded-full bg-mint text-ink">
              <Workflow size={19} />
            </span>
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
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-mint px-5 text-sm font-semibold text-ink transition hover:bg-teal hover:text-white focus:outline-none focus:ring-4 focus:ring-teal/[0.35]"
          >
            Let&apos;s Talk
            <ArrowRight size={16} />
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-ink px-5 pb-16 pt-12 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-hero-grid opacity-25" />
          <div className="absolute left-1/2 top-20 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-teal/[0.20] blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-10 lg:min-h-[720px] lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <FadeIn className="text-center lg:text-left">
              <div className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-mint/[0.14] bg-white/[0.07] px-4 py-2 text-sm font-semibold text-mint lg:mx-0">
                <span className="h-2 w-2 rounded-full bg-teal" />
                Available now, limited automation builds open
              </div>
              <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-normal text-mint sm:text-7xl lg:mx-0 lg:text-8xl">
                Turn manual workflows into production AI systems.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-mint/75 sm:text-xl lg:mx-0">
                FlowAgentic helps businesses design, build, and deploy AI agents, RAG assistants, and custom integrations that automate real operational work.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href={calendlyUrl}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 text-base font-semibold text-white transition hover:bg-mint hover:text-ink focus:outline-none focus:ring-4 focus:ring-teal/[0.35]"
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
            </FadeIn>

            <FadeIn delay={0.12}>
              <HeroWorkflowCard />
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
              {services.map(({ icon: Icon, title, copy, result }, index) => (
                <FadeIn key={title} delay={index * 0.05}>
                  <div className="group flex h-full flex-col rounded-[28px] border border-line bg-white p-5 shadow-soft transition hover:-translate-y-1">
                    <div className="rounded-2xl bg-ink p-5 text-mint">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-teal">
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
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
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-mint px-6 text-base font-semibold text-ink transition hover:bg-teal hover:text-white"
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
              {useCases.map(([title, copy], index) => (
                <FadeIn key={title} delay={index * 0.04}>
                  <div className="min-h-56 rounded-[28px] border border-line bg-white p-6 shadow-[0_1px_0_rgba(5,17,78,0.06)]">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-mint">
                        <Check size={17} />
                      </span>
                      <span className="text-sm font-semibold text-teal">0{index + 1}</span>
                    </div>
                    <h3 className="mt-8 text-xl font-semibold text-ink">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-graphite/80">{copy}</p>
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
              {process.map(({ step, title, copy }, index) => (
                <FadeIn key={step} delay={index * 0.05}>
                  <div className="relative h-full overflow-hidden rounded-[28px] border border-mint/[0.12] bg-graphite p-6">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-teal/[0.15]" />
                    <p className="text-sm font-semibold text-teal">{step}</p>
                    <h3 className="mt-16 text-xl font-semibold text-mint">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-mint/70">{copy}</p>
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">Let&apos;s Talk</p>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight text-mint sm:text-6xl">
                Bring one workflow. Leave with a practical automation path.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-mint/75 sm:text-lg">
                We will look at the workflow, systems involved, data available, and business value. If AI is the right fit, we will outline the first build.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={calendlyUrl}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 text-base font-semibold text-white transition hover:bg-mint hover:text-ink"
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
            <span className="grid h-8 w-8 place-items-center rounded-full bg-mint text-ink">
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
