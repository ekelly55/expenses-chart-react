import BalanceBar from "./components/Balance_bar.js"
import TotalBar from "./components/Total_bar.js"
import GraphSection from "./components/GraphSection.js";
import Modal from "./components/Modal.js";
import { useState } from "react";


function App() {

const [openModal, setOpenModal] = useState(false)
  
  return (
    <div className="App container p-2">
      <BalanceBar className="row"/>
      <GraphSection className="row"/>
      <TotalBar className="row"/>
      <button className="openModalBtn" onClick={() => {
        setOpenModal(true);
      }}>
        Show Modal
        </button>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
    
    );
  }


export default App;
