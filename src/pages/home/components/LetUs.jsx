import image from "../../../assets/Image.png";
import image1 from "../../../assets/bottom_image.png";

const LetUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-11 flex justify-between items-center gap-[150px] my-[100px]">
      <img className="lg:block hidden" src={image} alt="" />
      <div>
        <h2 className="md:text-5xl text-xl font-bold md:mb-9 mb-6 ">
          Let us{" "}
          <span
            className="text-primary bg-no-repeat bg-bottom bg-contain py-1"
            style={{
              backgroundImage: `url(${image1})`,
            }}
          >
            Skill Shoot
          </span>
        </h2>
        <p className="md:text-base text-xs md:leading-9 leading-7 text-gray-500">
          We are a company engaged in education with the aim of improving the
          skills of many people and so that younger people can reach the career
          paths they want.
        </p>
        <br />
        <p className="md:text-base text-xs md:leading-9 leading-7 text-gray-500">
          we have been around since 2019 with currently 100+ updated materials
          and 15K members who have joined.
        </p>
        <div className="grid grid-cols-2 gap-7 mt-9">
          <div className="flex gap-4 items-center ">
            <div className=" md:h-[50px] md:w-[50px] p-2 h-[30px] w-[30px] bg-[#CB846130] flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path
                  d="M9.5 0.0833359C8.46989 0.0833359 7.46291 0.388799 6.6064 0.961098C5.7499 1.5334 5.08233 2.34683 4.68813 3.29853C4.29392 4.25022 4.19078 5.29745 4.39174 6.30776C4.59271 7.31808 5.08875 8.24612 5.81715 8.97452C6.54555 9.70292 7.47359 10.199 8.4839 10.3999C9.49422 10.6009 10.5414 10.4977 11.4931 10.1035C12.4448 9.70934 13.2583 9.04177 13.8306 8.18526C14.4029 7.32876 14.7083 6.32178 14.7083 5.29167C14.7083 3.91033 14.1596 2.58557 13.1828 1.60882C12.2061 0.632069 10.8813 0.0833359 9.5 0.0833359ZM9.5 8.41667C8.88193 8.41667 8.27775 8.23339 7.76384 7.89001C7.24994 7.54663 6.8494 7.05857 6.61288 6.48755C6.37635 5.91654 6.31447 5.2882 6.43505 4.68201C6.55562 4.07582 6.85325 3.519 7.29029 3.08196C7.72733 2.64492 8.28415 2.34729 8.89034 2.22672C9.49653 2.10614 10.1249 2.16802 10.6959 2.40455C11.2669 2.64107 11.755 3.04161 12.0983 3.55551C12.4417 4.06942 12.625 4.6736 12.625 5.29167C12.625 6.12047 12.2958 6.91533 11.7097 7.50138C11.1237 8.08743 10.3288 8.41667 9.5 8.41667ZM18.875 19.875V18.8333C18.875 16.8995 18.1068 15.0448 16.7393 13.6773C15.3719 12.3099 13.5172 11.5417 11.5833 11.5417H7.41667C5.4828 11.5417 3.62813 12.3099 2.26068 13.6773C0.893227 15.0448 0.125 16.8995 0.125 18.8333V19.875H2.20833V18.8333C2.20833 17.452 2.75707 16.1272 3.73382 15.1505C4.71057 14.1737 6.03533 13.625 7.41667 13.625H11.5833C12.9647 13.625 14.2894 14.1737 15.2662 15.1505C16.2429 16.1272 16.7917 17.452 16.7917 18.8333V19.875H18.875Z"
                  fill="#CB8461"
                />
              </svg>
            </div>
            <p className="font-semibold text-xs md:text-base">
              15K People Join
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <div className=" md:h-[50px] md:w-[50px] p-2 h-[30px] w-[30px] bg-[#CB846130] flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M21.1355 8.63541L16.6667 13.1042L15.3125 11.7604L13.8438 13.2396L16.6563 16.0521L22.6146 10.1146L21.1355 8.63541ZM4.16671 8.33333C4.15388 8.88401 4.25289 9.43157 4.45774 9.9429C4.66259 10.4542 4.96904 10.9187 5.35853 11.3082C5.74803 11.6977 6.21248 12.0041 6.72381 12.209C7.23513 12.4138 7.78269 12.5128 8.33337 12.5C8.88406 12.5128 9.43162 12.4138 9.94294 12.209C10.4543 12.0041 10.9187 11.6977 11.3082 11.3082C11.6977 10.9187 12.0042 10.4542 12.209 9.9429C12.4139 9.43157 12.5129 8.88401 12.5 8.33333C12.5129 7.78265 12.4139 7.23509 12.209 6.72376C12.0042 6.21244 11.6977 5.74798 11.3082 5.35849C10.9187 4.96899 10.4543 4.66255 9.94294 4.45769C9.43162 4.25284 8.88406 4.15383 8.33337 4.16666C7.78269 4.15383 7.23513 4.25284 6.72381 4.45769C6.21248 4.66255 5.74803 4.96899 5.35853 5.35849C4.96904 5.74798 4.66259 6.21244 4.45774 6.72376C4.25289 7.23509 4.15388 7.78265 4.16671 8.33333ZM10.4167 8.33333C10.4301 8.61047 10.3854 8.88734 10.2854 9.14617C10.1855 9.405 10.0325 9.64006 9.83629 9.83625C9.6401 10.0324 9.40504 10.1854 9.14621 10.2854C8.88738 10.3853 8.61051 10.4301 8.33337 10.4167C8.05624 10.4301 7.77936 10.3853 7.52054 10.2854C7.26171 10.1854 7.02665 10.0324 6.83046 9.83625C6.63426 9.64006 6.48127 9.405 6.38132 9.14617C6.28136 8.88734 6.23664 8.61047 6.25004 8.33333C6.23664 8.05619 6.28136 7.77932 6.38132 7.52049C6.48127 7.26166 6.63426 7.0266 6.83046 6.83041C7.02665 6.63422 7.26171 6.48123 7.52054 6.38127C7.77936 6.28131 8.05624 6.2366 8.33337 6.25C8.61051 6.2366 8.88738 6.28131 9.14621 6.38127C9.40504 6.48123 9.6401 6.63422 9.83629 6.83041C10.0325 7.0266 10.1855 7.26166 10.2854 7.52049C10.3854 7.77932 10.4301 8.05619 10.4167 8.33333ZM4.16671 18.75C4.16671 17.9212 4.49595 17.1263 5.082 16.5403C5.66805 15.9542 6.46291 15.625 7.29171 15.625H9.37504C10.2038 15.625 10.9987 15.9542 11.5847 16.5403C12.1708 17.1263 12.5 17.9212 12.5 18.75V19.7917H14.5834V18.75C14.5834 18.066 14.4487 17.3888 14.1869 16.7569C13.9252 16.1249 13.5415 15.5508 13.0579 15.0671C12.5742 14.5835 12.0001 14.1999 11.3682 13.9381C10.7363 13.6764 10.059 13.5417 9.37504 13.5417H7.29171C5.91037 13.5417 4.58561 14.0904 3.60886 15.0671C2.63211 16.0439 2.08337 17.3687 2.08337 18.75V19.7917H4.16671V18.75Z"
                  fill="#CB8461"
                />
              </svg>
            </div>
            <p className="font-semibold text-xs md:text-base">Trusted Mentor</p>
          </div>
          <div className="flex gap-4 items-center ">
            <div className=" md:h-[50px] md:w-[50px] p-2 h-[30px] w-[30px] bg-[#CB846130] flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M18.75 9.37499C18.75 8.22604 17.8157 7.29166 16.6667 7.29166H15.173L12.6542 3.09479C12.4686 2.787 12.2068 2.53223 11.8941 2.35507C11.5813 2.1779 11.2282 2.08431 10.8688 2.08333H5.20837V4.16666H10.8688L12.7438 7.29166H4.16671C3.01775 7.29166 2.08337 8.22604 2.08337 9.37499V18.75C2.08337 19.899 3.01775 20.8333 4.16671 20.8333H16.6667C17.8157 20.8333 18.75 19.899 18.75 18.75V15.625L22.9167 17.7083V10.4167L18.75 12.5V9.37499ZM16.6688 18.75H4.16671V9.37499H16.6667L16.6677 13.5417H16.6667V14.5833L16.6677 14.5844L16.6688 18.75Z"
                  fill="#CB8461"
                />
                <path
                  d="M6.25 14.5833H12.5V16.6667H6.25V14.5833Z"
                  fill="#CB8461"
                />
              </svg>
            </div>
            <p className="font-semibold text-xs md:text-base">
              30+ Free Videos
            </p>
          </div>
          <div className="flex gap-4 items-center ">
            <div className=" md:h-[50px] md:w-[50px] p-2 h-[30px] w-[30px] bg-[#CB846130] flex justify-center items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
              >
                <path
                  d="M12.5 2.08333C6.75629 2.08333 2.08337 6.75625 2.08337 12.5C2.08337 18.2437 6.75629 22.9167 12.5 22.9167C18.2438 22.9167 22.9167 18.2437 22.9167 12.5C22.9167 6.75625 18.2438 2.08333 12.5 2.08333ZM12.5 20.8333C7.90525 20.8333 4.16671 17.0948 4.16671 12.5C4.16671 7.9052 7.90525 4.16666 12.5 4.16666C17.0948 4.16666 20.8334 7.9052 20.8334 12.5C20.8334 17.0948 17.0948 20.8333 12.5 20.8333Z"
                  fill="#CB8461"
                />
                <path
                  d="M9.375 17.7083L17.7083 12.5L9.375 7.29167V17.7083Z"
                  fill="#CB8461"
                />
              </svg>
            </div>
            <p className="font-semibold text-xs md:text-base">
              100+ Premium Videos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetUs;
