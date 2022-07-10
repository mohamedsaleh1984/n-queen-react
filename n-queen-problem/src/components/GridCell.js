import { useEffect, useState } from "react";
import queen from "../queen.png";
import "./GridCell.css";

export default function GridCell(props) {
  //Constants
  const WIDTH = 85;
  const HEIGHT = 85;

  const [occupied, setOccupied] = useState(false);

  const onCellClick = async () => {
    const newOccupied = !occupied;
    setOccupied(newOccupied);
    props.parentCallback(newOccupied);
  };

  useEffect(() => {}, [occupied]);

  return (
    <div
      style={{
        backgroundColor: props.color,
        width: WIDTH,
        height: HEIGHT,
      }}
      className="gridcell"
      onClick={onCellClick}
    >
      {occupied && (
        <div style={{ textAlign: "center" }}>
          <img src={queen} width={WIDTH - 10} height={HEIGHT - 10} />
        </div>
      )}
    </div>
  );
}
