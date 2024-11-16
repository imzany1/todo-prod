import React, { useState } from 'react'

const TaskTitle = (params) => {
  const [isCompleted, setIsCompleted] = useState(false);
  function taskClicked(){
    setIsCompleted(!isCompleted);
  }
  return (
    <>
        <button  className={`flex justify-between items-center py-2 px-5 text-2xl font-semibold border-2 rounded-md mb-2 text-left w-full ${isCompleted? "bg-zinc-800 ": "hover:bg-zinc-950 hover:text-[#fff] hover:scale-y-[103%] hover:scale-x-[102%] "} ${params.mode? "text-white border-[#BBB] " : "text-zinc-700 border-[#555]"} transition-all`}>
        {console.log(params.mode)}
        <span 
        style={{
          textDecoration: isCompleted ? 'line-through' : 'none',
          color: isCompleted ? 'gray' : ''
        }}

      >
        {params.id + 1}. {params.title}
      </span>
          <input onClick={taskClicked} type="checkbox" checked={isCompleted} onChange={()=>{taskClicked()}} /> 
        </button>
    </>
  )
}

export default TaskTitle