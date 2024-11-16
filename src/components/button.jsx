import React from "react";


const button = (params) => {
  return (
    <>
      <button
        className={` inline-block m-5 px-4 py-2 rounded-md  bg-slate-500 ${params.mode?  "hover:bg-slate-600 hover:text-slate-200" : "hover:bg-slate-400 hover:text-slate-950" } hover:scale-105 transition-all text-white `}
      >
        {params.purpose}
      </button>
    </>
  );
};

export default button;
