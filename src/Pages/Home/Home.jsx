import Banner from "../../Components/Banner/Banner";
import WeekDeals from "../../Components/WeekDeals/WeekDeals";

const Home = () => {
  return (
    <div>
      {/* banner  */}
      <section id="banner" className="mt-5">
        <Banner />
      </section>
      {/* weekly deals  */}
      <div>
        <WeekDeals />
      </div>
    </div>
  );
};

export default Home;
