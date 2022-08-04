import React, { useEffect, useState } from "react";
import { fristMap } from "./data";
import {
  ColorNumber,
  ColorSquare,
  Container,
  Line,
  NumberColumn,
  NumberLine,
} from "./styles";

import {
  IBoardColorCount,
  IBoardLine,
  IGameBoard,
  IGridSize,
  isBiggerThanHalfColumn,
  isBiggerThanHalfLine,
} from "../../solverFunciton";

const GameBoard: React.FC = () => {
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
        tempBoardLine.cells.push({ color: "#ddd" });
      }
      tempGameBoard.lines.push(tempBoardLine);
      tempBoardLine = { cells: [] };
    }
    setGameBoard(tempGameBoard);

    setBoardColorCount(fristMap);
  }, [gridSize]);

  useEffect(() => {
    async function boardSolver(
      boardColorCount: IBoardColorCount,
      gameBoard: IGameBoard
    ) {
      let tempBoard = gameBoard;
      for (let i = 0; i < gameBoard.lines.length; i++) {
        let line = gameBoard.lines[i];
        for (let j = 0; j < line.cells.length; j++) {
          let cell = line.cells[j];

          let lineCount = boardColorCount.lines[i];
          let columnCount = boardColorCount.columns[j];

          /* let isOnlyColor =
            isOnlyColorInColumn(columnCount) || isOnlyColorInLine(lineCount);
          if (isOnlyColor) {
            cell.color = isOnlyColor.color;
            tempBoard.lines[i].cells[j].color = isOnlyColor.color;
            setGameBoard({ ...tempBoard });
          } */

          let isBiggerThanHalf =
            isBiggerThanHalfLine(lineCount, j) ||
            isBiggerThanHalfColumn(columnCount, i);
          if (isBiggerThanHalf) {
            cell.color = isBiggerThanHalf.color;
            tempBoard.lines[i].cells[j].color = isBiggerThanHalf.color;
            setGameBoard({ ...tempBoard });
            const sleep = (ms: any) => new Promise((r) => setTimeout(r, ms));
            await sleep(200);
          }
        }
      }
    }
    boardSolver(boardColorCount, gameBoard);
  }, [boardColorCount]);

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
    </Container>
  );
};

export default GameBoard;
