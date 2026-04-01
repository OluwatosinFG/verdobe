import { ReactNode } from "react";

interface SectionHeaderProps {
  num: string;
  title: ReactNode;
}

export default function SectionHeader({ num, title }: SectionHeaderProps) {
  return (
    <div className="grid grid-cols-[80px_1fr] max-md:grid-cols-[60px_1fr]">
      <div className="bg-brand-orange flex items-center justify-center [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180">
        <span className="font-plex text-[9px] tracking-[0.5em] text-white uppercase whitespace-nowrap">
          {num}
        </span>
      </div>
      <div className="bg-forest px-15 py-10 flex items-center">
        <h2 className="font-bebas text-[clamp(42px,5vw,72px)] text-cream tracking-[0.04em] leading-none">
          {title}
        </h2>
      </div>
    </div>
  );
}
