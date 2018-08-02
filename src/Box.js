import React, {Component} from 'react';
import "./Box.css";

export default class Box extends Component {
    
    
    render() {
        const style = {
        backgroundColor:this.props.color,
        opacity:this.props.opacity
    }
        return (
            <div className="box" style={style}></div>
            )
    }
}

