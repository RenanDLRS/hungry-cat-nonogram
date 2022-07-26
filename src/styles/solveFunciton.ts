import { IBoardColorCount, IColorCount, IGameBoard, IGridSize } from "../App";

export function boardSolver(
  boardColorCount: IBoardColorCount,
  gameBoard: IGameBoard
) {
  for (let i = 0; i < gameBoard.lines.length; i++) {
    let line = gameBoard.lines[i];
    for (let j = 0; j < line.cells.length; j++) {
      let cell = line.cells[j];

      let lineCount = boardColorCount.lines[i];
      let columnCount = boardColorCount.columns[i];

      let isOnlyColor =
        isOnlyColorInColumn(columnCount) || isOnlyColorInLine(lineCount);
      if (isOnlyColor) {
        cell.color = isOnlyColor.color;
      }
    }
  }
}

export function isOnlyColorInLine(
  colorCount: IColorCount[],
  gridSize?: IGridSize
) {
  let gridSizeT = gridSize || { columns: 5, lines: 5 };
  for (let i = 0; i < colorCount.length; i++) {
    if (colorCount[i].count === gridSizeT.lines) {
      return colorCount[i];
    }
  }
  return undefined;
}

export function isOnlyColorInColumn(
  colorCount: IColorCount[],
  gridSize?: IGridSize
) {
  let isOnlyColor = true;
  let gridSizeT = gridSize || { columns: 5, lines: 5 };
  for (let i = 0; i < colorCount.length; i++) {
    if (colorCount[i].count === gridSizeT.columns) {
      return colorCount[i];
    }
  }
  return undefined;
}
