import Footer from "../Components/Footer";
import Header from "../Components/Header";

const search = () => {
  return (
    <div>
      <Header />

      <main className="flex">
        <section>
          <p className="text-xs mt-3">We have achieved 100+ stays in 30 days</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Wonderful stays in Bhatkal
          </h1>

          <div className="mb-6">
            <p className="px-2 py-2 border rounded-full cursor-pointer hover:shadow-lg active:scale-95 active:bg-gray-100 transition transform duration-100 ease-out"></p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default search;
