import check from "../../../assets/check_circle.png";
const SubscribeSection = () => {
  return (
    <div className="text-center my-28 px-11">
      <h1 className="md:text-4xl text-lg font-semibold pb-3">
        <span className="text-secondary">Subscribe</span> with us now
      </h1>
      <p className="max-w-[550px] mx-auto text-gray-500 leading-7 md:leading-9 text-xs md:text-base">
        By subscribing now, you will be able to access the material easily and
        cheaply, so you will be very efficient and benefit.
      </p>
      <div className="flex justify-center md:items-end gap-14 mt-12 md:flex-row items-center flex-col flex-wrap">
        <div className="text-left max-w-[217px] order-2 md:order-none">
          <h3 className="md:text-4xl text-lg font-semibold leading-normal">
            $50
            <span className="text-xs md:text-base text-gray-400">
              / 1 month
            </span>
          </h3>
          <h4 className="text-xl md:text-3xl font-semibold leading-normal ">
            Base
          </h4>
          <p className="md:text-base text-xs leading-6 text-gray-500 pb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="list-inside flex flex-col gap-2">
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Access all videos
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Get Certificate
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Chat support
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Update Notification
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Download material
            </p>
          </div>
          <button className="px-14 py-2 bg-[#fff7f4] text-[#ffbf9f] mt-5 rounded-3xl hover:bg-secondary hover:text-white transition-all ease-in-out">
            Choose plan
          </button>
        </div>
        <div className="order-1 md:order-none text-left bg-[url('https://i.ibb.co/zPWTrZz/Premium.png')] max-w-[290px] bg-no-repeat text-white p-7 bg-cover shadow-2xl shadow-primary rounded-3xl">
          <div className="flex justify-end">
            <p className="px-5 py-2  rounded-3xl bg-secondary text-white text-[10px]">
              Choose plan
            </p>
          </div>
          <h3 className="md:text-4xl font-semibold text-lg">
            $100
            <span className="md:text-base text-xs text-gray-400">
              / 6 month
            </span>
          </h3>
          <h4 className="md:text-3xl text-xl font-semibold leading-normal">
            Pro
          </h4>
          <p className="text-xs  md:text-base leading-6 text-gray-300 pb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="list-inside flex flex-col gap-2">
            <p className="flex gap-2 text-xs md:text-base ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  opacity="0.1"
                  d="M10 0.948242C4.47715 0.948242 0 5.42539 0 10.9482C0 16.4711 4.47715 20.9482 10 20.9482C15.5228 20.9482 20 16.4711 20 10.9482C19.9936 5.42806 15.5202 0.954671 10 0.948242Z"
                  fill="white"
                />
                <path
                  d="M15.7724 7.78162L10.0683 15.5224C9.93221 15.7029 9.72936 15.8212 9.50527 15.8507C9.28118 15.8801 9.05465 15.8183 8.87659 15.6791L4.80325 12.4224C4.44381 12.1348 4.3856 11.6102 4.67325 11.2508C4.9609 10.8913 5.48547 10.8331 5.84492 11.1208L9.24159 13.8383L14.4308 6.79578C14.6009 6.54044 14.8976 6.39927 15.2031 6.42831C15.5086 6.45736 15.7734 6.65192 15.8923 6.93476C16.0113 7.21759 15.9653 7.54294 15.7724 7.78162Z"
                  fill="white"
                />
              </svg>
              Access all videos
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  opacity="0.1"
                  d="M10 0.948242C4.47715 0.948242 0 5.42539 0 10.9482C0 16.4711 4.47715 20.9482 10 20.9482C15.5228 20.9482 20 16.4711 20 10.9482C19.9936 5.42806 15.5202 0.954671 10 0.948242Z"
                  fill="white"
                />
                <path
                  d="M15.7724 7.78162L10.0683 15.5224C9.93221 15.7029 9.72936 15.8212 9.50527 15.8507C9.28118 15.8801 9.05465 15.8183 8.87659 15.6791L4.80325 12.4224C4.44381 12.1348 4.3856 11.6102 4.67325 11.2508C4.9609 10.8913 5.48547 10.8331 5.84492 11.1208L9.24159 13.8383L14.4308 6.79578C14.6009 6.54044 14.8976 6.39927 15.2031 6.42831C15.5086 6.45736 15.7734 6.65192 15.8923 6.93476C16.0113 7.21759 15.9653 7.54294 15.7724 7.78162Z"
                  fill="white"
                />
              </svg>
              Get Certificate
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  opacity="0.1"
                  d="M10 0.948242C4.47715 0.948242 0 5.42539 0 10.9482C0 16.4711 4.47715 20.9482 10 20.9482C15.5228 20.9482 20 16.4711 20 10.9482C19.9936 5.42806 15.5202 0.954671 10 0.948242Z"
                  fill="white"
                />
                <path
                  d="M15.7724 7.78162L10.0683 15.5224C9.93221 15.7029 9.72936 15.8212 9.50527 15.8507C9.28118 15.8801 9.05465 15.8183 8.87659 15.6791L4.80325 12.4224C4.44381 12.1348 4.3856 11.6102 4.67325 11.2508C4.9609 10.8913 5.48547 10.8331 5.84492 11.1208L9.24159 13.8383L14.4308 6.79578C14.6009 6.54044 14.8976 6.39927 15.2031 6.42831C15.5086 6.45736 15.7734 6.65192 15.8923 6.93476C16.0113 7.21759 15.9653 7.54294 15.7724 7.78162Z"
                  fill="white"
                />
              </svg>
              Chat support
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  opacity="0.1"
                  d="M10 0.948242C4.47715 0.948242 0 5.42539 0 10.9482C0 16.4711 4.47715 20.9482 10 20.9482C15.5228 20.9482 20 16.4711 20 10.9482C19.9936 5.42806 15.5202 0.954671 10 0.948242Z"
                  fill="white"
                />
                <path
                  d="M15.7724 7.78162L10.0683 15.5224C9.93221 15.7029 9.72936 15.8212 9.50527 15.8507C9.28118 15.8801 9.05465 15.8183 8.87659 15.6791L4.80325 12.4224C4.44381 12.1348 4.3856 11.6102 4.67325 11.2508C4.9609 10.8913 5.48547 10.8331 5.84492 11.1208L9.24159 13.8383L14.4308 6.79578C14.6009 6.54044 14.8976 6.39927 15.2031 6.42831C15.5086 6.45736 15.7734 6.65192 15.8923 6.93476C16.0113 7.21759 15.9653 7.54294 15.7724 7.78162Z"
                  fill="white"
                />
              </svg>
              Update Notification
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  opacity="0.1"
                  d="M10 0.948242C4.47715 0.948242 0 5.42539 0 10.9482C0 16.4711 4.47715 20.9482 10 20.9482C15.5228 20.9482 20 16.4711 20 10.9482C19.9936 5.42806 15.5202 0.954671 10 0.948242Z"
                  fill="white"
                />
                <path
                  d="M15.7724 7.78162L10.0683 15.5224C9.93221 15.7029 9.72936 15.8212 9.50527 15.8507C9.28118 15.8801 9.05465 15.8183 8.87659 15.6791L4.80325 12.4224C4.44381 12.1348 4.3856 11.6102 4.67325 11.2508C4.9609 10.8913 5.48547 10.8331 5.84492 11.1208L9.24159 13.8383L14.4308 6.79578C14.6009 6.54044 14.8976 6.39927 15.2031 6.42831C15.5086 6.45736 15.7734 6.65192 15.8923 6.93476C16.0113 7.21759 15.9653 7.54294 15.7724 7.78162Z"
                  fill="white"
                />
              </svg>
              Download material
            </p>
          </div>
          <button className="w-full py-2 text-xs md:text-base hover:bg-[#fffcfb] hover:text-primary mt-5 rounded-3xl bg-secondary text-white transition-all ease-in-out">
            Choose plan
          </button>
        </div>
        <div className="text-left max-w-[217px] order-3 md:order-none">
          <h3 className="md:text-4xl text-lg font-semibold ">
            $200
            <span className="text-xs md:text-base text-gray-400">
              / 12 month
            </span>
          </h3>
          <h4 className="text-xl md:text-3xl font-semibold leading-normal">
            Enterprise
          </h4>
          <p className="md:text-base text-xs leading-6 text-gray-500 pb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="list-inside flex flex-col gap-2">
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Access all videos
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Get Certificate
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Chat support
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Update Notification
            </p>
            <p className="flex gap-2 text-xs md:text-base">
              <img src={check} />
              Download material
            </p>
          </div>
          <button className="px-14 py-2 bg-[#fff7f4] text-[#ffbf9f] mt-5 rounded-3xl hover:bg-secondary hover:text-white transition-all ease-in-out">
            Choose plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
