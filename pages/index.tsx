import type { NextPage } from "next";
import Button1 from "../components/button1";
import InputField from "../components/input-field";

const Desktop1: NextPage = () => {
  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-13xl text-white font-paragraph-text">
      <div className="absolute top-[0px] left-[0px] bg-secondarycolor-400 w-[1440px] h-[1024px]" />
      <img
        className="absolute top-[338px] left-[0px] w-[1578px] h-[764px] object-cover"
        alt=""
        src="/worldmappng-1@2x.png"
      />
      <div className="absolute top-[238px] left-[510px] text-[96px] text-primarycolor-400 text-left">
        <span className="font-semibold">Afri</span>
        <span className="font-extrabold">Fans.</span>
      </div>
      <div className="absolute top-[168px] left-[506px] font-semibold">
        <p className="m-0">The No 1 African’s</p>
        <p className="m-0">{`most popular 18+ Creators `}</p>
      </div>
      <div className="absolute top-[417px] left-[586px] font-semibold">
        Join the waitlist
      </div>
      <Button1 />
      <InputField />
      <img
        className="absolute top-[595px] left-[48px] rounded-xl w-[153px] h-[153px] object-cover"
        alt=""
        src="/rectangle-2@2x.png"
      />
      <img
        className="absolute top-[595px] left-[1240px] rounded-xl w-[153px] h-[153px] object-cover"
        alt=""
        src="/rectangle-14@2x.png"
      />
      <img
        className="absolute top-[644px] left-[727px] rounded-xl w-[153px] h-72 object-cover"
        alt=""
        src="/rectangle-9@2x.png"
      />
      <img
        className="absolute top-[764px] left-[48px] rounded-xl w-[153px] h-[319px] object-cover"
        alt=""
        src="/rectangle-3@2x.png"
      />
      <img
        className="absolute top-[764px] left-[1240px] rounded-xl w-[153px] h-[319px] object-cover"
        alt=""
        src="/rectangle-15@2x.png"
      />
      <img
        className="absolute top-[956px] left-[727px] rounded-xl w-[153px] h-[127px] object-cover"
        alt=""
        src="/rectangle-10@2x.png"
      />
      <img
        className="absolute top-[705px] left-[386px] rounded-xl w-[153px] h-[378px] object-cover"
        alt=""
        src="/rectangle-6@2x.png"
      />
      <img
        className="absolute top-[682px] left-[899px] rounded-xl w-[153px] h-[401px] object-cover"
        alt=""
        src="/rectangle-11@2x.png"
      />
      <img
        className="absolute top-[644px] left-[217px] rounded-xl w-[153px] h-[218px] object-cover"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className="absolute top-[644px] left-[1071px] rounded-xl bg-primarycolor-400 w-[153px] h-[218px]" />
      <img
        className="absolute top-[595px] left-[555px] rounded-xl w-[153px] h-[267px] object-cover"
        alt=""
        src="/rectangle-7@2x.png"
      />
      <div className="absolute top-[877px] left-[217px] rounded-xl bg-primarycolor-400 w-[153px] h-[218px]" />
      <img
        className="absolute top-[877px] left-[1071px] rounded-xl w-[153px] h-[218px] object-cover"
        alt=""
        src="/rectangle-13@2x.png"
      />
      <img
        className="absolute top-[877px] left-[555px] rounded-xl w-[153px] h-[218px] object-cover"
        alt=""
        src="/rectangle-8@2x.png"
      />
    </div>
  );
};

export default Desktop1;
import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
