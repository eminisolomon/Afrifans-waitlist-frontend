import type { NextPage } from "next";
import { memo } from "react";

const Button1: NextPage = memo(() => {
  return (
    <div className="absolute top-[577px] left-[5%] md:left-auto md:right-[5%] rounded-xl bg-primarycolor-400 w-[90%] md:w-[308px] h-[70px] overflow-hidden flex flex-col py-[30px] px-[6%] box-border items-center justify-center text-2xl md:text-5xl text-white font-paragraph-text">
      <div className="relative font-semibold">Join the waitlist</div>
    </div>
  );
});

export default Button1;

