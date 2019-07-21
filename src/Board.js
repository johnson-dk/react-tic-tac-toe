import React from "react";
import Square from "./Square";

class Board extends React.Component {
  generateBoard(rows, cols) {
    const board = [];
    let cellNumber = 0;
    for (let i = 0; i < rows; i++) {
      const columns = [];
      for (let j = 0; j < rows; j++) {
        columns.push(this.renderSquare(cellNumber));
        cellNumber++;
      }
      board.push(<div id="i" className="board-row">{columns}</div>)
    }
    return board;
  }
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }
  render() {
    return (
      <div>
        {this.generateBoard(3,3)}
      </div>
    );
  }
}

export default Board;
