/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bx_user from "../../../assets/bx-user.png";

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute -right-3 border-8 text-black hover:border-white hover:bg-primary hover:text-white cursor-pointer top-1/2 bg-white z-10 md:w-16 md:h-16 h-11 w-11 flex justify-center items-center rounded-full"
    >
      <FaArrowRight className="text-2xl" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute -left-3 border-8 text-black hover:border-white hover:bg-primary hover:text-white cursor-pointer top-1/2 bg-white z-10 md:w-16 md:h-16 h-11 w-11 flex justify-center items-center rounded-full"
    >
      <FaArrowLeft className="text-2xl" />
    </div>
  );
};

const PopularCourseCarousel = () => {
  const items = [
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRENbkR-6zQzzOxrWRhCLkvSeduwhOWJbsWg&s",
      title: "Basics of learning team management",
      author: "Jone Owel",
      role: "IT Manager",
      participants: 120,
      price: "$120",
      videos: "25 Video",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17FFeZWAKXG21VgelVTRWHq6fN7_-A3YdnA&s",
      title: "Learn basic database structure",
      author: "Roynaldo Jr",
      role: "Data Science",
      participants: 55,
      price: "$180",
      videos: "25 Video",
    },
    {
      imgSrc:
        "https://www.dicslaxminagar.com/blog/wp-content/uploads/2024/03/01.jpg",
      title: "Create dynamic website with basic php",
      author: "Markus Low",
      role: "IT Manager",
      participants: 98,
      price: "$120",
      videos: "25 Video",
    },
    {
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPCXCBSZzfpiGKjuVNjRBua73YLoJJ0lChWQ&s",
      title: "Basics of learning team management",
      author: "Jone Owel",
      role: "IT Manager",
      participants: 120,
      price: "$120",
      videos: "25 Video",
    },
  ];

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative mt-12">
      <Slider {...settings} >
        {items.map((item, index) => (
          <div key={index} className="flex justify-center ">
            <div className="md:max-w-sm max-w-[276px] bg-white rounded-2xl shadow mx-auto">
              <img
                className="w-full rounded-t-2xl md:h-[250px] h-[166px]  object-cover"
                src={item.imgSrc}
                alt=""
              />
              <div className="md:p-7 p-5">
                <h5 className="mb-2 md:text-2xl text-sm font-semibold tracking-tight text-gray-900">
                  {item.title}
                </h5>
                <div className="my-5 flex justify-between">
                  <div className="text-black flex gap-4">
                    <img
                      className="md:w-11 md:h-11 h-7 w-7 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s"
                      alt=""
                    />
                    <div>
                      <p className="md:text-sm text-[10px] font-medium">{item.author}</p>
                      <span className="md:text-[10px] text-[7px] text-gray-500">
                        {item.role}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3 text-black md:text-base">
                    <img src={bx_user} className="md:h-[35px] h-[23px]" alt="" />
                    <div>
                      <p className="md:text-sm text-[10px] font-medium">{item.participants}</p>
                      <span className="md:text-[10px] text-[7px] text-gray-500">
                        Participant
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button className="md:py-3  px-4 py-2 md:px-6 bg-primary text-white md:rounded-2xl rounded-lg">
                    Buy Now
                  </button>
                  <h5 className="mb-2 md:text-2xl  font-semibold tracking-tight text-gray-900">
                    {item.price}
                    <span className="md:text-xs text-[8px] text-gray-500">
                      /{item.videos}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularCourseCarousel;
