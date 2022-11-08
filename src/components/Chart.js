import React from "react";
import week from "../data.json"

const Chart = () => {
    return (
        <div class="chart-box">
    <div class="chart-title">
      <h3>Spending - Last 7 days</h3>
    </div>
    <div class="chart">
      
      <ul>
       {week.map((day, index)=> (
        <li>
        <div></div>
        <p>{day.day}</p>
      </li>
       ))}
      </ul>
  
  
  
  
  
  
  
  </div>
    </div>
    )
}

export default Chart