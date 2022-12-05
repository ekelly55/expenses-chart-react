import React from "react";
import { useState } from "react";


 const Modal = ({closeModal}) => {
  
    return (

        <div className="modalBackground">
            <div className="modalContainer">
                <button onClick={()=> closeModal(false)}>x</button>
            <p>You're spending is over budget this week!</p>
            </div>
        </div>
    )

    }

export default Modal