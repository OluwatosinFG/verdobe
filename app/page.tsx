import Cover from "./components/Cover";
import SectionHeader from "./components/SectionHeader";
import BrandStory from "./components/BrandStory";
import ColourPalette from "./components/ColourPalette";
import VisualPaletteTagline from "./components/VisualPaletteTagline";
import TypographySection from "./components/TypographySection";
import LogoBrief from "./components/LogoBrief";
import Taglines from "./components/Taglines";
import BrandVoice from "./components/BrandVoice";
import MockupApplied from "./components/MockupApplied";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Cover />

      <section>
        <SectionHeader
          num="01 — Brand Story"
          title={
            <>
              THE NAME
              <br />
              BEHIND THE <span className="text-brand-orange">MISSION</span>
            </>
          }
        />
        <BrandStory />
      </section>

      <section>
        <SectionHeader
          num="02 — Colour Palette"
          title={
            <>
              THREE COLOURS.
              <br />
              <span className="text-brand-orange">THREE PROMISES.</span>
            </>
          }
        />
        <ColourPalette />
      </section>

      <VisualPaletteTagline />

      <section>
        <SectionHeader
          num="03 — Typography"
          title={
            <>
              THE VOICES
              <br />
              OF <span className="text-brand-orange">VERDOBE</span>
            </>
          }
        />
        <TypographySection />
      </section>

      <section>
        <SectionHeader
          num="04 — Logo Brief"
          title={
            <>
              THE MARK OF
              <br />
              <span className="text-brand-orange">VERDOBE</span>
            </>
          }
        />
        <LogoBrief />
      </section>

      <section>
        <SectionHeader
          num="05 — Taglines"
          title={
            <>
              WORDS THAT
              <br />
              <span className="text-brand-orange">DEFINE</span> THE BRAND
            </>
          }
        />
        <Taglines />
      </section>

      <section>
        <SectionHeader
          num="06 — Brand Voice"
          title={
            <>
              HOW VERDOBE
              <br />
              <span className="text-brand-orange">SPEAKS</span>
            </>
          }
        />
        <BrandVoice />
      </section>

      <section>
        <SectionHeader
          num="07 — Applied"
          title={
            <>
              THE BRAND
              <br />
              <span className="text-brand-orange">IN USE</span>
            </>
          }
        />
        <MockupApplied />
      </section>

      <Footer />
    </main>
  );
}
