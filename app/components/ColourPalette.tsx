export default function ColourPalette() {
  return (
    <>
      <div className="grid grid-cols-3 max-md:grid-cols-1 min-h-[600px]">
        {/* Forest */}
        <div className="flex flex-col relative overflow-hidden bg-forest">
          <div className="h-[200px] relative flex items-end px-9 py-7 bg-forest">
            <div className="absolute top-[-30px] right-[-30px] w-[130px] h-[130px] rounded-full border border-white/12" />
            <div className="font-plex text-[11px] tracking-[0.2em] text-white/50">
              #1B3A2D
            </div>
          </div>
          <div className="flex-1 px-9 py-8 pb-10 bg-forest-dark">
            <div className="font-bebas text-[44px] text-cream tracking-[0.04em] leading-none mb-3.5">
              FOREST
            </div>
            <div className="font-plex text-[8px] tracking-[0.4em] uppercase mb-4.5 text-sage">
              Stability &middot; Primary &middot; 60%
            </div>
            <div className="font-lato text-[13px] text-cream/50 leading-[1.75] mb-6">
              Deep, grounded, enduring. The colour of ancient forests, soil that
              has fed generations, and expertise that cannot be rushed. This is
              the backbone — your primary brand colour, your authority, your
              roots in every deliverable.
            </div>
            <div className="font-playfair italic text-[14px] text-cream/35 leading-normal pt-4.5 border-t border-white/10">
              &ldquo;The land does not move. Neither do we.&rdquo;
            </div>
          </div>
        </div>

        {/* Slate */}
        <div className="flex flex-col relative overflow-hidden bg-brand-slate">
          <div className="h-[200px] relative flex items-end px-9 py-7 bg-brand-slate">
            <div className="absolute top-[-30px] right-[-30px] w-[130px] h-[130px] rounded-full border border-white/12" />
            <div className="font-plex text-[11px] tracking-[0.2em] text-white/60">
              our forest
            </div>
          </div>
          <div className="flex-1 px-9 py-8 pb-10 bg-brand-slate-dark">
            <div className="font-bebas text-[44px] text-cream tracking-[0.04em] leading-none mb-3.5">
              SLATE
            </div>
            <div className="font-plex text-[8px] tracking-[0.4em] uppercase mb-4.5 text-slate-lt">
              Clarity &middot; Science &middot; 25%
            </div>
            <div className="font-lato text-[13px] text-cream/50 leading-[1.75] mb-6">
              Precise, neutral, credible. Slate grey is the colour of scientific
              rigour — peer review, policy documents, and evidence that speaks
              for itself. It balances the warmth of forest green with cool
              analytical authority.
            </div>
            <div className="font-playfair italic text-[14px] text-cream/35 leading-normal pt-4.5 border-t border-white/10">
              &ldquo;The evidence is clear. The data is measurable.&rdquo;
            </div>
          </div>
        </div>

        {/* Orange */}
        <div className="flex flex-col relative overflow-hidden bg-orange-deep">
          <div className="h-[200px] relative flex items-end px-9 py-7 bg-brand-orange">
            <div className="absolute top-[-30px] right-[-30px] w-[130px] h-[130px] rounded-full border border-white/12" />
            <div className="font-plex font-bold text-[11px] tracking-[0.2em] text-white/75">
              Safety Orange
            </div>
          </div>
          <div className="flex-1 px-9 py-8 pb-10 bg-orange-darker">
            <div className="font-bebas text-[44px] text-cream tracking-[0.04em] leading-none mb-3.5">
              SAFETY
              <br />
              ORANGE
            </div>
            <div className="font-plex text-[8px] tracking-[0.4em] uppercase mb-4.5 text-orange-light">
              Urgency &middot; Action &middot; 15%
            </div>
            <div className="font-lato text-[13px] text-cream/50 leading-[1.75] mb-6">
              Alert, urgent, undeniable. Safety orange is the colour of harvest
              fires, of climate deadlines that cannot be ignored, of the call to
              action that commands a room. Use it rarely. When you do —
              everything stops.
            </div>
            <div className="font-playfair italic text-[14px] text-cream/35 leading-normal pt-4.5 border-t border-white/10">
              &ldquo;The climate will not wait. Neither will we.&rdquo;
            </div>
          </div>
        </div>
      </div>

      {/* Ratio strip */}
      <div className="bg-ink px-16 py-12 flex items-center gap-15 flex-wrap max-md:flex-col max-md:items-start max-md:gap-6">
        <div>
          <div className="font-plex text-[9px] tracking-[0.4em] text-slate-lt uppercase mb-3.5">
            Visual Palette Tagline
          </div>
          <div className="font-playfair italic text-[22px] text-cream mb-5 leading-[1.3]">
            &ldquo;Stable as the Forest.
            <br />
            <span className="text-slate-lt">Clear as Slate.</span>
            <br />
            <span className="text-brand-orange">Bold as the Signal.&rdquo;</span>
          </div>
          <div className="font-plex text-[9px] tracking-[0.4em] text-slate-lt uppercase mt-4 mb-3.5">
            Colour Mix Ratio
          </div>
          <div className="flex h-6 w-80 gap-0.5">
            <div
              className="bg-forest flex items-center justify-center"
              style={{ width: "60%" }}
            >
              <span className="font-plex text-[8px] text-white/60 tracking-widest">
                60%
              </span>
            </div>
            <div className="w-0.5 bg-ink" />
            <div
              className="bg-brand-slate flex items-center justify-center"
              style={{ width: "25%" }}
            >
              <span className="font-plex text-[8px] text-white/60 tracking-widest">
                25%
              </span>
            </div>
            <div className="w-0.5 bg-ink" />
            <div
              className="bg-brand-orange flex items-center justify-center"
              style={{ width: "15%" }}
            >
              <span className="font-plex text-[8px] text-white/60 tracking-widest">
                15%
              </span>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-[260px] font-lato text-[13px] text-cream/35 leading-[1.8]">
          <strong className="text-cream/65">Forest green</strong> is the
          dominant voice — it appears on all primary surfaces, backgrounds, and
          headers.
          <br />
          <strong className="text-cream/65">Slate grey</strong> supports with
          precision — body text, borders, data-heavy documents, secondary UI.
          <br />
          <strong className="text-cream/65">Safety orange</strong> is the
          interrupt — calls to action, key findings, critical deadlines. Use it
          like a fire alarm: sparingly, but unforgettable when triggered.
        </div>
      </div>
    </>
  );
}
