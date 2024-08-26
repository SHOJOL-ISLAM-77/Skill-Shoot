import man from "../../../assets/man.png";
import box from "../../../assets/box.png";
import glass from "../../../assets/glass.png";
import pyramid from "../../../assets/pyramid.png";
import wool_ball from "../../../assets/wool-ball.png";

const WhyWeExist = () => {
  return (
    <div className="px-8">
      <div className="py-24 mx-auto max-w-7xl flex justify-between flex-col xl:flex-row gap-16">
        <div className="text-center md:text-left xl:text-left md:flex gap-5 xl:block">
          <div>
            <h2 className="sm:text-4xl text-lg font-semibold">
              Why do we <span className="text-secondary">exist?</span>
            </h2>
            <p className="text-gray-500 text-xs sm:text-base max-w-lg mx-auto xl:mx-0 py-5 md:leading-[35px] leading-[30px]">
              Because we know that many people or companies have the same
              problem when it comes to how difficult it is to improve their
              skills
            </p>
          </div>
          <div className="mx-auto xl:w-full xl:mx-0 flex-1">
            <div className="flex items-center justify-center md:justify-start gap-5 pb-7">
              <img
                className="max-w-[50px] md:max-w-[72px] rounded-full"
                src={man}
                alt=""
              />
              <div>
                <p className="font-bold text-xs sm:text-lg">Jerony Pulquosta</p>
                <p className="text-[10px] sm:text-xs text-gray-500">CEO Skill Shoot</p>
              </div>
            </div>
            <hr className="max-w-lg md:mx-0 mx-auto border" />
            <div className="flex justify-center md:justify-start gap-14 pt-7">
              <div>
                <h4 className="font-bold text-2xl sm:text-4xl">100+</h4>
                <p className="text-gray-500 text-[10px] sm:text-xs">Updated Material</p>
              </div>
              <div>
                <h4 className="font-bold text-2xl sm:text-4xl">15K</h4>
                <p className="text-gray-500 text-[10px] sm:text-xs">Member Join</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 justify-items-center md:justify-items-start ">
        <div className="text-center md:text-left">
            <img src={box} className="mx-auto md:mx-0" alt="" />
            <h4 className="text-lg sm:text-2xl text-primary font-semibold pt-7 pb-3">
              Material Limitations
            </h4>
            <p className="text-xs sm:text-base leading-8 text-gray-500 max-w-72">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="text-center md:text-left">
            <img src={pyramid} className="mx-auto md:mx-0" alt="" />
            <h4 className="text-lg sm:text-2xl text-primary font-semibold pt-7 pb-3">
              Unprofessional Mentor
            </h4>
            <p className="text-xs sm:text-base leading-8 text-gray-500 max-w-72">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="text-center md:text-left">
            <img src={wool_ball} className="mx-auto md:mx-0" alt="" />
            <h4 className="text-lg sm:text-2xl text-primary font-semibold pt-7 pb-3">
              Video Quality
            </h4>
            <p className="text-xs sm:text-base leading-8 text-gray-500 max-w-72">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="text-center md:text-left">
            <img src={glass} className="mx-auto md:mx-0" alt="" />
            <h4 className="text-lg sm:text-2xl text-primary font-semibold pt-7 pb-3">
              High Price
            </h4>
            <p className="text-xs sm:text-base leading-8 text-gray-500 max-w-72">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWeExist;
