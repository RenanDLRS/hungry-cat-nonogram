import { IBoardColorCount, IColorCount, IGameBoard, IGridSize } from "../App";

// GC = Grouped count
// SC = Separated count
// L/C = L/C

// Human like solve
// 1- check if only color in L/C -> L/C is that one color
// 2- check if GC is bigger than half of the board size L/C -> middle cells are that color
// 3- check if a L/Cs has only two color count
//    3.1- check if one is GC and other is SC -> At leat one cell in each extremety is SC color
//    3.2- check if one color can only be in X line based on column -> that cell is that color
//    3.3- check if one color can only be in X column based on line -> that cell is that color
// 4- check if GCs fit between known cells and only in one place in L/C
// 5- check if SCs cant be next to known cells
// 6- reduce count of each confirmed color mentally (temp count reduced)
// 7- repeat?, 'excluding' known cells

export function boardSolver(
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

      let isOnlyColor =
        isOnlyColorInColumn(columnCount) || isOnlyColorInLine(lineCount);
      if (isOnlyColor) {
        cell.color = isOnlyColor.color;
        tempBoard.lines[i].cells[j].color = isOnlyColor.color;
      }

      let isBiggerThanHal =
        isBiggerThanHalfLine(lineCount, i) ||
        isBiggerThanHalfColumn(columnCount, j);
      if (isBiggerThanHal) {
        cell.color = isBiggerThanHal.color;
        tempBoard.lines[i].cells[j].color = isBiggerThanHal.color;
      }
    }
  }
}

export function isBiggerThanHalfLine(
  colorCount: IColorCount[],
  index: number,
  gridSize: IGridSize = { columns: 5, lines: 5 }
) {
  for (let i = 0; i < colorCount.length; i++) {
    let halfOfLine = (gridSize.lines - 1) / 2; // 0 based
    let maxDistance = colorCount[i].count - halfOfLine;
    let withinMaxDistance = Math.abs(index - halfOfLine) < maxDistance;
    console.log(halfOfLine, maxDistance, index);
    console.log(Math.abs(index - halfOfLine) < maxDistance);

    if (colorCount[i].grouped && withinMaxDistance) {
      return colorCount[i];
    }
  }
  return undefined;
}

export function isBiggerThanHalfColumn(
  colorCount: IColorCount[],
  index: number,
  gridSize: IGridSize = { columns: 5, lines: 5 }
) {
  for (let i = 0; i < colorCount.length; i++) {
    let halfOfLine = (gridSize.columns - 1) / 2; // 0 based
    let maxDistance = colorCount[i].count - halfOfLine;
    let withinMaxDistance = Math.abs(index - halfOfLine) < maxDistance;

    if (colorCount[i].grouped && withinMaxDistance) {
      return colorCount[i];
    }
  }
  return undefined;
}

export function isOnlyColorInLine(
  colorCount: IColorCount[],
  gridSize: IGridSize = { columns: 5, lines: 5 }
) {
  for (let i = 0; i < colorCount.length; i++) {
    if (colorCount[i].count === gridSize.lines) {
      return colorCount[i];
    }
  }
  return undefined;
}

export function isOnlyColorInColumn(
  colorCount: IColorCount[],
  gridSize: IGridSize = { columns: 5, lines: 5 }
) {
  let isOnlyColor = true;
  for (let i = 0; i < colorCount.length; i++) {
    if (colorCount[i].count === gridSize.columns) {
      return colorCount[i];
    }
  }
  return undefined;
}
