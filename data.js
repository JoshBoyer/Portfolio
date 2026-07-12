/* ---------------------------------------------------------------------------
   Site content lives here. To add a project, experiment, or role, add an
   entry to the matching array below — the homepage renders these
   automatically (PROJECTS and EXPERIMENTS as cards, EXPERIENCE as a
   timeline).

   Fields: emoji, title, description, tags[], status (optional badge),
   link (optional — external URLs open in a new tab), private (optional —
   shows a "private repo" tag instead of pretending there's nothing there).
--------------------------------------------------------------------------- */

const PROJECTS = [
  {
    emoji: "🥕",
    title: "Forage",
    description:
      "A household intelligence platform: pantry, fridge, and freezer " +
      "inventory, meal plans generated from what's actually on hand, and " +
      "shopping lists that only cover the gap. Privacy-first, self-hosted, " +
      "data kept in Canada. Currently in beta with a public waitlist.",
    tags: ["react", "typescript", "node", "postgresql", "docker"],
    status: "in beta",
    link: "https://goforage.ca",
  },
  {
    emoji: "🎙️",
    title: "Lowkey (Hush)",
    description:
      "System-wide push-to-talk voice-to-text for Windows that runs entirely " +
      "on-device — Whisper for transcription, Llama for cleanup, zero cloud. " +
      "Hold a key, talk, and polished text lands wherever your cursor is.",
    tags: ["electron", "whisper.cpp", "llama.cpp", "local-first"],
    status: "in production",
    private: true,
  },
  {
    emoji: "🔧",
    title: "Workshop 42",
    description:
      "My maker space and its online home: 3D printing, electronics, and " +
      "woodworking builds like a gear-driven utility knife, a lightsaber " +
      "handheld vacuum, and printable designs shared on MakerWorld.",
    tags: ["3d printing", "electronics", "maker"],
    status: "live",
    link: "https://ws42.ca",
  },
];

const EXPERIENCE = [
  {
    role: "Functional Analyst, Claims Architecture",
    company: "Medavie Blue Cross",
    period: "2022 — present",
    summary:
      "Integration, migration, and configuration workstreams on an " +
      "enterprise claims platform modernisation that brought 35M+ claims " +
      "and 1M+ members onto a modern core at go-live.",
    highlights: [
      "Designed provider data synchronisation (CDAnet, event-driven REST APIs) and retired legacy COBOL extracts in favour of modern API endpoints",
      "Led cross-carrier claims-history takeovers — including ~500K claim lines and ~$60M in claim amounts — owning validation and reconciliation end to end",
      "Authored the Solution Overviews used as the design-of-record, with walkthroughs delivered to eight cross-functional teams",
      "Built the GitHub Copilot business case that secured a team licence and contributed to an enterprise AI tooling pilot",
    ],
    tags: ["claims", "integration", "modernisation"],
  },
  {
    role: "Systems Analyst / Business Rules Architect",
    company: "Grenville Mutual Insurance",
    period: "2014 — 2022",
    summary:
      "Owned business-rule architecture and broker integrations for a P&C " +
      "carrier known as a technology leader among Ontario mutuals.",
    highlights: [
      "Architected the complete rating and underwriting rule set across personal and commercial lines",
      "Led configuration of broker/carrier integration platforms (Brovada, Applied EPIC, TAM) with external vendors",
      "Built renewal automation that cut manual underwriting by 80% on personal lines and 30–40% on commercial",
      "Developed a secure C#/.NET vendor upload portal integrated with policy-management APIs",
    ],
    tags: ["p&c", "rating engines", "c#/.net"],
  },
  {
    role: "Systems / Network Administrator",
    company: "Grenville Mutual Insurance",
    period: "2009 — 2014",
    summary:
      "Lead infrastructure architect while administering the carrier's core " +
      "policy, claims, and accounting systems.",
    highlights: [
      "Designed the complete technology stack for a $5.3M head-office build, from requirements through migration",
      "Architected a VMware private-cloud migration and enterprise network with VLAN segmentation",
    ],
    tags: ["infrastructure", "vmware", "networking"],
  },
  {
    role: "NOC & Project Technician",
    company: "Harris Computer Services",
    period: "2007 — 2009",
    summary:
      "Designed and deployed network and server infrastructure for SMB " +
      "clients — assessments, rack builds, firewalls, and AD/Exchange " +
      "migrations.",
    tags: ["consulting", "networking"],
  },
  {
    role: "Support Technician",
    company: "Dell Canada",
    period: "2006 — 2007",
    summary: "Where it all started.",
    tags: [],
  },
];

const EXPERIMENTS = [
  {
    emoji: "🦜",
    title: "Lowkey Parakeet",
    description:
      "Taking Lowkey cross-platform: offline speech-to-text on desktop and " +
      "mobile from one Tauri 2.0 codebase, running NVIDIA Parakeet TDT " +
      "models on CPU via sherpa-onnx with INT8 quantisation.",
    tags: ["tauri", "rust", "react", "onnx"],
    status: "active",
    private: true,
  },
  {
    emoji: "⚡",
    title: "Spark",
    description:
      "A Git-powered personal assistant with Claude Code as the interface. " +
      "Tasks, notes, journal, and reviews live as markdown in a repo; MCP " +
      "integrations bring in Google Calendar and Gmail for daily briefings.",
    tags: ["claude code", "mcp", "markdown", "git"],
    status: "daily driver",
    private: true,
  },
  {
    emoji: "🐇",
    title: "Side Quests",
    description:
      "A mobile-first second brain for the rabbit-hole instinct: capture a " +
      "thought, fork into deeper quests without losing your place, and let " +
      "the topology surface connections between ideas.",
    tags: ["mobile", "knowledge graph"],
    status: "planning",
    private: true,
  },
  {
    emoji: "🏕️",
    title: "OffGridly",
    description:
      "A planning and management platform for off-grid living: solar and " +
      "battery tracking, water and supply inventories, weather integration, " +
      "and cost tracking for the sustainably stubborn.",
    tags: ["next.js", "react", "typescript"],
    status: "prototype",
    private: true,
  },
];
