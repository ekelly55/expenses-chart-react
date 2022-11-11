import BalanceBar from "./components/Balance_bar.js"
import TotalBar from "./components/Total_bar.js"
import GraphSection from "./components/GraphSection.js";


function App() {
  return (
    <div className="App container p-2">
      <BalanceBar className="row"/>
      <GraphSection className="row"/>
      <TotalBar className="row"/>
    </div>
  );
}

export default App;
