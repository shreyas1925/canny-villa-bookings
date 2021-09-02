import Footer from "../Components/Footer";
import Header from "../Components/Header";

const search = () => {
  return (
    <div>
      <Header />

      <main className="flex pl-4">
        <section className="flex-grow pt-12 px-6">
          <p className="text-xs mt-3">We have achieved 100+ stays in 30 days</p>
          <h1 className="text-3xl font-bold mt-2 mb-6">
            Wonderful stays in Bhatkal
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
