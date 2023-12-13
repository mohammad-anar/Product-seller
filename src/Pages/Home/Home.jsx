import Banner from "../../Components/Banner/Banner";
import CommingSoon from "../../Components/CommingSoon/CommingSoon";
import Contact from "../../Components/Contact/Contact";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import Review from "../../Components/Review/Review";
import WeekDeals from "../../Components/WeekDeals/WeekDeals";

const Home = () => {
  return (
    <>
      <div className="px-4 lg:px-0">
        {/* banner  */}
        <section id="banner" className="mt-5">
          <Banner />
        </section>
        {/* weekly deals  */}
        <div>
          <WeekDeals />
        </div>
        {/* comming soon  */}
        <CommingSoon />
        {/* popular products  */}
        <PopularProducts />
        {/* reviews  */}
        <Review />
        {/* contact  */}
        <Contact />
      </div>
    </>
  );
};

export default Home;
