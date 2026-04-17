import { useState } from "react";

const CYAN = "#0CE4FA";
const PURPLE = "#7B5FEB";

const icons = {
  "Core Pages": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  "Homepage Sections": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
    </svg>
  ),
  "AI Tool Categories": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="9" height="9" rx="1.5"/>
      <rect x="13" y="2" width="9" height="9" rx="1.5"/>
      <rect x="2" y="13" width="9" height="9" rx="1.5"/>
      <rect x="13" y="13" width="9" height="9" rx="1.5"/>
    </svg>
  ),
  "Special Sections": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  "Data & Info": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 20V10M12 20V4M6 20v-6"/>
    </svg>
  ),
  "Legal & Meta": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
    </svg>
  ),
};

const pageIcon = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
  </svg>
);

const anchorIcon = (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="3"/>
    <line x1="12" y1="8" x2="12" y2="21"/>
    <path d="M5 15l7 6 7-6"/>
  </svg>
);

const sections = {
  "Core Pages": {
    color: CYAN,
    items: [
      { label: "Home", url: "/", desc: "Hero · Search · All sections" },
      { label: "Companies", url: "/companies.html", desc: "50+ AI companies, valuations, profiles" },
      { label: "LLM Models", url: "/llms.html", desc: "All major models benchmarked" },
      { label: "Image AI", url: "/imgai.html", desc: "Image generation tools ranked" },
      { label: "Video AI", url: "/videoai.html", desc: "Video generation tools ranked" },
      { label: "Founders", url: "/founders.html", desc: "AI founder profiles & bios" },
      { label: "Rankings", url: "/rankings.html", desc: "Model & company leaderboards" },
      { label: "Voice AI", url: "/voice.html", desc: "Voice & audio AI tools" },
      { label: "China AI Report", url: "/china-ai.html", desc: "Chinese AI ecosystem deep dive" },
    ],
  },
  "Homepage Sections": {
    color: "#A78BFA",
    items: [
      { label: "Hero", url: "#hero", desc: "Intelligence Index intro" },
      { label: "Search", url: "#search-hero", desc: "AI directory search" },
      { label: "AI Battle", url: "#aibattle", desc: "Side-by-side model compare" },
      { label: "Best by Category", url: "#bgb", desc: "Best AI per use case" },
      { label: "What We Cover", url: "#covers", desc: "AILens coverage overview" },
      { label: "Companies", url: "#companies", desc: "Company cards carousel" },
      { label: "Tier List", url: "#tierlist", desc: "S/A/B/C tier rankings" },
      { label: "Honest Reviews", url: "#honest-reviews", desc: "Unfiltered tool reviews" },
      { label: "GOAT: Claude", url: "#goat-claude", desc: "Featured model deep dive" },
    ],
  },
  "AI Tool Categories": {
    color: "#34D399",
    items: [
      { label: "Image AI", url: "#imgai", desc: "Midjourney, DALL-E, Firefly…" },
      { label: "Video AI", url: "#videoai", desc: "Kling, Sora, Runway…" },
      { label: "Kling vs Seedance", url: "#kling-vs-seedance", desc: "Head-to-head video comparison" },
      { label: "AI Agents", url: "#agents", desc: "Autonomous agent tools" },
      { label: "Voice AI", url: "#voice", desc: "Voice & speech tools" },
      { label: "Meeting AI", url: "#meeting-ai", desc: "Meeting summaries & notes" },
      { label: "Presentation AI", url: "#presentation-ai", desc: "Slide deck generators" },
      { label: "Design AI", url: "#design-ai", desc: "Creative design tools" },
      { label: "Automation AI", url: "#automation-ai", desc: "Workflow automation" },
      { label: "Music AI", url: "#music-ai", desc: "Audio & music generation" },
      { label: "Avatar AI", url: "#avatar-ai", desc: "AI avatar creation tools" },
      { label: "Vibe Coding", url: "#vibecoding-ai", desc: "AI coding & dev tools" },
      { label: "Social AI", url: "#social-ai", desc: "Content & social tools" },
    ],
  },
  "Special Sections": {
    color: "#F87171",
    items: [
      { label: "Uncensored AI Guide", url: "#nsfw-guide", desc: "NSFW generator reviews & rankings" },
      { label: "Real AI Limits", url: "#ai-limits", desc: "What AI can & can't do in 2026" },
      { label: "NSFW Creator Guide", url: "#nsfw-creator-guide", desc: "Full creator workflow guide" },
      { label: "Guide: Image NSFW", url: "#guide1-panel", desc: "Image generation deep dive" },
      { label: "Guide: Video NSFW", url: "#guide2-panel", desc: "Video generation deep dive" },
      { label: "Guide: Companions", url: "#guide3-panel", desc: "AI companion deep dive" },
      { label: "Guide: Face Swap", url: "#guide4-panel", desc: "Face swap tool guide" },
      { label: "Guide: Chatbots", url: "#guide5-panel", desc: "Uncensored chatbot guide" },
      { label: "China AI Guide", url: "#china-guide-panel", desc: "Chinese AI tools guide" },
    ],
  },
  "Data & Info": {
    color: "#FCD34D",
    items: [
      { label: "Founders", url: "#founders", desc: "Profiles: Altman, Huang, Amodei…" },
      { label: "Rankings", url: "#rankings", desc: "Benchmark leaderboard table" },
      { label: "Timeline", url: "#timeline", desc: "AI history milestones" },
      { label: "China AI", url: "#china-ai-section", desc: "Chinese model cards" },
      { label: "News", url: "#news", desc: "Latest AI headlines" },
      { label: "Glossary", url: "#glossary", desc: "AI terminology A–Z" },
      { label: "Ownership Map", url: "#ownership-map", desc: "Who owns what in AI" },
    ],
  },
  "Legal & Meta": {
    color: "#94A3B8",
    items: [
      { label: "Privacy Policy", url: "/privacy.html", desc: "Data & privacy practices" },
      { label: "Terms of Use", url: "/terms.html", desc: "Usage terms & conditions" },
      { label: "Disclaimer", url: "/disclaimer.html", desc: "Content disclaimer" },
    ],
  },
};

