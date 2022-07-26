import React, { useEffect, useState } from "react";
import { fristMap } from "./data";
import {
  ColorNumber,
  ColorSquare,
  Container,
  Line,
  NumberColumn,
  NumberLine,
} from "./styles/boardStyles";

import GlobalStyle from "./styles/global";

export interface IBoardColorCount {
  columns: IColorCount[][];
  lines: IColorCount[][];
}

export interface IColorCount {
  count: number;
  color: string;
  grouped?: boolean;
}

export interface IGridSize {
  columns: number;
  lines: number;
}

export interface IGameBoard {
  lines: IBoardLine[];
}
export interface IBoardLine {
  cells: IBoardCell[];
}
export interface IBoardCell {
  color: string;
}

function App() {
  const [boardColorCount, setBoardColorCount] = useState<IBoardColorCount>({
    columns: [],
    lines: [],
  });
  const [gridSize, setGridSize] = useState<IGridSize>({ columns: 5, lines: 5 });
  const [gameBoard, setGameBoard] = useState<IGameBoard>({ lines: [] });

  useEffect(() => {
    let tempGameBoard: IGameBoard = { lines: [] };
    for (let i = 0; i < gridSize.columns; i++) {
      let tempBoardLine: IBoardLine = { cells: [] };
      for (let j = 0; j < gridSize.lines; j++) {
        tempBoardLine.cells.push({ color: "red" });
      }
      tempGameBoard.lines.push(tempBoardLine);
      tempBoardLine = { cells: [] };
    }
    setGameBoard(tempGameBoard);

    setBoardColorCount(fristMap);
  }, [gridSize]);

  return (
    <Container>
      <div />
      <div className="flex-row">
        {boardColorCount.columns.map((column) => (
          <NumberColumn>
            {column.map((colorCount) => (
              <ColorNumber>{colorCount.count || ""}</ColorNumber>
            ))}
          </NumberColumn>
        ))}
      </div>
      <div className="flex-column">
        {boardColorCount.lines.map((line) => (
          <NumberLine>
            {line.map((colorCount) => (
              <ColorNumber>{colorCount.count || ""}</ColorNumber>
            ))}
          </NumberLine>
        ))}
      </div>
      <div>
        {gameBoard.lines.map((line) => (
          <Line>
            {line.cells.map((cell) => (
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
