import { IBoardColorCount } from "./App";

function mountColorCount(count: number, color: string, grouped?: boolean) {
  return { count, color, grouped };
}

export const fristMap: IBoardColorCount = {
  columns: [
    [mountColorCount(2, "red", true), mountColorCount(3, "blue", true)],
    [mountColorCount(2, "red", true), mountColorCount(3, "blue", true)],
    [mountColorCount(2, "red", true), mountColorCount(3, "blue", true)],
    [mountColorCount(5, "red", true), mountColorCount(0, "blue")],
    [mountColorCount(5, "red", true), mountColorCount(0, "blue")],
  ],
  lines: [
    [mountColorCount(5, "red", true), mountColorCount(0, "blue")],
    [mountColorCount(5, "red", true), mountColorCount(0, "blue")],
    [mountColorCount(2, "red", true), mountColorCount(3, "blue", true)],
    [mountColorCount(2, "red", true), mountColorCount(3, "blue", true)],
    [mountColorCount(2, "red", true), mountColorCount(3, "blue", true)],
  ],
};

export const secondMap: IBoardColorCount = {
  columns: [
    [mountColorCount(5, "yellow", true)],
    [mountColorCount(2, "red"), mountColorCount(3, "yellow")],
    [mountColorCount(5, "red", true)],
    [mountColorCount(1, "red"), mountColorCount(4, "yellow", true)],
    [mountColorCount(5, "yellow", true)],
  ],
  lines: [
    [mountColorCount(4, "yellow"), mountColorCount(1, "red")],
    [mountColorCount(3, "yellow"), mountColorCount(2, "red")],
    [mountColorCount(4, "yellow"), mountColorCount(1, "red")],
    [mountColorCount(4, "yellow"), mountColorCount(1, "red")],
    [mountColorCount(2, "yellow"), mountColorCount(3, "red")],
  ],
};