const totalCount = Object.values(sections).reduce((a, s) => a + s.items.length, 0);

export default function Sitemap() {
  const [active, setActive] = useState(null);

  return (
    <div style={{
      fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      background: "#000",
      minHeight: "100vh",
      padding: "48px 24px 80px",
      color: "#fff",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .node { transition: background 0.15s ease, transform 0.15s ease; }
        .node:hover { background: rgba(255,255,255,.055) !important; transform: translateX(2px); }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .group { animation: fadeUp 0.4s ease both; }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 52, maxWidth: 600, margin: "0 auto 52px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          padding: "4px 14px 4px 10px",
          border: "1px solid rgba(12,228,250,.2)",
          borderRadius: 50, marginBottom: 20,
          background: "rgba(12,228,250,.05)",
        }}>
          <svg width="6" height="6" viewBox="0 0 24 24" fill={CYAN}><circle cx="12" cy="12" r="10"/></svg>
          <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(12,228,250,.65)" }}>
            ailens.online — Vol. 02 · 2026
          </span>
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 60,
          letterSpacing: ".1em",
          lineHeight: 1,
          marginBottom: 12,
          background: `linear-gradient(135deg, ${CYAN} 0%, ${PURPLE} 100%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}>
          SITE MAP
        </h1>

        <p style={{ fontSize: 12, color: "rgba(255,255,255,.3)", fontWeight: 400, letterSpacing: ".03em" }}>
          {totalCount} pages & sections · {Object.keys(sections).length} categories
        </p>
      </div>

      {/* Root node */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{
          padding: "13px 36px",
          border: `1.5px solid rgba(12,228,250,.4)`,
          borderRadius: 14,
          background: "rgba(12,228,250,.06)",
          boxShadow: `0 0 40px rgba(12,228,250,.1)`,
          textAlign: "center",
        }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: ".18em", color: CYAN }}>
            AILENS.ONLINE
          </div>
          <div style={{ fontSize: 8, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "rgba(255,255,255,.25)", marginTop: 3 }}>
            Root · index.html
          </div>
        </div>
      </div>

      {/* Connector */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: 1.5, height: 32, background: `linear-gradient(to bottom, rgba(12,228,250,.5), rgba(12,228,250,.05))` }} />
      </div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
        gap: 20,
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {Object.entries(sections).map(([groupName, group], gi) => (
          <div
            key={groupName}
            className="group"
            style={{
              animationDelay: `${gi * 0.06}s`,
              border: "1px solid rgba(255,255,255,.07)",
              borderRadius: 14,
              overflow: "hidden",
              background: "rgba(255,255,255,.02)",
            }}
          >
            {/* Group header */}
            <div style={{
              display: "flex", alignItems: "center", gap: 9,
              padding: "12px 14px",
              borderBottom: "1px solid rgba(255,255,255,.055)",
              background: "rgba(255,255,255,.025)",
            }}>
              <span style={{ color: group.color, display: "flex", alignItems: "center" }}>
                {icons[groupName]}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: group.color }}>
                  {groupName}
                </div>
                <div style={{ fontSize: 8.5, color: "rgba(255,255,255,.22)", fontWeight: 500, marginTop: 1 }}>
                  {group.items.length} {group.items.length === 1 ? "entry" : "entries"}
                </div>
              </div>
              <div style={{
                width: 5, height: 5, borderRadius: "50%",
                background: group.color,
                boxShadow: `0 0 6px ${group.color}`,
              }} />
            </div>

            {/* Items */}
            <div style={{ padding: "7px 8px 8px", display: "flex", flexDirection: "column", gap: 2 }}>
              {group.items.map((item, i) => (
                <a
                  key={item.url}
                  href={item.url}
                  className="node"
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "7px 8px",
                    borderRadius: 8,
                    background: "transparent",
                    border: "1px solid transparent",
                    textDecoration: "none",
                  }}
                  onMouseEnter={() => setActive(`${gi}-${i}`)}
                  onMouseLeave={() => setActive(null)}
                >
                  <span style={{
                    color: active === `${gi}-${i}` ? group.color : "rgba(255,255,255,.2)",
                    display: "flex", alignItems: "center", flexShrink: 0,
                    transition: "color 0.15s",
                  }}>
                    {item.url.startsWith("#") ? anchorIcon : pageIcon}
                  </span>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.85)",
                      letterSpacing: ".01em",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {item.label}
                    </div>
                    <div style={{
                      fontSize: 9.5, color: "rgba(255,255,255,.25)", marginTop: 1,
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {item.desc}
                    </div>
                  </div>

                  <span style={{
                    fontSize: 8, fontWeight: 700, letterSpacing: ".06em",
                    color: "rgba(255,255,255,.18)",
                    fontFamily: "monospace",
                    flexShrink: 0,
                    padding: "2px 6px",
                    borderRadius: 4,
                    background: "rgba(255,255,255,.05)",
                    maxWidth: 90,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}>
                    {item.url}
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div style={{
        display: "flex", justifyContent: "center", gap: 24,
        marginTop: 48,
      }}>
        {[
          { icon: pageIcon, label: "Dedicated page" },
          { icon: anchorIcon, label: "On-page anchor" },
        ].map(({ icon, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ color: "rgba(255,255,255,.3)", display: "flex" }}>{icon}</span>
            <span style={{ fontSize: 9.5, color: "rgba(255,255,255,.25)", fontWeight: 500, letterSpacing: ".04em" }}>{label}</span>
          </div>
        ))}
      </div>

      <div style={{
        textAlign: "center", marginTop: 28,
        color: "rgba(255,255,255,.1)",
        fontSize: 9, letterSpacing: ".2em", textTransform: "uppercase",
      }}>
        AILens · {totalCount} nodes · generated from index-302.html
      </div>
    </div>
  );
}
