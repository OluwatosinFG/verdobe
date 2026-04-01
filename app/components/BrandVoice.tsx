const pillars = [
  {
    num: "1",
    label: "One",
    word: "GROUNDED",
    wordColor: "text-cream",
    desc: "Every word should feel like it comes from someone who has stood in a field, spoken to farmers, and lived the real complexity of rural development. Never abstract. Never ivory tower. Always rooted in lived experience.",
    quote:
      "\u201CFarmers don\u2019t fail to adopt \u2014 systems fail to listen to farmers.\u201D",
  },
  {
    num: "2",
    label: "Two",
    word: "AUTHORITATIVE",
    wordColor: "text-brand-orange",
    desc: "You have the publications, the degrees, and the field hours. Write with quiet confidence. Verdobe does not seek validation \u2014 it provides it. You are not asking for a seat at the table. You are building a new one.",
    quote:
      "\u201COur adoption framework has been validated across three agroecological zones \u2014 and the data holds.\u201D",
  },
  {
    num: "3",
    label: "Three",
    word: "HUMAN",
    wordColor: "text-cream",
    desc: "Behind every dataset is a family, a harvest, a decision made under impossible pressure. Verdobe never forgets the human at the centre \u2014 and it shows in every report, proposal, and conversation.",
    quote:
      "\u201CWe don\u2019t serve projects. We serve the people projects are supposed to reach.\u201D",
  },
];

export default function BrandVoice() {
  return (
    <div className="bg-brand-slate">
      <div className="grid grid-cols-3 max-md:grid-cols-1">
        {pillars.map((col, i) => (
          <div
            key={col.num}
            className={`px-13 py-18 relative ${
              i < pillars.length - 1
                ? "border-r border-white/8 max-md:border-r-0"
                : ""
            }`}
          >
            <div className="font-bebas text-[120px] text-white/5 absolute top-5 right-5 leading-none">
              {col.num}
            </div>
            <div className="font-plex text-[9px] tracking-[0.4em] text-sage uppercase mb-4">
              Tone Pillar {col.label}
            </div>
            <div
              className={`font-bebas text-[56px] ${col.wordColor} leading-none mb-5 tracking-[0.03em]`}
            >
              {col.word}
            </div>
            <div className="font-lato text-[13px] text-cream/50 leading-[1.8] mb-6">
              {col.desc}
            </div>
            <div className="font-playfair italic text-[15px] text-cream/35 border-l-[3px] border-brand-orange pl-4 leading-[1.6]">
              {col.quote}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
