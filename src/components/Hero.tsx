import RotatingText from "./RotatingText";
const Hero = () => {
  return (
    <div className="mx-auto grid w-full max-w-10xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-[3fr_2fr]">
      <div className="mx-auto">
        <h1 className="relative inline-block text-3xl sm:text-4xl md:text-5xl text-neutral-500">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            strokeLinecap="round"
            aria-hidden="true"
            className="pointer-events-none absolute top-[-0.5em] left-[-0.65em] size-[0.75em] text-brand"
          >
            <path d="M26 37 C22 37.6 18 35.3 14.1 35.9" />
            <path d="M29.5 29.5 C26.4 25 21.3 22.7 18.2 18.2" />
            <path d="M37 26 C37.6 22 35.3 18 35.9 14.1" />
          </svg>
          Con nosotros
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-700">
            aprender es
          </h1>
          <RotatingText
            texts={["facil", "práctico", "flexible", "claro"]}
            mainClassName="text-3xl sm:text-4xl md:text-5xl font-bold font-bold text-[#00BF63] sm:px-2 md: bg-transparent text-[#00BF63] overflow-hidden sm:py-1 md:flex rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3500}
            splitBy="characters"
            auto
            loop
          />
        </div>
        <h1 className="text-xl sm:text-sm md:text-2xl text-gray-700 mt-4">
          clases 1 a 1, cualquier modalidad, cualquier tema
        </h1>
        <button className="text-xl font-bold py-2 px-7 bg-brand rounded-full mt-7 text-white transition-colors hover:bg-[#259c63] border-2 border-[#259c63]">
          Empezar
        </button>
      </div>

      <div className="flex justify-center">
        <img src="/hero.webp" alt="" />
      </div>
    </div>
  );
};

export default Hero;
