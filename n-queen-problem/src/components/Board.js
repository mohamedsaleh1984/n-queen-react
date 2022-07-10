import GridCell from "./GridCell";
import "./Board.css";

export default function Board() {
  const BOARD_SIZE = 8;
  // const [setRows,Rows] = BOARD_SIZE;
  // const [setCols,Cols] = BOARD_SIZE;
  let Board = Array(BOARD_SIZE)
    .fill(false)
    .map((row) => new Array(BOARD_SIZE).fill(false));

  function getColor(rowIndex, columnIndex) {
    if (rowIndex == 0 && columnIndex == 0) return "black";
    let result = rowIndex + columnIndex;
    let color = result % 2 ? "white" : "black";
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