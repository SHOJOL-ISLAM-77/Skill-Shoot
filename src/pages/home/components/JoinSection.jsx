import courseDesign1 from "../../../assets/ornamen.png";

const JoinSection = () => {
  return (
    <div className="p-11">
      <div className="max-w-7xl mx-auto relative ">
        <div className=" lg:px-16 md:px-10 py-[70px] relative overflow-hidden bg-[#F2E7DB] flex flex-col md:flex-row text-center md:text-left px-9 justify-between items-center rounded-xl">
          <h2 className="text-lg xl:text-4xl lg:text-3xl font-semibold xl:max-w-[636px] lg:max-w-[500px] md:max-w-[400px] md:text-2xl leading-normal">
            <span className="text-secondary">Improve</span> your skills, and
            reach your career as soon as possible
          </h2>
  <br />
          <div className="">
            <button className=" xl:px-6 lg:px-5 xl:py-4 lg:py-3 text-white md:mr-5 bg-secondary rounded-md xl:text-xl lg:text-lg md:px-4 font-bold mb-5 px-6 py-3 text-sm">
              Join Now
            </button>
            <p className="md:hidden"/>
            <button className="xl:px-6 lg:px-5 xl:py-4 lg:py-3 text-white bg-primary rounded-md xl:text-xl lg:text-lg md:px-4 font-bold px-6 py-3 text-sm">
              Subscribe Course
            </button>
          </div>
          <div className="w-16 h-16 bg-primary rounded-full absolute -top-2 -left-2"></div>
        </div>
        <img
          className="absolute md:right-1/3 md:-bottom-6 -right-4 md:top-auto top-1/2 h-8 w-8 md:h-auto md:w-auto"
          src={courseDesign1}
          alt=""
        />
      </div>
    </div>
  );
};

export default JoinSection;
