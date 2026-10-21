import { testimonios } from "../data/testimonios";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand mt-15"
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute -top-px left-0 block h-20 w-[calc(100%+1.3px)] fill-white md:h-36"
      >
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"></path>
      </svg>
      <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-48">
        <h2 className="text-center text-5xl font-bold text-white">
          Testimonios
        </h2>
        <div className="mt-20 grid justify-items-center gap-10 md:grid-cols-3">
          {testimonios.map((testimonio) => (
            <TestimonialCard key={testimonio.name} {...testimonio} />
          ))}
        </div>
      </div>
    </section>
  );
};
