import React from "react";

const header = (props) => {
  return (
    <div>
      <>
        <h1 className={`headerElem text-5xl font-bold ${props.mode? "bg-gradient-to-t from-slate-50 to-slate-400" : "bg-gradient-to-t from-slate-950 to-slate-600"} text-transparent bg-clip-text cursor-default`}>
          TO-DO LIST
        </h1>
      </>
    </div>
  );
};

export default header;
