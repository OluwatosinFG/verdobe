export default function Footer() {
  return (
    <footer className="bg-ink relative overflow-hidden">
      <div className="flex h-2">
        <div className="flex-1 bg-forest" />
        <div className="flex-1 bg-brand-slate" />
        <div className="flex-1 bg-brand-orange" />
      </div>
      <div className="px-16 pt-18 pb-14 flex justify-between items-end flex-wrap gap-10 max-md:flex-col max-md:items-start">
        <div>
          <div className="font-bebas text-[72px] text-cream leading-none tracking-[0.04em]">
            VERD<span className="text-brand-orange">OBE</span>
          </div>
          <div className="font-plex text-[8px] tracking-[0.4em] text-cream/60 uppercase mt-2">
            Advisory Ltd
          </div>
        </div>
        <div className="text-right max-md:text-left">
          <div className="font-playfair italic text-[18px] text-cream/85 mb-3">
            &ldquo;Where Land Meets Legacy&rdquo;
          </div>
          <div className="font-plex text-[9px] tracking-[0.3em] text-cream/60 leading-[1.8]">
            Oluwatosin Emmanuel Obembe &middot; Founder
            <br />
            Agricultural Transition Specialist
            <br />
            Nigeria &amp; United Kingdom &middot; Est. 2025
          </div>
        </div>
      </div>
    </footer>
  );
}
