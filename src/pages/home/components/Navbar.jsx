import { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div className="bg-primary text-white px-8">
      <div className="flex justify-between py-6 max-w-7xl mx-auto items-center">
        <div>
          <h3 className="md:text-2xl text-xl font-bold cursor-pointer">
            Skill <span className="text-secondary">Shoot</span>
          </h3>
        </div>
        <ul className="hidden lg:gap-[30px] lg:flex">
          <a className="cursor-pointer">Home</a>
          <a className="cursor-pointer">Course</a>
          <a className="cursor-pointer">Subscribe</a>
          <a className="cursor-pointer">About</a>
          <a className="cursor-pointer">Testimonial</a>
        </ul>
        <div className="lg:flex hidden gap-5 ">
          <button>Login</button>
          <button className="bg-secondary py-2 lg:px-11 rounded-md">
            Register
          </button>
        </div>
        <div
          className="lg:hidden cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M4 6H20V8H4V6ZM8 11H20V13H8V11ZM13 16H20V18H13V16Z"
              fill="black"
            />
            <path
              d="M4.6875 13.1251C4.43886 13.1251 4.2004 13.0263 4.02459 12.8505C3.84877 12.6747 3.75 12.4362 3.75 12.1876V4.68945C3.75 4.44081 3.84877 4.20236 4.02459 4.02654C4.2004 3.85073 4.43886 3.75195 4.6875 3.75195H12.1875C12.4361 3.75195 12.6746 3.85073 12.8504 4.02654C13.0262 4.20236 13.125 4.44081 13.125 4.68945V12.1876C13.125 12.4362 13.0262 12.6747 12.8504 12.8505C12.6746 13.0263 12.4361 13.1251 12.1875 13.1251H4.6875ZM17.8125 13.1251C17.5639 13.1251 17.3254 13.0263 17.1496 12.8505C16.9738 12.6747 16.875 12.4362 16.875 12.1876V4.68945C16.875 4.44081 16.9738 4.20236 17.1496 4.02654C17.3254 3.85073 17.5639 3.75195 17.8125 3.75195H25.3106C25.5593 3.75195 25.7977 3.85073 25.9735 4.02654C26.1494 4.20236 26.2481 4.44081 26.2481 4.68945V12.1876C26.2481 12.4362 26.1494 12.6747 25.9735 12.8505C25.7977 13.0263 25.5593 13.1251 25.3106 13.1251H17.8125ZM4.6875 26.2501C4.43886 26.2501 4.2004 26.1513 4.02459 25.9755C3.84877 25.7997 3.75 25.5612 3.75 25.3126V17.8126C3.75 17.564 3.84877 17.3255 4.02459 17.1497C4.2004 16.9739 4.43886 16.8751 4.6875 16.8751H12.1875C12.4361 16.8751 12.6746 16.9739 12.8504 17.1497C13.0262 17.3255 13.125 17.564 13.125 17.8126V25.3126C13.125 25.5612 13.0262 25.7997 12.8504 25.9755C12.6746 26.1513 12.4361 26.2501 12.1875 26.2501H4.6875ZM17.8125 26.2501C17.5639 26.2501 17.3254 26.1513 17.1496 25.9755C16.9738 25.7997 16.875 25.5612 16.875 25.3126V17.8126C16.875 17.564 16.9738 17.3255 17.1496 17.1497C17.3254 16.9739 17.5639 16.8751 17.8125 16.8751H25.3106C25.5593 16.8751 25.7977 16.9739 25.9735 17.1497C26.1494 17.3255 26.2481 17.564 26.2481 17.8126V25.3126C26.2481 25.5612 26.1494 25.7997 25.9735 25.9755C25.7977 26.1513 25.5593 26.2501 25.3106 26.2501H17.8125Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div
        onClick={() => setShow(!show)}
        className={`flex lg:hidden flex-col justify-center items-center pb-3 gap-[15px] transition-all duration-1000 delay-0 ease-in-out ${
          show
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a className="cursor-pointer">Home</a>
        <a className="cursor-pointer">Course</a>
        <a className="cursor-pointer">Subscribe</a>
        <a className="cursor-pointer">About</a>
        <a className="cursor-pointer">Testimonial</a>
        <a className="cursor-pointer">Login</a>
        <a className="bg-secondary py-2 px-11 rounded-md">Register</a>
      </div>
    </div>
  );
};

export default Navbar;
