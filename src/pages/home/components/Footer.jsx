import img from "../../../assets/footer.png";
import img1 from "../../../assets/footer1.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-11">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center pt-[100px]">
          <h3 className="leading-normal md:text-4xl text-lg font-normal ">
            Subscribe to get notified about update
          </h3>
          <p className="leading-9 text-xs md:text-base text-gray-400">
            By subscribing with your mail, you will accept our privacy policy
          </p>
        </div>
        <div className="pt-14 mb-12 md:pb-36 flex flex-wrap gap-5 text-center items-center justify-center">
          <input
            type="email"
            name="email"
            id="email"
            className="outline-none text-base px-8 md:py-4 py-3 mr-4 md:w-[388px] bg-[#396d62] rounded-lg placeholder:text-white"
            placeholder="Enter your email"
          />
          <button className="md:py-4 py-3 px-6 bg-secondary rounded-lg">
            Subscribe Us
          </button>
        </div>
        <div className="flex md:justify-between pb-6 max-w-7xl mx-auto md:items-center flex-col-reverse md:flex-row text-center gap-[30px]">
          <h3 className="md:text-2xl text-xl font-bold cursor-pointer">
            Skill <span className="text-secondary">Shoot</span>
          </h3>
          <ul className="gap-[30px] flex flex-col md:flex-row">
            <a className="cursor-pointer">Home</a>
            <a className="cursor-pointer">Course</a>
            <a className="cursor-pointer">Subscribe</a>
            <a className="cursor-pointer">About</a>
            <a className="cursor-pointer">Testimonial</a>
          </ul>
        </div>
        <img className="absolute top-[70%] -left-8 md:w-auto w-14 " src={img1} alt="" />
        <img className="absolute right-0 top-[60%] md:top-1/3 md:w-auto w-14" src={img} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
