import React from "react";
import chartData from "./data.json";
const Bar =(propes)=>{
 return (
        <div className="bar" >
            <div className="dollar" id="dollar">{propes.amount}</div>
            <div className="barHeight"id={propes.day}></div>
            <div className="day">{propes.day}</div>
        </div>
    )
}
export default Bar
