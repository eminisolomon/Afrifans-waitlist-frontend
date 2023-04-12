import type { NextPage } from "next";
import { memo } from "react";

const InputField: NextPage = memo(() => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between absolute top-[478px] left-[5%] md:left-[330px] rounded-xl bg-white shadow-[10px_10px_20px_rgba(0,_0,_0,_0.15)] w-[90%] md:w-[501px] h-[69px] overflow-hidden py-[30px] pr-[6%] pl-[6%] text-base text-secondarycolor-200 font-paragraph-text border-[1px] border-solid border-secondarycolor-200">
      <label htmlFor="input" className="font-semibold md:mr-4">Input Field</label>
      <input id="input" type="text" className="w-full bg-transparent outline-none" />
    </div>
  );
});

export default InputField;
