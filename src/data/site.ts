export const contact = {
  name: 'Tegh S. Bindra',
  email: 'bindrategh@gmail.com',
  location: 'Sugar Land, TX',
  github: 'https://github.com/Phoenix275',
  linkedin: 'https://www.linkedin.com/in/tegh-bindra-749481264/',
  resume: '/resume.pdf',
};

// The hero ledger — every value here is real and verifiable.
export const ledger = [
  { label: 'Codeforces', value: 'Master · 2150', note: 'top 3% worldwide' },
  { label: 'Research', value: 'Published — MIT URTC 2024', note: 'first author' },
  { label: 'Shipped', value: 'underwriting-copilot.pages.dev', note: 'live', href: 'https://underwriting-copilot.pages.dev' },
  { label: 'Harvard HSRC', value: '2nd of 18 teams', note: 'technical lead' },
  { label: 'Scouting', value: 'Eagle Scout', note: 'top ~5% nationally' },
];

export type Project = {
  slug: string;
  name: string;
  role: string;
  year: string;
  stack: string[];
  problem: string;
  built: string;
  outcome: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: 'underwriting-copilot',
    name: 'Underwriting Copilot',
    role: 'Sole developer — Tech Mahindra GLP internship',
    year: '2026',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'TypeScript', 'Cloudflare'],
    problem:
      'Life-insurance underwriters read multi-page application packets by hand. The brief: an AI copilot that screens financial viability and routes the easy cases automatically.',
    built:
      'A scoring pipeline — six-check conflict screen, a weighted rule engine with mortality-evidence-anchored weights (NHANES + NCHS linked mortality data), logistic regression and gradient-boosting models, and an affordability screen — plus a single-file workbench UI that re-derives every score in the browser from exported model coefficients.',
    outcome:
      '~80% straight-through processing on held-out cases; rule weights cross-validated against real Prudential applicant data; deployed and live.',
    links: [
      { label: 'Live demo', href: 'https://underwriting-copilot.pages.dev' },
      { label: 'Code', href: 'https://github.com/Phoenix275/underwriting-copilot' },
    ],
  },
  {
    slug: 'guard',
    name: 'GUARD — reward debiasing',
    role: 'Research fellow, co-author — Algoverse AI',
    year: '2025–present',
    stack: ['Python', 'RL', 'fairness evaluation'],
    problem:
      'Reward models used to score people — loan applicants, job candidates — inherit bias from their training data.',
    built:
      'A curiosity-driven reward debiasing system; I ran the experiments on job-market and lending datasets, debugged training runs, and documented the evaluation methodology.',
    outcome: 'Reduced model scoring bias by ~12% across evaluation datasets.',
    links: [],
  },
  {
    slug: 'meningitis-agent',
    name: 'Meningitis case-similarity agent',
    role: 'Sole author — published at MIT URTC',
    year: '2024',
    stack: ['Python', 'OpenAI embeddings', 'FAISS'],
    problem:
      'Clinicians comparing meningitis case reports have no fast way to find similar past cases in unstructured clinical text.',
    built:
      'An NLP retrieval pipeline matching case reports with OpenAI embeddings + FAISS vector search, with an interactive interface for case exploration and automatic summaries.',
    outcome:
      'precision@5 = 0.24 and ROUGE-1/L of 0.39/0.26 on clinical-text benchmarks; published and presented at MIT URTC 2024.',
    links: [{ label: 'Code', href: 'https://github.com/Phoenix275' }],
  },
  {
    slug: 'bioproof',
    name: 'BioProof',
    role: 'Technical lead — Harvard HSRC Innovation Challenge',
    year: '2024',
    stack: ['Python', 'Flask', 'React', 'Docker'],
    problem:
      'Real-time verification of biological samples for the Harvard HSRC Innovation Challenge — and it had to survive a live on-stage demo.',
    built:
      'The full prototype: Flask backend APIs, detection logic, a React dashboard, Docker packaging, and latency tuning for the stage.',
    outcome: 'Placed 2nd among 18 teams for innovation and real-world applicability; I led the live demo.',
    links: [{ label: 'Code', href: 'https://github.com/Phoenix275/bioproof' }],
  },
  {
    slug: 'cognigauge',
    name: 'Cognigauge',
    role: 'Product developer & founding engineer',
    year: '2025',
    stack: ['Python', 'data pipelines', 'time-series'],
    problem:
      'Turn raw interaction data — keystrokes, click patterns — into real-time cognitive-performance insights people can actually read.',
    built:
      'Backend features and Python data pipelines supporting secure time-series tracking, working directly with the founders on priorities and product refinement.',
    outcome: 'Supported a 3,000+ user waitlist through launch prep.',
    links: [],
  },
];

