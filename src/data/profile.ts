/**
 * Single source of truth for everything the site says about its owner.
 * Keep this in sync with the CV (see README "Updating content").
 */

export const profile = {
  name: "Amirreza Radjou",
  firstName: "Amirreza",
  role: "Senior Full Stack Developer",
  company: "CIBC",
  location: "Toronto, ON",
  headline: "Senior Full Stack Developer @ CIBC · Toronto, ON",
  tagline:
    "4+ years building backend services and distributed systems in Go and Python.",
  email: "amirreza.radjou@gmail.com",
  website: "https://amirradjou.com",
  linkedin: "https://www.linkedin.com/in/amirreza-radjou/",
  github: "https://github.com/amirradjou",
  twitter: "https://twitter.com/mooolcool",
  cvPath: "/CV.pdf",
  cvUpdated: "Jun 2026",
};

export type Social = {
  id: number;
  title: string;
  url: string;
};

export const socials: Social[] = [
  { id: 1, title: "LinkedIn", url: profile.linkedin },
  { id: 2, title: "GitHub", url: profile.github },
  { id: 3, title: "Twitter", url: profile.twitter },
];

export type Project = {
  id: number;
  title: string;
  desc: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CO2 Emissions in Bitcoin Mining",
    desc: "Full-stack app (React/TypeScript, Django/Flask, PostgreSQL) that visualizes Bitcoin-mining CO2 emissions as an interactive, time-ranged geospatial heatmap. Large datasets render in-browser via chunked delivery and precomputed cumulative aggregates; a daily multi-source ETL pipeline feeds the REST API.",
    url: "https://andreapodhorsky.com/btcCO2emissions",
  },
  {
    id: 2,
    title: "go-orbitdb",
    desc: "Go implementation of OrbitDB, the peer-to-peer database on IPFS: key-value, event-log and document stores, replication for eventual consistency, and cryptographic access control. I am the primary author (194 of the project's 201 commits).",
    url: "https://github.com/orbitdb/go-orbitdb",
  },
  {
    id: 3,
    title: "CNSim - Consensus Network Simulator",
    desc: "Open-source Java network simulator from York University's Enterprise Systems Group. I added the Bitcoin and IOTA/Tangle protocols, a Transaction Finality metric, pluggable node-behaviour strategies for attack scenarios, JUnit test harnesses, Python post-processing scripts and a visualization GUI.",
    url: "https://github.com/cmg-york/cnsim",
  },
];

export type Education = {
  title: string;
  desc: string;
};

export const education: Education[] = [
  {
    title: "M.Sc. Computer Science",
    desc: "York University, Toronto, ON | Sep 2022 - Oct 2025",
  },
  {
    title: "B.Sc. Computer Science",
    desc: "Amirkabir University of Technology, Tehran | Oct 2018 - Aug 2022",
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "CIBC",
    role: "Senior Full Stack Developer",
    location: "Toronto, ON",
    period: "March 2026 - Present",
    bullets: [
      "Hardened REST and gRPC endpoint security by deploying a service mesh on OpenShift (mTLS, traffic policies, observability) for zero-trust communication between microservices.",
      "Added gRPC APIs for inter-service communication, cutting payload overhead and latency versus REST on high-throughput internal traffic.",
      "Onboarded new product models, including Simplii Financial, into the Enterprise Product Catalog (EPC), the authoritative product-data source business teams depend on.",
      "Contributed to architecture and design decisions enabling shared services to serve multiple customer brands.",
      "Authored and presented Interface Agreements and provided integration support to partner teams.",
    ],
  },
  {
    company: "Dandelion Network",
    role: "Software Engineer",
    location: "Remote",
    period: "May 2024 - March 2025",
    bullets: [
      "Built Go and Python backend services for a mobile wallet, exposing REST, GraphQL (chat, transaction history) and gRPC inter-node communication across a distributed network.",
      "Led the network simulator team, building an environment to evaluate node and client behaviour under adversarial conditions: malicious nodes, weak connectivity and network delays.",
      "Developed Substrate/Ink! (Rust) smart contracts for multi-signature wallets and a secure Vault on Polkadot, hardened against reentrancy, with a Vue.js + TypeScript frontend.",
      "Drove security testing via simulated attacks; standardized Jenkins CI/CD and Docker for repeatable releases.",
    ],
  },
  {
    company: "York University",
    role: "Research Assistant - Software Engineer",
    location: "Toronto, ON",
    period: "September 2022 - May 2025",
    bullets: [
      "Extended CNSim, an open-source Java network simulator, with Bitcoin and IOTA/Tangle protocols for comparative analysis of distributed consensus systems.",
      "Introduced a Transaction Finality metric and pluggable node-behaviour strategies to benchmark protocols across settings and attack scenarios.",
      "Applied design patterns for extensibility, added JUnit test harnesses, and built Python post-processing scripts and a visualization GUI for network behaviour.",
    ],
  },
];
