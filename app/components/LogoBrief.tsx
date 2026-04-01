export default function LogoBrief() {
  return (
    <div className="bg-forest">
      <div className="grid grid-cols-2 max-md:grid-cols-1">
        {/* Left — Designer Brief */}
        <div className="px-16 py-20 border-r border-white/8 max-md:border-r-0">
          <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-4">
            Designer Brief
          </div>
          <div className="font-bebas text-[clamp(36px,4vw,58px)] text-cream leading-none tracking-[0.04em] mb-8">
            WHAT TO
            <br />
            BUILD
          </div>

          {/* Concept A */}
          <div className="bg-black/20 p-9 mb-4 border-l-4 border-brand-orange relative">
            <div className="font-plex text-[8px] tracking-[0.4em] text-brand-orange uppercase mb-3.5">
              ★ Concept A — Recommended
            </div>
            <div className="font-playfair text-[20px] text-cream mb-3">
              The Root &amp; Branch Mark
            </div>
            <div className="font-lato text-[13px] text-cream/50 leading-[1.7]">
              A minimal botanical symbol: a single vertical trunk that splits
              upward into stylized branches (modern ecology, growth, science) and
              downward into roots (traditional knowledge, heritage, community).
              The upper branches in safety orange; the roots in sage green.
              Paired with the Bebas Neue wordmark, &ldquo;OBE&rdquo; in orange.
              This mark should read equally well at 16px (mobile favicon) and
              200px (proposal cover).
            </div>
          </div>

          {/* Concept B */}
          <div className="bg-black/20 p-9 mb-4 border-l-4 border-slate-lt relative">
            <div className="font-plex text-[8px] tracking-[0.4em] text-brand-orange uppercase mb-3.5">
              Concept B — Alternate
            </div>
            <div className="font-playfair text-[20px] text-cream mb-3">
              Geometric Diamond Split
            </div>
            <div className="font-lato text-[13px] text-cream/50 leading-[1.7]">
              A diamond shape divided diagonally — upper half in forest green,
              lower half in slate grey — with a single safety-orange horizontal
              line crossing the midpoint. Symbolizes the division and bridge
              between tradition (below) and modernity (above). Clean, abstract,
              highly scalable.
            </div>
          </div>

          {/* Key instruction */}
          <div className="mt-7 py-7 px-9 bg-brand-orange/12 border-l-4 border-brand-orange">
            <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-2.5">
              Key Instruction
            </div>
            <div className="font-lato text-[13px] text-cream/60 leading-[1.7]">
              The &ldquo;OBE&rdquo; in the wordmark must <em>always</em> appear
              in Safety Orange (#E8570A). This is non-negotiable. It quietly
              signals the personal heritage in the name before anyone reads the
              brand story.
            </div>
          </div>
        </div>

        {/* Right — Logo In Context */}
        <div className="px-16 py-20">
          <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-4">
            Logo In Context
          </div>
          <div className="font-bebas text-[clamp(36px,4vw,58px)] text-cream leading-none tracking-[0.04em] mb-8">
            HOW IT
            <br />
            LOOKS
          </div>

          <div className="flex flex-col gap-0.5">
            {/* Dark preview — large */}
            <div className="bg-ink p-9 px-10 flex items-center gap-4">
              <div className="shrink-0">
                <svg
                  width="38"
                  height="46"
                  viewBox="0 0 38 46"
                  fill="none"
                >
                  <line x1="19" y1="4" x2="19" y2="38" stroke="#F7F3EC" strokeWidth="1.2" />
                  <line x1="19" y1="16" x2="7" y2="28" stroke="#E8570A" strokeWidth="1.2" />
                  <line x1="19" y1="11" x2="30" y2="23" stroke="#E8570A" strokeWidth="1.2" />
                  <line x1="19" y1="24" x2="11" y2="33" stroke="#7A9E82" strokeWidth="0.9" />
                  <line x1="19" y1="30" x2="27" y2="39" stroke="#7A9E82" strokeWidth="0.9" />
                  <line x1="19" y1="38" x2="12" y2="45" stroke="#F7F3EC" strokeWidth="0.7" opacity="0.4" />
                  <line x1="19" y1="38" x2="26" y2="45" stroke="#F7F3EC" strokeWidth="0.7" opacity="0.4" />
                  <ellipse cx="19" cy="2" rx="3" ry="4" fill="#7A9E82" opacity="0.9" />
                </svg>
              </div>
              <div>
                <div className="font-bebas text-[42px] text-cream tracking-[0.05em] leading-none">
                  VERD<span className="text-brand-orange">OBE</span>
                </div>
                <div className="font-plex text-[8px] tracking-[0.35em] text-sage uppercase mt-1.5">
                  Advisory Ltd
                </div>
                <div className="font-plex text-[8px] tracking-[0.3em] text-cream/25 bg-white/5 mt-2 px-2 py-1">
                  Dark background version
                </div>
              </div>
            </div>

            {/* Light preview — small */}
            <div className="bg-cream p-9 px-10 flex items-center gap-4">
              <div className="shrink-0">
                <svg
                  width="26"
                  height="32"
                  viewBox="0 0 38 46"
                  fill="none"
                >
                  <line x1="19" y1="4" x2="19" y2="38" stroke="#1B3A2D" strokeWidth="1.5" />
                  <line x1="19" y1="16" x2="7" y2="28" stroke="#E8570A" strokeWidth="1.2" />
                  <line x1="19" y1="11" x2="30" y2="23" stroke="#E8570A" strokeWidth="1.2" />
                  <line x1="19" y1="24" x2="11" y2="33" stroke="#4A5568" strokeWidth="0.9" />
                  <line x1="19" y1="30" x2="27" y2="39" stroke="#4A5568" strokeWidth="0.9" />
                  <ellipse cx="19" cy="2" rx="3" ry="4" fill="#1B3A2D" opacity="0.7" />
                </svg>
              </div>
              <div>
                <div className="font-bebas text-[28px] text-forest tracking-[0.05em] leading-none">
                  VERD<span className="text-brand-orange">OBE</span>
                </div>
                <div className="font-plex text-[7px] tracking-[0.35em] text-brand-slate uppercase mt-1.5">
                  Advisory Ltd
                </div>
                <div className="font-plex text-[8px] tracking-[0.3em] text-forest/35 bg-forest/7 mt-2 px-2 py-1">
                  Light / print version
                </div>
              </div>
            </div>

            {/* Slate preview — small */}
            <div className="bg-brand-slate p-9 px-10">
              <div className="font-bebas text-[28px] text-cream tracking-[0.05em] leading-none">
                VERD<span className="text-brand-orange">OBE</span>
              </div>
              <div className="font-plex text-[7px] tracking-[0.35em] text-slate-lt uppercase mt-1.5">
                Advisory
              </div>
              <div className="font-plex text-[8px] tracking-[0.3em] text-cream/30 bg-white/7 mt-2 px-2 py-1 inline-block">
                Slate grey version &middot; proposals
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs row */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-0.5">
        {[
          {
            label: "Minimum Size",
            text: 'The wordmark-only version must remain legible at 120px wide. The full lockup (mark + wordmark + Advisory) must be used at 200px or larger only. Provide a favicon-safe mark-only version for digital use.',
            bg: "bg-black/30",
          },
          {
            label: "Clear Space",
            text: 'Maintain a clear space equal to the height of the "V" in VERDOBE on all four sides of the logo. Never crowd the mark with text, images, or other brand elements.',
            bg: "bg-black/20",
          },
          {
            label: "File Formats",
            text: "Request SVG (master), PNG at 2x and 4x for web, PDF for print, and a single-colour version in Forest Green for stamps, embossing, and letterheads.",
            bg: "bg-black/30",
          },
        ].map((spec) => (
          <div key={spec.label} className={`${spec.bg} px-10 py-8`}>
            <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-3.5">
              {spec.label}
            </div>
            <div className="font-lato text-[13px] text-cream/50 leading-[1.7]">
              {spec.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
