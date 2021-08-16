import Head from "next/head";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import ExploreSmallCards from "../Components/ExploreSmallCards";
import SlidingCards from "../Components/SlidingCards";
import LargeCard from "../Components/LargeCard";
import Footer from "../Components/Footer";

export default function Home({ getData, cardDatas }) {
  return (
    <div className="">
      <Head>
        <title>Digital Private Villa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-10">
        <section className="pt-6">
          <h2 className="text-3xl font-semibold pb-5 font-sans">
            Explore Nearby
          </h2>

          {/* Pulling data from server side rendering (using api) */}
          {/* Here the data will not be changing all the time so here we can just use static rendering here */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {getData.map((item) => (
              <ExploreSmallCards
                key={item.location}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold py-4">Live your Life </h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardDatas.map((card) => (
              <SlidingCards key={card.img} img={card.img} title={card.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest of all Places"
          description="Wishlists created by Airbnb"
          buttontext="Get Inspired"
        />

        <Footer />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const getData = await fetch("https://links.papareact.com/pyp").then((res) =>
    res.json()
  );

  const cardDatas = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      getData,
      cardDatas,
    },
  };
};
