import PopularCourseCarousel from "./PopularCourseCarousel";
import courseDesign1 from "../../../assets/ornamen.png";
import courseDesign2 from "../../../assets/ornamen1.png";

const PopularCourse = () => {
  return (
    <div className="bg-primary px-9">
      <div className="max-w-7xl mx-auto text-white py-[75px] ">
        <div className="text-center relative">
          <h3 className="md:text-4xl text-lg font-semibold">
            Popular courses of the week
          </h3>
          <p className="md:leading-9 leading-7 text-xs md:text-base max-w-96 mx-auto text-gray-400 ">
            List of the most popular lists that are often studied by our members
          </p>
          <img className="absolute md:top-1/2 -left-2 -top-10 md:left-[10%]" src={courseDesign1} alt="" />
          <img className="absolute right-0 -top-5 md:top-1/3 md:right-[10%]" src={courseDesign2} alt="" />
        </div>
        <PopularCourseCarousel />
      </div>
    </div>
  );
};

export default PopularCourse;
