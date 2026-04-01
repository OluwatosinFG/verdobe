const pillars = [
  {
    num: "01",
    word: "Stable",
    sub: "Forest Green · #1B3A2D",
    text: "Your credibility is your foundation. Years of academic training, field experience, and published research mean clients can lean on you. Forest green communicates permanence — this is a consultancy that will still be here in twenty years.",
    numColor: "text-forest",
    wordColor: "text-forest",
    borderColor: "border-forest",
  },
  {
    num: "02",
    word: "Clear",
    sub: "Slate Grey · #4A5568",
    text: "The adoption gap is a complex problem. Verdobe makes it legible — in plain language, in data, in frameworks that governments and communities can actually use. Slate grey is the colour of clarity without arrogance.",
    numColor: "text-brand-slate",
    wordColor: "text-brand-slate",
    borderColor: "border-brand-slate",
  },
  {
    num: "03",
    word: "Bold",
    sub: "Safety Orange · #E8570A",
    text: "Agricultural transformation is urgent. Climate change is not a future problem — it is a present emergency for every smallholder farmer you serve. Safety orange carries that urgency. It demands attention. It earns it.",
    numColor: "text-brand-orange",
    wordColor: "text-brand-orange",
    borderColor: "border-brand-orange",
  },
];

export default function VisualPaletteTagline() {
  return (
    <div className="bg-cream px-16 py-25 relative overflow-hidden">
      <div className="absolute bottom-[-40px] left-[-10px] font-bebas text-[260px] text-forest/4 tracking-[0.02em] whitespace-nowrap pointer-events-none select-none leading-none">
        VERDOBE
      </div>

      <div className="font-plex text-[9px] tracking-[0.5em] text-brand-orange uppercase mb-6">
        02b — Visual Identity Tagline
      </div>
      <div className="font-bebas text-[clamp(48px,7vw,100px)] text-forest leading-[0.95] tracking-[0.02em] mb-4 relative z-2">
        STABLE.
        <br />
        <span className="text-brand-slate">CLEAR.</span>
        <br />
        <span className="text-brand-orange">BOLD.</span>
      </div>
      <div className="font-playfair italic text-[20px] text-brand-slate max-w-[600px] leading-[1.6] mt-7 relative z-2">
        Three words. Three colours. The complete personality of Verdobe Advisory
        — grounded enough for a farmer in Oyo State, credible enough for a World
        Bank proposal, urgent enough to change minds in a London boardroom.
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-0.5 mt-16 relative z-2">
        {pillars.map((item) => (
          <div
            key={item.num}
            className={`p-10 bg-white border-t-[5px] ${item.borderColor}`}
          >
            <div
              className={`font-bebas text-[80px] leading-none mb-2 opacity-[0.08] ${item.numColor}`}
            >
              {item.num}
            </div>
            <div
              className={`font-playfair text-[28px] font-bold mb-2 ${item.wordColor}`}
            >
              {item.word}
            </div>
            <div className="font-plex text-[9px] tracking-[0.3em] uppercase text-[#aaa] mb-4">
              {item.sub}
            </div>
            <div className="font-lato text-[13px] text-[#666] leading-[1.75]">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
