const Subjects = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-neutral-700">
        Que quieres{" "}
        <span className="relative inline-block">
          aprender
          <svg
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-0.15em] left-0 h-[0.25em] w-full text-brand"
          >
            <path
              d="M2 6 C20 3 38 8 58 5 S88 3 98 6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </span>
        ?
      </h1>
      <p className="mt-5 text-xl text-neutral-500">Aca lo tenemos todo</p>
    </div>
  );
};

export default Subjects;
