export type Stage = { id: string; label: string; title: string; body: string; points: string[] }
export const stages: Stage[] = [
  { id: '01', label: 'The challenge', title: 'Disconnected tools slow everything down.',
    body: 'Spreadsheets, legacy software, manual hand-offs and marketing platforms that never talk to each other. Every gap costs time, data and customers.',
    points: ['Scattered data', 'Manual work', 'No single view'] },
  { id: '02', label: 'The diagnosis', title: 'We start by understanding the business.',
    body: 'Before recommending any technology, we map your processes, people and systems to find where the real friction lives.',
    points: ['Process audit', 'Systems review', 'Priority roadmap'] },
  { id: '03', label: 'The architecture', title: 'The right technology, chosen for a reason.',
    body: 'We design a practical architecture — platforms, data flows and integrations — sized to your stage and budget, not to a trend.',
    points: ['Solution design', 'Cloud & infrastructure', 'Security first'] },
  { id: '04', label: 'The build', title: 'Software engineered to be maintained.',
    body: 'Web apps, portals, internal tools and mobile experiences built with clean code, documentation and testing from day one.',
    points: ['Custom software', 'APIs & integrations', 'Quality assurance'] },
  { id: '05', label: 'The automation', title: 'Workflows that run themselves.',
    body: 'We connect your systems and apply automation and AI where it removes repetitive work and improves decisions.',
    points: ['Workflow automation', 'AI assistance', 'Live dashboards'] },
  { id: '06', label: 'The outcome', title: 'One connected system, ready to grow.',
    body: 'Operations, software and marketing working together — with clear reporting so you can see what is working and scale it.',
    points: ['Connected operations', 'Measurable growth', 'Ongoing support'] },
]

export type Service = { slug: string; num: string; name: string; summary: string; intro: string; offerings: string[]; outcomes: string[]; forWho: string }
export const services: Service[] = [
  { slug: 'it-consulting', num: '01', name: 'IT Consulting & Strategy',
    summary: 'Technology roadmaps, audits and advisory that align IT decisions with business goals.',
    intro: 'We help leadership teams make confident technology decisions — what to build, buy, integrate or retire — and in what order.',
    offerings: ['Technology & process audits', 'Digital transformation roadmaps', 'Vendor and platform selection', 'Fractional CTO advisory', 'Project scoping and estimation'],
    outcomes: ['A clear, prioritised plan', 'Fewer wasted tool subscriptions', 'Decisions grounded in business value'],
    forWho: 'Founders, SMEs and enterprise teams planning a new system or modernising an old one.' },
  { slug: 'software-engineering', num: '02', name: 'Software Engineering',
    summary: 'Custom web applications, portals, mobile apps and internal tools built to last.',
    intro: 'From MVPs to business-critical platforms, we design and engineer software that is reliable, documented and easy to evolve.',
    offerings: ['Custom web applications', 'Customer & partner portals', 'Mobile applications', 'Internal tools and admin panels', 'API development'],
    outcomes: ['Software that fits your workflow', 'Maintainable, tested codebases', 'Full ownership of your code'],
    forWho: 'Businesses whose needs are not met by off-the-shelf software.' },
  { slug: 'ai-automation', num: '03', name: 'AI & Automation',
    summary: 'Workflow automation, system integrations and practical AI applied to real operations.',
    intro: 'We identify repetitive, error-prone work and automate it — connecting your tools and adding AI where it genuinely helps.',
    offerings: ['Business workflow automation', 'CRM, ERP and tool integrations', 'AI assistants and document processing', 'Reporting and data pipelines', 'Chat and messaging automation'],
    outcomes: ['Hours of manual work removed', 'Fewer hand-off errors', 'Faster response to customers'],
    forWho: 'Teams spending too much time copying data between systems.' },
  { slug: 'cloud-infrastructure', num: '04', name: 'Cloud & Infrastructure',
    summary: 'Cloud setup, migration, DevOps, security and dependable ongoing support.',
    intro: 'We set up and maintain the infrastructure your software runs on, so it stays fast, secure and available.',
    offerings: ['Cloud setup and migration', 'CI/CD and DevOps', 'Monitoring and backups', 'Security reviews and hardening', 'Maintenance and support plans'],
    outcomes: ['Predictable, reliable systems', 'Controlled cloud costs', 'Faster, safer releases'],
    forWho: 'Businesses running critical systems without a dedicated infrastructure team.' },
  { slug: 'digital-marketing', num: '05', name: 'Digital Marketing & Growth',
    summary: 'SEO, performance marketing, content and analytics connected to your systems.',
    intro: 'Marketing works best when it is wired into your website, CRM and analytics. We build that connection and run the campaigns.',
    offerings: ['Search engine optimisation', 'Performance & paid campaigns', 'Social media and content', 'Websites and landing pages', 'Analytics and conversion tracking'],
    outcomes: ['Qualified leads into your CRM', 'Clear attribution and reporting', 'Growth you can measure'],
    forWho: 'Businesses that want marketing tied to real pipeline, not vanity metrics.' },
]

// Selected work — PLACEHOLDERS. Replace with real, client-approved projects. No invented results.
export const work = [
  { tag: 'Property operations', title: 'Co-living management platform', desc: 'Concept build: operator dashboard and resident app for beds, rent, KYC and maintenance.', placeholder: true },
  { tag: 'Automation', title: 'Case study placeholder', desc: 'Add a real automation or integration project here with client approval.', placeholder: true },
  { tag: 'Digital growth', title: 'Case study placeholder', desc: 'Add a real marketing or SEO engagement here with client approval.', placeholder: true },
]

export const steps = [
  { n: '01', t: 'Discover', d: 'Conversations, process mapping and a systems review to understand the real problem.' },
  { n: '02', t: 'Define', d: 'A scoped plan with priorities, architecture, timeline and transparent estimates.' },
  { n: '03', t: 'Build', d: 'Iterative delivery with regular demos, so you see progress every week.' },
  { n: '04', t: 'Integrate', d: 'Connect the new solution with your existing tools, data and team.' },
  { n: '05', t: 'Grow & support', d: 'Measure, improve and support — technology and marketing together.' },
]

export const reasons = [
  { t: 'One accountable partner', d: 'Consulting, engineering, infrastructure and marketing under one roof — no finger-pointing between vendors.' },
  { t: 'Business before technology', d: 'We recommend what fits your goals and budget, including when the answer is a simpler tool.' },
  { t: 'Built to be maintained', d: 'Documentation, clean code and handover are part of every engagement.' },
  { t: 'Transparent delivery', d: 'Clear scope, regular demos and honest communication about trade-offs.' },
]
