import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import image from "../../../assets/banner.png";
import image1 from "../../../assets/bottom_image.png";

const Banner = () => {
  return (
    <div className="bg-primary text-white px-8">
      <div className="max-w-7xl flex lg:justify-between justify-center lg:text-left text-center items-center mx-auto  lg:pt-12 py-8 lg:py-0">
        <div>
          <h1 className="xl:text-6xl md:text-4xl text-[28px] font-semibold">
            There is
            <span
              className="bg-no-repeat bg-bottom inline-block md:pb-5 pb-2"
              style={{
                backgroundImage: `url(${image1})`,
              }}
            >
              always 
            </span>
            <span className="md:block pb-5"> something new for us to </span>
            <span className="md:block">learn</span>
          </h1>

          <p className="text-gray-400 pb-8 lg:text-lg text-[12px]">
            we have created more than 100+ materials on various
            <br className="hidden sm:block" /> things that will help your
            career, with mentors who are <br className="hidden sm:block" />
            experienced in their fields.
          </p>
          <div className="flex lg:justify-normal justify-center items-center gap-4">
            <button className="xl:px-6 lg:px-5 xl:py-4 lg:py-3 text-white bg-secondary rounded-md xl:text-xl lg:text-lg md:px-4 font-bold px-6 py-3 text-sm">
              Start Journey
            </button>
            <button>
              <FaInstagram className="md:text-4xl text-2xl " />
            </button>
            <button>
              <FaTwitter className="md:text-4xl text-2xl " />
            </button>
            <button>
              <FaDiscord className="md:text-4xl text-2xl " />
            </button>
          </div>
        </div>
        <div>
          <img className="hidden lg:block" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
