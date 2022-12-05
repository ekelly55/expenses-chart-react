import BalanceBar from "./components/Balance_bar.js"
import TotalBar from "./components/Total_bar.js"
import GraphSection from "./components/GraphSection.js";
import Modal from "./components/Modal.js";
import { useState } from "react";

function App() {

const [state, setState] = useState({show: false});

const showModal = e => {
  this.setState({
      show: true
    });
  };
  
  return (
    <div className="App container p-2">
      <BalanceBar className="row"/>
      <GraphSection className="row"/>
      <TotalBar className="row"/>
      <button onClick={e=> {
        this.showModal();
      }}>Show Modal</button>
    <Modal show={this.state.show}/>
    </div>
    
    );
  }


export default App;
