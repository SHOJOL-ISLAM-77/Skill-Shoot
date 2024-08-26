import google from "../../../assets/google.png";
import microsoft from "../../../assets/microsoft.png";
import uber from "../../../assets/uber.png";
import paypal from "../../../assets/paypal.png";
import dri from "../../../assets/dri.png";
import SectionDiscount from "../../../assets/SectionDiscount.png";

const TrustSection = () => {
  return (
    <div className="px-8">
      <div className="max-w-7xl mx-auto mt-24">
        <div className="text-center">
          <h2 className="md:text-4xl text-lg font-semibold text-[#2C2C2C]">
            Trusted more than <span className="text-secondary">100+</span> in
            the world
          </h2>
          <p className="text-gray-600 py-3 max-w-xl mx-auto text-xs md:text-base">
            they have asked us more than 3 times to teach their employees about
            various things. to improve their skills
          </p>
          <div className="flex justify-around items-center my-9 flex-wrap gap-9">
            <img src={uber}  className="max-w-20 md:max-w-min" alt="" />
            <img src={google} className="max-w-20 md:max-w-min"  alt="" />
            <img src={paypal} className="max-w-20 md:max-w-min"  alt="" />
            <img src={microsoft} className="max-w-20 md:max-w-min"  alt="" />
            <img src={dri} className="max-w-20 md:max-w-min"  alt="" />
          </div>
        </div>
        <div className="relative xl:pt-40">
          <div className="bg-[#F2E7DB] md:px-16 px-5 py-14 rounded-lg relative overflow-hidden text-center md:text-left ">
            <h2 className="font-semibold md:text-4xl leading-normal text-lg">
              Happy <span className="text-secondary">Chinese New Year</span>,
              20% <br /> discount for you today
            </h2>
            <button className="rounded-md py-4 px-6 bg-primary text-white mt-7 md:text-xl text-sm font-bold">
              Subscribe Course
            </button>

            <div className="w-16 h-16 bg-primary rounded-full absolute -top-2 -left-2"></div>
            <div className="w-16 h-16 bg-primary rounded-full absolute -bottom-2 -right-2"></div>
          </div>

          <img
            src={SectionDiscount}
            className="absolute bottom-0 right-16 xl:inline hidden "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
