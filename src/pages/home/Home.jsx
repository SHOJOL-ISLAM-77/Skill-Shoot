import Banner from "./components/Banner";
import Footer from "./components/Footer";
import JoinSection from "./components/JoinSection";
import LetUs from "./components/LetUs";
import Navbar from "./components/Navbar";
import PopularCourse from "./components/PopularCourse";
import SubscribeSection from "./components/SubscribeSection";
import Testimonial from "./components/Testimonial";
import TrustSection from "./components/TrustSection";
import WhyWeExist from "./components/WhyWeExist";

const Home = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <Banner />
      <TrustSection/>
      <WhyWeExist/>
      <PopularCourse/>
      <LetUs/>
      <JoinSection/>
      <SubscribeSection/>
      <Testimonial/>
      <Footer />
    </div>
  );
};

export default Home;
