export type Stage = { id: string; label: string; title: string; body: string; short: string; points: string[] }
export const stages: Stage[] = [
  { id: '01', label: 'The challenge', title: 'Your business has the pieces. Let’s connect them.',
    body: 'Your website, software, customer workflows, and marketing may each work independently. The challenge is making them work together.', short: 'Website, software, workflows and marketing — working apart.', points: ['Website', 'Software', 'Workflows', 'Marketing'] },
  { id: '02', label: 'Understand', title: 'First, understand what needs to work better.',
    body: 'Every effective solution starts with understanding the business, identifying bottlenecks, and defining the right technical approach.', short: 'Find the bottlenecks. Define the right approach.', points: ['Business context', 'Bottlenecks', 'Technical approach'] },
  { id: '03', label: 'Engineer', title: 'Turn the right strategy into working technology.',
    body: 'We design and implement digital systems that connect your tools, streamline workflows, and support the way your business operates.', short: 'Systems that connect your tools and streamline work.', points: ['Connected tools', 'Streamlined workflows'] },
  { id: '04', label: 'Automate', title: 'Make technology do more of the work.',
    body: 'Apply AI and automation where they genuinely improve operations, reduce repetitive work, and help teams make better use of their time.', short: 'Automation and AI where they genuinely help.', points: ['Request', 'Validate', 'AI assist', 'Approve', 'Outcome'] },
  { id: '05', label: 'Reach and improve', title: 'Technology that works. Marketing that reaches.',
    body: 'Connect your digital presence with search visibility, customer acquisition, conversion optimization, and performance measurement.', short: 'Search, acquisition, conversion and measurement — connected.', points: ['Search', 'Campaigns', 'Enquiries', 'Analytics'] },
  { id: '06', label: 'The outcome', title: 'One partner. One connected solution.',
    body: 'From strategy and software to automation and marketing, Shiva NCR brings the right capabilities together around your business goals.', short: 'The right capabilities around your business goals.', points: [] },
]

export const problems = [
  { t: 'Disconnected tools', i: 'split' },
  { t: 'Manual, repetitive work', i: 'repeat' },
  { t: 'Outdated website or product', i: 'window' },
  { t: 'Difficult integrations', i: 'plug' },
  { t: 'Weak search visibility & lead flow', i: 'search' },
  { t: 'Unclear technology priorities', i: 'compass' },
]

export type Service = { tags: string[]; slug: string; num: string; name: string; summary: string; intro: string; offerings: string[]; outcomes: string[]; forWho: string }
export const services: Service[] = [
  { tags: ['Web apps','Portals','Mobile','APIs'], slug: 'software-engineering', num: '01', name: 'Software engineering',
    summary: 'Custom web applications, portals, mobile apps, internal tools and APIs built to last.',
    intro: 'From first versions to business-critical platforms, we design and engineer software that is reliable, documented and easy to evolve.',
    offerings: ['Custom web applications', 'Customer and partner portals', 'Mobile applications', 'Internal tools and dashboards', 'API development and integrations'],
    outcomes: ['Software that fits your workflow', 'Maintainable, tested codebases', 'Full ownership of your code'],
    forWho: 'Businesses whose needs are not met by off-the-shelf software.' },
  { tags: ['Workflows','Integrations','AI assistants'], slug: 'ai-automation', num: '02', name: 'AI and intelligent automation',
    summary: 'Workflow automation, system integrations and practical AI applied to real operations.',
    intro: 'We identify repetitive, error-prone work and automate it — connecting your tools and adding AI only where it genuinely helps.',
    offerings: ['Business workflow automation', 'CRM, ERP and tool integrations', 'AI assistants and document processing', 'Reporting and data pipelines', 'Messaging and enquiry automation'],
    outcomes: ['Less repetitive manual work', 'Fewer hand-off errors', 'Faster response to customers'],
    forWho: 'Teams spending too much time moving data between systems.' },
  { tags: ['Cloud','DevOps','Security','Support'], slug: 'it-infrastructure', num: '03', name: 'IT infrastructure and engineering',
    summary: 'Cloud setup, migration, DevOps, security and dependable ongoing support.',
    intro: 'We set up and maintain the infrastructure your software runs on, so it stays fast, secure and available.',
    offerings: ['Cloud setup and migration', 'CI/CD and DevOps', 'Monitoring and backups', 'Security reviews and hardening', 'Maintenance and support'],
    outcomes: ['Predictable, reliable systems', 'Controlled infrastructure costs', 'Safer, faster releases'],
    forWho: 'Businesses running critical systems without a dedicated infrastructure team.' },
  { tags: ['SEO','Campaigns','Content','Analytics'], slug: 'digital-marketing', num: '04', name: 'Digital marketing and visibility',
    summary: 'SEO, performance campaigns, content and analytics connected to your systems.',
    intro: 'Marketing works best when it is wired into your website, CRM and analytics. We build that connection and run the campaigns.',
    offerings: ['Search engine optimisation', 'Performance and paid campaigns', 'Social media and content', 'Websites and landing pages', 'Analytics and conversion tracking'],
    outcomes: ['Enquiries flowing into your systems', 'Clear attribution and reporting', 'Visibility you can measure'],
    forWho: 'Businesses that want marketing tied to real enquiries, not vanity metrics.' },
  { tags: ['Audits','Roadmaps','Platform choice'], slug: 'it-consulting', num: '05', name: 'IT consulting and transformation',
    summary: 'Technology roadmaps, audits and advisory that align IT decisions with business goals.',
    intro: 'We help leadership teams make confident technology decisions — what to build, buy, integrate or retire — and in what order.',
    offerings: ['Technology and process audits', 'Digital transformation roadmaps', 'Vendor and platform selection', 'Integration planning', 'Project scoping and estimation'],
    outcomes: ['A clear, prioritised plan', 'Fewer overlapping tools', 'Decisions grounded in business value'],
    forWho: 'Founders, SMEs and enterprise teams planning a new system or modernising an old one.' },
]

// Testimonials — add real, client-approved quotes only. While empty, the section and its nav link are hidden.
export type Testimonial = { quote: string; name: string; role?: string; company?: string }
export const testimonials: Testimonial[] = [
  { quote: 'We grew weekday occupancy from 23% to 61%.', name: 'Anil Bhrane', company: 'Hotel The Tree' },
  { quote: 'I don’t visit my PG chain for weeks, and yet I have my reports on my app.', name: 'Sameer Shinde', company: 'Krishnakunj (PG chain)' },
  { quote: 'Our app console has been optimally managed, increasing downloads by 2000%.', name: 'Ruslana Yatsenko' },
  { quote: 'Our ASO work brought our app into the top 50 of the Apple App Store charts.', name: 'Natalia Shyprka' },
]

export const steps = [
  { n: '01', t: 'Discover', d: 'Understand the business' },
  { n: '02', t: 'Define', d: 'Scope, plan, estimate' },
  { n: '03', t: 'Build', d: 'Iterate with demos' },
  { n: '04', t: 'Integrate and launch', d: 'Connect and go live' },
  { n: '05', t: 'Improve', d: 'Measure and refine' },
]

export const solutionSteps = ['Challenge', 'Approach', 'Engineer', 'Automate', 'Grow']

export const reasons = [
  'One accountable partner across tech and marketing',
  'Business goals before technology choices',
  'Built to be maintained, documented and handed over',
  'Clear scope, regular demos, honest trade-offs',
  'Right-sized solutions — including simpler ones',
]
