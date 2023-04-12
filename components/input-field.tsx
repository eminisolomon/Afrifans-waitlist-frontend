import type { NextPage } from "next";
import { memo } from "react";

const InputField: NextPage = memo(() => {
  return (
    <div className="absolute top-[478px] left-[330px] rounded-xl bg-white shadow-[10px_10px_20px_rgba(0,_0,_0,_0.15)] box-border w-[501px] h-[69px] overflow-hidden flex flex-row py-[30px] pr-[84px] pl-[49px] items-center justify-start text-left text-base text-secondarycolor-200 font-paragraph-text border-[1px] border-solid border-secondarycolor-200">
      <div className="relative font-semibold">Input Field</div>
    </div>
  );
});

export default InputField;
