import { ReactNode } from "react";

interface TagCard {
  context: string;
  tagline: ReactNode;
  note: string;
}

const cards: TagCard[] = [
  {
    context: "Context · UK Market",
    tagline: (
      <>
        &ldquo;African Roots.
        <br />
        Global Reach.&rdquo;
      </>
    ),
    note: "For UK-based development funders, FCDO-backed programmes, and British impact investors. Positions the Nigeria-UK duality as a strength, not a complication.",
  },
  {
    context: "Context · Science",
    tagline: (
      <>
        &ldquo;Rooted in Tradition.
        <br />
        Built for Tomorrow.&rdquo;
      </>
    ),
    note: "For academic papers, grant applications, and NGO proposals. Signals methodological rigour while honouring indigenous knowledge systems.",
  },
  {
    context: "Context · Community",
    tagline: (
      <>
        &ldquo;The Land Knows.
        <br />
        We Listen.&rdquo;
      </>
    ),
    note: "For community-facing materials, farmer programmes, and social media. Signals respect, humility, and a people-centred approach before any credentials are mentioned.",
  },
  {
    context: "Context · Thought Leadership",
    tagline: (
      <>
        &ldquo;Science Means Nothing
        <br />
        Until Someone Changes.&rdquo;
      </>
    ),
    note: "Provocative. Thought leadership articles, conference keynotes, and LinkedIn opinion pieces. It will start arguments — in the best possible way.",
  },
];

export default function Taglines() {
  return (
    <div className="bg-cream">
      {/* Hero tagline */}
      <div className="bg-ink px-16 py-20 relative overflow-hidden">
        <div className="absolute right-[-40px] bottom-[-80px] font-bebas text-[400px] text-brand-orange/6 leading-none pointer-events-none select-none">
          —
        </div>
        <div className="font-plex text-[9px] tracking-[0.5em] text-brand-orange uppercase mb-5">
          Primary Tagline &middot; Use Everywhere
        </div>
        <div className="font-bebas text-[clamp(52px,8vw,110px)] text-cream leading-[0.95] tracking-[0.02em] relative z-2">
          WHERE LAND
          <br />
          MEETS <span className="text-brand-orange">LEGACY</span>
        </div>
        <div className="font-lato text-[14px] text-cream/35 mt-7 max-w-[480px] leading-[1.7] relative z-2">
          Four words. The complete brand promise. Use this on your website hero,
          email signature, proposal covers, business card, LinkedIn headline, and
          every primary brand surface. It is short, memorable, and tells the
          whole story before anyone reads a word.
        </div>
      </div>

      {/* Taglines grid */}
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-0.5 bg-[#ddd]">
        {cards.map((card) => (
          <div
            key={card.context}
            className="bg-cream px-13 py-11 relative overflow-hidden"
          >
            <div className="font-plex text-[9px] tracking-[0.4em] text-brand-orange uppercase mb-4">
              {card.context}
            </div>
            <div className="font-playfair italic text-[24px] text-forest leading-[1.35] mb-4">
              {card.tagline}
            </div>
            <div className="font-lato text-[12px] text-[#888] leading-[1.7]">
              {card.note}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
