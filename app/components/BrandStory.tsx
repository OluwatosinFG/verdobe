export default function BrandStory() {
  return (
    <div className="grid grid-cols-[1.2fr_0.8fr] max-md:grid-cols-1 min-h-[500px]">
      {/* Text column */}
      <div className="px-16 py-18 bg-cream relative">
        <div className="absolute top-[-40px] left-5 font-playfair text-[320px] text-forest/6 leading-none pointer-events-none select-none">
          &ldquo;
        </div>
        <span className="font-plex text-[9px] tracking-[0.45em] text-brand-orange uppercase mb-5 block">
          Origin &amp; Meaning
        </span>
        <h3 className="font-playfair text-[clamp(28px,3vw,44px)] font-bold text-forest leading-[1.2] mb-7">
          A name built from two languages
          <br />
          and one family legacy
        </h3>
        <p className="font-lato text-[15px] leading-[1.85] text-[#4a4a4a] mb-5">
          <strong>Verdobe Advisory</strong> is not manufactured. It is excavated
          — from Latin, from Yoruba, from the Obembe family name, and from the
          precise intersection of ecological science and African heritage.
        </p>
        <div className="font-playfair italic text-[21px] text-forest border-l-4 border-brand-orange pl-6 my-9 leading-normal">
          &ldquo;Two worlds of wisdom fused into one word. That word is your
          business.&rdquo;
        </div>
        <p className="font-lato text-[15px] leading-[1.85] text-[#4a4a4a] mb-5">
          <strong>VERD</strong> draws from the Latin <em>Viridis</em> — green,
          living, flourishing. It is the language of Western ecological science,
          of peer-reviewed journals, of the development finance institutions you
          will work with in the UK.
        </p>
        <p className="font-lato text-[15px] leading-[1.85] text-[#4a4a4a] mb-5">
          <strong>OBE</strong> is taken directly from <strong>Obembe</strong> —
          your family name. Your roots. Your people. Your heritage carried into a
          global consultancy that will speak to farmers in Oyo State and to FCDO
          programme officers in London in the same breath.
        </p>
        <p className="font-lato text-[15px] leading-[1.85] text-[#4a4a4a] mb-5">
          Together, <strong>VERDOBE</strong> is neither fully Western nor purely
          African. It is the bridge. And that bridge is your competitive
          advantage.
        </p>
      </div>

      {/* Etymology column */}
      <div className="bg-brand-slate px-13 py-18 flex flex-col justify-center">
        <div className="py-9 border-b border-white/10">
          <div className="font-plex text-[9px] tracking-[0.4em] text-slate-lt uppercase mb-2.5">
            Latin &middot; Viridis
          </div>
          <div className="font-bebas text-[64px] text-cream tracking-[0.04em] leading-none mb-2.5">
            VERD<span className="text-brand-orange">—</span>
          </div>
          <div className="font-playfair italic text-[14px] text-cream/55 leading-[1.6]">
            &ldquo;Living, green, growing, full of vitality&rdquo; — the
            language of ecology and modern science
          </div>
        </div>
        <div className="py-9 border-b border-white/10">
          <div className="font-plex text-[9px] tracking-[0.4em] text-slate-lt uppercase mb-2.5">
            Yoruba &middot; Obembe Family
          </div>
          <div className="font-bebas text-[64px] text-cream tracking-[0.04em] leading-none mb-2.5">
            <span className="text-brand-orange">—</span>OBE
          </div>
          <div className="font-playfair italic text-[14px] text-cream/55 leading-[1.6]">
            &ldquo;Your surname, your roots, your people — the heritage carried
            into every piece of work&rdquo;
          </div>
        </div>
        <div className="py-9">
          <div className="font-plex text-[9px] tracking-[0.4em] text-slate-lt uppercase mb-2.5">
            The Fusion
          </div>
          <div className="font-bebas text-[50px] text-cream tracking-[0.04em] leading-none mb-2.5 opacity-70">
            VERDOBE
          </div>
          <div className="font-playfair italic text-[14px] text-cream/55 leading-[1.6]">
            &ldquo;Tradition meeting tomorrow. African soil. Global reach. One
            name.&rdquo;
          </div>
        </div>
      </div>
    </div>
  );
}
