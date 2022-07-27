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
        console.log(isOnlyColor, i, j);
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
