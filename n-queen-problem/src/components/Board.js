import GridCell from "./GridCell";
import "./Board.css";

export default function Board() {
  const BOARD_SIZE = 8;

  let Board = Array(BOARD_SIZE)
    .fill(false)
    .map((row) => new Array(BOARD_SIZE).fill(false));

  function getColor(rowIndex, columnIndex) {
    if (rowIndex == 0 && columnIndex == 0) return "gray";
    let result = rowIndex + columnIndex;
    let color = result % 2 ? "white" : "gray";
    return color;
  }

  

  return (
    <div className="board">
      {Board.map((row, rowIndex) => {
        return (
          <div style={{ display: "flex" }}>
            {row.map((cols, columnIndex) => {
              return (
                <div>
                  <GridCell
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    color={getColor(rowIndex, columnIndex)}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
