import Image from "next/image";

const SlidingCards = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="md:rounded-xl" />
      </div>
      <h3 className="text-1xl font-bold mt-3">{title}</h3>
    </div>
  );
};

export default SlidingCards;