export const writing = [
  {
    title: 'Where my underwriting risk weights come from',
    href: '/writing/underwriting-risk-weights/',
    date: 'Aug 2026',
    blurb:
      'Every point value in my rule engine is round(28 × ln(a real mortality multiple)) — derived from 20,435 NHANES adults with linked deaths, then checked against 59,381 real Prudential applicants.',
  },
];

export const experience = [
  {
    org: 'DLM Fund @ Saheb Sabharwal Office',
    role: 'Technology Intern',
    period: '2023 – present',
    line: 'Internal tools and AI agents for an early-stage $100M+ search fund — cut processing errors ~40%; present findings in biweekly partner strategy sessions.',
  },
  {
    org: 'Tech Mahindra — Global Leadership Program',
    role: 'Intern, Finance Project 1',
    period: 'Jul 2026',
    line: 'Built the Underwriting Copilot end-to-end in four weeks; also shipped a compliance RAG assistant for a GE HealthCare workshop and Propell, an employee-onboarding platform.',
  },
  {
    org: 'Algoverse AI',
    role: 'Research Fellow',
    period: 'May 2025 – present',
    line: 'Co-authored GUARD, a curiosity-driven reward debiasing system (~12% bias reduction).',
  },
  {
    org: 'Cognigauge',
    role: 'Product Developer & Founding Engineer',
    period: 'Apr – Sep 2025',
    line: 'Backend and data pipelines for a cognitive-performance web app with a 3,000+ user waitlist.',
  },
  {
    org: 'University of Iowa',
    role: 'Research Assistant — RZWQM',
    period: '2023',
    line: 'Calibrated the Root Zone Water Quality Model for irrigation and nitrogen strategies; trial farms recorded ~15% less water use and ~10% lower fertilizer runoff.',
  },
];

export const education = [
  {
    school: 'The University of Texas at Austin',
    detail: 'BBA Economics — CAP (first year at UT San Antonio), Class of 2030',
  },
  {
    school: 'William P. Clements High School',
    detail: 'Summa Cum Laude, 2022–2026 · AP CS A, AP Calc BC, Multivariable Calculus, AP Statistics, AP Physics C',
  },
];

export const leadership = [
  { what: 'Scholars for Society — President', detail: 'Built a national curriculum used by 5,000+ students; recruited and trained 50 volunteers.' },
  { what: 'Steel City Codes — Regional Lead, Greater Houston', detail: 'Opened 2 school chapters teaching 100+ K–8 students; ran a virtual summer camp for 70+ participants across multiple countries.' },
  { what: 'Clements Youth Conservation — Founder & President', detail: "Founded the school's first recycling program; grew membership past 100." },
  { what: 'Eagle Scout', detail: 'Led a digital-safety service project for seniors — trained 15 youth volunteers, reached 100+ residents.' },
  { what: 'DECA — ICDC Top 5', detail: 'Automotive Services Marketing roleplay; Texas state qualifier 2023–25.' },
  { what: 'AIME Qualifier', detail: 'Top ~5% of AMC 12 competitors nationally.' },
];
