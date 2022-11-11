import React from "react";
import BarChart from "./BarChart";
import { useState } from "react";
import {Data} from "../Data.js"

const GraphSection = () => {
  const [data, setData] = useState({
    labels: Data.map((data) => data.day),
    datasets: [{
      label: "Amount",
      data: Data.map((data) => data.amount),
    },
  ],
});
  return (
    <div class="chart-box col container">
      <div class="chart-title row">
        <h3>Spending - Last 7 days</h3>
      </div>
      <div class="chart row">

        <BarChart chartData={data}/>


      </div>
    </div>
  )
}

export default GraphSection