import { Link } from "react-router-dom";

type ReadyOptionProps = {
  tailwindColor: string;
  optionText: string;
  buttonText: string;
  cssClass: string;
  to: string;
};

export function ReadyOption({
  tailwindColor,
  optionText,
  buttonText,
  cssClass,
  to,
}: ReadyOptionProps) {
  return (
    <Link
      to={to}
      className={`options group relative flex h-full w-full items-center justify-center overflow-hidden ${cssClass}`}
      aria-label={`${optionText}: ${buttonText}`}
    >
      {/* Color overlay — darkens on hover so the CTA reads as interactive */}
      <span
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{ backgroundColor: tailwindColor }}
        aria-hidden="true"
      />
      <span className="relative z-10 flex flex-col items-center px-4 text-center text-white transition-transform duration-300 group-hover:-translate-y-1">
        <span className="text-sm uppercase tracking-widest text-white/80 mb-2">
          {optionText}
        </span>
        <span className="inline-block border-2 border-white/70 group-hover:border-white group-hover:bg-white group-hover:text-emerald-950 font-semibold px-6 py-3 rounded-full transition-colors duration-300">
          {buttonText}
        </span>
      </span>
    </Link>
  );
}
