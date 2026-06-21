// src/data/portfolio.ts
// Single source of truth for all portfolio content.
// Update this file when your resume changes — components just render it.

export interface Metric {
  value: string;
  label: string;
}

export interface SkillGroup {
  category: string;
  items: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  stack: string;
  status: "resolved" | "shipped";
  description: string;
  metrics: ProjectMetric[];
}

export interface ExperienceItem {
  dateRange: string;
  role: string;
  org: string;
  description: string;
}

export const profile = {
  name: "Muthukumar Ramalingam",
  role: "Lead Software Engineer / Distributed Systems / Cloud & AI",
  lede:
    "I build distributed systems that stay up under real production load — and increasingly, integrate LLMs into the workflows that depend on them.",
  email: "muthukumar.ping@gmail.com",
  linkedin: "https://www.linkedin.com/in/muthukumarramalingam/",
  github: "https://github.com/MuthuKumarRamalingam",
  location: "Chennai, IN",
  resumeUrl: "/resume.pdf",
};

export const statusBarItems = [
  { label: "uptime", value: "99.9%" },
  { label: "exp", value: "12y" },
  { label: "stack", value: ".NET / Kafka / Azure" },
  { label: "location", value: "Chennai, IN" },
];

export const about = {
  paragraphs: [
    "12+ years architecting cloud-native microservices on .NET Core, AWS, and Azure. My focus: systems that stay reliable under real load — Saga Orchestration, Kafka event streaming, Polly resilience patterns.",
    "Currently Lead Software Engineer at Trimble, architecting a multi-tenant Connected Maintenance platform and leading an AI invoice automation pipeline built on Azure Document Intelligence and GPT-4o.",
    "I also care about how teams ship. I standardised AI-assisted development across my team using GitHub Copilot and Cursor IDE — custom rules, reusable skills, and AI-generated test plans that lifted coverage from 62% to 85%.",
  ],
  metrics: [
    { value: "99.9%", label: "uptime delivered" },
    { value: "62→85%", label: "test coverage lifted" },
    { value: "8min→40s", label: "invoice processing time" },
    { value: "6", label: "engineers mentored" },
  ] as Metric[],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend & Architecture",
    items: "C# · .NET Core / .NET 9 · Microservices · Saga Orchestration · DDD · CQRS · Event Sourcing",
  },
  {
    category: "Cloud & Messaging",
    items: "AWS (SQS, SNS, Lambda, S3) · Azure (AKS, Document Intelligence, OpenAI) · Apache Kafka · Docker · Kubernetes",
  },
  {
    category: "Platform Engineering",
    items: "Redis Cache · Polly (Circuit Breaker, Retry) · Datadog APM · OpenTelemetry · Prometheus",
  },
  {
    category: "AI & LLM",
    items: "Azure OpenAI (GPT-4o) · Prompt Engineering · RAG Pipelines · GitHub Copilot · Cursor IDE (Claude Opus 4)",
  },
  {
    category: "Front-End",
    items: "React JS · TypeScript · Material UI · REST / GraphQL APIs",
  },
  {
    category: "Testing & Process",
    items: "TDD · xUnit · Moq · Agile Scrum · Code Review & Mentorship",
  },
];

export const projects: Project[] = [
  {
    title: "AI Invoice Import",
    stack: "Azure Document Intelligence · GPT-4o · .NET Core · React JS",
    status: "resolved",
    description:
      "Manual invoice entry was slow and error-prone across 50+ supplier formats. Built a pipeline that extracts data from PDFs and scanned images, normalises it to a canonical schema via GPT-4o, and resolves missing part numbers through LLM web-search enrichment.",
    metrics: [
      { value: "8min → 40s", label: "processing time" },
      { value: "72%", label: "fewer data-entry errors" },
      { value: "78%", label: "straight-through processing" },
    ],
  },
  {
    title: "C# Insights SDK",
    stack: ".NET Core · AWS S3 · SQLite · NuGet",
    status: "shipped",
    description:
      "Product teams had no standard way to capture telemetry or NPS signals. Shipped a cross-platform SDK adopted by 3 internal teams — instrumenting feature engagement and promoter scores against real workflow events.",
    metrics: [
      { value: "2wk → 3d", label: "integration time" },
      { value: "90%+", label: "test coverage" },
      { value: "3", label: "teams adopted" },
    ],
  },
  {
    title: "Trimble Drop",
    stack: ".NET Core · AWS S3 · CloudFront · IAM",
    status: "shipped",
    description:
      "Teams needed to move large files securely without custom infra each time. Built a high-capacity file-sharing service with multipart S3 uploads, pre-signed URLs, and CDN-accelerated downloads.",
    metrics: [
      { value: "10GB", label: "max file size" },
      { value: "<5s", label: "upload initiation" },
      { value: "4", label: "teams adopted" },
    ],
  },
  {
    title: "Developer Productivity Tooling",
    stack: "Cursor IDE (Claude Opus 4) · GitHub Actions · .NET Core",
    status: "shipped",
    description:
      "New service bootstrap took days and drifted from team conventions. Built CLI scaffolding using Cursor with custom .cursorrules, reusable Skills for Kafka/Polly templates, and AI Plans for test generation.",
    metrics: [
      { value: "3d → 4h", label: "bootstrap time" },
      { value: "20%", label: "faster PR cycle" },
      { value: "62→85%", label: "test coverage" },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    dateRange: "Apr 2021 — Present",
    role: "Lead Software Engineer",
    org: "Trimble, Chennai",
    description:
      "Architecting multi-tenant Connected Maintenance platform · leading AI-assisted development adoption · mentoring 6 engineers",
  },
  {
    dateRange: "Dec 2018 — Mar 2021",
    role: "Senior Software Engineer",
    org: "Trimble, Chennai",
    description: "Built cloud file-sharing service and analytics SDK · optimised AWS Lambda data pipelines",
  },
  {
    dateRange: "Aug 2017 — Dec 2018",
    role: "Programmer Analyst",
    org: "Boeing, Bangalore",
    description: "Built aircraft production scheduling system with spatial indexing algorithms",
  },
  {
    dateRange: "Jul 2014 — Jul 2017",
    role: "Software Developer",
    org: "RGS, Chennai",
    description: "Delivered BIM 3D structural plan generation for enterprise construction clients",
  },
];
