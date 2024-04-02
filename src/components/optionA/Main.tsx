import React from "react";
import Chart1 from "./Chart1";
import Chart2 from "./Chart2";
import { FaPlus } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { MdArrowDropDownCircle } from "react-icons/md";
const Main = () => {



    return (
        <div className='Main'>
            <div className="flex">
            <h1 className="heading">Comparison of High performer resignation rates to the overall resignation rate </h1>
            <MdArrowDropDownCircle className="marginIcon" style={{height:"20px",width:"20px"}}/>
            </div>  
            <p>Do high performers resign more than others?</p>
            <div className="flex" style={{margin:"20px 0"}}>
                 <button className="button flex">
                 <BsCalendarDate className="marginIcon" />
                  Mar 2019
                 </button>
                 <button className="button flex">
                 <FaPlus className="marginIcon" />
                    Add a filer
                 </button>
            </div>
            <div className="CHARTS">
               
                <Chart1 />
                <Chart2 />
            </div>

        </div>
    )
}

export default Main