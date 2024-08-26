import TestimonialSlider from "./TestimonialSlider";
import img from "../../../assets/testimonial.png";
import img1 from "../../../assets/testimonial1.png";

const Testimonial = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="text-center max-w-7xl mx-auto pb-[200px] pt-[87px] px-11">
        <div className="relative">
          <h1 className="md:text-4xl text-lg font-semibold pb-3">
            What do they <span className="text-secondary">say?</span>
          </h1>
          <p className="max-w-[550px] mx-auto text-gray-500 leading-7 md:leading-9 text-xs md:text-base">
            This is an honest review from members who have joined us
          </p>
          <img className="absolute top-[60%] -left-8  md:left-[10%] md:hidden" src={img1} alt="" />
          <img className="absolute right-0 top-1/3 md:right-[10%] md:hidden" src={img} alt="" />
        </div>
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Testimonial;
