import React, {Component} from 'react';
import "./BoxGrid.css";
import Box from './Box'

// const NUM_BOXES = 32;

class BoxGrid extends Component {
    static boxGrid = (function() { return "heres a function call"})
    static defaultProps = {
        colors:[]
    }
    
    constructor(props) {
    super(props);
    
    //function to create grid in this.state
    
    // const grid = Array(NUM_BOXES).fill().map(this.getRandomColor, this)
    let createGrid = () => {
        let grid = []
        for(let i=0; i<32; i++) {
            let newColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)]
            grid.push(<Box color={newColor} opacity={1}/>)
        }
        return grid;
      }
      
        this.state = {grid:createGrid()}
    
    //change 1 random box to a random color color every 100ms
    setInterval(() => {
      let randomColor = this.props.colors[Math.floor(Math.random() * this.props.colors.length)];
      let randomBox = Math.floor(Math.random() * this.state.grid.length);
      
      const grid = this.state.grid.map((box, i) => {
          if (i === randomBox){
              return <Box color={randomColor}/>
          }
          return box
      })
      this.setState({grid})
    },30)
  }
// getRandomColor() {
//         let colorIndex = Math.floor(Math.random() * this.props.colors.length)
//         return this.props.colors[colorIndex]
//     }

  render() {
    return(
      <div className="box-grid">
        {this.state.grid}
      </div>
    )
  }

}

export default BoxGrid;