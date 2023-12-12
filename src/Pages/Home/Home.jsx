import Banner from "../../Components/Banner/Banner";
import CommingSoon from "../../Components/CommingSoon/CommingSoon";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import Review from "../../Components/Review/Review";
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
      {/* comming soon  */}
      <CommingSoon/>
      {/* popular products  */}
      <PopularProducts/>
      {/* reviews  */}
      <Review/>
    </div>
  );
};

export default Home;
