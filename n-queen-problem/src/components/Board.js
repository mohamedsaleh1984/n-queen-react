import GridCell from "./GridCell";
import "./Board.css";
import { useState } from "react";

export default function Board() {
  const BOARD_SIZE = 8;
  const [queens, setQueens] = useState(0);

  let Board = Array(BOARD_SIZE)
    .fill(false)
    .map((row) => new Array(BOARD_SIZE).fill(false));

  function handleCallback(occupied) {
    if (occupied) {
      setQueens(queens + 1);
    } else {
      setQueens(queens - 1);
    }
  }

  function getColor(rowIndex, columnIndex) {
    if (rowIndex == 0 && columnIndex == 0) return "gray";
    let result = rowIndex + columnIndex;
    let color = result % 2 ? "white" : "gray";
    return color;
  }

  function PlayGroundHeader(props) {
    const queens = props.queens;
    return (
      <div>
        <h3>Placed Queens {{ queens }}</h3>
      </div>
    );
  }

  return (
    <div className="board">
      <h1 className="eq-header">8 Queen Problem</h1>
      <div className="board-container">
        <div>{/* <PlayGroundHeader queens={queens}/> */}</div>
        <div className="playground">
          {Board.map((row, rowIndex) => {
            return (
              <div style={{ display: "flex" }}  key={Math.random() * 1000}>
                {row.map((cols, columnIndex) => {
                  return (
                    <div key={Math.random() * 100}>
                      <GridCell
                        rowIndex={rowIndex}
                        columnIndex={columnIndex}
                        color={getColor(rowIndex, columnIndex)}
                        parentCallback={handleCallback}
                        queens={queens}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
