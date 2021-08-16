import Image from "next/image";
import {
  SearchIcon,
  CurrencyRupeeIcon,
  UsersIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header
      className="sticky top-0 z-100 grid grid-cols-3 bg-white shadow-md p-3
    md:px-10"
    >
      <div className="relative flex items-center h-10 cursor-pointer my-auto md:shadow-sm">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain" //unnecessary aspect ratio removed
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 py-2 rounded-full">
        <input
          type="text"
          className="text-gray-600 text-sm pl-5 bg-transparent outline-none flex-grow "
          placeholder="Explore more"
        />
        <SearchIcon
          className="hidden md:inline-block h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2
        "
        />
      </div>

      <div className="flex items-center cursor-pointer space-x-2 justify-end">
        <p className="font-sans hidden md:inline-block">Buy me a coffee</p>
        <CurrencyRupeeIcon className="h-6" />

        <div className="flex items-center border-2 shadow-md space-x-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
