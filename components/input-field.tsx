import type { NextPage } from "next";
import { memo } from "react";

const InputField: NextPage = memo(() => {
  return (
    <div className="absolute top-20 left-10 md:top-[478px] md:left-[330px] rounded-xl bg-white shadow-md box-border w-full md:w-[501px] h-[69px] overflow-hidden flex flex-row py-4 md:py-[30px] pr-10 md:pr-[84px] pl-5 md:pl-[49px] items-center justify-start text-left text-base text-secondarycolor-200 font-paragraph-text border-2 border-secondarycolor-200">
      <div className="relative font-semibold">Input Field</div>
    </div>
  );
});

export default InputField;