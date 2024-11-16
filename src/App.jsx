import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/heroElem";
import Button from "./components/button";
import { IoCloseSharp } from "react-icons/io5";

const App = () => {
  
  // const [datalist, setDatalist] = useState();
  const [datalist, setDatalist] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) :[
      {
        Title: "Make internship report for college",
        desc: "Complete an online or offline internship at any comapny related to yor field of study. Obtain certificate, experience and much more. Make report of said internship for college",
      },
      {
        Title: "Study for upcoming second sessional exams",
        desc: "As soon as you get back home, start studyig relentlessly for the upcoming second sessional exams",
      },
      {
        Title: "Task 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda aliquid earum, incidunt iure velit sapiente nulla quia nobis nihil, numquam suscipit fugit! Sunt praesentium incidunt delectus ex cumque culpa saepe.",
      },
    ]});

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(datalist));
    }, [datalist]);
  


  const deleteTask = (taskTitle) => {
    setDatalist((prevTasks) => {
      const updatedTasks = prevTasks.filter(task => task.Title !== taskTitle);
      return updatedTasks;
    });
  };


  function submitHandler(e) {
    e.preventDefault();
    if (newTitle.trim() && newTask.trim()) {
      const newTaskObject = {
        Title: newTitle,
        desc: newTask
      };
      setDatalist(prevTasks => [...prevTasks, newTaskObject]);
      setDatalist([...datalist, newTaskObject]);
      setNewTask("");
      setNewTitle("");
      setOpenPopUp(false);
    }
  }

  const [openPopUp, setOpenPopUp] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newTask, setNewTask] = useState("");
  const [dark, setDark] = useState(true)

  return (
    <div className={`${dark? "bg-zinc-900" : "bg-slate-100"} w-screen h-screen`}>
      <Navbar mode={dark} toggle={setDark} />
      <Hero Data={datalist} mode={dark} deleteTask={deleteTask} />
      <div className="absolute bottom-5 right-5 ">
        <div
          className={`${openPopUp ? "hidden" : "None"}`}
          onClick={() => {
            setOpenPopUp(!openPopUp);
          }}
        >
          <Button purpose="Add New task" mode={dark} />
        </div>
      </div>
      <div
        className={`absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[70vw] h-[80vh] rounded-xl z-10 font-semibold flex pt-10 pb-5 bg-zinc-600 ${
          openPopUp ? "justify-center" : "hidden"
        }`}
      >
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className="w-[80%] h-full flex flex-col gap-4 text-2xl text-black"
        >
          <input
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            className="px-2 py-1 rounded-md outline-none"
          />
          <textarea
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            cols="44"
            rows="9.5"
            placeholder="Enter detailed task description"
            className="px-2 py-1 rounded-md font-normal outline-none"
            aria-setsize="fixed"
          ></textarea>
          <button
            type="submit"
            className=" absolute bottom-0 right-0 my-5 mx-8 bg-emerald-600 text-slate-200 max-w-fit py-2 px-3 rounded-md ml-auto hover:bg-emerald-700 hover:scale-105 transition-all  "
            onClick={() => {
              setOpenPopUp(!openPopUp);
            }}
          >
            Add Task
          </button>
        </form>
        <button
          onClick={() => {
            setOpenPopUp(!openPopUp);
          }}
          className="absolute z-20 right-0 top-0 mx-7 my-2 rotate-90 hover:bg-rose-500 rounded-full hover:rotate-180 transition-all p-1"
        >
          <IoCloseSharp  className="size-8" color="white" />
        </button>
      </div>
      </div>
  );
};
export default App;
