const guidelines = [
  {
    color: "bg-forest",
    label: "Paper & Print",
    text: "Always use uncoated, textured stock for business cards and letterheads. The forest green and cream palette rewards tactile, premium paper. Business cards should feel heavy \u2014 400gsm minimum.",
  },
  {
    color: "bg-brand-slate",
    label: "Proposal Documents",
    text: "Cover pages use forest green background with cream typography. Body pages use cream (#F7F3EC) background with charcoal body text. Safety orange appears only on section dividers and key callout boxes \u2014 never in running text.",
  },
  {
    color: "bg-brand-orange",
    label: "Digital Presence",
    text: "Website hero: forest green full-bleed with Bebas Neue headline. Background: warm cream (#F7F3EC) \u2014 never pure white. Safety orange for CTA buttons only. Slate grey for all body text on screen.",
  },
  {
    color: "bg-forest",
    label: "Email Signature",
    text: 'Name in Playfair Display Bold 14px. Title and contact in Lato 11px, slate grey. Tagline \u201CWhere Land Meets Legacy\u201D in Playfair italic, forest green, below the URL. Always include a 3px orange left-border on the signature block.',
  },
];

export default function MockupApplied() {
  return (
    <div className="bg-cream px-16 py-25 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute bottom-[-60px] right-[-20px] font-bebas text-[300px] text-forest/4 leading-none pointer-events-none select-none">
        BC
      </div>

      <div className="max-w-[1100px] mx-auto grid grid-cols-[auto_1fr] max-md:grid-cols-1 gap-20 max-md:gap-10 items-center">
        {/* Business card */}
        <div style={{ perspective: "1000px" }}>
          <div className="biz-card w-[400px] max-md:w-full max-md:max-w-[360px] h-[230px] bg-forest px-10 py-9 relative overflow-hidden flex flex-col justify-between shadow-[20px_30px_60px_rgba(27,58,45,0.3),0_2px_8px_rgba(0,0,0,0.15)] -rotate-[1.5deg] transition-transform duration-300 hover:rotate-0">
            {/* Orange left bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-brand-orange" />
            {/* Decorative circle */}
            <div className="absolute bottom-[-40px] right-[-40px] w-[150px] h-[150px] rounded-full border border-brand-orange/15" />

            <div>
              <div className="font-bebas text-[28px] text-cream tracking-[0.06em] leading-none">
                VERD<span className="text-brand-orange">OBE</span>
              </div>
              <div className="font-plex text-[7px] tracking-[0.4em] text-sage uppercase mt-1.5">
                Advisory Ltd
              </div>
            </div>
            <div>
              <div className="font-playfair text-[18px] font-bold text-cream">
                Oluwatosin E. Obembe
              </div>
              <div className="font-lato text-[10px] text-cream/70 tracking-[0.06em] mt-1">
                Agricultural Transition Specialist
              </div>
              <div className="font-plex text-[8px] text-cream/60 tracking-widest mt-0.5">
                tosin@verdobe.com
              </div>
              <div className="font-plex text-[8px] text-cream/60 tracking-widest mt-0.5">
                verdobe.com &middot; Nigeria &amp; United Kingdom
              </div>
            </div>
          </div>
          <div className="font-plex text-[8px] tracking-[0.3em] text-[#bbb] uppercase mt-4 text-center">
            Business Card &middot; Forest Green &middot; Print Version
          </div>
        </div>

        {/* Guidelines */}
        <div>
          <div className="font-bebas text-[42px] text-forest tracking-[0.04em] leading-none mb-8">
            APPLICATION
            <br />
            GUIDELINES
          </div>

          {guidelines.map((item) => (
            <div key={item.label} className="flex gap-5 mb-7 items-start">
              <div
                className={`w-1 min-h-[60px] shrink-0 mt-0.5 self-stretch ${item.color}`}
              />
              <div>
                <div className="font-plex text-[9px] tracking-[0.3em] text-brand-orange uppercase mb-1.5">
                  {item.label}
                </div>
                <div className="font-lato text-[14px] text-[#555] leading-[1.7]">
                  {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
