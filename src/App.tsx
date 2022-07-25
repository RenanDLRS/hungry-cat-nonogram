import React, { useEffect, useState } from "react";
import {
  ColorNumber,
  ColorSquare,
  Container,
  Line,
  NumberColumn,
  NumberLine,
} from "./styles/boardStyles";

import GlobalStyle from "./styles/global";

interface IColorCount {
  columns: number[][];
  lines: number[][];
}

interface IGridSize {
  columns: number;
  lines: number;
}

interface IGameBoard {
  lines: IBoardLine[];
}
interface IBoardLine {
  line: IBoardCell[];
}
interface IBoardCell {
  color: string;
}

function App() {
  const [colorCount, setColorCount] = useState<IColorCount>({
    columns: [],
    lines: [],
  });
  const [gridSize, setGridSize] = useState<IGridSize>({ columns: 5, lines: 5 });
  const [gameBoard, setGameBoard] = useState<IGameBoard>({ lines: [] });

  useEffect(() => {
    let tempGameBoard: IGameBoard = { lines: [] };
    for (let i = 0; i < gridSize.columns; i++) {
      let tempBoardLine: IBoardLine = { line: [] };
      for (let j = 0; j < gridSize.lines; j++) {
        tempBoardLine.line.push({ color: "red" });
      }
      tempGameBoard.lines.push(tempBoardLine);
      tempBoardLine = { line: [] };
    }
    setGameBoard(tempGameBoard);
  }, [gridSize]);

  return (
    <Container>
      <div />
      <div className="flex-row">
        {/* {colorAmount.columns.map((column) => (
          <NumberColumn>
            {column.map((number) => (
              <ColorNumber>{number}</ColorNumber>
            ))}
          </NumberColumn>
        ))} */}
      </div>
      <div
        className="flex-column"
        style={{ justifyContent: "space-between", height: "100%" }}
      >
        {/* {colorAmount.lines.map((line) => (
          <NumberLine>
            {line.map((number) => (
              <ColorNumber>{number}</ColorNumber>
            ))}
          </NumberLine>
        ))} */}
      </div>
      <div>
        {gameBoard.lines.map((line) => (
          <Line>
            {line.line.map((cell) => (
              <ColorSquare color={cell.color} />
            ))}
          </Line>
        ))}
      </div>
      <GlobalStyle />
    </Container>
  );
}

export default App;
