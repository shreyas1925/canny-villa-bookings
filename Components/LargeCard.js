import Image from "next/image";

const LargeCard = ({ img, title, buttontext, description }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-8 md:left-12 top-32">
        <h3 className="text-4xl font-semibold mb-3 w-64">{title}</h3>
        <p className="font-semibold text-gray-500">{description}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttontext}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
