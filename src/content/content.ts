export type Stage = { id: string; label: string; title: string; body: string; points: string[] }
export const stages: Stage[] = [
  { id: '01', label: 'The challenge', title: 'Your business has the pieces. Let’s connect them.',
    body: 'Your website, software, customer workflows, and marketing may each work independently. The challenge is making them work together.', points: ['Website', 'Software', 'Workflows', 'Marketing'] },
  { id: '02', label: 'Understand', title: 'First, understand what needs to work better.',
    body: 'Every effective solution starts with understanding the business, identifying bottlenecks, and defining the right technical approach.', points: ['Business context', 'Bottlenecks', 'Technical approach'] },
  { id: '03', label: 'Engineer', title: 'Turn the right strategy into working technology.',
    body: 'We design and implement digital systems that connect your tools, streamline workflows, and support the way your business operates.', points: ['Connected tools', 'Streamlined workflows'] },
  { id: '04', label: 'Automate', title: 'Make technology do more of the work.',
    body: 'Apply AI and automation where they genuinely improve operations, reduce repetitive work, and help teams make better use of their time.', points: ['Request', 'Validate', 'AI assist', 'Approve', 'Outcome'] },
  { id: '05', label: 'Reach and improve', title: 'Technology that works. Marketing that reaches.',
    body: 'Connect your digital presence with search visibility, customer acquisition, conversion optimization, and performance measurement.', points: ['Search', 'Campaigns', 'Enquiries', 'Analytics'] },
  { id: '06', label: 'The outcome', title: 'One partner. One connected solution.',
    body: 'From strategy and software to automation and marketing, Shiva NCR brings the right capabilities together around your business goals.', points: [] },
]

export const problems = [
  'Disconnected software and tools',
  'Manual processes and repetitive work',
  'Outdated websites or digital products',
  'Difficult system integrations',
  'Limited search visibility or inconsistent lead generation',
  'Unclear technology priorities',
]

export type Service = { slug: string; num: string; name: string; summary: string; intro: string; offerings: string[]; outcomes: string[]; forWho: string }
export const services: Service[] = [
  { slug: 'software-engineering', num: '01', name: 'Software engineering',
    summary: 'Custom web applications, portals, mobile apps, internal tools and APIs built to last.',
    intro: 'From first versions to business-critical platforms, we design and engineer software that is reliable, documented and easy to evolve.',
    offerings: ['Custom web applications', 'Customer and partner portals', 'Mobile applications', 'Internal tools and dashboards', 'API development and integrations'],
    outcomes: ['Software that fits your workflow', 'Maintainable, tested codebases', 'Full ownership of your code'],
    forWho: 'Businesses whose needs are not met by off-the-shelf software.' },
  { slug: 'ai-automation', num: '02', name: 'AI and intelligent automation',
    summary: 'Workflow automation, system integrations and practical AI applied to real operations.',
    intro: 'We identify repetitive, error-prone work and automate it — connecting your tools and adding AI only where it genuinely helps.',
    offerings: ['Business workflow automation', 'CRM, ERP and tool integrations', 'AI assistants and document processing', 'Reporting and data pipelines', 'Messaging and enquiry automation'],
    outcomes: ['Less repetitive manual work', 'Fewer hand-off errors', 'Faster response to customers'],
    forWho: 'Teams spending too much time moving data between systems.' },
  { slug: 'it-infrastructure', num: '03', name: 'IT infrastructure and engineering',
    summary: 'Cloud setup, migration, DevOps, security and dependable ongoing support.',
    intro: 'We set up and maintain the infrastructure your software runs on, so it stays fast, secure and available.',
    offerings: ['Cloud setup and migration', 'CI/CD and DevOps', 'Monitoring and backups', 'Security reviews and hardening', 'Maintenance and support'],
    outcomes: ['Predictable, reliable systems', 'Controlled infrastructure costs', 'Safer, faster releases'],
    forWho: 'Businesses running critical systems without a dedicated infrastructure team.' },
  { slug: 'digital-marketing', num: '04', name: 'Digital marketing and visibility',
    summary: 'SEO, performance campaigns, content and analytics connected to your systems.',
    intro: 'Marketing works best when it is wired into your website, CRM and analytics. We build that connection and run the campaigns.',
    offerings: ['Search engine optimisation', 'Performance and paid campaigns', 'Social media and content', 'Websites and landing pages', 'Analytics and conversion tracking'],
    outcomes: ['Enquiries flowing into your systems', 'Clear attribution and reporting', 'Visibility you can measure'],
    forWho: 'Businesses that want marketing tied to real enquiries, not vanity metrics.' },
  { slug: 'it-consulting', num: '05', name: 'IT consulting and transformation',
    summary: 'Technology roadmaps, audits and advisory that align IT decisions with business goals.',
    intro: 'We help leadership teams make confident technology decisions — what to build, buy, integrate or retire — and in what order.',
    offerings: ['Technology and process audits', 'Digital transformation roadmaps', 'Vendor and platform selection', 'Integration planning', 'Project scoping and estimation'],
    outcomes: ['A clear, prioritised plan', 'Fewer overlapping tools', 'Decisions grounded in business value'],
    forWho: 'Founders, SMEs and enterprise teams planning a new system or modernising an old one.' },
]

// Testimonials — add real, client-approved quotes only. While empty, the section and its nav link are hidden.
export type Testimonial = { quote: string; name: string; role?: string; company?: string }
export const testimonials: Testimonial[] = []

export const steps = [
  { n: '01', t: 'Discover', d: 'Conversations, process mapping and a systems review to understand the real problem.' },
  { n: '02', t: 'Define', d: 'A scoped plan with priorities, architecture, timeline and transparent estimates.' },
  { n: '03', t: 'Build', d: 'Iterative delivery with regular demos, so you can see progress as it happens.' },
  { n: '04', t: 'Integrate and launch', d: 'Connect the solution with your existing tools, data and team, then go live.' },
  { n: '05', t: 'Improve', d: 'Measure, refine and support — technology and marketing together.' },
]

export const solutionSteps = [
  { t: 'Understand the challenge', d: 'Clarify goals, constraints and what is really slowing the business down.' },
  { t: 'Choose the right approach', d: 'Decide what to build, buy, integrate or automate — and in what order.' },
  { t: 'Engineer the solution', d: 'Design and build software and integrations that fit how you operate.' },
  { t: 'Automate and connect', d: 'Link systems and remove repetitive work where it adds real value.' },
  { t: 'Reach and improve', d: 'Bring in customers through connected marketing and measure what works.' },
]

export const reasons = [
  { t: 'One accountable partner', d: 'Consulting, engineering, infrastructure and marketing under one roof — no finger-pointing between vendors.' },
  { t: 'Business before technology', d: 'We recommend what fits your goals and budget, including when the answer is a simpler tool.' },
  { t: 'Built to be maintained', d: 'Documentation, clean code and handover are part of every engagement.' },
  { t: 'Transparent delivery', d: 'Clear scope, regular demos and honest communication about trade-offs.' },
]
