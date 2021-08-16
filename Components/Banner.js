import Image from "next/image";

const Banner = () => {
  return (
    <div
      className="relative h-[310px] sm:h-[400px] md:h-[510px] xl:h-[710px] 2xl:h-[700
    px]"
    >
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go ?</p>
        <button
          className="bg-white text-purple-500 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl
        active:scale-90 transition duration-150"
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Banner;
