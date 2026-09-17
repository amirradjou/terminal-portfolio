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
  website: "https://terminal.amirradjou.com",
  professionalSite: "https://amirradjou.com",
  linkedin: "https://www.linkedin.com/in/amirreza-radjou/",
  github: "https://github.com/amirradjou",
  twitter: "https://twitter.com/mooolcool",
  cvPath: "/CV.pdf",
  cvUpdated: "Sep 2026",
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
  { id: 4, title: "Professional site", url: profile.professionalSite },
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
      "Primary developer rebuilding MCBR, a legacy merchant-rules platform, as Go microservices and batch jobs on OpenShift: gRPC services, SOAP compatibility adapters and Azure Blob Storage integration.",
      "Built and maintain Helm charts for MCBR and the Enterprise Product Catalog (EPC) across dev/SIT/UAT (Istio VirtualServices for gRPC, ConfigMap-driven config), deployed through Jenkins pipelines.",
      "Hardened REST and gRPC endpoints with an OpenShift service mesh (mTLS, traffic policies, observability) for zero-trust communication between microservices.",
      "Onboarded new product models, including Simplii Financial, and a benefits API into EPC, the multi-brand product-data source business teams depend on; refactored its reference-data models.",
      "Authored shared gRPC/protobuf contracts (buf) for mortgage rate inquiry, product eligibility and validation services; reviewed peers' gRPC and observability changes.",
      "Built a Layer7 API-gateway token CLI (mTLS, JWT decoding); authored Interface Agreements for partner teams.",
    ],
  },
  {
    company: "Dandelion Network",
    role: "Software Engineer",
    location: "Remote",
    period: "May 2024 - March 2025",
    bullets: [
      "Built Go and Python backend services for a mobile wallet: REST, GraphQL (chat, transaction history) and gRPC inter-node communication, released through Jenkins CI/CD and Docker.",
      "Led the network simulator team, evaluating node and client behaviour under adversarial conditions (malicious nodes, weak connectivity, network delays) and simulated attacks.",
      "Developed Substrate/Ink! (Rust) smart contracts for multi-signature wallets and a secure Vault on Polkadot, hardened against reentrancy, with a Vue.js + TypeScript frontend.",
    ],
  },
  {
    company: "York University",
    role: "Research Assistant - Software Engineer",
    location: "Toronto, ON",
    period: "September 2022 - May 2025",
    bullets: [
      "Extended CNSim, an open-source Java network simulator, with Bitcoin and IOTA/Tangle protocols for comparative analysis of distributed consensus systems.",
      "Introduced a Transaction Finality metric and pluggable node-behaviour strategies to benchmark protocols under attack scenarios; added JUnit harnesses, Python post-processing and a visualization GUI.",
    ],
  },
];
