// What the lab actually works on — small line icons + labels in the hero.
// Pure SVG (stroke = currentColor), no assets.

const ICON = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const themes = [
  {
    label: "Anomaly Detection",
    svg: (
      <>
        <polyline points="2,17 6,14 10,16 14,11 18,13" {...ICON} />
        <circle cx="21" cy="5" r="2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Irregular Time-Series",
    svg: (
      <>
        <line x1="2" y1="20" x2="22" y2="20" {...ICON} opacity="0.4" />
        <line x1="4" y1="20" x2="4" y2="11" {...ICON} />
        <line x1="9" y1="20" x2="9" y2="6" {...ICON} />
        <line x1="13" y1="20" x2="13" y2="14" {...ICON} />
        <line x1="19" y1="20" x2="19" y2="9" {...ICON} />
      </>
    ),
  },
  {
    label: "Quality Engineering",
    svg: (
      <>
        <path d="M3 19 A9 9 0 0 1 21 19" {...ICON} />
        <line x1="12" y1="19" x2="16.5" y2="11" {...ICON} />
        <circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: "Survival Analysis",
    svg: (
      <polyline points="2,5 6,5 6,9 11,9 11,14 16,14 16,18 22,18" {...ICON} />
    ),
  },
  {
    label: "Metric Development",
    svg: (
      <>
        <circle cx="12" cy="12" r="9" {...ICON} />
        <circle cx="12" cy="12" r="4.5" {...ICON} />
        <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

export function HeroThemes() {
  return (
    <div className="hero-themes" aria-label="Research focus">
      {themes.map((t) => (
        <span key={t.label} className="hero-theme">
          <svg viewBox="0 0 24 24" aria-hidden>{t.svg}</svg>
          <span className="hero-theme__label">{t.label}</span>
        </span>
      ))}
    </div>
  );
}
