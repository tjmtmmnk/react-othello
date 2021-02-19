import styled from 'styled-components';

export enum SquareType {
  Undef,
  White,
  Black,
};

export type SquareTypes = SquareType[][];

const StyledSquare = styled.button`
  background-color: #008000;
  padding: 10px;
  width: 50px;
  height: 50px;
  display: grid;
`;

const BlackSquare = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: black;
`;

const WhiteSquare = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: white;
`;

export const Square = (props: {
  color: SquareType,
  onClick: (x: number, y: number) => void,
  x: number,
  y: number,
}) => {
  const { color, onClick, x, y } = props;

  return (
    <StyledSquare onClick={() => onClick(x, y)}>
      {
        color === SquareType.Undef
          ? ""
          : color === SquareType.Black
            ? <BlackSquare />
            : <WhiteSquare />
      }
    </StyledSquare>
  )
};