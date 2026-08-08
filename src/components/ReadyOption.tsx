import { Link } from "react-router-dom";

type ReadyOptionProps = {
  key: number;
  tailwindColor: string;
  optionText: string;
  buttonText: string;
  cssClass: string;
<<<<<<< HEAD
  to: string;
=======
  location: string;
>>>>>>> 8530c44bddc32cce5b9f3208d909af117359ff09
};

export function ReadyOption({
  tailwindColor,
  optionText,
  buttonText,
  cssClass,
<<<<<<< HEAD
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
=======
  location = "/about_us",
}: ReadyOptionProps) {
  return (
    <>
      <div className={`${cssClass} h-full options`}>
        <div
          style={{ backgroundColor: `${tailwindColor}` }}
          className={`bg-opacity-85 w-auto h-full flex flex-col justify-center gap-10 md:gap-24 text-2xl text-white`}>
          <div className="flex flex-col ">
            <span>I'm ready to</span>
            <span>{optionText}</span>
          </div>
          <a href={location}>
            <button className="  w-fit mx-auto border-2 p-3 hover:bg-white hover:bg-opacity-40 rounded-full">
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </>
>>>>>>> 8530c44bddc32cce5b9f3208d909af117359ff09
  );
}
