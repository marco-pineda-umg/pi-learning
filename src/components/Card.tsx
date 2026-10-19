type CardProps = {
  image: string;
  title: string;
};

const Card = ({ image, title }: CardProps) => {
  return (
    <>
      <div className="relative  h-50 sm:h-60 md:h-80 md:w-64 overflow-hidden rounded-2xl">
        <img src={image} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
        <h3 className="absolute bottom-5 left-5 text-2xl font-bold text-white">
          {title}
        </h3>
      </div>
    </>
  );
};

export default Card;
