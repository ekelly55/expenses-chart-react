import React from "react";
import { render } from "react-dom"

export default class Modal extends React.Component {
    render() {
        if(!this.props.show){
            return null;
        }
        return 
        <div>
            Hello Modal
        </div>

    }
}