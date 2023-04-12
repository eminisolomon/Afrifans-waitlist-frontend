import type { NextPage } from "next";
import Button1 from "../components/button1";
import InputField from "../components/input-field";

const Desktop1: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-13xl text-white font-paragraph-text">
      <div className="absolute top-[0px] left-[0px] bg-secondarycolor-400 w-full sm:w-[1440px] h-[1024px]" />
      <img
        className="absolute top-[338px] left-[0px] w-full sm:w-[1578px] h-[764px] object-cover"
        alt=""
        src="/worldmappng-1@2x.png"
      />
      <div className="absolute top-[238px] left-[10%] sm:left-[510px] text-[96px] text-primarycolor-400 text-left">
        <span className="font-semibold">Afri</span>
        <span className="font-extrabold">Fans.</span>
      </div>
      <div className="absolute top-[168px] left-[10%] sm:left-[506px] font-semibold">
        <p className="m-0">The No 1 African’s</p>
        <p className="m-0">{`most popular 18+ Creators `}</p>
      </div>
      <div className="absolute top-[417px] left-[10%] sm:left-[586px] font-semibold">
        Join the waitlist
      </div>
      <Button1 />
      <InputField />
      <img
        className="absolute top-[595px] left-[10%] sm:left-[48px] rounded-xl w-[30%] sm:w-[153px] h-[153px] object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <img
        className="absolute top-[595px] right-[10%] sm:right-[48px] rounded-xl w-[30%] sm:w-[153px] h-[153px] object-cover"
        alt=""
        src="/rectangle-14@2x.png"
      />
      <img
        className="absolute top-[644px] left-[50%] sm:left-[727px] transform sm:-translate-x-1/2 rounded-xl w-[30%] sm:w-[153px] h-72 object-cover"
        alt=""
        src="/rectangle-9@2x.png"
      />
      <img
        className="absolute top-[764px] left-[10%] sm:left-[48px] rounded-xl w-[30%] sm:w-[153px] h-[319px] object-cover"
        alt=""
        src="/rectangle-3@2x.png"
      />
      <img
        className="absolute top-[764px] right-[10%] sm:right-[48px] rounded-xl w-[30%] sm:w-[153px] h-[319px] object-cover"
        alt=""
        src="/rectangle-15@2x.png"
      />
      <img
        className="absolute top-[956px] left-[50%] sm:left-[727px] transform sm:-translate-x-1/2 rounded-xl w-[30%] sm:w-[153px] h-[127px] object-cover"
        alt=""
        src="/rectangle-10@2x.png"
      />
      <img
        className="absolute top-24 md:top-1/3 lg:top-[705px] left-1/2 transform -translate-x-1/2 rounded-xl w-48 md:w-60 lg:w-[153px] h-48 md:h-72 lg:h-[378px] object-cover"
        alt=""
        src="/rectangle-6@2x.png"
      />
      <img
        className="absolute top-20 md:top-1/3 lg:top-[682px] left-[50%] md:left-auto md:right-0 transform -translate-x-1/2 rounded-xl w-48 md:w-60 lg:w-[153px] h-48 md:h-80 lg:h-[401px] object-cover"
        alt=""
        src="/rectangle-11@2x.png"
      />
      <img
        className="absolute top-12 md:top-1/4 lg:top-[644px] left-1/2 transform -translate-x-1/2 rounded-xl w-48 md:w-60 lg:w-[153px] h-36 md:h-52 lg:h-[218px] object-cover"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className="absolute top-12 md:top-1/4 lg:top-[644px] right-0 md:left-auto w-48 md:w-60 lg:w-[153px] h-36 md:h-52 lg:h-[218px] rounded-xl bg-primarycolor-400" />
      <img
        className="absolute top-0 md:top-1/5 lg:top-[595px] left-1/2 transform -translate-x-1/2 rounded-xl w-48 md:w-60 lg:w-[153px] h-48 md:h-64 lg:h-[267px] object-cover"
        alt=""
        src="/rectangle-7@2x.png"
      />
      <div className="absolute bottom-12 md:bottom-auto md:top-1/2 lg:top-[877px] left-1/2 transform -translate-x-1/2 w-48 md:w-60 lg:w-[153px] h-36 md:h-52 lg:h-[218px] rounded-xl bg-primarycolor-400" />
      <img
        className="absolute bottom-0 md:bottom-auto md:top-1/2 lg:top-[877px] left-[50%] md:left-auto md:right-0 transform -translate-x-1/2 rounded-xl w-48 md:w-60 lg:w-[153px] h-36 md:h-52 lg:h-[218px] object-cover"
        alt=""
        src="/rectangle-13@2x.png"
      />
      <img
       className="absolute bottom-0 md:bottom-auto md:top-1/2 lg:top-[877px] left-1/2 transform -translate-x-1/2 rounded-xl w-48 md:w-60 lg:w-[153px] h-36 md:h-52 lg:h-[218px] object-cover"
       alt=""
       src="/rectangle-8@2x.png"
      />
      </div>
  );
};

export default Desktop1;
