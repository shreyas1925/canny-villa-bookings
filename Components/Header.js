import Image from "next/image";
import logo from "../public/images/logo.png";
import {
  SearchIcon,
  CurrencyRupeeIcon,
  UsersIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  const [noofGuests, setnoofGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setstartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const searchHandle = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noofGuests,
      },
    });
  };
  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-3
    md:px-10"
    >
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto "
      >
        <Image
          src={logo}
          layout="fill"
          objectFit="contain" //unnecessary aspect ratio removed
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 py-2 rounded-full">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="text-gray-600 text-sm pl-5 bg-transparent outline-none flex-grow "
          placeholder={placeholder || "Explore more"}
        />
        <SearchIcon className="hidden md:inline-block h-8 bg-blue-400  text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex items-center cursor-pointer space-x-2 justify-end opacity-60">
        <p className="font-sans hidden md:inline-block">Buy me a coffee</p>
        <CurrencyRupeeIcon className="h-6" />

        <div className="flex items-center border-2 shadow-md space-x-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#A78BFA"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserCircleIcon className="h-6" />
            <input
              value={noofGuests}
              onChange={(e) => setnoofGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-purple-400"
            />
          </div>

          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <button
              onClick={searchHandle}
              className="flex-grow text-purple-400"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
