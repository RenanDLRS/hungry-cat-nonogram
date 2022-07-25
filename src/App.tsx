import React from "react";
import {
  ColorNumber,
  ColorSquare,
  Container,
  Line,
  NumberColumn,
  NumberLine,
} from "./styles/boardStyles";

import GlobalStyle from "./styles/global";

const colorAmount = {
  columns: [
    [1, 0, 0, 14],
    [4, 0, 1, 10],
    [5, 1, 0, 9],
    [9, 5, 0, 1],
    [9, 4, 2, 0],
    [8, 3, 2, 2],
    [8, 7, 0, 0],
    [9, 1, 2, 3],
    [6, 2, 1, 6],
    [1, 1, 0, 13],
  ],
  lines: [
    [3, 0, 0, 7],
    [5, 0, 0, 5],
    [7, 0, 0, 3],
    [8, 0, 0, 2],
    [9, 0, 0, 1],
    [0, 3, 3, 4],
    [3, 3, 4, 0],
    [2, 4, 0, 4],
    [4, 4, 0, 2],
    [6, 0, 0, 4],
    [6, 0, 0, 4],
    [5, 0, 1, 4],
    [2, 3, 0, 5],
    [0, 3, 0, 7],
    [0, 4, 0, 6],
  ],
};

const board = {
  lines: [
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "#222", "#222", "#222", "#222", "#222", "#222", "#222", "#222", "#222"],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["yellow", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
    ["blue", "", "", "", "", "", "", "", "", ""],
  ],
};

function App() {
  return (
    <Container>
      <div />
      <div className="flex-row">
        {colorAmount.columns.map((column) => (
          <NumberColumn>
            {column.map((number) => (
              <ColorNumber>{number}</ColorNumber>
            ))}
          </NumberColumn>
        ))}
      </div>
      <div
        className="flex-column"
        style={{ justifyContent: "space-between", height: "100%" }}
      >
        {colorAmount.lines.map((line) => (
          <NumberLine>
            {line.map((number) => (
              <ColorNumber>{number}</ColorNumber>
            ))}
          </NumberLine>
        ))}
      </div>
      <div>
        {board.lines.map((line) => (
          <Line>
            {line.map((square) => (
              <ColorSquare color={square} />
            ))}
          </Line>
        ))}
      </div>
      <GlobalStyle />
    </Container>
  );
}

export default App;
