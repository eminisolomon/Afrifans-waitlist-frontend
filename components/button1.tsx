import type { NextPage } from "next";
import { memo } from "react";

const Button1: NextPage = memo(() => {
  return (
    <div className="absolute top-[477px] left-[855px] rounded-xl bg-primarycolor-400 w-[308px] h-[70px] overflow-hidden flex flex-col py-[30px] px-[85px] box-border items-center justify-center text-left text-5xl text-white font-paragraph-text">
      <div className="relative font-semibold">Join the waitlist</div>
    </div>
  );
});

export default Button1;
