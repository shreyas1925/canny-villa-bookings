import { useRouter } from "next/dist/client/router";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { format } from "date-fns";

const search = ({ data }) => {
  const router = useRouter();

  const { location, startDate, endDate, noofGuests } = router.query;
  const formattedstartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedendDate = format(new Date(endDate), "dd MMMM yy");
  const rangeDates = `${formattedstartDate} - ${formattedendDate}`;

  return (
    <div className="overflow-x-hidden">
      <Header placeholder={`${location} | ${rangeDates} | ${noofGuests}`} />

      <main className="flex pl-4">
        <section className="flex-grow pt-12 px-6">
          <p className="text-xs mt-3">
            We have 30+ stays from {rangeDates} for {noofGuests} guests
          </p>
          <h1 className="text-3xl font-bold mt-2 mb-6">
            Wonderful stays in {location}
          </h1>

          <div className="mb-6 hidden lg:inline-flex space-x-3 text-gray-800 whitespace-normal">
            <p className="button">Payment Flexibility</p>
            <p className="button">Vacation</p>
            <p className="button">Hospitality </p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default search;

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://links.papareact.com/isz");
  const data = await searchResults.json();

  console.log(data);

  return {
    props: {
      data,
    },
  };
};
