import Chart from "./components/Chart.js"
import BalanceBar from "./components/Balance_bar.js"
import TotalBar from "./components/Total_bar.js"


function App() {
  return (
    <div className="App container">
      <BalanceBar className="row"/>
      <Chart className="row"/>
      <TotalBar className="row"/>
    </div>
  );
}

export default App;
