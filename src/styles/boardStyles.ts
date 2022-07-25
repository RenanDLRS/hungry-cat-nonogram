import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 400px;

  margin: 100px auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-self: center;
`;

export const Line = styled.div`
  display: flex;
`;

export const NumberColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NumberLine = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColorNumber = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #fff;
`;

interface SquareProp {
  color?: string;
}

export const ColorSquare = styled.div<SquareProp>`
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  background-color: ${(props) => (props.color ? props.color : "#ddd")};
`;
