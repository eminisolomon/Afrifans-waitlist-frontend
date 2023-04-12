import type { NextPage } from "next";
import { memo } from "react";

const Button1: NextPage = memo(() => {
  return (
    <div className="absolute top-[10%] sm:top-[20%] md:top-[30%] lg:top-[40%] left-[60%] sm:left-[70%] md:left-[80%] lg:left-[90%] rounded-xl bg-primarycolor-400 w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%] h-[10%] sm:h-[15%] md:h-[20%] lg:h-[25%] overflow-hidden flex flex-col py-[2%] sm:py-[5%] md:py-[7%] lg:py-[10%] px-[6%] sm:px-[8%] md:px-[10%] lg:px-[12%] box-border items-center justify-center text-left text-5xl text-white font-paragraph-text">
      <div className="relative font-semibold">Join the waitlist</div>
    </div>
  );
});

export default Button1;

