export default function Cover() {
  return (
    <div className="relative min-h-screen bg-ink grid grid-cols-2 max-md:grid-cols-1 overflow-hidden">
      {/* Animated diagonal slash */}
      <div className="absolute top-[-10%] left-[42%] w-1.5 h-[130%] bg-brand-orange rotate-[8deg] z-3 animate-slash-drop max-md:hidden" />

      {/* Left side */}
      <div className="bg-forest px-14 py-16 flex flex-col justify-between relative z-2 animate-fade-left">
        <div className="flex h-2">
          <div className="flex-1 bg-forest" />
          <div className="flex-1 bg-brand-slate" />
          <div className="flex-1 bg-brand-orange" />
        </div>
        <div>
          <div className="font-bebas text-[clamp(100px,16vw,200px)] leading-[0.85] text-cream tracking-[-0.01em]">
            VERD
            <span className="text-brand-orange block">OBE</span>
          </div>
          <div className="font-plex text-[9px] tracking-[0.4em] text-sage uppercase mt-6">
            Advisory Ltd &nbsp;&middot;&nbsp; Brand Identity System 2025
          </div>
        </div>
        <div className="font-plex text-[9px] tracking-[0.3em] text-sage/40 uppercase">
          Nigeria &amp; United Kingdom
        </div>
      </div>

      {/* Right side */}
      <div className="bg-ink px-14 py-16 pl-18 flex flex-col justify-between relative z-2 animate-fade-right">
        <div className="font-plex text-[9px] tracking-[0.4em] text-slate-lt uppercase mb-12">
          Brand Identity Document
        </div>
        <div>
          <div className="font-playfair italic text-[clamp(28px,3.5vw,46px)] text-cream leading-tight mb-10">
            Where <em className="text-brand-orange not-italic">Land</em>
            <br />
            Meets <em className="text-brand-orange not-italic">Legacy</em>
          </div>
          <div className="font-lato text-[13px] text-cream/70 leading-[1.8] max-w-[340px]">
            A premium agricultural transition consultancy bridging traditional
            farming wisdom with modern ecological science — rooted in Nigeria,
            reaching the world.
          </div>
        </div>
        <div className="font-plex text-[10px] tracking-[0.25em] text-cream/75 uppercase">
          Oluwatosin Emmanuel Obembe — Founder
        </div>
      </div>
    </div>
  );
}
