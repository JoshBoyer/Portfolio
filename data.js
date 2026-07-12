/* ---------------------------------------------------------------------------
   Site content lives here. To add a project or experiment, add an entry to
   the matching array below — the homepage renders these automatically.

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
