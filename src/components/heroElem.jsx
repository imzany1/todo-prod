import React, { useState } from "react";
import TaskTitle from "./taskTitle";
import { IoTrash } from "react-icons/io5";


const Hero = (params) => {
  const [title, setTitle] = useState("Good Morning");
  const [desc, setDesc] = useState("");
  return (
    <div
      className={`${
        params.mode ? "bg-zinc-700" : "bg-slate-300"
      }  m-20 p-7 flex gap-3 rounded-lg h-[70vh] overflow-hidden mt-12 `}
    >
      <div
        className={`lhs-side-div ${
          params.mode ? "bg-zinc-800" : "bg-slate-200"
        } w-[30%] rounded-md rounded-l-xl relative overflow-y-scroll scroll-smooth p-4 py-6 `}
      >
        {params.Data.map((elem, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                setTitle(elem.Title);
                setDesc(elem.desc);
              }}
            >
              <TaskTitle
                title={elem.Title}
                desc={elem.desc}
                id={idx}
                mode={params.mode}
              />
            </div>
          );
        })}
      </div>
      <div
        className={`rhs-side-div ${
          params.mode ? "bg-zinc-800 text-white" : "bg-slate-200 text-black"
        } w-[70%] py-[22px] px-8 h-full font-semibold rounded-md rounded-r-xl relative`}
      >
        <div>
          <h1
            className={`text-3xl mb-2 ${
              params.mode ? "text-white" : "text-zinc-950"
            } `}
          >
            {title}
          </h1>
          <p
            className={`text-xl ${
              params.mode ? "text-white" : "text-zinc-800"
            } font-light`}
          >
            {desc}
          </p>
          <button
            onClick={() => {
              params.deleteTask(title);
              setTitle("Hurrah another task Done")
              setDesc("Keep rocking it !!")
            }}
            className={`${title== "Good Morning" ? "hidden": "absolute"  } top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all`}
          >
            <IoTrash className="size-5" />  {/* If you're using react-icons */}
          </button>

        </div>
        
      </div>
    </div>
  );
};

export default Hero;
