import React from 'react'
import { BsFillInfoCircleFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { PiGridFourBold } from "react-icons/pi";
const Icons = () => {
  return (
    <div className='icons flex'>
      <BsFillInfoCircleFill className='icon' color='#008fff' />
      <div className="circle-icon">
        <TfiMenuAlt style={{ fontSize: "19px", color: "white" }} />
      </div>
      <div className="circle-icon">
        <IoIosSettings style={{ fontSize: "19px", color: "white" }} />
      </div>
      <div className="circle-icon">
        <IoIosArrowDropdownCircle style={{ fontSize: "19px", color: "white" }} />
      </div>
      <div className="circle-icon" style={{backgroundColor:"black"}}>
        <PiGridFourBold style={{ fontSize: "19px", color: "white" }} />
      </div>
    </div>
  )
}

export default Icons