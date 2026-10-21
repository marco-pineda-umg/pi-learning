type TestimoniosProps = {
  image: string;
  name: string;
  comment: string;
  profession: string;
};

export const TestimonialCard = ({
  image,
  name,
  comment,
  profession,
}: TestimoniosProps) => {
  return (
    <div className="flex max-w-xs text-white gap-5">
      <img
        className="rounded-full h-10 xl:h-15  shrink-0 object-cover"
        src={image}
        alt={name}
      />
      <div className="flex flex-col">
        <p className="font-bold text-2xl">{name}</p>
        <p className="italic">{comment}</p>
        <p className="opacity-70">{profession}</p>
      </div>
    </div>
  );
};
