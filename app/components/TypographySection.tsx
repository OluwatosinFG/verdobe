const scaleRows = [
  {
    tag: "H1",
    className: "font-bebas text-[52px] text-forest leading-none",
    text: "Where Land Meets Legacy",
  },
  {
    tag: "H2",
    className: "font-playfair text-[34px] text-forest font-bold",
    text: "Adoption Gap Analysis Report",
  },
  {
    tag: "H3",
    className: "font-playfair text-[22px] text-brand-slate italic",
    text: "Climate-Smart Agriculture Transition",
  },
  {
    tag: "Body",
    className: "font-lato text-[15px] text-[#555] leading-[1.7]",
    text: "Smallholder farmers hold centuries of ecological knowledge. Our role is to honour, document, and integrate that wisdom into development systems that actually work.",
  },
  {
    tag: "Caption",
    className:
      "font-plex text-[10px] tracking-[0.35em] text-[#999] uppercase",
    text: "Verdobe Advisory Ltd · Est. 2025 · Nigeria & United Kingdom",
  },
];

export default function TypographySection() {
  return (
    <div className="bg-ink">
      {/* Font showcase grid */}
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        <div className="px-16 py-20 border-r border-white/7 max-md:border-r-0">
          <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-8">
            Display Font — Impact &amp; Structure
          </div>
          <div className="font-bebas text-[72px] text-cream leading-none tracking-[0.03em] mb-2">
            VERDOBE
            <br />
            ADVISORY
          </div>
          <div className="font-lato text-[15px] text-cream/50 leading-[1.8] my-6">
            Used for all major headings, the wordmark, section titles, and any
            moment the brand needs to command the room. Bebas Neue carries weight
            without aggression — confident, architectural, modern.
          </div>
          <div className="mt-9 pt-7 border-t border-white/8">
            <div className="font-plex text-[12px] text-brand-orange tracking-[0.15em] mb-1.5">
              Bebas Neue
            </div>
            <div className="font-lato text-[12px] text-cream/30 leading-[1.6]">
              All caps &middot; Display weight only &middot; Tracking 0.03–0.06em
            </div>
          </div>
        </div>

        <div className="px-16 py-20">
          <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-8">
            Serif — Voice &amp; Humanity
          </div>
          <div className="font-playfair text-[46px] italic text-cream leading-[1.15] mb-2">
            &ldquo;Where Land
            <br />
            Meets Legacy&rdquo;
          </div>
          <div className="font-lato text-[15px] text-cream/50 leading-[1.8] my-6">
            Playfair Display provides the warmth and literary authority that
            Bebas Neue cannot. Used for taglines, pull quotes, and body headings
            — it reminds the reader that behind every chart is a farmer, a
            family, a harvest.
          </div>
          <div className="mt-9 pt-7 border-t border-white/8">
            <div className="font-plex text-[12px] text-brand-orange tracking-[0.15em] mb-1.5">
              Playfair Display
            </div>
            <div className="font-lato text-[12px] text-cream/30 leading-[1.6]">
              Italic for quotes &middot; Bold for subheads &middot; Regular 400
              for body serif
            </div>
          </div>
        </div>
      </div>

      {/* Body + Mono */}
      <div className="px-16 py-15 bg-white/3 border-t border-white/6 grid grid-cols-2 max-md:grid-cols-1 gap-15">
        <div>
          <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-8">
            Body — Readability at Scale
          </div>
          <div className="font-lato text-[16px] text-cream/70 leading-[1.85] mb-4">
            Verdobe Advisory provides specialist adoption science consultancy —
            helping agricultural development organisations, governments, and
            rural communities bridge the gap between ecological innovation and
            farmer behaviour change.
          </div>
          <div className="mt-5 pt-5 border-t border-white/8">
            <div className="font-plex text-[12px] text-brand-orange tracking-[0.15em] mb-1.5">
              Lato
            </div>
            <div className="font-lato text-[12px] text-cream/30 leading-[1.6]">
              Light 300 for captions &middot; Regular 400 for body &middot; Bold
              700 for emphasis
            </div>
          </div>
        </div>
        <div>
          <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-8">
            Mono — Data &amp; Precision
          </div>
          <div className="font-plex text-[11px] tracking-[0.2em] text-slate-lt leading-[1.7]">
            Verdobe Advisory Ltd
            <br />
            Est. 2025 &middot; Nigeria &amp; UK
            <br />
            tosin@verdobe.com
            <br />
            REF: VAL-2025-001
            <br />
            Adoption Gap Audit &middot; Phase 1
          </div>
          <div className="mt-5 pt-5 border-t border-white/8">
            <div className="font-plex text-[12px] text-brand-orange tracking-[0.15em] mb-1.5">
              IBM Plex Mono
            </div>
            <div className="font-lato text-[12px] text-cream/30 leading-[1.6]">
              Labels &middot; Reference numbers &middot; Technical metadata
              &middot; Hex codes
            </div>
          </div>
        </div>
      </div>

      {/* Type scale */}
      <div className="bg-cream px-16 py-18">
        <div className="font-plex text-[9px] tracking-[0.5em] text-brand-orange uppercase mb-12">
          Typographic Hierarchy
        </div>
        {scaleRows.map((row, i) => (
          <div
            key={row.tag}
            className={`flex items-baseline gap-8 py-5 ${
              i < scaleRows.length - 1 ? "border-b border-forest/10" : ""
            }`}
          >
            <span className="font-plex text-[9px] tracking-[0.3em] text-[#bbb] min-w-[70px]">
              {row.tag}
            </span>
            <span className={row.className}>{row.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
