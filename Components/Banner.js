import Image from "next/image";
import headerStyles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div
      className="relative h-[310px] sm:h-[400px] md:h-[510px] xl:h-[710px] 2xl:h-[700
    px]"
    >
      <div className={headerStyles.image}>
        {/* <Image
          // src="https://links.papareact.com/0fm"
          src={bannerimg}
          layout="fill"
          objectFit="cover"
        /> */}
      </div>

      <div className="banner_main absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg text-bold text-white sm:hidden">
          Not sure where to go ?
        </p>
        <button
          className="bg-white text-blue-500 px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl
        active:scale-90 transition duration-150"
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Banner;
