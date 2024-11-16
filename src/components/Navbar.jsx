import React, { useState } from 'react'
import Button from './button'
import Header from './header'


const navbarr = (props) => {
  return (
    <>
        <nav className="flex items-center justify-between ml-[90px] mr-[68px] relative">
          <Header mode={props.mode} />
          <div onClick={()=>{
            props.toggle(!props.mode)
          }}>
        <Button purpose={`${!props.mode ? "Dark Mode": "Light Mode" }`} mode={props.mode} />
        </div>
        </nav>
        <hr className={`border-slate-500 ${props.mode? "" : "border-2"}`}  />
      </>
  )
}

export default navbarr